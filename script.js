// =====================
//  MENU DATA (from image)
// =====================
const menuData = {
  burgers: [
    { name: 'برجر زنجر', desc: 'برجر دجاج مقرمش بصوص زنجر خاص', price: 10, emoji: '🍔' },
    { name: 'برجر دجاج', desc: 'برجر دجاج مشوي طازج مع خضار', price: 10, emoji: '🍔' },
    { name: 'مشوي برجر دجاج', desc: 'برجر دجاج مشوي على الفحم', price: 10, emoji: '🔥' },
    { name: 'زنجر دبل', desc: 'برجر زنجر مزدوج للأكلة الكبيرة', price: 16, emoji: '🍔' },
    { name: 'كودو زنجر', desc: 'برجر زنجر بأسلوب كودو المميز', price: 21, emoji: '🍔' },
  ],
  grills: [
    { name: 'مشوي برجر لحم', desc: 'لحم مشوي طازج على الفحم', price: 11, emoji: '🥩' },
    { name: 'مشوي وجبة دجاج عادي', desc: 'دجاج مشوي بتتبيلة خاصة', price: 16, emoji: '🍗' },
    { name: 'مشوي وجبة دجاج أحمر', desc: 'دجاج مشوي بتتبيلة حارة', price: 16, emoji: '🌶️' },
    { name: 'وجبة مشوي لحم دبل', desc: 'لحم مشوي مزدوج مع إضافات', price: 25, emoji: '🥩' },
  ],
  sides: [
    { name: 'بطاطس عادي', desc: 'بطاطس مقلية ذهبية مقرمشة', price: 5, emoji: '🍟' },
    { name: 'بطاطس كرسي', desc: 'بطاطس كرسي مقرمشة', price: 7, emoji: '🍟' },
    { name: 'بطاطس صن', desc: 'بطاطس صن بتتبيلة مميزة', price: 8, emoji: '🍟' },
    { name: 'حلات بصل', desc: 'حلقات بصل مقلية مقرمشة', price: 9, emoji: '🧅' },
    { name: 'بطاطس لحم', desc: 'بطاطس مع قطع لحم مشوي', price: 15, emoji: '🍟' },
    { name: 'بطاطس دجاج', desc: 'بطاطس مع دجاج مشوي', price: 15, emoji: '🍗' },
  ],
  chicken: [
    { name: 'نجت دجاج', desc: 'قطع دجاج مقلية مقرمشة', price: 17, emoji: '🍗' },
    { name: 'مسحب دجاج', desc: 'دجاج مسحوب بصوص خاص', price: 17, emoji: '🍗' },
    { name: 'كودو روبيان', desc: 'روبيان مشوي بطريقة كودو', price: 21, emoji: '🦐' },
    { name: 'روبيان كودو زنجر', desc: 'روبيان مع صوص زنجر مميز', price: 20, emoji: '🦐' },
  ],
  combos: [
    { name: 'وجبة زنجر عادي', desc: 'برجر زنجر + بطاطس + مشروب', price: 13, emoji: '🥤' },
    { name: 'وجبة زنجر دبل', desc: 'برجر زنجر مزدوج + بطاطس + مشروب', price: 17, emoji: '🥤' },
    { name: 'وجبة تورتيا مشوي', desc: 'تورتيا مشوية + بطاطس + مشروب', price: 20, emoji: '🌯' },
    { name: 'وجبة تورتيا زنجر', desc: 'تورتيا زنجر + بطاطس + مشروب', price: 21, emoji: '🌯' },
    { name: 'كودو دبل لحم دبل', desc: 'وجبة كاملة بلحم مزدوج', price: 20, emoji: '🥩' },
    { name: 'وجبة دجاج دبل', desc: 'دجاج مشوي مزدوج + بطاطس + مشروب', price: 22, emoji: '🍗' },
    { name: 'وجبة كودو فيان', desc: 'وجبة كودو كاملة مع المشروب', price: 22, emoji: '🥤' },
    { name: 'وجبة كودو بريوان', desc: 'وجبة فاخرة بريوان', price: 24, emoji: '⭐' },
  ],
};

// =====================
//  DOM REFS
// =====================
const tabs     = document.querySelectorAll('.tab');
const grid     = document.getElementById('menuGrid');
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// =====================
//  RENDER MENU
// =====================
function renderMenu(cat) {
  const items = menuData[cat] || [];
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="card-emoji">${item.emoji}</div>
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-price"><span>SR</span>${item.price}</div>
    `;
    grid.appendChild(card);
  });
}

// =====================
//  TAB SWITCHING
// =====================
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});

// Init
renderMenu('burgers');

// =====================
//  NAVBAR SCROLL
// =====================
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// =====================
//  HAMBURGER MENU
// =====================
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// =====================
//  SCROLL REVEAL
// =====================
const revealEls = document.querySelectorAll(
  '.strip-item, .section-header, .contact-inner > *, .info-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
