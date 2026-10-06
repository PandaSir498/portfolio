const { spawn } = require('node:child_process');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const profile = fs.mkdtempSync(path.join(require('node:os').tmpdir(), 'portfolio-browser-check-'));

// Local regression checks using Edge's DevTools protocol; no npm dependencies.
const browser = spawn(process.env.BROWSER_PATH || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-proxy-server', '--disable-extensions', '--disable-features=msEdgeSidebarV2,msEdgeSidebar', '--remote-debugging-port=0',
  `--user-data-dir=${profile}`, 'about:blank',
], { windowsHide: true });
let socket;
const timer = setTimeout(() => { browser.kill(); process.exit(1); }, 45000);
const endpoint = new Promise((resolve, reject) => {
  const poll = setInterval(() => {
    try {
      const [port, route] = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').trim().split(/\r?\n/);
      clearInterval(poll);
      resolve(`ws://127.0.0.1:${port}${route}`);
    } catch {}
  }, 100);
  browser.on('error', reject);
  browser.stderr.on('data', chunk => {
    const match = String(chunk).match(/DevTools listening on (ws:\/\/\S+)/);
    if (match) resolve(match[1]);
  });
});
(async () => {
  const url = await endpoint;
  console.log('Browser ready');
  const tabs = await (await fetch(`http://${new URL(url).host}/json`)).json();
  socket = new WebSocket(tabs.find(tab => tab.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
  let id = 0;
  const pending = new Map();
  const runtimeErrors = [];
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.exceptionThrown') runtimeErrors.push(data.params.exceptionDetails.text);
    if (data.id) { pending.get(data.id)?.(data); pending.delete(data.id); }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, data => data.error ? reject(data.error) : resolve(data.result));
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (result.exceptionDetails) throw Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const closeModal = () => evaluate(`new Promise(resolve => {
    if (!history.state?.portfolioProject) {document.querySelector('#modalClose').click(); resolve(); return;}
    window.addEventListener('popstate', resolve, {once:true});
    document.querySelector('#modalClose').click();
  })`);
  const travelHistory = direction => evaluate(`new Promise(resolve => {
    window.addEventListener('popstate', () => requestAnimationFrame(() => requestAnimationFrame(resolve)), {once:true});
    history.${direction}();
  })`);
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.setBlockedURLs', { urls: ['http://*', 'https://*'] });
  await send('Page.navigate', { url: pathToFileURL(path.join(__dirname, '..', 'index.html')).href });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (await evaluate('document.querySelectorAll(".portfolio-card").length === 7')) break;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  console.log('Page loaded');
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card").length'), 7);
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card.project-6").length'), 1);
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card.is-featured.is-spotlight").length'), 7);
  assert.equal(await evaluate('document.querySelectorAll(".project-3, [data-category=Poster]").length'), 0);
  assert.equal(await evaluate('document.querySelectorAll(".service-card").length'), 4);
  assert.deepEqual(await evaluate('Array.from(document.links).filter(link => link.getAttribute("href").startsWith("#") && !document.getElementById(link.getAttribute("href").slice(1))).map(link => link.getAttribute("href"))'), []);
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card-overlay, .photo-placeholder-label, #testimonials, .realtime-feedback").length'), 0);
  assert.equal(await evaluate(`document.querySelectorAll('#navbar a[href="#contact"]').length`), 1);
  assert.equal(await evaluate(`document.querySelectorAll('#navDrawer a[href="#contact"]').length`), 1);
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#navbar")).position'), 'fixed');
  await evaluate('window.scrollTo({top: 500, behavior: "instant"})');
  assert.ok(await evaluate('document.querySelector("#navbar").getBoundingClientRect().top === 0'));
  await evaluate('window.scrollTo({top: 0, behavior: "instant"})');
  assert.deepEqual(await evaluate('Array.from(document.images).filter(img => img.loading !== "lazy" && (!img.complete || !img.naturalWidth)).map(img => img.src)'), []);
  for (const width of [320, 360, 390, 430, 600, 768, 1024, 1440, 1920]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    const layout = await evaluate(`({ width: innerWidth, scroll: document.documentElement.scrollWidth, columns: getComputedStyle(document.querySelector('#portfolioGrid')).gridTemplateColumns.split(' ').length })`);
    assert.ok(layout.scroll <= width, `Overflow at ${width}: ${layout.scroll}`);
    assert.equal(layout.columns, width <= 600 ? 1 : 2);
    assert.ok(await evaluate(`Array.from(document.querySelectorAll('.portfolio-card')).every(card => {const bounds = card.getBoundingClientRect(); const grid = document.querySelector('#portfolioGrid').getBoundingClientRect(); return Math.abs(bounds.width - grid.width) < 1 && getComputedStyle(card).gridTemplateColumns.split(' ').length === ${width <= 900 ? 1 : 2};})`), "Every featured card should span the gallery and adapt its content at " + width);
  }
  // Every project uses the featured layout and opens its complete artwork.
  assert.deepEqual(await evaluate('Array.from(document.querySelectorAll(".portfolio-card")).slice(0, 2).map(card => card.dataset.id)'), ['7', '8']);
  for (const [id, title, image] of [
    [7, 'Everlast', 'assets/images/projects/Everlast Futuristic Brand Identity Board.png'],
    [8, 'Flash', 'assets/images/projects/flash full branding.png'],
    [5, 'ELGATO Branding', 'assets/images/projects/elgato-brand-identity.png'],
    [1, 'Bold Lobo', 'assets/images/projects/bold-lobo-brandboard.png'],
    [2, 'Curve', 'assets/images/projects/curve-brandboard.png'],
    [4, 'NEXORA Branding', 'assets/images/projects/nexora-branding.png'],
    [6, 'Ray Inc.', 'assets/images/projects/Ray Inc. Brand Identity Board.png'],
  ]) {
    await evaluate(`document.querySelector('.project-${id}').scrollIntoView({block:'center', behavior:'instant'}); document.querySelector('.project-${id}').focus()`);
    assert.equal(await evaluate(`(async () => {const image = document.querySelector('.project-${id} img'); image.loading = 'eager'; await image.decode(); return image.naturalWidth > 0;})()`), true);
    await evaluate(`document.querySelector('.project-${id}').click()`);
    assert.equal(await evaluate('document.querySelector("#projectTitle").textContent'), title);
    assert.equal(await evaluate('document.querySelector(".modal-hero-img-src").getAttribute("src")'), image);
    assert.equal(await evaluate('(async () => {await document.querySelector(".modal-hero-img-src").decode(); return true;})()'), true);
    assert.equal(await evaluate('document.querySelectorAll(".modal-process .process-step").length'), 4);
    assert.equal(await evaluate('document.querySelector(".modal-results .modal-section-title").textContent'), 'Results');
    assert.equal(await evaluate('document.querySelector(".modal-hero-image-link").getAttribute("href")'), image);
    await closeModal();
    assert.equal(await evaluate('document.activeElement.dataset.id'), String(id));
  }
  console.log('PASS: seven featured previews, full images, project details, and restored focus.');
  // Mobile Back returns to the same gallery; Forward restores the earlier project view.
  await send('Emulation.setDeviceMetricsOverride', {width:375, height:900, deviceScaleFactor:1, mobile:true});
  await evaluate('document.querySelector(".project-5").scrollIntoView({block:"center", behavior:"instant"})');
  const galleryScroll = await evaluate('scrollY');
  const galleryUrl = await evaluate('location.href');
  await evaluate('document.querySelector(".project-5").click()');
  assert.equal(await evaluate('history.state.portfolioProject'), 5);
  assert.equal(await evaluate('document.querySelectorAll(".artwork-viewport, .artwork-toolbar, .modal-rationale").length'), 0);
  assert.equal(await evaluate('document.querySelector(".modal-hero-image-link").contains(document.querySelector(".modal-hero-img-src"))'), true);
  await travelHistory('back');
  assert.equal(await evaluate('document.querySelector("#projectModal").inert'), true);
  assert.equal(await evaluate('document.body.style.overflow'), '');
  assert.equal(await evaluate('document.activeElement.dataset.id'), '5');
  assert.equal(await evaluate('location.href'), galleryUrl);
  assert.ok(Math.abs(await evaluate('scrollY') - galleryScroll) <= 2);
  await travelHistory('forward');
  assert.equal(await evaluate('document.querySelector("#projectTitle").textContent'), 'ELGATO Branding');
  assert.equal(await evaluate('document.querySelector("#projectModal").inert'), false);
  await evaluate('applyTheme("dark", false)');
  assert.ok(await evaluate('document.querySelector(".modal-hero-image-link").href.endsWith("elgato-brand-identity-dark.png")'));
  await evaluate('document.querySelector("#modalClose").focus(); document.dispatchEvent(new KeyboardEvent("keydown", {key:"Tab", shiftKey:true}))');
  assert.equal(await evaluate('document.activeElement.className'), 'modal-hero-image-link');
  await closeModal();
  assert.equal(await evaluate('Boolean(history.state?.portfolioProject)'), false);
  await evaluate('applyTheme("light", false); document.querySelector(".project-8").click()');
  await evaluate('new Promise(resolve => {window.addEventListener("popstate", resolve, {once:true}); document.dispatchEvent(new KeyboardEvent("keydown", {key:"Escape"}));})');
  assert.equal(await evaluate('document.querySelector("#projectModal").inert'), true);
  assert.equal(await evaluate('Boolean(history.state?.portfolioProject)'), false);
  await evaluate('document.querySelector(".project-7").click()');
  await evaluate('new Promise(resolve => {window.addEventListener("popstate", resolve, {once:true}); document.querySelector("#projectModal").click();})');
  assert.equal(await evaluate('document.querySelector("#projectModal").inert'), true);
  assert.equal(await evaluate('document.querySelector("#service-poster-design a").getAttribute("href")'), '#contact');
  await evaluate('document.querySelector(".project-6").scrollIntoView({block:"center", behavior:"instant"})');
  await new Promise(resolve => setTimeout(resolve, 750));
  assert.equal(await evaluate('document.querySelector(".project-6").classList.contains("visible")'), true);
  console.log('PASS: earlier project view, mobile Back/Forward, gallery position, close/Escape/backdrop, theme, and focus.');
  // Drag the music card with real mouse and touch input; preserve the existing player.
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await evaluate(`window.musicFrameBefore = document.querySelector('.music-player'); document.querySelector('.music-card').scrollIntoView({block:'center', behavior:'instant'})`);
  await new Promise(resolve => setTimeout(resolve, 750));
  const handlePoint = await evaluate(`(() => { const r = document.querySelector('.music-drag-handle').getBoundingClientRect(); return {x:r.left + 40, y:r.top + r.height/2}; })()`);
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', ...handlePoint, button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: handlePoint.x - 120, y: handlePoint.y + 60, button: 'left', buttons: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: handlePoint.x - 120, y: handlePoint.y + 60, button: 'left', clickCount: 1 });
  assert.equal(await evaluate(`document.querySelector('.music-card').classList.contains('is-floating')`), true);
  assert.equal(await evaluate(`document.querySelector('.music-card').classList.contains('is-dragging')`), false);
  const beforeKey = await evaluate(`document.querySelector('.music-card').getBoundingClientRect().left`);
  await evaluate(`document.querySelector('.music-drag-handle').dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowLeft', bubbles:true}))`);
  assert.equal(await evaluate(`document.querySelector('.music-card').getBoundingClientRect().left`), beforeKey - 10);
  await evaluate('window.scrollTo({top:0, behavior:"instant"})');
  assert.ok(await evaluate(`document.querySelector('.music-card').getBoundingClientRect().top >= 12`));
  await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 568, deviceScaleFactor: 1, mobile: true });
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  assert.ok(await evaluate(`(() => {const r = document.querySelector('.music-card').getBoundingClientRect();return r.left >= 12 && r.top >= 12 && r.right <= innerWidth - 12 && r.bottom <= innerHeight - 12;})()`));
  await evaluate(`document.querySelector('.music-reset').click()`);
  assert.equal(await evaluate(`document.querySelector('.music-card').classList.contains('is-floating')`), false);
  assert.equal(await evaluate(`document.querySelector('.music-card-slot').style.minHeight`), '');
  await evaluate(`document.querySelector('.music-card').scrollIntoView({block:'center', behavior:'instant'})`);
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  const touchPoint = await evaluate(`(() => {const r = document.querySelector('.music-drag-handle').getBoundingClientRect();return {x:r.left+40,y:r.top+r.height/2};})()`);
  await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{...touchPoint, id: 1}] });
  await send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{x:touchPoint.x+50, y:touchPoint.y-60, id:1}] });
  await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  assert.equal(await evaluate(`document.querySelector('.music-card').classList.contains('is-floating')`), true);
  assert.ok(await evaluate(`(() => {const r = document.querySelector('.music-card').getBoundingClientRect();return r.left >= 12 && r.right <= innerWidth - 12;})()`));
  await evaluate(`document.querySelector('.music-drag-handle').dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}))`);
  assert.equal(await evaluate(`document.querySelector('.music-card').classList.contains('is-floating')`), false);
  assert.equal(await evaluate(`window.musicFrameBefore === document.querySelector('.music-player') && window.musicFrameBefore.isConnected`), true);
  assert.ok(await evaluate(`document.querySelector('.music-player').allow.includes('encrypted-media')`));
  assert.equal(await evaluate(`document.querySelector('.music-playback-help a').href`), 'https://www.youtube.com/watch?v=QJO3ROT-A4E');
  await send('Emulation.setTouchEmulationEnabled', { enabled: false });
  console.log('PASS: music mouse/touch drag, keyboard movement, resize bounds, reset, and unchanged Spotify iframe.');
  await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 900, deviceScaleFactor: 1, mobile: false });
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), true);
  await evaluate('document.querySelector("#burgerBtn").click()');
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), false);
  assert.equal(await evaluate('document.body.style.overflow'), 'hidden');
  assert.equal(await evaluate('document.activeElement.getAttribute("href")'), '#about');
  await evaluate('document.querySelector("#themeToggle").click()');
  assert.equal(await evaluate('document.querySelector("#navDrawer").classList.contains("open")'), true);
  await evaluate('document.querySelector("#themeToggle").click(); document.querySelector("#themeToggle").focus(); document.dispatchEvent(new KeyboardEvent("keydown", {key:"Tab", shiftKey:true}))');
  assert.equal(await evaluate('document.activeElement.getAttribute("href")'), '#contact');
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#navDrawer")).visibility'), 'visible');
  await evaluate('document.dispatchEvent(new KeyboardEvent("keydown", {key:"Escape"}))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), true);
  assert.equal(await evaluate('document.body.style.overflow'), '');
  await evaluate('document.querySelector("[data-category=Logo]").click()');
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card").length'), 4);
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card.project-6").length'), 1);
  await evaluate('document.querySelector(".portfolio-card.project-6").click()');
  assert.equal(await evaluate('document.querySelector("#projectTitle").textContent'), 'Ray Inc.');
  assert.equal(await evaluate('document.querySelector(".modal-hero-img-src").getAttribute("src")'), 'assets/images/projects/Ray Inc. Brand Identity Board.png');
  await closeModal();
  await evaluate('document.querySelector("[data-category=Branding]").click()');
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card").length'), 6);
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card.project-6").length'), 1);
  assert.equal(await evaluate('document.activeElement.dataset.category'), 'Branding');
  await evaluate('document.querySelector(".project-1").focus()');
  assert.equal(await evaluate('document.querySelector(".project-1").classList.contains("visible")'), true);
  await evaluate('document.querySelector(".portfolio-card.project-5").focus(); document.querySelector(".portfolio-card.project-5").click()');
  assert.equal(await evaluate('document.activeElement.id'), 'modalClose');
  assert.equal(await evaluate('document.querySelector("#projectTitle").textContent'), 'ELGATO Branding');
  assert.equal(await evaluate('document.querySelector(".modal-hero-img-src").getAttribute("src")'), 'assets/images/projects/elgato-brand-identity.png');
  assert.equal(await evaluate('document.querySelector("#portfolio").inert'), true);
  assert.equal(await evaluate('getComputedStyle(document.querySelector(".modal-title")).color'), 'rgb(17, 17, 17)');
  await closeModal();
  assert.equal(await evaluate('document.activeElement.classList.contains("portfolio-card")'), true);
  assert.equal(await evaluate('document.querySelector("#portfolio").inert'), false);
  await evaluate('document.querySelector("#themeToggle").click()');
  assert.equal(await evaluate('document.documentElement.dataset.theme'), 'dark');
  await evaluate('document.querySelector("#themeToggle").click()');
  await evaluate('document.querySelector("#contactForm").requestSubmit()');
  assert.equal(await evaluate('document.activeElement.id'), 'fname');
  await evaluate(`for (const [id,value] of Object.entries({fname:'Test',lname:'User',email:'test@example.com',message:'Please design a logo for my new business.'})) document.getElementById(id).value=value; document.querySelector('#contactForm').requestSubmit()`);
  assert.ok((await evaluate('document.querySelector("#formStatus").textContent')).includes('unavailable'));
  await evaluate(`window.emailjs = {send: () => {throw new Error('Simulated service failure')}}; document.querySelector('#contactForm').requestSubmit()`);
  assert.ok((await evaluate('document.querySelector("#formStatus").textContent')).includes('Unable to send'));
  assert.equal(await evaluate('document.querySelector("button[type=submit]").disabled'), false);
  await evaluate(`window.sendCount = 0; window.emailjs = {send: () => {window.sendCount++; return new Promise(resolve => {window.finishSend = resolve;});}}; document.querySelector('#contactForm').requestSubmit(); document.querySelector('#contactForm').requestSubmit()`);
  assert.equal(await evaluate('window.sendCount'), 1);
  assert.equal(await evaluate('Array.from(document.querySelectorAll("#contactForm input, #contactForm textarea, #contactForm select")).every(field => field.disabled)'), true);
  await evaluate('window.finishSend(); new Promise(resolve => setTimeout(resolve, 0))');
  assert.equal(await evaluate('Array.from(document.querySelectorAll("#contactForm input, #contactForm textarea, #contactForm select")).every(field => !field.disabled)'), true);
  assert.ok((await evaluate('document.querySelector("#formStatus").textContent')).includes('successfully'));
  assert.equal(await evaluate('document.querySelector("#fname").value'), '');
  assert.deepEqual(runtimeErrors, []);
  console.log('PASS: cleanup, drawer scroll/focus, duplicate-submit prevention, no runtime exceptions.');
  console.log('PASS: assets, nine viewport sizes, filters, drawer, modal focus, theme, validation, unavailable service, failed and successful submission.');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => {
  clearTimeout(timer);
  socket?.close();
  browser.kill();
});

