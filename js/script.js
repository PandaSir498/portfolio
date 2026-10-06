const SERVICES_DATA = [
  {
    num: '01',
    title: 'Logo Design', category: 'Logo',
    desc: 'Logo design for businesses that need a clear and recognizable brand mark.',
  },
  {
    num: '02',
    title: 'Brand Identity', category: 'Branding',
    desc: 'A consistent set of brand elements, including colors, typography, logos, and supporting graphics.',
  },
  {
    num: '03',
    title: 'Social Media Design', category: 'Poster',
    desc: 'Graphics for social media posts, stories, announcements, and promotions.',
  },
  
  {
    num: '04',
    title: 'Poster Design', category: 'Poster',
    desc: 'Posters for events, products, and campaigns, designed for print or digital sharing.',
  },
  
];

const PROJECT_DATA = [
  {
    id: 7,
    title: 'Everlast',
    category: 'Branding',
    categories: ['Branding', 'Logo'],
    summary: 'A monochrome identity with a futuristic edge. Built for what lasts.',
    overview: 'A futuristic visual identity for Everlast, combining a sculptural symbol and wordmark with black, charcoal, off white, and silver gray. Orbitron headings and Inter body text complete the visual system.',
    results: 'The brand board presents logo variations, an app icon, typography, a color palette, business cards, signage, a bottle, apparel, and a digital screen mockup.',
    year: '2026',
    client: 'Everlast',
    role: 'Logo + Brand Identity',
    image: 'assets/images/projects/Everlast Futuristic Brand Identity Board.png',
    colors: ['#000000', '#1A1A1A', '#F5F5F5', '#A7A7A7'],
    colorNames: ['Pure Black', 'Charcoal', 'Off White', 'Silver Gray'],
    process: [
      { title: 'Visual Direction', desc: 'Combining monochrome tones, metallic surfaces, and flowing forms for a futuristic identity.' },
      { title: 'Identity', desc: 'Pairing a sculptural symbol and wordmark with Orbitron and Inter typography.' },
      { title: 'Applications', desc: 'Presenting the identity across an app icon, print materials, signage, apparel, and digital mockups.' },
    ],
  },
  {
    id: 8,
    title: 'Flash',
    category: 'Branding',
    categories: ['Branding', 'Logo'],
    summary: 'Electric green. Bold motion. A visual identity built around speed and possibility.',
    overview: 'A visual identity for Flash built around an angular lightning symbol, a bold wordmark, electric green, and deep black. Raleway typography and streaks of light carry the themes of speed, energy, and innovation.',
    results: 'The brand board brings together logo variations and clear space, typography, a color palette, app icons, business cards, stationery, packaging, digital screens, billboards, and supporting patterns.',
    year: '2026',
    client: 'Flash',
    role: 'Logo + Brand Identity',
    image: 'assets/images/projects/flash full branding.png',
    colors: ['#39FF14', '#0D0D0D', '#1A1A1A', '#FFFFFF'],
    colorNames: ['Electric Green', 'Deep Black', 'Neutral Gray', 'White'],
    process: [
      { title: 'Visual Direction', desc: 'Using electric green, deep black, and light trails to express energy and movement.' },
      { title: 'Identity', desc: 'Developing an angular symbol, logo variations, Raleway typography, and supporting patterns.' },
      { title: 'Applications', desc: 'Showing the identity across print, packaging, app icons, digital screens, and billboards.' },
    ],
  },
  {
    id: 5,
    title: 'ELGATO Branding',
    category: 'Branding',
    summary: 'Warm peach, deep ink, and a geometric mark. A cohesive identity across packaging and print.',
    overview: 'A visual identity for ELGATO featuring a geometric symbol, bold wordmark, and a peach, ink, navy, and cream color palette.',
    results: 'The brand board presents logo variations, typography, a color palette, business cards, packaging, and a shopping bag mockup.',
    year: '2026',
    client: 'ELGATO',
    role: 'Brand Identity',
    image: 'assets/images/projects/elgato-brand-identity.png', darkImage: 'assets/images/projects/elgato-brand-identity-dark.png',
    colors: ['#FFE0C1', '#132A28', '#304359', '#F7F3EA'],
    colorNames: ['Peach', 'Deep Ink', 'Navy', 'Warm Cream'],
    process: [
      { title: 'Visual Direction', desc: 'Pairing warm peach and cream with dark ink and navy tones.' },
      { title: 'Identity', desc: 'Combining a geometric symbol, bold wordmark, and supporting typography.' },
      { title: 'Applications', desc: 'Showing the identity on business cards, packaging, and a shopping bag.' },
    ],
  },
  {
    id: 1,
    title: 'Bold Lobo',
    category: 'Branding',
    summary: 'Signal yellow and bold black. A distinctive wolf symbol brought to life across brand materials.',
    overview: 'A brand identity for Bold Lobo using a black, yellow, and white color palette across the logo and brand materials.',
    results: 'The brand board includes the logo, color palette, typography, business card, and tote bag mockups.',
    year: '2026',
    client: 'Bold Lobo',
    role: 'Brand Identity',
    image: 'assets/images/projects/bold-lobo-brandboard.png', darkImage: 'assets/images/projects/bold-lobo-brandboard-dark.png',
    colors: ['#0D0D0D', '#FCD903', '#F5F5F5', '#A3C9CC'],
    colorNames: ['Midnight Black', 'Signal Yellow', 'Cloud White', 'Powder Blue'],
    process: [
      { title: 'Visual Direction', desc: 'Pairing black and white with a yellow accent across the identity.' },
      { title: 'Logo', desc: 'Creating the wordmark and wolf inspired symbol.' },
      { title: 'Brand Materials', desc: 'Showing the identity on business cards and a tote bag.' },
    ],
  },
  {
    id: 2,
    title: 'Curve',
    category: 'Logo',
    summary: 'A curved symbol in red and cream. A visual identity extending from stationery to packaging.',
    overview: 'A red and cream visual identity for Curve, built around a curved symbol and wordmark. The brand board shows the logo across stationery, packaging, and product mockups.',
    results: 'The identity includes a logo, color palette, stationery, packaging, and product mockups.',
    year: '2026',
    client: 'Curve',
    role: 'Logo + Visual Identity',
    image: 'assets/images/projects/curve-brandboard.png', darkImage: 'assets/images/projects/curve-brandboard-dark.png',
    colors: ['#C61414', '#360A0A', '#EAE6DD'],
    colorNames: ['Curve Red', 'Deep Maroon', 'Warm Cream'],
    process: [
      { title: 'Visual Direction', desc: 'Combining red, maroon, and cream with a recurring curved form.' },
      { title: 'Logo', desc: 'Creating a curved symbol and wordmark for Curve.' },
      { title: 'Brand Materials', desc: 'Applying the identity to stationery, packaging, and product mockups.' },
    ],
  },
  {
    id: 4,
    title: 'NEXORA Branding',
    category: 'Branding',
    summary: 'Deep blue and gold with bright digital accents. A connected identity for print and screen.',
    overview: 'A dark blue and gold visual identity for NEXORA, shown across a logo, website, social media graphics, stationery, and product mockups.',
    results: 'The brand board includes the logo, website layout, social media posts, stationery, and app mockups.',
    year: '2026',
    client: 'NEXORA',
    role: 'Brand Identity',
    image: 'assets/images/projects/nexora-branding.png',
    colors: ['#0E1E25', '#53CCBB', '#3498da', '#E6C372', '#F2F1F1'],
    colorNames: ['Ink', 'Teal', 'Blue', 'Gold', 'Cream'],
    process: [
      { title: 'Visual Direction', desc: 'Using a dark foundation with gold, teal, and blue accents.' },
      { title: 'Identity', desc: 'Creating the logo, color palette, typography, and supporting graphics.' },
      { title: 'Applications', desc: 'Showing the identity across digital and print materials.' },
    ],
  },
  {
    id: 6,
    title: 'Ray Inc.',
    category: 'Branding',
    categories: ['Branding', 'Logo'],
    summary: 'Vivid yellow meets deep blue. A sweeping symbol and a clear visual system across everyday applications.',
    overview: 'A visual identity for Ray Inc. pairing a sweeping symbol and wordmark with bright yellow, deep blue, and light gray. Inter typography supports a clear, modern visual system.',
    results: 'The brand board brings together logo variations, typography, a color palette, apparel, stationery, business cards, digital mockups, and a luggage tag.',
    year: '2026',
    client: 'Ray Inc.',
    role: 'Logo + Brand Identity',
    image: 'assets/images/projects/Ray Inc. Brand Identity Board.png',
    colors: ['#F2FF21', '#0F3A4A', '#E8ECFF'],
    colorNames: ['Ray Yellow', 'Ray Blue', 'Light Gray'],
    process: [
      { title: 'Visual Direction', desc: 'Combining vivid yellow with deep blue and light gray for a distinctive identity.' },
      { title: 'Logo', desc: 'Pairing a sweeping symbol with the Ray Inc. wordmark and Inter typography.' },
      { title: 'Applications', desc: 'Presenting the identity across apparel, print materials, digital mockups, and a luggage tag.' },
    ],
  },
];

function q(selector, target = document) {
  return target.querySelector(selector);
}
const qa = (selector, target = document) => Array.from(target.querySelectorAll(selector));

const elements = {
  navbar: q('#navbar'),
  themeToggle: q('#themeToggle'),
  burgerBtn: q('#burgerBtn'),
  navDrawer: q('#navDrawer'),
  progressBar: q('#progress-bar'),
  servicesGrid: q('#servicesGrid'),
  filterBar: q('#filterBar'),
  portfolioGrid: q('#portfolioGrid'),
  projectModal: q('#projectModal'),
  modalInner: q('#modalInner'),
  modalClose: q('#modalClose'),
  contactForm: q('#contactForm'),
  formStatus: q('#formStatus'),
};

const state = {
  activeCategory: 'All',
  modalTrigger: null,
  backgroundElements: [],
  previousOverflow: '',
  revealObserver: null,
  projectId: null,
  historyClosing: false,
  drawerOverflow: '',
};

const getProjectImage = project => document.documentElement.dataset.theme === 'dark'
  ? (project.darkImage || project.image) : project.image;

const applyTheme = (theme, persist = true) => {
  const activeTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = activeTheme;
  qa('img[data-light-src]').forEach(image => {
    image.src = activeTheme === 'dark' ? image.dataset.darkSrc : image.dataset.lightSrc;
    const link = image.closest('.modal-hero-image-link');
    if (link) link.href = image.src;
  });

  if (elements.themeToggle) {
    const isDark = activeTheme === 'dark';
    elements.themeToggle.setAttribute('aria-pressed', String(isDark));
    elements.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    const icon = q('.theme-toggle-icon', elements.themeToggle);
    const label = q('.theme-toggle-label', elements.themeToggle);
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
  }

  const themeColor = q('meta[name="theme-color"]');
  if (themeColor) themeColor.content = activeTheme === 'dark' ? '#101010' : '#F5F5F2';

  if (persist) {
    try {
      localStorage.setItem('portfolio-theme', activeTheme);
    } catch {
      // The selected theme still applies for this visit when storage is unavailable.
    }
  }
};

const setupThemeToggle = () => {
  if (!elements.themeToggle) return;
  applyTheme(document.documentElement.dataset.theme, false);
  elements.themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
};

const renderServices = () => {
  if (!elements.servicesGrid) return;
  elements.servicesGrid.innerHTML = SERVICES_DATA.map(service => {
    // Create a slug from the title for the id attribute
    const slug = 'service-' + service.title.toLowerCase().replace(/\s+/g, '-');
    const hasWork = PROJECT_DATA.some(project => (project.categories || [project.category]).includes(service.category));
    const linkAttributes = hasWork ? `href="#portfolio" data-service-category="${service.category}"` : 'href="#contact"';
    return `
    <article class="service-card" id="${slug}">
      <span class="service-number">${service.num}</span>
      <h3 class="service-title"><a ${linkAttributes}>${service.title}</a></h3>
      <p class="service-desc">${service.desc}</p><a ${linkAttributes} class="service-arrow" aria-label="${hasWork ? 'View' : 'Discuss'} ${service.title}${hasWork ? ' work' : ''}">&#8599;</a>
    </article>
  `;
  }).join('');
};

const renderFilters = () => {
  if (!elements.filterBar) return;
  const categories = ['All', ...new Set(PROJECT_DATA.flatMap(project => project.categories || [project.category]))];
  elements.filterBar.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn ${state.activeCategory === category ? 'active' : ''}" aria-pressed="${state.activeCategory === category}" data-category="${category}">
      ${category}
    </button>
  `).join('');
};

const renderProjects = () => {
  if (!elements.portfolioGrid) return;
  const projects = PROJECT_DATA.filter(project => state.activeCategory === 'All' || (project.categories || [project.category]).includes(state.activeCategory));

  if (!projects.length) {
    elements.portfolioGrid.innerHTML = '<p class="section-label">No projects found in this category.</p>';
    return;
  }

  elements.portfolioGrid.innerHTML = projects.map(project => {
    const categoryLabel = (project.categories || [project.category]).join(' &amp; ');
    return `
    <article class="portfolio-card reveal is-featured is-spotlight project-${project.id}" data-id="${project.id}" tabindex="0" role="button" aria-label="View project ${project.title}">
      <div class="portfolio-card-bg">
        <img class="portfolio-card-img" src="${getProjectImage(project)}" data-light-src="${project.image}" data-dark-src="${project.darkImage || project.image}" alt="${project.title} ${project.category} design" loading="lazy" decoding="async" />
      </div>
      <div class="pcard-strip">
        <div>
          <span class="pcard-cat">${categoryLabel} &middot; ${project.year}</span>
          <h3 class="pcard-title">${project.title}</h3>
        </div>
        <p class="pcard-summary">${project.summary}</p>
        <span class="pcard-view">Explore the project <span class="pcard-arrow" aria-hidden="true">&#8599;</span></span>
      </div>
    </article>
  `;
  }).join('');
  setupRevealAnimations();
};

const openProjectModal = (projectId, fromHistory = false) => {
  const project = PROJECT_DATA.find(item => item.id === Number(projectId));
  if (!project || !elements.projectModal || !elements.modalInner || state.historyClosing) return;
  if (elements.projectModal.classList.contains('open')) closeProjectModal();
  if (!fromHistory) history.pushState({ ...history.state, portfolioProject: project.id }, '');
  state.projectId = project.id;

  const paletteMarkup = project.colors.map((color, index) => `
    <div class="color-swatch" style="background: ${color};">
      <span>${project.colorNames[index] || color}</span>
      <code>${color}</code>
    </div>
  `).join('');

  const caseStudySteps = [project.process[0], { title: 'Concept', desc: project.overview }, ...project.process.slice(1)];
  const processMarkup = caseStudySteps.map((step, index) => `
    <article class="process-step">
      <span class="process-step-number">0${index + 1}</span>
      <div>
        <p class="process-step-title">${step.title}</p>
        <p class="process-step-desc">${step.desc}</p>
      </div>
    </article>
  `).join('');

  const hasImage = Boolean(project.image);
  const categoryLabel = (project.categories || [project.category]).join(' &amp; ');
  elements.modalInner.innerHTML = `
    <div class="modal-project-image">
      <div class="modal-hero-img" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `
          <a class="modal-hero-image-link" href="${getProjectImage(project)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} image in new tab">
            <img class="modal-hero-img-src" src="${getProjectImage(project)}" data-light-src="${project.image}" data-dark-src="${project.darkImage || project.image}" alt="${project.title} ${project.category} project image" />
          </a>
        ` : ''}
        <div class="modal-visual-meta"><span>Project · ${String(PROJECT_DATA.indexOf(project) + 1).padStart(2, '0')}</span><span>${hasImage ? 'Open image ↗' : project.category}</span></div>
      </div>
    </div>
    <section class="modal-brief">
      <p class="modal-section-title">Project ${String(PROJECT_DATA.indexOf(project) + 1).padStart(2, '0')} / Overview</p>
      <span class="modal-tag">${categoryLabel}</span>
      <h2 class="modal-title" id="projectTitle">${project.title}</h2>
      <p class="modal-overview">${project.overview}</p>
      <div class="modal-meta">
        <div class="meta-item"><p class="lbl">Brand</p><p class="val">${project.client}</p></div>
        <div class="meta-item"><p class="lbl">Year</p><p class="val">${project.year}</p></div>
        <div class="meta-item"><p class="lbl">Role</p><p class="val">${project.role}</p></div>
      </div>
    </section>
    <section class="modal-process">
      <h3 class="modal-section-title">Design process</h3>
      <div class="process-steps">${processMarkup}</div>
    </section>
    <section class="modal-palette-section">
      <h3 class="modal-section-title">Color palette</h3>
      <div class="color-palette">${paletteMarkup}</div>
    </section>
    <section class="modal-results">
      <p class="modal-section-title">Results</p>
      <p class="modal-results-copy">${project.results}</p>
    </section>
  `;

  closeDrawer();
  state.modalTrigger = q(`.portfolio-card[data-id="${project.id}"]`) || document.activeElement;
  state.previousOverflow = document.body.style.overflow;
  state.backgroundElements = Array.from(document.body.children)
    .filter(element => element !== elements.projectModal && !['SCRIPT', 'STYLE'].includes(element.tagName))
    .map(element => ({ element, inert: element.inert }));
  state.backgroundElements.forEach(({ element }) => { element.inert = true; });
  elements.projectModal.inert = false;
  elements.projectModal.setAttribute('aria-hidden', 'false');
  elements.projectModal.classList.add('open');
  elements.projectModal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  elements.modalClose?.focus();
};

const closeProjectModal = () => {
  if (!elements.projectModal?.classList.contains('open')) return;
  elements.projectModal.classList.remove('open');
  state.projectId = null;
  state.backgroundElements.forEach(({ element, inert }) => { element.inert = inert; });
  state.backgroundElements = [];
  document.body.style.overflow = state.previousOverflow;
  state.modalTrigger?.focus({ preventScroll: true });
  elements.projectModal.inert = true;
  elements.projectModal.setAttribute('aria-hidden', 'true');
};

const requestCloseProjectModal = () => {
  if (!elements.projectModal?.classList.contains('open') || state.historyClosing) return;
  const hasProjectEntry = history.state?.portfolioProject === state.projectId;
  closeProjectModal();
  if (hasProjectEntry) {
    state.historyClosing = true;
    history.back();
  }
};

const closeDrawer = () => {
  if (!elements.navDrawer) return;
  const wasOpen = elements.navDrawer.classList.contains('open');
  elements.navDrawer.classList.remove('open');
  if (wasOpen) document.body.style.overflow = state.drawerOverflow;
  if (elements.navDrawer.contains(document.activeElement)) elements.burgerBtn?.focus();
  elements.navDrawer.inert = true;
  elements.navDrawer.setAttribute('aria-hidden', 'true');
  if (elements.burgerBtn) {
    elements.burgerBtn.setAttribute('aria-expanded', 'false');
    elements.burgerBtn.setAttribute('aria-label', 'Open navigation menu');
  }
};

qa('a', elements.navDrawer).forEach(link => link.addEventListener('click', closeDrawer));

const updateNavbarAndProgress = () => {
  const scrollY = window.scrollY;
  if (elements.navbar) {
    elements.navbar.classList.toggle('scrolled', scrollY > 24);
  }
  if (elements.progressBar) {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollY / scrollHeight) * 100)) : 0;
    elements.progressBar.style.width = `${progress}%`;
  }
};

const setupRevealAnimations = () => {
  state.revealObserver?.disconnect();
  const revealElements = qa('.reveal:not(.visible)');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  state.revealObserver = observer;

  revealElements.forEach(el => observer.observe(el));
};

const setupInteractions = () => {
  window.addEventListener('popstate', event => {
    state.historyClosing = false;
    closeDrawer();
    const projectId = event.state?.portfolioProject;
    if (PROJECT_DATA.some(project => project.id === projectId)) openProjectModal(projectId, true);
    else closeProjectModal();
  });
  elements.servicesGrid?.addEventListener('click', event => {
    const link = event.target.closest('a[data-service-category]');
    if (!link) return;
    state.activeCategory = link.dataset.serviceCategory;
    renderFilters();
    renderProjects();
    const heading = q('.portfolio-heading');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  });
  if (elements.burgerBtn && elements.navDrawer) {
    elements.burgerBtn.addEventListener('click', () => {
      if (elements.navDrawer.classList.contains('open')) {
        closeDrawer();
        return;
      }
      state.drawerOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      elements.navDrawer.classList.add('open');
      elements.navDrawer.inert = false;
      elements.navDrawer.setAttribute('aria-hidden', 'false');
      elements.burgerBtn.setAttribute('aria-expanded', 'true');
      elements.burgerBtn.setAttribute('aria-label', 'Close navigation menu');
      q('a', elements.navDrawer)?.focus();
    });
  }

  if (elements.filterBar) {
    elements.filterBar.addEventListener('click', event => {
      const button = event.target.closest('.filter-btn');
      if (!button) return;
      state.activeCategory = button.dataset.category || 'All';
      renderFilters();
      renderProjects();
      qa('.filter-btn', elements.filterBar).find(item => item.dataset.category === state.activeCategory)?.focus();
    });
  }

  if (elements.portfolioGrid) {
    elements.portfolioGrid.addEventListener('focusin', event => {
      const card = event.target.closest('.portfolio-card');
      if (!card) return;
      card.classList.add('visible');
      state.revealObserver?.unobserve(card);
    });
    elements.portfolioGrid.addEventListener('click', event => {
      const card = event.target.closest('.portfolio-card');
      if (!card) return;
      openProjectModal(card.dataset.id);
    });

    elements.portfolioGrid.addEventListener('keydown', event => {
      if (!['Enter', ' '].includes(event.key)) return;
      const card = event.target.closest('.portfolio-card');
      if (!card) return;
      event.preventDefault();
      openProjectModal(card.dataset.id);
    });
  }

  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', requestCloseProjectModal);
  }

  if (elements.projectModal) {
    elements.projectModal.addEventListener('click', event => {
      if (event.target === elements.projectModal) {
        requestCloseProjectModal();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && elements.navDrawer?.classList.contains('open')) {
      const controls = [elements.themeToggle, elements.burgerBtn, ...qa('a', elements.navDrawer)].filter(Boolean);
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      else if (!controls.includes(document.activeElement)) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'Tab' && elements.projectModal?.classList.contains('open')) {
      const focusable = qa('button, a[href], input, select, textarea, [tabindex="0"]', elements.projectModal).filter(control => !control.disabled);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    if (event.key === 'Escape') {
      requestCloseProjectModal();
      closeDrawer();
    }
  });

  document.addEventListener('click', event => {
    if (!elements.navDrawer?.contains(event.target) && !elements.burgerBtn?.contains(event.target) && !elements.themeToggle?.contains(event.target)) closeDrawer();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeDrawer();
    updateNavbarAndProgress();
  });

  if (elements.contactForm && elements.formStatus) {
    const showFormMessage = (message, success = true) => {
      elements.formStatus.textContent = message;
      elements.formStatus.classList.add('visible');
      elements.formStatus.style.color = success ? 'var(--accent)' : 'var(--accent2)';
    };

    elements.contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (q('button[type="submit"]', elements.contactForm)?.disabled) return;

      const firstName = q('#fname', elements.contactForm)?.value.trim();
      const lastName = q('#lname', elements.contactForm)?.value.trim();
      const email = q('#email', elements.contactForm)?.value.trim();
      const service = q('#service', elements.contactForm)?.value.trim();
      const budget = q('#budget', elements.contactForm)?.value.trim();
      const message = q('#message', elements.contactForm)?.value.trim();

      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        showFormMessage('Please complete all required fields.', false);
        qa('[required]', elements.contactForm).find(field => !field.value.trim())?.focus();
        return;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage('Please enter a valid email address.', false);
        q('#email', elements.contactForm)?.focus();
        return;
      }

      if (message.length < 20) {
        showFormMessage('Add a bit more detail to help me understand your project (min 20 characters).', false);
        q('#message', elements.contactForm)?.focus();
        return;
      }

      // Send via EmailJS
      // If EmailJS fails, we show the real error in console and a helpful UI message.
      if (typeof emailjs === 'undefined' || !emailjs || typeof emailjs.send !== 'function') {
        showFormMessage('The contact service is unavailable. Please email me directly instead.', false);
        return;
      }
      const submitButton = q('button[type="submit"]', elements.contactForm);
      const fields = qa('input, textarea, select', elements.contactForm).filter(field => !field.disabled);
      fields.forEach(field => { field.disabled = true; });
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending message…';
      }
      const enquirySummary = [
        'NEW PROJECT ENQUIRY',
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Service needed: ${service || 'Not specified'}`,
        `Project budget: ${budget || 'Not specified'}`,
        '',
        'Project details:',
        message,
      ].join('\n');
      Promise.resolve().then(() => emailjs.send(
          'service_qlu3o95',
          'template_ut7g5rl',
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            service: service || '',
            budget: budget || '',
            // The EmailJS template currently displays {{message}}. Including the
            // structured summary here makes every detail visible without relying
            // on optional template variables.
            message: enquirySummary,
          }
        ))
        .then(() => {
          showFormMessage('✓ Message sent successfully!', true);

          elements.contactForm.reset();
        })
        .catch(error => {
          console.error('EmailJS send error:', error);
          showFormMessage('Unable to send your message right now. Please try again or email me directly.', false);
        })
        .finally(() => {
          fields.forEach(field => { field.disabled = false; });
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message →';
          }
        });
    });

    // Clear the previous submission status when the enquiry changes.
    qa('input, textarea, select', elements.contactForm).forEach(input => {
      input.addEventListener('input', () => {
        elements.formStatus.classList.remove('visible');
      });
    });
  }
};

const setupMovableMusic = () => {
  const card = q('.music-card');
  const slot = q('.music-card-slot');
  const handle = q('.music-drag-handle');
  const reset = q('.music-reset');
  if (!card || !slot || !handle || !reset) return;

  q('.music-controls').hidden = false;
  q('.music-move-help').hidden = false;
  let drag = null;
  let moved = false;
  let position = { x: 0, y: 0 };

  const place = (x, y) => {
    const rect = card.getBoundingClientRect();
    position = {
      x: Math.max(12, Math.min(x, window.innerWidth - rect.width - 12)),
      y: Math.max(12, Math.min(y, window.innerHeight - rect.height - 12)),
    };
    card.style.left = `${position.x}px`;
    card.style.top = `${position.y}px`;
  };

  const floatCard = () => {
    if (card.classList.contains('is-floating')) return;
    const rect = card.getBoundingClientRect();
    slot.style.minHeight = `${rect.height}px`;
    card.style.width = `${Math.min(420, rect.width, window.innerWidth - 24)}px`;
    // Keep the same iframe in the same DOM location so moving it does not reload playback.
    card.classList.add('is-floating');
    reset.hidden = false;
    handle.setAttribute('aria-pressed', 'true');
    place(rect.left, rect.top);
  };

  const endDrag = () => {
    const pointerId = drag?.pointerId;
    drag = null;
    card.classList.remove('is-dragging');
    if (pointerId !== undefined && handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId);
  };

  const restoreCard = () => {
    endDrag();
    card.classList.remove('is-floating');
    for (const property of ['left', 'top', 'width']) card.style.removeProperty(property);
    slot.style.removeProperty('min-height');
    reset.hidden = true;
    handle.setAttribute('aria-pressed', 'false');
    slot.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    handle.focus({ preventScroll: true });
  };

  handle.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    moved = false;
    drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, origin: null };
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!moved && Math.hypot(dx, dy) < 6) return;
    if (!moved) {
      floatCard();
      drag.origin = { ...position };
      moved = true;
      card.classList.add('is-dragging');
    }
    place(drag.origin.x + dx, drag.origin.y + dy);
  });
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
  handle.addEventListener('lostpointercapture', endDrag);
  handle.addEventListener('click', event => {
    if (moved && event.detail > 0) { moved = false; return; }
    moved = false;
    if (card.classList.contains('is-floating')) restoreCard();
    else floatCard();
  });
  handle.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      restoreCard();
      return;
    }
    const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    floatCard();
    const step = event.shiftKey ? 30 : 10;
    place(position.x + direction[0] * step, position.y + direction[1] * step);
  });
  reset.addEventListener('click', restoreCard);
  window.addEventListener('resize', () => {
    if (!card.classList.contains('is-floating')) return;
    endDrag();
    place(position.x, position.y);
  });
};

// Play one short tap for each click or keyboard activation of a control.
const setupTapSounds = () => {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  let context;
  const playTap = async () => {
    try {
      context ||= new AudioContextClass();
      if (context.state === 'suspended') await context.resume();
      if (context.state !== 'running') return;
      const now = context.currentTime;
      const tone = context.createOscillator();
      const volume = context.createGain();
      tone.type = 'sine';
      tone.frequency.setValueAtTime(700, now);
      tone.frequency.exponentialRampToValueAtTime(180, now + 0.045);
      volume.gain.setValueAtTime(0, now);
      volume.gain.linearRampToValueAtTime(0.075, now + 0.003);
      volume.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      tone.connect(volume);
      volume.connect(context.destination);
      tone.onended = () => { tone.disconnect(); volume.disconnect(); };
      tone.start(now);
      tone.stop(now + 0.065);
    } catch {
      // Audio availability must never interrupt navigation.
    }
  };
  const findControl = event => event.target instanceof Element
    ? event.target.closest('a[href], button, [role="button"], summary, select')
    : null;
  document.addEventListener('click', event => {
    const control = findControl(event);
    if (event.isTrusted && control && !control.matches(':disabled, [aria-disabled="true"]')) {
      void playTap();
    }
  }, { capture: true });
  document.addEventListener('keydown', event => {
    const control = findControl(event);
    // Native controls emit clicks; custom project cards activate on keydown.
    if (event.isTrusted && !event.repeat && ['Enter', ' '].includes(event.key)
        && control?.matches('[role="button"]:not(button):not(a)')
        && control.getAttribute('aria-disabled') !== 'true') {
      void playTap();
    }
  }, { capture: true });
};

const init = () => {
  setupTapSounds();
  setupThemeToggle();
  renderServices();
  renderFilters();
  renderProjects();
  setupInteractions();
  setupMovableMusic();
  updateNavbarAndProgress();
  let scrollPending = false;
  window.addEventListener('scroll', () => { if (scrollPending) return; scrollPending = true; requestAnimationFrame(() => { updateNavbarAndProgress(); scrollPending = false; }); }, { passive: true });
  const year = q('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
};

window.addEventListener('DOMContentLoaded', init);
