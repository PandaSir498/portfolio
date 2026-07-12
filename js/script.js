const SKILLS_DATA = [
  { name: 'Brand Identity', pct: 92 },
  { name: 'Logo Design', pct: 96 },
    { name: 'Social Media Design', pct: 90 },
  { name: 'Packaging Design', pct: 82 },
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
    title: 'Packaging Design',
    desc: 'Tactile, shelf-ready packaging that makes products irresistible at first glance and unforgettable after.',
  },
  
];

const PROJECT_DATA = [
  {
    id: 1,
    title: 'Aura Spirits',
    category: 'Branding',
    overview: 'A premium artisan spirits brand built around the concept of elemental purity, balancing craft with luxury.',
    year: '2024',
    client: 'Aura Distillery',
    role: 'Brand Identity',
    colors: ['#1A2E38', '#53CCBB', '#E6C372', '#F2F1F1', '#8B9EA6'],
    colorNames: ['Deep Navy', 'Teal', 'Gold', 'Cream', 'Slate'],
    process: [
      { title: 'Discovery', desc: 'Stakeholder interviews, competitor mapping, and brand positioning.' },
      { title: 'Strategy', desc: 'Visual direction, messaging, and persona definition for the identity.' },
      { title: 'Design', desc: 'Logo system, typography, color palette, and collateral exploration.' },
    ],
  },
  {
    id: 2,
    title: 'Forma Studio',
    category: 'Logo',
    overview: 'A minimal architecture studio identity grounded in geometry and crisp typography.',
    year: '2024',
    client: 'Forma Architecture',
    role: 'Logo + Print System',
    colors: ['#0D1B22', '#FFFFFF', '#C8A96E', '#3A3A3A', '#E8E0D4'],
    colorNames: ['Charcoal', 'White', 'Sand', 'Dark Gray', 'Linen'],
    process: [
      { title: 'Research', desc: 'Visual audit of competitors and architecture brands.' },
      { title: 'Concept', desc: 'Logomark and wordmark exploration with structured forms.' },
      { title: 'Handoff', desc: 'Brand assets, stationery, and use guidelines for launch.' },
    ],
  },
  {
    id: 3,
    title: 'Verde Botanics',
    category: 'Packaging',
    overview: 'Sustainable skincare packaging that feels fresh, premium, and natural.',
    year: '2023',
    client: 'Verde Beauty Co.',
    role: 'Packaging + Brand',
    colors: ['#2C4A2E', '#8FBF7A', '#F5EDD6', '#C9A86C', '#3E3E3E'],
    colorNames: ['Forest', 'Sage', 'Parchment', 'Honey', 'Graphite'],
    process: [
      { title: 'Audit', desc: 'Testing materials, retail layouts, and premium shelf presence.' },
      { title: 'Design', desc: 'Label systems, typography, and illustration direction.' },
      { title: 'Delivery', desc: 'Print-ready assets and eco-friendly production specs.' },
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
    quote: 'The visual identity elevated every part of our launch — from packaging to social media campaigns.',
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
  elements.skillsGrid.innerHTML = SKILLS_DATA.map(skill => `
    <div class="skill-item">
      <div class="skill-top">
        <p class="skill-name">${skill.name}</p>
        <p class="skill-pct">${skill.pct}%</p>
      </div>
      <div class="skill-track"><span class="skill-fill"></span></div>
    </div>
  `).join('');

  qa('.skill-fill', elements.skillsGrid).forEach((fill, index) => {
    fill.style.width = `${SKILLS_DATA[index].pct}%`;
  });
};

const renderServices = () => {
  if (!elements.servicesGrid) return;
  elements.servicesGrid.innerHTML = SERVICES_DATA.map(service => `
    <article class="service-card">
      <div class="service-icon">${service.icon}</div>
      <div class="service-num">${service.num}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p>
    </article>
  `).join('');
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
    <article class="portfolio-card" data-id="${project.id}" tabindex="0" role="button" aria-label="View project ${project.title}">
      <div class="portfolio-card-bg" ${hasImage ? '' : `style="background: linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]});"`}>
        ${hasImage ? `<img class="portfolio-card-img" src="${project.image}" alt="${project.title} thumbnail" />` : ''}
      </div>
      <div class="portfolio-card-overlay">
        <span class="pcard-num">0${project.id}</span>
        <h3 class="pcard-title">${project.title}</h3>
        <span class="pcard-cat">${project.category}</span>
      </div>
      <div class="pcard-strip">
        <span class="pcard-title">${project.title}</span>
        <span class="pcard-num">${project.category}</span>
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
    </div>
  `).join('');

  const processMarkup = project.process.map(step => `
    <div class="meta-item">
      <p class="lbl">${step.title}</p>
      <p class="val">${step.desc}</p>
    </div>
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
      </div>
      <div>
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
    <p class="modal-overview">${project.overview}</p>
    <div class="modal-section-title">Project details</div>
    <div class="modal-overview">${project.process.map(step => `<strong>${step.title}:</strong> ${step.desc}`).join(' <br /> ')}</div>
    <div class="modal-section-title">Color palette</div>
    <div class="color-palette">${paletteMarkup}</div>
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

const setupCursor = () => {
  const dot = q('#cursor-dot');
  const ring = q('#cursor-ring');
  if (!dot || !ring) return;

  document.addEventListener('mousemove', event => {
    const { clientX, clientY } = event;
    dot.style.left = `${clientX}px`;
    dot.style.top = `${clientY}px`;
    ring.style.left = `${clientX}px`;
    ring.style.top = `${clientY}px`;
  });

  document.addEventListener('mouseover', event => {
    if (event.target.closest('a, button, input, textarea, select, .filter-btn, .service-card, .portfolio-card, .carousel-btn')) {
      ring.style.transform = 'translate(-50%, -50%) scale(1.4)';
      ring.style.borderColor = 'rgba(83,204,187,0.9)';
    }
  });

  document.addEventListener('mouseout', event => {
    if (event.target.closest('a, button, input, textarea, select, .filter-btn, .service-card, .portfolio-card, .carousel-btn')) {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(83,204,187,0.6)';
    }
  });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  window.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '0.6';
  });
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
          <div class="client-feedback-avatar">${(item.name || 'C')[0].toUpperCase()}</div>
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

  const validateRealtime = ({ name, role, rating, message }) => {
    const missing = [];
    if (!name) missing.push('Name');
    if (!role) missing.push('Role/Company');
    if (!rating) missing.push('Rating');
    if (!message) missing.push('Feedback');

    if (missing.length) return `Missing: ${missing.join(', ')}.`;

    if (String(message).trim().length < 20) return 'Add a bit more detail (min 20 characters).';

    const r = Number(rating);
    if (!Number.isFinite(r) || r < 1 || r > 5) return 'Rating should be between 1 and 5.';

    return 'Looks good — submit when ready.';
  };

  const updateRealtime = () => {
    const name = q('#fbName', elements.clientFeedbackForm)?.value.trim();
    const role = q('#fbRole', elements.clientFeedbackForm)?.value.trim();
    const rating = q('#fbRating', elements.clientFeedbackForm)?.value;
    const message = q('#fbMessage', elements.clientFeedbackForm)?.value.trim();

    elements.clientFeedbackMsg.textContent = validateRealtime({ name, role, rating, message });
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
    const rating = q('#fbRating', elements.clientFeedbackForm)?.value;
    const message = q('#fbMessage', elements.clientFeedbackForm)?.value.trim();

    const realtimeMsg = validateRealtime({ name, role, rating, message });
    const isValid = realtimeMsg === 'Looks good — submit when ready.';

    if (!isValid) {
      showClientFeedbackStatus(realtimeMsg, false);
      return;
    }

    const r = Number(rating);
    const submitted = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name,
      role,
      rating: r,
      message,
      createdAt: Date.now(),
    };

    const existing = loadFeedback();
    const next = [...existing, submitted];
    saveFeedback(next);

    // Re-render instantly
    renderClientFeedback();

    // Hide empty label
    if (elements.clientFeedbackEmpty) elements.clientFeedbackEmpty.style.display = 'none';

    elements.clientFeedbackForm.reset();
    if (elements.clientFeedbackStatus) elements.clientFeedbackStatus.classList.remove('visible');
    elements.clientFeedbackMsg.textContent = 'Start typing to see guidance.';
    showClientFeedbackStatus('✓ Thanks! Your feedback was submitted.', true);
  });
};

const setupInteractions = () => {
  if (elements.burgerBtn && elements.navDrawer) {
    elements.burgerBtn.addEventListener('click', () => {
      elements.navDrawer.classList.toggle('open');
    });
  }

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
      const message = q('#message', elements.contactForm)?.value.trim();

      if (!firstName || !lastName || !email || !message) {
        showFormMessage('Please complete all required fields.', false);
        return;
      }

      elements.contactForm.reset();
      showFormMessage('✓ Message sent! I’ll be in touch within 24 hours.', true);

      // Reset real-time message too
      updateRealtime();
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
  // Remove any pre-submitted feedback cards that might exist in localStorage.
  // This targets the “submitted feedback … Ayush” content the user wants gone.
  try {
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  } catch {
    // ignore
  }

  renderClientFeedback();
  setupClientFeedback();

  renderSkills();
  renderServices();
  renderFilters();
  renderProjects();
  renderTestimonials();
  setupCarousel();
  setupRevealAnimations();
  setupCursor();
  setupInteractions();
  updateNavbarAndProgress();
  window.addEventListener('scroll', updateNavbarAndProgress);
};

window.addEventListener('DOMContentLoaded', init);
