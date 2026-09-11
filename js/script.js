const SKILLS_DATA = [
  { name: 'Brand Identity', pct: 92 },
  { name: 'Logo Design', pct: 96 },
    { name: 'Social Media Design', pct: 90 },
  { name: 'Poster Design', pct: 82 },
  { name: 'Typography', pct: 94 },
];

const SERVICES_DATA = [
  {
    icon: '◎',
    num: '01',
    title: 'Logo Design',
    desc: 'Timeless marks that define your brand’s visual identity and leave a lasting impression on every touchpoint.',
  },
  {
    icon: '◈',
    num: '02',
    title: 'Brand Identity',
    desc: 'Complete visual systems — color, typography, pattern, and photography — that tell your story with consistency.',
  },
  {
    icon: '◐',
    num: '03',
    title: 'Social Media Design',
    desc: 'Scroll-stopping content templates designed to engage, convert, and build a loyal audience across platforms.',
  },
  
  {
    icon: '◻',
    num: '05',
    title: 'Poster Design',
    desc: 'Bold, expressive posters that capture attention and turn a message into a memorable visual moment.',
  },
  
];

const PROJECT_DATA = [
  {
    id: 1,
    title: 'Bold Lobo',
    category: 'Branding',
    overview: 'A bold, modern identity system built around a confident mark, high-contrast colour, and versatile brand applications.',
    year: '2026',
    client: 'Bold Lobo',
    role: 'Brand Identity',
    image: 'assets/bold_lobo_brandboard.png',
    colors: ['#0D0D0D', '#FCD903', '#F5F5F5', '#A3C9CC'],
    colorNames: ['Midnight Black', 'Signal Yellow', 'Cloud White', 'Powder Blue'],
    process: [
      { title: 'Discovery', desc: 'Defining the brand personality, audience, and positioning for a confident visual direction.' },
      { title: 'Identity', desc: 'Building the logotype, icon mark, type system, and signature high-contrast palette.' },
      { title: 'Applications', desc: 'Extending the identity across stationery, packaging, and everyday brand touchpoints.' },
    ],
  },
  {
    id: 2,
    title: 'Curve',
    category: 'Logo',
    overview: 'A distinctive logo system for Curve, combining a flowing symbol and expressive wordmark to make everyday organisation feel considered and approachable.',
    year: '2026',
    client: 'Curve',
    role: 'Logo + Visual Identity',
    image: 'assets/curve_brandboard.png',
    colors: ['#C61414', '#360A0A', '#EAE6DD'],
    colorNames: ['Curve Red', 'Deep Maroon', 'Warm Cream'],
    process: [
      { title: 'Direction', desc: 'Defining an energetic, welcoming visual direction for an organisation-focused brand.' },
      { title: 'Logo System', desc: 'Crafting the flowing mark, custom-feeling wordmark, and flexible logo lockups.' },
      { title: 'Applications', desc: 'Extending the identity across stationery, packaging, and everyday brand touchpoints.' },
    ],
  },
  {
    id: 3,
    title: 'Pahichan Pasta',
    category: 'Poster',
    overview: 'A bold social media poster collection that brings Pahichan Pasta’s wholesome, Nepal-made story to life.',
    year: '2026',
    client: 'Pahichan Pasta',
    role: 'Digital Poster Design',
    image: 'assets/pahichan pasta.png',
    colors: ['#0F2E5D', '#2C7A32', '#D9AB3B', '#E9822B', '#F3F0E8'],
    colorNames: ['Pahichan Navy', 'Harvest Green', 'Grain Gold', 'Pasta Orange', 'Warm Cream'],
    process: [
      { title: 'Research', desc: 'Identifying product benefits and visual cues that connect with the target audience.' },
      { title: 'Design', desc: 'Creating vivid campaign posters with energetic typography, food imagery, and product storytelling.' },
      { title: 'Delivery', desc: 'Preparing polished digital poster assets for social media campaigns.' },
    ],
  },
  {
    id: 4,
    title: 'NEXORA Branding',
    category: 'Branding',
    overview: 'NEXORA branding system showcasing cohesive typography, visual identity direction, and brand assets built for consistency.',
    year: '2026',
    client: 'NEXORA',
    role: 'Brand Identity',
    image: 'assets/NEXORABRANDING.png',
    colors: ['#0E1E25', '#53CCBB', '#3498da', '#E6C372', '#F2F1F1'],
    colorNames: ['Ink', 'Teal', 'Blue', 'Gold', 'Cream'],
    process: [
      { title: 'Discovery', desc: 'Brand audit and visual direction for cohesion and clarity.' },
      { title: 'Design', desc: 'Logo/identity direction, palette, and brand asset preparation.' },
      { title: 'Delivery', desc: 'Final branding files packaged for rollout across touchpoints.' },
    ],
  },
];

const TESTIMONIAL_DATA = [
  {
    name: 'Mira Patel',
    role: 'Founder, Ember Labs',
    quote: 'Ayush made our brand feel premium without losing warmth. The process was easy, and the final result is stunning.',
    avatar: 'MP',
  },
  {
    name: 'Leah Thompson',
    role: 'Marketing Director, Nova Retail',
    quote: 'The visual identity elevated every part of our launch — from posters to social media campaigns.',
    avatar: 'LT',
  },
  {
    name: 'Ethan Greene',
    role: 'CEO, Aria Studios',
    quote: 'Highly professional, fast, and responsive. The finished system looks beautiful and works brilliantly across formats.',
    avatar: 'EG',
  },
];

const q = (selector, target = document) => target.querySelector(selector);
const qa = (selector, target = document) => Array.from(target.querySelectorAll(selector));

const elements = {
  navbar: q('#navbar'),
  burgerBtn: q('#burgerBtn'),
  navDrawer: q('#navDrawer'),
  progressBar: q('#progress-bar'),
  skillsGrid: q('#skillsGrid'),
  servicesGrid: q('#servicesGrid'),
  filterBar: q('#filterBar'),
  portfolioGrid: q('#portfolioGrid'),
  projectModal: q('#projectModal'),
  modalInner: q('#modalInner'),
  modalClose: q('#modalClose'),
  testimonialTrack: q('#testimonialTrack'),
  prevBtn: q('#prevBtn'),
  nextBtn: q('#nextBtn'),
  carouselDots: q('#carouselDots'),
  contactForm: q('#contactForm'),
  formStatus: q('#formStatus'),
  realtimeFeedbackMsg: q('#realtimeFeedbackMsg'),

  clientFeedbackForm: q('#clientFeedbackForm'),
  clientFeedbackMsg: q('#clientFeedbackMsg'),
  clientFeedbackStatus: q('#clientFeedbackStatus'),
  clientFeedbackGrid: q('#clientFeedbackGrid'),
  clientFeedbackEmpty: q('#clientFeedbackEmpty'),
};

const state = {
  activeCategory: 'All',
  testimonialIndex: 0,
};

const renderSkills = () => {
  if (!elements.skillsGrid) return;
  elements.skillsGrid.innerHTML = SKILLS_DATA.map(skill => {
    // Make "Logo Design" skill clickable to scroll to the service card
    const slug = 'service-' + skill.name.toLowerCase().replace(/\s+/g, '-');
    const isClickable = skill.name === 'Logo Design';
    return `
    <div class="skill-item ${isClickable ? 'skill-item-clickable' : ''}" ${isClickable ? `data-scroll-to="${slug}" title="Click to view ${skill.name} service"` : ''}>
      <div class="skill-top">
        <p class="skill-name">${skill.name}</p>
        <p class="skill-pct">${skill.pct}%</p>
      </div>
      <div class="skill-track"><span class="skill-fill"></span></div>
    </div>
  `;
  }).join('');

  qa('.skill-fill', elements.skillsGrid).forEach((fill, index) => {
    fill.style.width = `${SKILLS_DATA[index].pct}%`;
  });
};

const renderServices = () => {
  if (!elements.servicesGrid) return;
  elements.servicesGrid.innerHTML = SERVICES_DATA.map(service => {
    // Create a slug from the title for the id attribute
    const slug = 'service-' + service.title.toLowerCase().replace(/\s+/g, '-');
    return `
    <article class="service-card" id="${slug}">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p>
    </article>
  `;
  }).join('');
};

const renderFilters = () => {
  if (!elements.filterBar) return;
  const categories = ['All', ...new Set(PROJECT_DATA.map(project => project.category))];
  elements.filterBar.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn ${state.activeCategory === category ? 'active' : ''}" data-category="${category}">
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
    <article class="portfolio-card ${hasImage ? 'has-image' : 'is-concept'} project-${project.id} pcard-${index + 1}" data-id="${project.id}" tabindex="0" role="button" aria-label="View project ${project.title}">
      <div class="portfolio-card-bg" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `<img class="portfolio-card-img" src="${project.image}" alt="${project.title} thumbnail" />` : ''}
      </div>
      <div class="portfolio-card-overlay">
        <span class="pcard-kicker">Selected case study · 0${project.id}</span>
        <h3 class="pcard-title">${project.title}</h3>
        <span class="pcard-cat">${project.category}</span>
      </div>
      <div class="pcard-strip">
        <div>
          <span class="pcard-cat">${project.category}</span>
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

  const processMarkup = project.process.map(step => `
    <article class="process-step">
      <span class="process-step-number">0${project.process.indexOf(step) + 1}</span>
      <div>
        <p class="process-step-title">${step.title}</p>
        <p class="process-step-desc">${step.desc}</p>
      </div>
    </article>
  `).join('');

  const hasImage = Boolean(project.image);
  elements.modalInner.innerHTML = `
    <div class="modal-hero">
      <div class="modal-hero-img" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `
          <a class="modal-hero-image-link" href="${project.image}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} image in new tab">
            <img class="modal-hero-img-src" src="${project.image}" alt="${project.title} image" />
          </a>
        ` : ''}
        <div class="photo-placeholder-label">${project.title}</div>
        <div class="modal-visual-meta"><span>Selected work · 0${project.id}</span><span>${hasImage ? 'Open artwork ↗' : project.category}</span></div>
      </div>
      <div class="modal-intro">
        <span class="modal-tag">${project.category}</span>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-overview">${project.overview}</p>
        <div class="modal-meta">
          <div class="meta-item"><p class="lbl">Client</p><p class="val">${project.client}</p></div>
          <div class="meta-item"><p class="lbl">Year</p><p class="val">${project.year}</p></div>
          <div class="meta-item"><p class="lbl">Role</p><p class="val">${project.role}</p></div>
        </div>
      </div>
    </div>
    <div class="modal-content-grid">
      <section class="modal-story">
        <p class="modal-section-title">The brief</p>
        <p class="modal-story-copy">${project.overview}</p>
        <span class="modal-story-mark">PS/</span>
      </section>
      <section class="modal-process">
        <p class="modal-section-title">Creative process</p>
        <div class="process-steps">${processMarkup}</div>
      </section>
    </div>
    <section class="modal-palette-section">
      <p class="modal-section-title">Colour palette</p>
      <div class="color-palette">${paletteMarkup}</div>
    </section>
  `;

  elements.projectModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeProjectModal = () => {
  if (!elements.projectModal) return;
  elements.projectModal.classList.remove('open');
  document.body.style.overflow = '';
};

const closeDrawer = () => {
  if (!elements.navDrawer) return;
  elements.navDrawer.classList.remove('open');
  if (elements.burgerBtn) {
    elements.burgerBtn.setAttribute('aria-expanded', 'false');
    elements.burgerBtn.setAttribute('aria-label', 'Open navigation menu');
  }
};

window.closeDrawer = closeDrawer;

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

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
};

const renderTestimonials = () => {
  if (!elements.testimonialTrack) return;
  elements.testimonialTrack.innerHTML = TESTIMONIAL_DATA.map(testimonial => `
    <article class="testimonial-slide">
      <div class="testimonial-card">
        <span class="quote-mark">“</span>
        <p class="testimonial-quote">${testimonial.quote}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${testimonial.avatar}</div>
          <div>
            <p class="author-name">${testimonial.name}</p>
            <p class="author-role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    </article>
  `).join('');
};

const updateCarousel = index => {
  const slides = qa('.testimonial-slide', elements.testimonialTrack);
  const count = slides.length;
  if (!count || !elements.testimonialTrack || !elements.carouselDots) return;

  state.testimonialIndex = (index + count) % count;
  const activeSlide = slides[state.testimonialIndex];
  const offset = activeSlide.offsetLeft;
  elements.testimonialTrack.style.transform = `translateX(-${offset}px)`;

  qa('.carousel-dot', elements.carouselDots).forEach(dot => {
    dot.classList.toggle('active', Number(dot.dataset.index) === state.testimonialIndex);
  });
};

const setupCarousel = () => {
  if (!elements.carouselDots || !elements.prevBtn || !elements.nextBtn || !elements.testimonialTrack) return;

  elements.carouselDots.innerHTML = TESTIMONIAL_DATA.map((item, index) => `
    <button type="button" class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="View testimonial ${index + 1}"></button>
  `).join('');

  elements.prevBtn.addEventListener('click', () => updateCarousel(state.testimonialIndex - 1));
  elements.nextBtn.addEventListener('click', () => updateCarousel(state.testimonialIndex + 1));
  elements.carouselDots.addEventListener('click', event => {
    const dot = event.target.closest('[data-index]');
    if (!dot) return;
    updateCarousel(Number(dot.dataset.index));
  });

  window.addEventListener('resize', () => updateCarousel(state.testimonialIndex));
  updateCarousel(0);
};

const FEEDBACK_STORAGE_KEY = 'client_feedback_v1';

// Seed example removed.
// Previously this generated/encouraged showing a pre-submitted feedback card.


const loadFeedback = () => {
  try {
    const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveFeedback = items => {
  try {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
};

const formatStars = rating => {
  const r = Math.max(1, Math.min(5, Number(rating) || 5));
  return '★'.repeat(r) + '☆'.repeat(5 - r);
};

const escapeHtml = str => String(str)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '<')
  .replaceAll('>', '>')
  .replaceAll('"', '"')
  .replaceAll("'", '&#039;');

const renderClientFeedback = () => {
  if (!elements.clientFeedbackGrid) return;

  const submitted = loadFeedback();
  const all = [...submitted];

  if (!all.length) {
    elements.clientFeedbackGrid.innerHTML = '';
    if (elements.clientFeedbackEmpty) elements.clientFeedbackEmpty.style.display = 'block';
    return;
  }

  if (elements.clientFeedbackEmpty) elements.clientFeedbackEmpty.style.display = 'none';

  elements.clientFeedbackGrid.innerHTML = all
    .slice(-6)
    .reverse()
    .map(item => `
      <article class="client-feedback-card" data-id="${item.id}">
        <div class="client-feedback-top">
        <div class="client-feedback-avatar">${escapeHtml((item.name || 'C')[0].toUpperCase())}</div>
          <div>
            <p class="client-feedback-name">${escapeHtml(item.name)}</p>
            <p class="client-feedback-role">${escapeHtml(item.role)}</p>
          </div>
        </div>

        <div class="client-feedback-rating" aria-label="Rating: ${item.rating} out of 5">
          <span class="client-feedback-stars">${formatStars(item.rating)}</span>
        </div>

        <p class="client-feedback-message">${escapeHtml(item.message)}</p>
        <div class="client-feedback-meta">
          <span>Submitted</span>
          <span class="client-feedback-dot">•</span>
          <span>${new Date(item.createdAt || Date.now()).toLocaleDateString()}</span>
        </div>
      </article>
    `)
    .join('');
};

const setupClientFeedback = () => {
  if (!elements.clientFeedbackForm || !elements.clientFeedbackMsg || !elements.clientFeedbackStatus) return;

  const showClientFeedbackStatus = (message, success = true) => {
    elements.clientFeedbackStatus.textContent = message;
    elements.clientFeedbackStatus.classList.add('visible');
    elements.clientFeedbackStatus.style.color = success ? 'var(--accent)' : 'var(--accent2)';

    setTimeout(() => {
      elements.clientFeedbackStatus.classList.remove('visible');
    }, 3500);
  };

  const validateRealtime = ({ name, role, email, rating, message }) => {
    const missing = [];
    if (!name) missing.push('Name');
    if (!role) missing.push('Role/Company');
    if (!email) missing.push('Email');
    if (!rating) missing.push('Rating');
    if (!message) missing.push('Feedback');

    if (missing.length) return `Missing: ${missing.join(', ')}.`;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';

    if (String(message).trim().length < 20) return 'Add a bit more detail (min 20 characters).';

    const r = Number(rating);
    if (!Number.isFinite(r) || r < 1 || r > 5) return 'Rating should be between 1 and 5.';

    return 'Looks good — submit when ready.';
  };

  const updateRealtime = () => {
    const name = q('#fbName', elements.clientFeedbackForm)?.value.trim();
    const role = q('#fbRole', elements.clientFeedbackForm)?.value.trim();
    const email = q('#fbEmail', elements.clientFeedbackForm)?.value.trim();
    const rating = q('#fbRating', elements.clientFeedbackForm)?.value;
    const message = q('#fbMessage', elements.clientFeedbackForm)?.value.trim();

    elements.clientFeedbackMsg.textContent = validateRealtime({ name, role, email, rating, message });
  };

  elements.clientFeedbackForm.addEventListener('input', event => {
    // Update only for relevant fields
    const t = event.target;
    if (!t) return;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName)) {
      if (elements.clientFeedbackStatus) elements.clientFeedbackStatus.classList.remove('visible');
      updateRealtime();
    }
  });

  updateRealtime();

  elements.clientFeedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = q('#fbName', elements.clientFeedbackForm)?.value.trim();
    const role = q('#fbRole', elements.clientFeedbackForm)?.value.trim();
    const email = q('#fbEmail', elements.clientFeedbackForm)?.value.trim();
    const rating = q('#fbRating', elements.clientFeedbackForm)?.value;
    const message = q('#fbMessage', elements.clientFeedbackForm)?.value.trim();

    const realtimeMsg = validateRealtime({ name, role, email, rating, message });
    const isValid = realtimeMsg === 'Looks good — submit when ready.';

    if (!isValid) {
      showClientFeedbackStatus(realtimeMsg, false);
      return;
    }

    if (typeof emailjs === 'undefined' || !emailjs || typeof emailjs.send !== 'function') {
      showClientFeedbackStatus('Feedback service is unavailable. Please email me directly instead.', false);
      return;
    }

    const submitButton = q('button[type="submit"]', elements.clientFeedbackForm);
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending feedback…';
    }

    emailjs.send(
      'service_qlu3o95',
      'template_ut7g5rl',
      {
        first_name: name,
        last_name: role,
        email,
        service: 'Client Feedback',
        budget: `Rating: ${rating}/5`,
        message,
      }
    ).then(() => {
      const submitted = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        name,
        role,
        rating: Number(rating),
        message,
        createdAt: Date.now(),
      };
      saveFeedback([...loadFeedback(), submitted]);
      renderClientFeedback();
      elements.clientFeedbackForm.reset();
      elements.clientFeedbackMsg.textContent = 'Start typing to see guidance.';
      showClientFeedbackStatus('✓ Thanks — your feedback has been sent.', true);
    }).catch(() => {
      showClientFeedbackStatus('Unable to send feedback right now. Please try again or email me directly.', false);
    }).finally(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Feedback →';
      }
    });
  });
};

/**
 * Smoothly scroll to an element by its ID and temporarily highlight it
 */
const scrollToService = targetId => {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Remove any existing highlight
  document.querySelectorAll('.highlight-card').forEach(el => {
    el.classList.remove('highlight-card');
  });

  // Calculate offset for fixed nav height
  const navH = 80; // account for fixed nav + margin
  const top = target.getBoundingClientRect().top + window.scrollY - navH;

  window.scrollTo({ top, behavior: 'smooth' });

  // Apply highlight after scroll completes
  setTimeout(() => {
    target.classList.add('highlight-card');
    // Remove highlight after 2.5s
    setTimeout(() => target.classList.remove('highlight-card'), 2500);
  }, 600);
};

const setupInteractions = () => {
  if (elements.burgerBtn && elements.navDrawer) {
    elements.burgerBtn.addEventListener('click', () => {
      const isOpen = elements.navDrawer.classList.toggle('open');
      elements.burgerBtn.setAttribute('aria-expanded', String(isOpen));
      elements.burgerBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
  }

  // Global delegation for data-scroll-to clicks (e.g. skill items, service card CTAs)
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-scroll-to]');
    if (trigger) {
      const targetId = trigger.dataset.scrollTo;
      if (targetId) {
        event.preventDefault();
        scrollToService(targetId);
      }
    }
  });

  if (elements.filterBar) {
    elements.filterBar.addEventListener('click', event => {
      const button = event.target.closest('.filter-btn');
      if (!button) return;
      state.activeCategory = button.dataset.category || 'All';
      renderFilters();
      renderProjects();
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
    if (event.key === 'Escape') {
      closeProjectModal();
      closeDrawer();
    }
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

      const firstName = q('#fname', elements.contactForm)?.value.trim();
      const lastName = q('#lname', elements.contactForm)?.value.trim();
      const email = q('#email', elements.contactForm)?.value.trim();
      const service = q('#service', elements.contactForm)?.value.trim();
      const budget = q('#budget', elements.contactForm)?.value.trim();
      const message = q('#message', elements.contactForm)?.value.trim();

      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        showFormMessage('Please complete all required fields.', false);
        return;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage('Please enter a valid email address.', false);
        return;
      }

      if (message.length < 20) {
        showFormMessage('Add a bit more detail to help me understand your project (min 20 characters).', false);
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
      emailjs
        .send(
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
        )
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
  // NOTE: do not wipe incoming requests/feedback here.
  // The page should keep what visitors submitted so you can review it.

  renderClientFeedback();
  setupClientFeedback();

  setupRequestsInbox();


  renderSkills();
  renderServices();
  renderFilters();
  renderProjects();
  renderTestimonials();
  setupCarousel();
  setupRevealAnimations();
  setupInteractions();
  updateNavbarAndProgress();
  window.addEventListener('scroll', updateNavbarAndProgress);
  const year = q('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
};

const CONTACT_STORAGE_KEY = 'contact_requests_v1';

const escapeHtmlForRequests = str => String(str)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '<')
  .replaceAll('>', '>')
  .replaceAll('"', '"')
  .replaceAll("'", '&#039;');

const setupRequestsInbox = () => {
  const latestContactCard = q('#latestContactCard');
  const latestContactEmpty = q('#latestContactEmpty');
  const latestFeedbackCard = q('#latestFeedbackCard');
  const latestFeedbackEmpty = q('#latestFemedbackEmpty');
  const clearBtn = q('#requestsClearBtn');

  if (!latestContactCard || !latestFeedbackCard) return;

  const loadContact = () => {
    try {
      const raw = localStorage.getItem(CONTACT_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const saveContact = items => {
    try {
      localStorage.setItem(CONTACT_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const formatContactCard = item => {
    const created = new Date(item.createdAt || Date.now()).toLocaleString();
    const msg = escapeHtmlForRequests(item.message);

    return `
      <div class="requests-row"><div class="requests-k">Name</div><div class="requests-v">${escapeHtmlForRequests(item.firstName || '')} ${escapeHtmlForRequests(item.lastName || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Email</div><div class="requests-v">${escapeHtmlForRequests(item.email || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Service</div><div class="requests-v">${escapeHtmlForRequests(item.service || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Budget</div><div class="requests-v">${escapeHtmlForRequests(item.budget || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Message</div><div class="requests-v">${msg}</div></div>
      <div class="requests-row"><div class="requests-k">When</div><div class="requests-v">${escapeHtmlForRequests(created)}</div></div>
    `;
  };

  const formatFeedbackCard = item => {
    const created = new Date(item.createdAt || Date.now()).toLocaleString();
    return `
      <div class="requests-row"><div class="requests-k">Name</div><div class="requests-v">${escapeHtmlForRequests(item.name || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Role</div><div class="requests-v">${escapeHtmlForRequests(item.role || '')}</div></div>
      <div class="requests-row"><div class="requests-k">Rating</div><div class="requests-v">${escapeHtmlForRequests(item.rating || '')} / 5</div></div>
      <div class="requests-row"><div class="requests-k">Feedback</div><div class="requests-v">${escapeHtmlForRequests(item.message || '')}</div></div>
      <div class="requests-row"><div class="requests-k">When</div><div class="requests-v">${escapeHtmlForRequests(created)}</div></div>
    `;
  };

  const render = () => {
    const contactAll = loadContact();
    const latestContact = contactAll[contactAll.length - 1];

    if (latestContact) {
      latestContactEmpty && (latestContactEmpty.style.display = 'none');
      latestContactCard.innerHTML = formatContactCard(latestContact);
    } else {
      latestContactCard.innerHTML = '';
      latestContactEmpty && (latestContactEmpty.style.display = 'block');
    }

    const feedbackAll = loadFeedback();
    const latestFeedback = feedbackAll[feedbackAll.length - 1];

    if (latestFeedback) {
      latestFeedbackEmpty && (latestFeedbackEmpty.style.display = 'none');
      latestFeedbackCard.innerHTML = formatFeedbackCard(latestFeedback);
    } else {
      latestFeedbackCard.innerHTML = '';
      latestFeedbackEmpty && (latestFeedbackEmpty.style.display = 'block');
    }
  };

  clearBtn && clearBtn.addEventListener('click', () => {
    try {
      localStorage.removeItem(CONTACT_STORAGE_KEY);
      // keep feedback grid unless you want to clear it too.
      render();
    } catch {
      // ignore
    }
  });

  render();

  // Update immediately when contact input changes (preview “what they want”)
  if (elements.contactForm) {
    const updateContactPreview = () => {
      const firstName = q('#fname', elements.contactForm)?.value.trim();
      const lastName = q('#lname', elements.contactForm)?.value.trim();
      const email = q('#email', elements.contactForm)?.value.trim();
      const service = q('#service', elements.contactForm)?.value.trim();
      const budget = q('#budget', elements.contactForm)?.value.trim();
      const message = q('#message', elements.contactForm)?.value.trim();

      // show preview even before submit, but don't persist
      if (!message && !email) return;

      const previewItem = {
        firstName,
        lastName,
        email,
        service,
        budget,
        message,
        createdAt: Date.now(),
      };

      if (latestContactEmpty) latestContactEmpty.style.display = 'none';
      latestContactCard.innerHTML = formatContactCard(previewItem);
    };

    qa('input, textarea, select', elements.contactForm).forEach(el => {
      el.addEventListener('input', updateContactPreview);
    });
  }

  // Persist contact request payload on submit
  if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', event => {
      // store what the visitor wants; UI handler may also preventDefault

      const firstName = q('#fname', elements.contactForm)?.value.trim();

      const lastName = q('#lname', elements.contactForm)?.value.trim();
      const email = q('#email', elements.contactForm)?.value.trim();
      const service = q('#service', elements.contactForm)?.value.trim();
      const budget = q('#budget', elements.contactForm)?.value.trim();
      const message = q('#message', elements.contactForm)?.value.trim();

      if (!firstName || !lastName || !email || !message) return;

      const item = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        firstName,
        lastName,
        email,
        service,
        budget,
        message,
        createdAt: Date.now(),
      };

      const existing = loadContact();
      saveContact([...existing, item]);
      render();
    });
  }
};

window.addEventListener('DOMContentLoaded', init);
