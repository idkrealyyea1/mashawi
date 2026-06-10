// =====================
//  MENU DATA — with real extracted images
// =====================
const menuData = {
  burgers: [
    { name: 'برجر زنجر', desc: 'برجر دجاج مقرمش بصوص زنجر خاص', price: 11, img: 'images/burger_zinger.jpg' },
    { name: 'مشوي برجر دجاج', desc: 'برجر دجاج مشوي على الفحم', price: 10, img: 'images/mashwi_burger_djaj.jpg' },
    { name: 'مشوي برجر لحم', desc: 'لحم مشوي طازج على الفحم', price: 10, img: 'images/mashwi_burger_lahm.jpg' },
    { name: 'زنجر دبل', desc: 'برجر زنجر مزدوج وجبة كاملة', price: 16, img: 'images/zanjardil.jpg' },
    { name: 'مشوي برجر دجاج دبل', desc: 'دجاج مشوي مزدوج بالفحم', price: 16, img: 'images/mashwi_burger_dajaj_dil.jpg' },
  ],
  grills: [
    { name: 'مشوي وجبة دجاج عادي', desc: 'وجبة دجاج مشوي بتتبيلة خاصة', price: 16, img: 'images/mashwi_wajba_djaj_adi.jpg' },
    { name: 'مشوي وجبة دجاج أحمر', desc: 'وجبة دجاج مشوي بتتبيلة حارة', price: 16, img: 'images/mashwi_wajba_djaj_ahmar.jpg' },
    { name: 'مشوي لحم دبل وجبة', desc: 'لحم مشوي مزدوج وجبة', price: 20, img: 'images/mashwi_dajaj_dil_wajba.jpg' },
    { name: 'تريل برجر', desc: 'برجر لحم دبل مشوي على الفحم', price: 20, img: 'images/mashwi_lahm_dil.jpg' },
    { name: 'وجبة الدبل', desc: 'وجبة لحم دبل كاملة', price: 13, img: 'images/wajba_lahm_dil.jpg' },
  ],
  sides: [
    { name: 'بطاطس عادي', desc: 'بطاطس مقلية ذهبية مقرمشة', price: 5, img: 'images/batats_adi.jpg' },
    { name: 'بطاطس كرسي', desc: 'بطاطس كرسي مقرمشة', price: 7, img: 'images/batats_karasi.jpg' },
    { name: 'بطاطس صن', desc: 'بطاطس صن بتتبيلة مميزة', price: 8, img: 'images/batats_min.jpg' },
    { name: 'حلمات بصل', desc: 'حلقات بصل مقلية مقرمشة', price: 9, img: 'images/batats_basal.jpg' },
    { name: 'بطاطس لحم', desc: 'بطاطس مع قطع لحم مشوي', price: 15, img: 'images/batats_lahm.jpg' },
    { name: 'بطاطس دجاج', desc: 'بطاطس مع دجاج مشوي', price: 15, img: 'images/batats_djaj.jpg' },
  ],
  chicken: [
    { name: 'نجت دجاج', desc: 'قطع دجاج مقلية مقرمشة', price: 17, img: 'images/najt_djaj.jpg' },
    { name: 'مسحب دجاج', desc: 'دجاج مسحوب بصوص خاص', price: 17, img: 'images/mashab_djaj.jpg' },
    { name: 'روبيان بروستد', desc: 'روبيان مشوي بروستد مقرمش', price: 21, img: 'images/robian_brostd.jpg' },
    { name: 'كودو وجبة دجاج', desc: 'وجبة كودو كاملة بالدجاج', price: 22, img: 'images/kodo_wajba.jpg' },
    { name: 'كودو توبلاس', desc: 'كودو توبلاس بنكهة مميزة', price: 24, img: 'images/kodo_toplas.jpg' },
  ],
  combos: [
    { name: 'وجبة زنجر عادي', desc: 'برجر زنجر + بطاطس + مشروب', price: 17, img: 'images/wajba_zinger_adi.jpg' },
    { name: 'وجبة زنجر دبل', desc: 'برجر زنجر مزدوج + بطاطس + مشروب', price: 22, img: 'images/wajba_zinjardil.jpg' },
    { name: 'عادي تورتيا زنجر', desc: 'تورتيا زنجر + بطاطس + مشروب', price: 13, img: 'images/tortia_adi.jpg' },
    { name: 'مشوي تورتيا', desc: 'تورتيا مشوية + بطاطس + مشروب', price: 14, img: 'images/tortia_mashwi.jpg' },
    { name: 'وجبة تورتيا زنجر', desc: 'تورتيا زنجر كاملة مع مشروب', price: 21, img: 'images/wajba_tortia_zinger.jpg' },
    { name: 'كودو زنجر', desc: 'كودو زنجر + بطاطس + مشروب', price: 22, img: 'images/kodo_zinger.jpg' },
    { name: 'وجبة كودو زنجر', desc: 'كودو زنجر وجبة كاملة', price: 22, img: 'images/wajba_kodo_zinger.jpg' },
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
        <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=card-img-fallback>🍔</span>'" />
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-price"><span>SR</span>${item.price}</div>
      </div>
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
renderMenu('burgers');

// =====================
//  NAVBAR SCROLL
// =====================
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

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
document.querySelectorAll('.strip-item, .section-header, .contact-inner > *, .info-card')
  .forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e], obs) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }, { threshold: 0.15 }).observe(el);
  });
