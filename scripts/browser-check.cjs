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
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
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
  await send('Page.enable');
  await send('Network.enable');
  await send('Network.setBlockedURLs', { urls: ['*cdn.jsdelivr.net*', '*fonts.googleapis.com*', '*fonts.gstatic.com*'] });
  const loaded = new Promise(resolve => socket.addEventListener('message', event => {
    if (JSON.parse(event.data).method === 'Page.loadEventFired') resolve();
  }));
  await send('Page.navigate', { url: pathToFileURL(path.join(__dirname, '..', 'index.html')).href });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (await evaluate('document.querySelectorAll(".portfolio-card").length === 5')) break;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  console.log('Page loaded');
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card").length'), 5);
  assert.equal(await evaluate('document.querySelectorAll(".service-card").length'), 4);
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
  }
  await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 900, deviceScaleFactor: 1, mobile: false });
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), true);
  await evaluate('document.querySelector("#burgerBtn").click()');
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), false);
  assert.equal(await evaluate('getComputedStyle(document.querySelector("#navDrawer")).visibility'), 'visible');
  await evaluate('document.dispatchEvent(new KeyboardEvent("keydown", {key:"Escape"}))');
  assert.equal(await evaluate('document.querySelector("#navDrawer").inert'), true);
  await evaluate('document.querySelector("[data-category=Branding]").click()');
  assert.equal(await evaluate('document.querySelectorAll(".portfolio-card").length'), 3);
  assert.equal(await evaluate('document.activeElement.dataset.category'), 'Branding');
  await evaluate('document.querySelector(".portfolio-card").focus(); document.querySelector(".portfolio-card").click()');
  assert.equal(await evaluate('document.activeElement.id'), 'modalClose');
  assert.equal(await evaluate('document.querySelector("#projectTitle").textContent'), 'ELGATO Branding');
  assert.equal(await evaluate('document.querySelector(".modal-hero-img-src").getAttribute("src")'), 'assets/images/projects/elgato-brand-identity.png');
  assert.equal(await evaluate('document.querySelector("#portfolio").inert'), true);
  assert.equal(await evaluate('getComputedStyle(document.querySelector(".modal-title")).color'), 'rgb(17, 17, 17)');
  await evaluate('document.querySelector("#modalClose").click()');
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
  await evaluate(`window.emailjs = {send: () => Promise.resolve()}; document.querySelector('#contactForm').requestSubmit()`);
  assert.ok((await evaluate('document.querySelector("#formStatus").textContent')).includes('successfully'));
  assert.equal(await evaluate('document.querySelector("#fname").value'), '');
  console.log('PASS: assets, nine viewport sizes, filters, drawer, modal focus, theme, validation, unavailable service, failed and successful submission.');
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => {
  clearTimeout(timer);
  socket?.close();
  browser.kill();
});

