const U = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&q=80&auto=format`;

const menuData = {
  shawarma: [
    { name: 'شاورما دجاج', desc: 'شاورما دجاج مشوي بتتبيلة البيت وصوص ثوم', price: 10, popular: true,
      img: U('1529006557810-274b9b2fc783') },
    { name: 'شاورما لحم', desc: 'شاورما لحم طازج بالخضار والصوص الخاص', price: 12, popular: true,
      img: U('1561626423-a51b45aef0a2') },
    { name: 'شاورما مكس', desc: 'مزيج دجاج ولحم بتتبيلة مميزة', price: 13,
      img: U('1571407970349-bc81e71e9a7e') },
    { name: 'شاورما حارة', desc: 'شاورما دجاج بالصوص الحار الخاص', price: 11,
      img: U('1551183053-bf91798d765e') },
    { name: 'شاورما بالجبن', desc: 'شاورما دجاج مع جبن مذاب وصوص خاص', price: 13,
      img: U('1574071318508-1cdbab80d002') },
  ],
  burgers: [
    { name: 'برجر دجاج', desc: 'برجر دجاج مشوي مقرمش بصوص خاص', price: 11, popular: true,
      img: U('1568901346375-23c9450c58cd') },
    { name: 'برجر لحم', desc: 'برجر لحم طازج مشوي على الفحم', price: 12,
      img: U('1550317138-10000687a72b') },
    { name: 'برجر دبل', desc: 'برجر مزدوج لحم أو دجاج مع جبن', price: 16,
      img: U('1586816001966-08807d059c7d') },
    { name: 'برجر مشوي سنابل', desc: 'برجر خاص بتتبيلة سنابل المميزة', price: 14, popular: true,
      img: U('1594212699903-ec8a3eca50f5') },
  ],
  chicken: [
    { name: 'دجاج مشوي', desc: 'قطعة دجاج مشوية بتتبيلة الأعشاب', price: 14,
      img: U('1598103442097-8b74394b95c3') },
    { name: 'نجت دجاج', desc: 'قطع دجاج مقلية مقرمشة ذهبية', price: 10,
      img: U('1562802378-063ec186a863') },
    { name: 'دجاج حار', desc: 'دجاج مشوي بالتتبيلة الحارة المميزة', price: 15, popular: true,
      img: U('1532550884608-acf50e422b50') },
    { name: 'كودو دجاج', desc: 'وجبة كودو دجاج مقرمشة كاملة', price: 18,
      img: U('1626645738196-c2a7c87a8f58') },
  ],
  sides: [
    { name: 'بطاطس عادي', desc: 'بطاطس مقلية ذهبية مقرمشة', price: 5,
      img: U('1573080496219-bb080dd4f877') },
    { name: 'بطاطس مبهرة', desc: 'بطاطس بتوابل سنابل الخاصة', price: 7, popular: true,
      img: U('1630384060421-cb20d0e0649d') },
    { name: 'حلقات بصل', desc: 'حلقات بصل مقلية مقرمشة ذهبية', price: 8,
      img: U('1541592106381-b31e9677c0e5') },
    { name: 'بطاطس بالجبن', desc: 'بطاطس مع جبن مذاب وصوص', price: 10,
      img: U('1504674900247-0877df9cc836') },
  ],
  combos: [
    { name: 'وجبة شاورما دجاج', desc: 'شاورما دجاج + بطاطس + مشروب', price: 17, popular: true,
      img: U('1529006557810-274b9b2fc783') },
    { name: 'وجبة شاورما لحم', desc: 'شاورما لحم + بطاطس + مشروب', price: 19,
      img: U('1561626423-a51b45aef0a2') },
    { name: 'وجبة برجر دجاج', desc: 'برجر دجاج + بطاطس + مشروب', price: 18,
      img: U('1568901346375-23c9450c58cd') },
    { name: 'وجبة برجر لحم', desc: 'برجر لحم + بطاطس + مشروب', price: 19,
      img: U('1550317138-10000687a72b') },
    { name: 'وجبة العائلة', desc: 'شاورمتين + برجرين + بطاطس كبيرة', price: 45, popular: true,
      img: U('1594212699903-ec8a3eca50f5') },
  ],
};

const tabs      = document.querySelectorAll('.tab');
const grid      = document.getElementById('menuGrid');
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

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
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="card-img-fallback" style="display:none">🌯</div>
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

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});
renderMenu('shawarma');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

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
