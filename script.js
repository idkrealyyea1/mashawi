// =====================
//  UNSPLASH IMAGE HELPER
//  Format: https://images.unsplash.com/photo-{ID}?w=400&h=300&fit=crop&q=80
// =====================
const U = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&q=80&auto=format`;

// =====================
//  MENU DATA — real Unsplash images
// =====================
const menuData = {
  burgers: [
    { name: 'برجر زنجر', desc: 'برجر دجاج مقرمش بصوص زنجر خاص', price: 11, popular: true,
      img: U('1568901346375-23c9450c58cd') },   // classic juicy burger
    { name: 'مشوي برجر دجاج', desc: 'برجر دجاج مشوي على الفحم', price: 10,
      img: U('1606755962773-d324e0a13086') },   // chicken burger
    { name: 'مشوي برجر لحم', desc: 'لحم مشوي طازج على الفحم', price: 10,
      img: U('1550317138-10000687a72b') },       // smash burger
    { name: 'زنجر دبل', desc: 'برجر زنجر مزدوج وجبة كاملة', price: 16, popular: true,
      img: U('1586816001966-08807d059c7d') },    // double burger
    { name: 'مشوي برجر دجاج دبل', desc: 'دجاج مشوي مزدوج بالفحم', price: 16,
      img: U('1610440042657-612cd34b2f5a') },   // stacked burger
  ],
  grills: [
    { name: 'مشوي وجبة دجاج عادي', desc: 'وجبة دجاج مشوي بتتبيلة خاصة', price: 16, popular: true,
      img: U('1598103442097-8b74394b95c3') },   // grilled chicken
    { name: 'مشوي وجبة دجاج أحمر', desc: 'وجبة دجاج مشوي بتتبيلة حارة', price: 16,
      img: U('1532550884608-acf50e422b50') },   // spicy chicken grill
    { name: 'مشوي لحم دبل وجبة', desc: 'لحم مشوي مزدوج وجبة', price: 20,
      img: U('1544025162-d76694265947') },       // grilled meat
    { name: 'تريل برجر', desc: 'برجر لحم دبل مشوي على الفحم', price: 20,
      img: U('1558030006-c1e9c0c5e40b') },       // beef burger grill
    { name: 'وجبة الدبل', desc: 'وجبة لحم دبل كاملة', price: 13,
      img: U('1555939594-0f4854da2f26') },       // beef patty grill
  ],
  sides: [
    { name: 'بطاطس عادي', desc: 'بطاطس مقلية ذهبية مقرمشة', price: 5,
      img: U('1573080496219-bb080dd4f877') },   // french fries
    { name: 'بطاطس كرسي', desc: 'بطاطس كرسي مقرمشة', price: 7,
      img: U('1630384060421-cb20d0e0649d') },   // crispy fries
    { name: 'بطاطس صن', desc: 'بطاطس صن بتتبيلة مميزة', price: 8, popular: true,
      img: U('1639024471288-b6e6b36e0f0c') },   // seasoned fries
    { name: 'حلقات بصل', desc: 'حلقات بصل مقلية مقرمشة ذهبية', price: 9,
      img: U('1541592106381-b31e9677c0e5') },   // onion rings
    { name: 'بطاطس لحم', desc: 'بطاطس مع قطع لحم مشوي', price: 15,
      img: U('1504674900247-0877df9cc836') },   // loaded fries with meat
    { name: 'بطاطس دجاج', desc: 'بطاطس مع دجاج مشوي', price: 15,
      img: U('1585325701872-62b07a2f20e8') },   // fries with chicken
  ],
  chicken: [
    { name: 'نجت دجاج', desc: 'قطع دجاج مقلية مقرمشة', price: 17,
      img: U('1562802378-063ec186a863') },       // chicken nuggets
    { name: 'مسحب دجاج', desc: 'دجاج مسحوب بصوص خاص', price: 17, popular: true,
      img: U('1527477396000-e27163b481c2') },   // pulled chicken
    { name: 'روبيان بروستد', desc: 'روبيان مشوي بروستد مقرمش', price: 21,
      img: U('1565680018434-b513d5e5fd47') },   // shrimp
    { name: 'كودو وجبة دجاج', desc: 'وجبة كودو كاملة بالدجاج', price: 22,
      img: U('1598103442097-8b74394b95c3') },   // chicken meal
    { name: 'كودو توبلاس', desc: 'كودو توبلاس بنكهة مميزة', price: 24,
      img: U('1626645738196-c2a7c87a8f58') },   // crispy chicken
  ],
  combos: [
    { name: 'وجبة زنجر عادي', desc: 'برجر زنجر + بطاطس + مشروب', price: 17, popular: true,
      img: U('1594212699903-ec8a3eca50f5') },   // burger combo meal
    { name: 'وجبة زنجر دبل', desc: 'برجر زنجر مزدوج + بطاطس + مشروب', price: 22,
      img: U('1568901346375-23c9450c58cd') },
    { name: 'عادي تورتيا زنجر', desc: 'تورتيا زنجر + بطاطس + مشروب', price: 13,
      img: U('1626700051175-6818013e1d4f') },   // wrap
    { name: 'مشوي تورتيا', desc: 'تورتيا مشوية + بطاطس + مشروب', price: 14,
      img: U('1512058564366-18510be2db19') },   // grilled wrap
    { name: 'وجبة تورتيا زنجر', desc: 'تورتيا زنجر كاملة مع مشروب', price: 21,
      img: U('1611250503390-56bb28f4fef3') },   // meal deal
    { name: 'كودو زنجر', desc: 'كودو زنجر + بطاطس + مشروب', price: 22,
      img: U('1550547660-d9450f859349') },       // combo
    { name: 'وجبة كودو زنجر', desc: 'كودو زنجر وجبة كاملة', price: 22,
      img: U('1551782045-a00d1d5a8011') },       // full meal
  ],
};

// =====================
//  DOM REFS
// =====================
const tabs      = document.querySelectorAll('.tab');
const grid      = document.getElementById('menuGrid');
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// =====================
//  RENDER MENU
// =====================
function renderMenu(cat) {
  const items = menuData[cat] || [];
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="card-img-wrap">
        ${item.popular ? '<div class="card-badge">الأكثر طلباً</div>' : ''}
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="card-img-fallback" style="display:none">🍔</div>
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <div class="card-price">${item.price}<span>ر.س</span></div>
          <button class="card-order-btn" title="اطلب الآن">+</button>
        </div>
      </div>
    `;
    card.querySelector('.card-order-btn').addEventListener('click', () => {
      const msg = encodeURIComponent(`أريد طلب: ${item.name} - ${item.price} ر.س`);
      window.open(`https://wa.me/966500000000?text=${msg}`, '_blank');
    });
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
renderMenu('burgers');

// =====================
//  NAVBAR SCROLL
// =====================
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// =====================
//  HAMBURGER
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
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));
document.querySelectorAll('.strip-item').forEach(el => observer.observe(el));
