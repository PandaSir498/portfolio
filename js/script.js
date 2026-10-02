const SERVICES_DATA = [
  {
    icon: '◎',
    num: '01',
    title: 'Logo Design',
    desc: 'Logo design for businesses that need a clear and recognizable brand mark.',
  },
  {
    icon: '◈',
    num: '02',
    title: 'Brand Identity',
    desc: 'A consistent set of brand elements, including colors, typography, logos, and supporting graphics.',
  },
  {
    icon: '◐',
    num: '03',
    title: 'Social Media Design',
    desc: 'Graphics for social media posts, stories, announcements, and promotions.',
  },
  
  {
    icon: '◻',
    num: '04',
    title: 'Poster Design',
    desc: 'Posters for events, products, and campaigns, designed for print or digital sharing.',
  },
  
];

const PROJECT_DATA = [
  {
    id: 5,
    title: 'ELGATO Branding',
    category: 'Branding',
    overview: 'A visual identity for ELGATO featuring a geometric symbol, bold wordmark, and a peach, ink, navy, and cream color palette.',
    results: 'The brand board presents logo variations, typography, a color palette, business cards, packaging, and a shopping bag mockup.',
    year: '2026',
    client: 'ELGATO',
    role: 'Brand Identity',
    image: 'assets/images/projects/elgato-brand-identity.png',
    colors: ['#FFE0C1', '#132A28', '#304359', '#F7F3EA'],
    colorNames: ['Peach', 'Deep Ink', 'Navy', 'Warm Cream'],
    process: [
      { title: 'Visual Direction', desc: 'Pairing warm peach and cream with dark ink and navy tones.' },
      { title: 'Identity', desc: 'Combining a geometric symbol, bold wordmark, and supporting typography.' },
      { title: 'Applications', desc: 'Showing the identity on business cards, packaging, and a shopping bag.' },
    ],
  },
  {
    id: 3,
    title: 'Pahichan Pasta',
    category: 'Poster',
    featured: true,
    overview: 'A social media poster series for Pahichan Pasta, featuring its pasta products, meal ideas, and Nepal-made message.',
    results: 'The final series includes eight posters about the products, recipes, and campaign messages.',
    year: '2026',
    client: 'Pahichan Pasta',
    role: 'Digital Poster Design',
    image: 'assets/images/projects/pahichan-pasta.png',
    colors: ['#0F2E5D', '#2C7A32', '#D9AB3B', '#E9822B', '#F3F0E8'],
    colorNames: ['Pahichan Navy', 'Harvest Green', 'Grain Gold', 'Pasta Orange', 'Warm Cream'],
    process: [
      { title: 'Planning', desc: 'Organizing product details and campaign messages for the poster series.' },
      { title: 'Design', desc: 'Combining product images, food photography, and campaign text in each poster.' },
      { title: 'Final Artwork', desc: 'Preparing the posters for sharing on social media.' },
    ],
  },
  {
    id: 1,
    title: 'Bold Lobo',
    category: 'Branding',
    overview: 'A brand identity for Bold Lobo using a black, yellow, and white color palette across the logo and brand materials.',
    results: 'The brand board includes the logo, color palette, typography, business card, and tote bag mockups.',
    year: '2026',
    client: 'Bold Lobo',
    role: 'Brand Identity',
    image: 'assets/images/projects/bold-lobo-brandboard.png',
    colors: ['#0D0D0D', '#FCD903', '#F5F5F5', '#A3C9CC'],
    colorNames: ['Midnight Black', 'Signal Yellow', 'Cloud White', 'Powder Blue'],
    process: [
      { title: 'Planning', desc: 'Setting the visual direction and color palette for the brand.' },
      { title: 'Logo', desc: 'Creating the wordmark and wolf inspired symbol.' },
      { title: 'Brand Materials', desc: 'Showing the identity on business cards and a tote bag.' },
    ],
  },
  {
    id: 2,
    title: 'Curve',
    category: 'Logo',
    overview: 'A red and cream brand identity for Curve, an organization product. The logo is shown across stationery, packaging, and other brand materials.',
    results: 'The identity includes a logo, color palette, stationery, packaging, and product mockups.',
    year: '2026',
    client: 'Curve',
    role: 'Logo + Visual Identity',
    image: 'assets/images/projects/curve-brandboard.png',
    colors: ['#C61414', '#360A0A', '#EAE6DD'],
    colorNames: ['Curve Red', 'Deep Maroon', 'Warm Cream'],
    process: [
      { title: 'Planning', desc: 'Choosing a red, maroon, and cream color palette for the identity.' },
      { title: 'Logo', desc: 'Creating a curved symbol and wordmark for Curve.' },
      { title: 'Brand Materials', desc: 'Applying the identity to stationery, packaging, and product mockups.' },
    ],
  },
  {
    id: 4,
    title: 'NEXORA Branding',
    category: 'Branding',
    overview: 'A dark blue and gold visual identity for NEXORA, shown across a logo, website, social media graphics, stationery, and product mockups.',
    results: 'The brand board includes the logo, website layout, social media posts, stationery, and app mockups.',
    year: '2026',
    client: 'NEXORA',
    role: 'Brand Identity',
    image: 'assets/images/projects/nexora-branding.png',
    colors: ['#0E1E25', '#53CCBB', '#3498da', '#E6C372', '#F2F1F1'],
    colorNames: ['Ink', 'Teal', 'Blue', 'Gold', 'Cream'],
    process: [
      { title: 'Planning', desc: 'Setting a dark blue and gold visual direction for the brand.' },
      { title: 'Identity', desc: 'Creating the logo, color palette, typography, and supporting graphics.' },
      { title: 'Applications', desc: 'Showing the identity across digital and print materials.' },
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
  realtimeFeedbackMsg: q('#realtimeFeedbackMsg'),
};

const state = {
  activeCategory: 'All',
  modalTrigger: null,
  backgroundElements: [],
  previousOverflow: '',
};

const applyTheme = (theme, persist = true) => {
  const activeTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = activeTheme;

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
    return `
    <article class="service-card" id="${slug}">
      <span class="service-number">${service.num}</span>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p><a href="#contact" class="service-arrow" aria-label="Discuss ${service.title}">&#8599;</a>
    </article>
  `;
  }).join('');
};

const renderFilters = () => {
  if (!elements.filterBar) return;
  const categories = ['All', ...new Set(PROJECT_DATA.map(project => project.category))];
  elements.filterBar.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn ${state.activeCategory === category ? 'active' : ''}" aria-pressed="${state.activeCategory === category}" data-category="${category}">
      ${category}
    </button>
  `).join('');
};

const renderProjects = () => {
  if (!elements.portfolioGrid) return;
  const projects = PROJECT_DATA.filter(project => state.activeCategory === 'All' || project.category === state.activeCategory);

  if (!projects.length) {
    elements.portfolioGrid.innerHTML = '<p class="section-label">No projects found in this category.</p>';
    return;
  }

  elements.portfolioGrid.innerHTML = projects.map((project, index) => {
    const hasImage = Boolean(project.image);
    return `
    <article class="portfolio-card ${hasImage ? 'has-image' : 'is-concept'} ${project.featured ? 'is-featured' : ''} project-${project.id} pcard-${index + 1}" data-id="${project.id}" tabindex="0" role="button" aria-label="View project ${project.title}">
      <div class="portfolio-card-bg" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `<img class="portfolio-card-img" src="${project.image}" alt="${project.title} ${project.category} design" loading="lazy" decoding="async" />` : ''}
      </div>
      <div class="portfolio-card-overlay">
      <span class="pcard-kicker">Project · ${String(PROJECT_DATA.indexOf(project) + 1).padStart(2, '0')}</span>
        <h3 class="pcard-title">${project.title}</h3>
        <span class="pcard-cat">${project.category} &middot; ${project.year}</span>
      </div>
      <div class="pcard-strip">
        <div>
          <span class="pcard-cat">${project.category} &middot; ${project.year}</span>
          <span class="pcard-title">${project.title}</span>
        </div>
        <span class="pcard-arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  `;
  }).join('');
};

const openProjectModal = projectId => {
  const project = PROJECT_DATA.find(item => item.id === Number(projectId));
  if (!project || !elements.projectModal || !elements.modalInner) return;

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
  elements.modalInner.innerHTML = `
    <div class="modal-project-image">
      <div class="modal-hero-img" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `
          <a class="modal-hero-image-link" href="${project.image}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} image in new tab">
            <img class="modal-hero-img-src" src="${project.image}" alt="${project.title} ${project.category} project image" />
          </a>
        ` : ''}
        <div class="photo-placeholder-label">${project.title}</div>
        <div class="modal-visual-meta"><span>Project · ${String(PROJECT_DATA.indexOf(project) + 1).padStart(2, '0')}</span><span>${hasImage ? 'Open image ↗' : project.category}</span></div>
      </div>
    </div>
    <section class="modal-brief">
      <p class="modal-section-title">Project ${String(PROJECT_DATA.indexOf(project) + 1).padStart(2, '0')} / Overview</p>
      <span class="modal-tag">${project.category}</span>
      <h2 class="modal-title" id="projectTitle">${project.title}</h2>
      <p class="modal-overview">${project.overview}</p>
      <div class="modal-meta">
        <div class="meta-item"><p class="lbl">Client</p><p class="val">${project.client}</p></div>
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
  state.modalTrigger = document.activeElement;
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
  elements.projectModal.inert = true;
  elements.projectModal.setAttribute('aria-hidden', 'true');
  state.backgroundElements.forEach(({ element, inert }) => { element.inert = inert; });
  state.backgroundElements = [];
  document.body.style.overflow = state.previousOverflow;
  state.modalTrigger?.focus();
};

const closeDrawer = () => {
  if (!elements.navDrawer) return;
  elements.navDrawer.classList.remove('open');
  elements.navDrawer.inert = true;
  elements.navDrawer.setAttribute('aria-hidden', 'true');
  if (elements.navDrawer.contains(document.activeElement)) elements.burgerBtn?.focus();
  if (elements.burgerBtn) {
    elements.burgerBtn.setAttribute('aria-expanded', 'false');
    elements.burgerBtn.setAttribute('aria-label', 'Open navigation menu');
  }
};

qa('a', elements.navDrawer).forEach(link => { link.removeAttribute('onclick'); link.addEventListener('click', closeDrawer); });

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
  const revealElements = qa('.reveal');
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

  revealElements.forEach(el => observer.observe(el));
};

const setupInteractions = () => {
  if (elements.burgerBtn && elements.navDrawer) {
    elements.burgerBtn.addEventListener('click', () => {
      const isOpen = elements.navDrawer.classList.toggle('open');
      elements.navDrawer.inert = !isOpen;
      elements.navDrawer.setAttribute('aria-hidden', String(!isOpen));
      elements.burgerBtn.setAttribute('aria-expanded', String(isOpen));
      elements.burgerBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
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
    elements.modalClose.addEventListener('click', closeProjectModal);
  }

  if (elements.projectModal) {
    elements.projectModal.addEventListener('click', event => {
      if (event.target === elements.projectModal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && elements.navDrawer?.classList.contains('open')) {
      const controls = [elements.burgerBtn, ...qa('a', elements.navDrawer)];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      else if (!controls.includes(document.activeElement)) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'Tab' && elements.projectModal?.classList.contains('open')) {
      const focusable = qa('button, a[href], input, select, textarea, [tabindex="0"]', elements.projectModal);
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
      closeProjectModal();
      closeDrawer();
    }
  });

  document.addEventListener('click', event => {
    if (!elements.navDrawer?.contains(event.target) && !elements.burgerBtn?.contains(event.target)) closeDrawer();
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

    const realtimeFeedback = (firstName, lastName, email, message, service, budget) => {
      const missing = [];
      if (!firstName) missing.push('First Name');
      if (!lastName) missing.push('Last Name');
      if (!email) missing.push('Email');
      if (!message) missing.push('Message');

      if (missing.length) {
        return `Missing: ${missing.join(', ')}.`;
      }

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) return 'Please enter a valid email address.';

      if (message.length < 20) return 'Add a bit more detail to help me understand your project (min 20 characters).';

      const extras = [];
      if (service) extras.push('Service');
      if (budget) extras.push('Budget');
      return extras.length ? 'Great—your request looks good. You can send when ready.' : 'Great—your message looks good. You can send when ready.';
    };

    const updateRealtime = () => {
      if (!elements.realtimeFeedbackMsg) return;

      const firstName = q('#fname', elements.contactForm)?.value.trim();
      const lastName = q('#lname', elements.contactForm)?.value.trim();
      const email = q('#email', elements.contactForm)?.value.trim();
      const message = q('#message', elements.contactForm)?.value.trim();
      const service = q('#service', elements.contactForm)?.value.trim();
      const budget = q('#budget', elements.contactForm)?.value.trim();

      elements.realtimeFeedbackMsg.textContent = realtimeFeedback(firstName, lastName, email, message, service, budget);
    };

    // Initial feedback
    updateRealtime();

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

          // Auto clear status + clear input fields after a short delay
          elements.contactForm.reset();
          updateRealtime();

          setTimeout(() => {
            elements.formStatus.classList.remove('visible');
          }, 3500);
        })
        .catch(error => {
          console.error('EmailJS send error:', error);
          showFormMessage('Unable to send your message right now. Please try again or email me directly.', false);
        })
        .finally(() => {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message →';
          }
        });
    });


    // Keep feedback updated as the user types
    qa('input, textarea, select', elements.contactForm).forEach(input => {
      input.addEventListener('input', () => {
        elements.formStatus.classList.remove('visible');
        updateRealtime();
      });
    });
  }
};

const init = () => {
  setupThemeToggle();
  renderServices();
  renderFilters();
  renderProjects();
  setupRevealAnimations();
  setupInteractions();
  updateNavbarAndProgress();
  let scrollPending = false;
  window.addEventListener('scroll', () => { if (scrollPending) return; scrollPending = true; requestAnimationFrame(() => { updateNavbarAndProgress(); scrollPending = false; }); }, { passive: true });
  const year = q('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
};

window.addEventListener('DOMContentLoaded', init);
