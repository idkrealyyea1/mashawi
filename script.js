/* =============================================
   MENU DATA
============================================= */
const MENU = {
  burgers: [
    { id:'b1', name:'برجر زنجر', desc:'برجر دجاج مقرمش بصوص زنجر خاص', price:11, img:'images/burger_zinger.jpg' },
    { id:'b2', name:'مشوي برجر دجاج', desc:'برجر دجاج مشوي على الفحم', price:10, img:'images/mashwi_burger_djaj.jpg' },
    { id:'b3', name:'مشوي برجر لحم', desc:'لحم مشوي طازج بالفحم', price:10, img:'images/mashwi_burger_lahm.jpg' },
    { id:'b4', name:'زنجر دبل', desc:'برجر زنجر مزدوج وجبة كاملة', price:16, img:'images/zanjardil.jpg' },
    { id:'b5', name:'مشوي برجر دجاج دبل', desc:'دجاج مشوي مزدوج بالفحم', price:16, img:'images/mashwi_burger_dajaj_dil.jpg' },
  ],
  grills: [
    { id:'g1', name:'مشوي وجبة دجاج عادي', desc:'وجبة دجاج مشوي بتتبيلة خاصة', price:16, img:'images/mashwi_wajba_djaj_adi.jpg' },
    { id:'g2', name:'مشوي وجبة دجاج أحمر', desc:'وجبة دجاج مشوي حارة', price:16, img:'images/mashwi_wajba_djaj_ahmar.jpg' },
    { id:'g3', name:'مشوي لحم دبل وجبة', desc:'لحم مشوي مزدوج وجبة', price:20, img:'images/mashwi_dajaj_dil_wajba.jpg' },
    { id:'g4', name:'تريل برجر', desc:'برجر لحم دبل مشوي على الفحم', price:20, img:'images/mashwi_lahm_dil.jpg' },
    { id:'g5', name:'وجبة الدبل', desc:'وجبة لحم دبل كاملة', price:13, img:'images/wajba_lahm_dil.jpg' },
  ],
  combos: [
    { id:'c1', name:'وجبة زنجر عادي', desc:'برجر زنجر + بطاطس + مشروب', price:17, img:'images/wajba_zinger_adi.jpg' },
    { id:'c2', name:'وجبة زنجر دبل', desc:'برجر زنجر مزدوج + بطاطس + مشروب', price:22, img:'images/wajba_zinjardil.jpg' },
    { id:'c3', name:'عادي تورتيا زنجر', desc:'تورتيا زنجر + بطاطس + مشروب', price:13, img:'images/tortia_adi.jpg' },
    { id:'c4', name:'مشوي تورتيا', desc:'تورتيا مشوية + بطاطس + مشروب', price:14, img:'images/tortia_mashwi.jpg' },
    { id:'c5', name:'وجبة تورتيا زنجر', desc:'تورتيا زنجر كاملة مع مشروب', price:21, img:'images/wajba_tortia_zinger.jpg' },
    { id:'c6', name:'كودو زنجر', desc:'كودو زنجر + بطاطس + مشروب', price:22, img:'images/kodo_zinger.jpg' },
    { id:'c7', name:'وجبة كودو زنجر', desc:'كودو زنجر وجبة كاملة', price:22, img:'images/wajba_kodo_zinger.jpg' },
  ],
  chicken: [
    { id:'ch1', name:'نجت دجاج', desc:'قطع دجاج مقلية مقرمشة', price:17, img:'images/najt_djaj.jpg' },
    { id:'ch2', name:'مسحب دجاج', desc:'دجاج مسحوب بصوص خاص', price:17, img:'images/mashab_djaj.jpg' },
    { id:'ch3', name:'روبيان بروستد', desc:'روبيان بروستد مقرمش', price:21, img:'images/robian_brostd.jpg' },
    { id:'ch4', name:'كودو وجبة دجاج', desc:'وجبة كودو كاملة بالدجاج', price:22, img:'images/kodo_wajba.jpg' },
    { id:'ch5', name:'كودو توبلاس', desc:'كودو توبلاس بنكهة مميزة', price:24, img:'images/kodo_toplas.jpg' },
  ],
  sides: [
    { id:'s1', name:'بطاطس عادي', desc:'بطاطس مقلية ذهبية مقرمشة', price:5, img:'images/batats_adi.jpg' },
    { id:'s2', name:'بطاطس كرسي', desc:'بطاطس كرسي مقرمشة', price:7, img:'images/batats_karasi.jpg' },
    { id:'s3', name:'بطاطس صن', desc:'بطاطس صن بتتبيلة مميزة', price:8, img:'images/batats_min.jpg' },
    { id:'s4', name:'حلمات بصل', desc:'حلقات بصل مقلية مقرمشة', price:9, img:'images/batats_basal.jpg' },
    { id:'s5', name:'بطاطس لحم', desc:'بطاطس مع قطع لحم مشوي', price:15, img:'images/batats_lahm.jpg' },
    { id:'s6', name:'بطاطس دجاج', desc:'بطاطس مع دجاج مشوي', price:15, img:'images/batats_djaj.jpg' },
  ],
};

const WHATSAPP_NUMBER = '966500000000'; // ← غيّر هذا لرقمك

/* =============================================
   CART STATE
============================================= */
let cart = []; // [{id, name, price, img, qty}]

/* =============================================
   DOM REFS
============================================= */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const menuGrid   = document.getElementById('menuGrid');
const cartBtn    = document.getElementById('cartBtn');
const cartCount  = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay= document.getElementById('cartOverlay');
const cartClose  = document.getElementById('cartClose');
const cartItems  = document.getElementById('cartItems');
const cartEmpty  = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotal  = document.getElementById('cartTotal');
const sendWA     = document.getElementById('sendWhatsapp');
const toast      = document.getElementById('toast');

/* =============================================
   RENDER MENU
============================================= */
function renderMenu(cat) {
  const items = MENU[cat] || [];
  menuGrid.innerHTML = '';
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=card-img-fallback>🍔</div>'" />
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <div class="card-price"><span>SR </span>${item.price}</div>
          <button class="add-btn" data-id="${item.id}" aria-label="أضف ${item.name}">+</button>
        </div>
      </div>`;
    menuGrid.appendChild(card);
  });
}

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});
renderMenu('burgers');

// Delegate add button clicks
menuGrid.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  const item = Object.values(MENU).flat().find(m => m.id === id);
  if (item) addToCart(item);
});

/* =============================================
   CART LOGIC
============================================= */
function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`✓ أُضيف: ${item.name}`);
  // Bounce the cart button
  cartBtn.style.transform = 'scale(1.25)';
  setTimeout(() => cartBtn.style.transform = '', 200);
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);

  // Badge
  cartCount.textContent = count;
  cartCount.classList.toggle('visible', count > 0);

  // Empty / footer
  cartEmpty.style.display = cart.length ? 'none' : 'flex';
  cartFooter.style.display = cart.length ? 'flex' : 'none';
  cartTotal.textContent = `${total} SR`;

  // Render items
  const existing = cartItems.querySelectorAll('.cart-item');
  existing.forEach(el => el.remove());

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22/>'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price * item.qty} SR</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
      </div>`;
    cartItems.appendChild(row);
  });
}

// Qty button delegation
cartItems.addEventListener('click', e => {
  const btn = e.target.closest('.qty-btn');
  if (!btn) return;
  changeQty(btn.dataset.id, parseInt(btn.dataset.delta));
});

/* =============================================
   WHATSAPP SEND
============================================= */
sendWA.addEventListener('click', () => {
  if (!cart.length) return;
  const lines = cart.map(c => `• ${c.name} × ${c.qty} = ${c.price * c.qty} SR`);
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const msg = `🔥 طلب جديد من برجر مشوي\n\n${lines.join('\n')}\n\n💰 الإجمالي: ${total} SR`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

/* =============================================
   DRAWER TOGGLE
============================================= */
function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* =============================================
   TOAST
============================================= */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* =============================================
   NAVBAR SCROLL
============================================= */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* =============================================
   HAMBURGER
============================================= */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* =============================================
   SCROLL REVEAL
============================================= */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
