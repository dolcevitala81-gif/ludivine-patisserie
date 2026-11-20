/* ===== Illustrations SVG ===== */
const pic = p => p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : p.svg();
const art = {
  macaron:(c,f)=>`<svg viewBox="0 0 120 100"><ellipse cx="60" cy="70" rx="46" ry="16" fill="${c}" opacity=".85"/><path d="M14 66c0-14 20-24 46-24s46 10 46 24" fill="${c}"/><rect x="16" y="54" width="88" height="12" rx="6" fill="${f}"/><path d="M16 52c0-16 20-28 44-28s44 12 44 28c0 4-20 6-44 6s-44-2-44-6z" fill="${c}"/><ellipse cx="44" cy="36" rx="14" ry="5" fill="#fff" opacity=".25"/></svg>`,
  cookie:(c,d)=>`<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="48" fill="${c}"/><circle cx="60" cy="60" r="48" fill="none" stroke="#000" stroke-opacity=".06" stroke-width="6"/>${[[40,40,7],[72,36,6],[82,64,8],[50,74,7],[66,84,5],[34,62,5],[60,56,4]].map(([x,y,r],i)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${Array.isArray(d)?d[i%d.length]:d}"/>`).join('')}</svg>`,
  brownie:(c,t)=>`<svg viewBox="0 0 120 110"><path d="M18 40l42-18 42 18v40l-42 18-42-18z" fill="${c}"/><path d="M18 40l42 18 42-18-42-18z" fill="${t}"/><path d="M60 58v40" stroke="#000" stroke-opacity=".15" stroke-width="2"/><path d="M28 38l10 4M52 30l12 3M74 36l10 5M44 46l8 2" stroke="#fff" stroke-opacity=".2" stroke-width="3" stroke-linecap="round"/></svg>`,
  brookie:()=>`<svg viewBox="0 0 120 110"><path d="M18 40l42-18 42 18v40l-42 18-42-18z" fill="#4A2A1A"/><path d="M18 60l42 18 42-18v20l-42 18-42-18z" fill="#D9A866"/><path d="M18 40l42 18 42-18-42-18z" fill="#6B3E26"/><circle cx="40" cy="80" r="3" fill="#3B2418"/><circle cx="70" cy="88" r="3" fill="#3B2418"/><circle cx="88" cy="76" r="3" fill="#3B2418"/></svg>`,
  financier:()=>`<svg viewBox="0 0 120 90"><path d="M14 40h92l-8 30H22z" fill="#C98B3E"/><path d="M14 40c0-8 6-12 14-12h64c8 0 14 4 14 12z" fill="#E0A955"/><path d="M30 34h60" stroke="#fff" stroke-opacity=".35" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="33" r="3" fill="#F2D7A8"/><circle cx="66" cy="32" r="3" fill="#F2D7A8"/></svg>`,
  cinnamon:()=>`<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="48" fill="#D49A5A"/><path d="M60 60m-6 0a6 6 0 1 1 12 0a12 12 0 1 1-24 0a18 18 0 1 1 36 0a24 24 0 1 1-48 0a30 30 0 1 1 60 0a36 36 0 1 1-72 0" fill="none" stroke="#8A5228" stroke-width="5" stroke-linecap="round"/><path d="M30 44c10-8 22-4 30 2s22 8 32-2M32 76c12 6 20-2 30 2s18 8 28-2" stroke="#FFF6EA" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/></svg>`,
  kouign:()=>`<svg viewBox="0 0 120 120">${[0,60,120,180,240,300].map(a=>`<ellipse cx="60" cy="34" rx="18" ry="26" fill="#C6803A" transform="rotate(${a} 60 60)"/>`).join('')}<circle cx="60" cy="60" r="26" fill="#E4A85A"/><circle cx="60" cy="60" r="14" fill="#B86C2C"/><path d="M48 50c6-4 14-4 20 0" stroke="#FFE2B0" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  cake:(c,top)=>`<svg viewBox="0 0 130 100"><path d="M14 46h102v34a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8z" fill="${c}"/><path d="M14 46c0-14 22-22 51-22s51 8 51 22z" fill="${top}"/>${c==='marbre'?'':''}<path d="M28 60c10 6 20-4 30 2s20 6 30-2 16 2 22 0" stroke="#fff" stroke-opacity=".25" stroke-width="4" fill="none"/></svg>`,
  marbre:()=>`<svg viewBox="0 0 130 100"><path d="M14 46h102v34a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8z" fill="#E7C28A"/><path d="M14 62c14-8 22 8 36 0s22-10 34 0 22 4 32-2v20a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8z" fill="#5A3420"/><path d="M14 46c0-14 22-22 51-22s51 8 51 22z" fill="#B97A3C"/></svg>`
};

/* ===== Produits (prix à adapter) ===== */
const products = [
  {id:'mac-choco', img:'img/macaron-chocolat.jpg', cat:'Macarons', name:'Macaron chocolat', desc:'Coque fondante et ganache au chocolat noir.', price:2, unit:'pièce', allerg:'Amande, œuf, lait', bg:'#F1E2D4', svg:()=>art.macaron('#6B3E26','#3B2418')},
  {id:'mac-framb', cat:'Macarons', name:'Macaron framboise', desc:'Une ganache à la framboise, fruitée et acidulée.', price:2, unit:'pièce', allerg:'Amande, œuf, lait', bg:'#FBE3EA', svg:()=>art.macaron('#E46C8F','#B22F57')},
  {id:'mac-cacah', cat:'Macarons', name:'Macaron cacahuète', desc:'Coque dorée, cœur crème de cacahuète.', price:2, unit:'pièce', allerg:'Amande, arachide, œuf, lait', bg:'#F6EAD4', svg:()=>art.macaron('#D9A866','#8A5A2B')},
  {id:'mac-box', cat:'Macarons', name:'Coffret 6 macarons', desc:'Panachage des 3 parfums. Parfait pour offrir.', price:12, unit:'coffret', allerg:'Amande, arachide, œuf, lait', bg:'#EFE3F0', svg:()=>art.macaron('#E46C8F','#3B2418')},

  {id:'ck-classic', cat:'Cookies', name:'Cookie classic', desc:'Moelleux à cœur, généreux en pépites de chocolat.', price:3, unit:'pièce', allerg:'Gluten, œuf, lait', bg:'#F6EBDC', svg:()=>art.cookie('#D9A866','#3B2418')},
  {id:'ck-mm', cat:'Cookies', name:'Cookie M&M’s', desc:'Le classique avec des bonbons chocolatés colorés.', price:3.5, unit:'pièce', allerg:'Gluten, œuf, lait, arachide (traces)', bg:'#EAF2F8', svg:()=>art.cookie('#DDB173',['#E23C3C','#2F7BD8','#F3C623','#3BAA5C','#F08A24'])},
  {id:'ck-oreo', cat:'Cookies', name:'Cookie Oreo', desc:'Pâte au chocolat blanc et éclats de biscuit Oreo.', price:3.5, unit:'pièce', allerg:'Gluten, œuf, lait, soja', bg:'#ECECEC', svg:()=>art.cookie('#E9D2B0',['#1F1A17','#2B2522'])},
  {id:'ck-spec', cat:'Cookies', name:'Cookie spéculoos', desc:'Épicé et caramélisé, avec un cœur de pâte de spéculoos.', price:3.5, unit:'pièce', allerg:'Gluten, œuf, lait, soja', bg:'#F7E6D2', svg:()=>art.cookie('#C98B4E','#8A5228')},

  {id:'brookie', img:'img/brookies.jpg', cat:'Gâteaux', name:'Brookie', desc:'Moitié brownie, moitié cookie : le meilleur des deux.', price:3, unit:'part', allerg:'Gluten, œuf, lait', bg:'#EFE1D6', svg:art.brookie},
  {id:'brownie', cat:'Gâteaux', name:'Brownie', desc:'Intense en chocolat, croûte fine et cœur fondant.', price:2.5, unit:'part', allerg:'Gluten, œuf, lait', bg:'#EADBD0', svg:()=>art.brownie('#3B2418','#5A3420')},
  {id:'financier', cat:'Gâteaux', name:'Financier', desc:'Petit gâteau doré au beurre noisette et à l’amande.', price:1.5, unit:'pièce', allerg:'Amande, gluten, œuf, lait', bg:'#F7EBD5', svg:art.financier},
  {id:'cake-citron', cat:'Gâteaux', name:'Cake citron', desc:'Moelleux, parfumé au zeste et glacé au citron.', price:12, unit:'cake entier', allerg:'Gluten, œuf, lait', bg:'#FBF3C9', svg:()=>art.cake('#F2D27A','#FFF3B8')},
  {id:'cake-marbre', cat:'Gâteaux', name:'Cake marbré', desc:'Le goûter d’enfance : vanille et chocolat.', price:12, unit:'cake entier', allerg:'Gluten, œuf, lait', bg:'#EFE1D3', svg:art.marbre},

  {id:'cinnamon', img:'img/cinnamon-roll.jpg', cat:'Viennoiseries', name:'Cinnamon roll', desc:'Brioche roulée à la cannelle, glaçage crémeux.', price:3, unit:'pièce', allerg:'Gluten, œuf, lait', bg:'#F6E4D0', svg:art.cinnamon},
  {id:'kouign', img:'img/kouign-amann.jpg', cat:'Viennoiseries', name:'Brioche façon kouign-amann', desc:'Feuilletée, beurrée et caramélisée.', price:3, unit:'pièce', allerg:'Gluten, œuf, lait', bg:'#F4E3C8', svg:art.kouign},
];

/* ===== Etat ===== */
const cart = {};
let filter = 'Tout';
let step = 'cart';
const $ = s => document.querySelector(s);
const fmt = n => n.toFixed(2).replace('.', ',') + ' €';
const CONTACT_EMAIL = 'dolcevita.la81@gmail.com';
const CONTACT_PHONE = '+33640599760';
/* Lien de paiement SumUp : colle ici ton lien (ex. 'https://pay.sumup.com/b2c/XXXXXXX').
   Laisse vide '' pour envoyer toi-même un lien au bon montant après chaque commande. */
const SUMUP_LINK = '';
/* Frais de livraison à la charge du client (à adapter) */
const DELIVERY_FEE = 5;
const isDelivery = () => document.querySelector('input[name=mode]:checked')?.value === 'Livraison locale';
const grandTotal = () => total() + (isDelivery() ? DELIVERY_FEE : 0);

/* ===== Hero & About art ===== */
$('#aboutArt').innerHTML = '<img src="img/cinnamon-roll.jpg" alt="Cinnamon rolls faits maison" loading="lazy">';
$('#yr').textContent = new Date().getFullYear();

/* ===== Filtres & grille ===== */
function renderFilters(){
  const cats = ['Tout', ...new Set(products.map(p=>p.cat))];
  $('#filters').innerHTML = cats.map(c=>`<button class="filter ${c===filter?'active':''}" data-cat="${c}">${c}</button>`).join('');
}
function renderGrid(){
  const list = products.filter(p=>filter==='Tout'||p.cat===filter);
  $('#grid').innerHTML = list.map(p=>`
    <article class="card">
      <div class="card-art" style="background:${p.bg}"><span class="card-cat">${p.cat}</span>${pic(p)}</div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <p class="allerg">Allergènes : ${p.allerg}</p>
        <div class="card-foot">
          <span class="price">${fmt(p.price)} <small>/ ${p.unit}</small></span>
          <button class="add" data-id="${p.id}">Ajouter</button>
        </div>
      </div>
    </article>`).join('');
}
$('#filters').addEventListener('click', e=>{
  const b = e.target.closest('.filter'); if(!b) return;
  filter = b.dataset.cat; renderFilters(); renderGrid();
});
$('#grid').addEventListener('click', e=>{
  const b = e.target.closest('.add'); if(!b) return;
  add(b.dataset.id, 1);
  b.textContent = '✓ Ajouté'; b.classList.add('done');
  setTimeout(()=>{ b.textContent='Ajouter'; b.classList.remove('done'); }, 1100);
});

/* ===== Panier ===== */
const count = () => Object.values(cart).reduce((a,b)=>a+b,0);
const total = () => Object.entries(cart).reduce((s,[id,q])=>s+products.find(p=>p.id===id).price*q,0);

function add(id, n){
  cart[id] = (cart[id]||0) + n;
  if(cart[id] <= 0) delete cart[id];
  updateBadges();
  if(n>0) toast(products.find(p=>p.id===id).name + ' ajouté au panier');
  if($('#drawer').classList.contains('open') && step==='cart') renderDrawer();
}
function updateBadges(){
  const c = count();
  const el = $('#cartCount'); el.textContent = c;
  el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
  $('#mCount').textContent = c; $('#mTotal').textContent = fmt(total());
  $('#mobileCart').classList.toggle('show', c>0);
}

function openDrawer(){ step='cart'; renderDrawer(); $('#drawer').classList.add('open'); $('#overlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#overlay').classList.remove('open'); document.body.style.overflow=''; }
$('#openCart').onclick = openDrawer; $('#mobileCart').onclick = openDrawer;
$('#closeCart').onclick = closeDrawer; $('#overlay').onclick = closeDrawer;
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeDrawer(); });

function minDate(){
  const d = new Date(); d.setDate(d.getDate()+2);
  return d.toISOString().split('T')[0];
}

function renderDrawer(){
  const body = $('#dBody'), foot = $('#dFoot');
  if(step==='cart'){
    $('#dTitle').textContent = 'Mon panier';
    const ids = Object.keys(cart);
    if(!ids.length){
      body.innerHTML = `<div class="empty">${art.macaron('#E9C9D3','#D9A3B3')}<p>Votre panier est vide.<br>Laissez-vous tenter !</p></div>`;
      foot.innerHTML = `<button class="btn btn-primary btn-full" id="goMenu">Voir la carte</button>`;
      $('#goMenu').onclick = ()=>{ closeDrawer(); location.hash='carte'; };
      return;
    }
    body.innerHTML = ids.map(id=>{
      const p = products.find(x=>x.id===id);
      return `<div class="line">
        <div class="line-art" style="background:${p.bg}">${pic(p)}</div>
        <div><h4>${p.name}</h4><div class="lp">${fmt(p.price)} / ${p.unit}</div></div>
        <div class="qty"><button data-id="${id}" data-n="-1" aria-label="Retirer">−</button><span>${cart[id]}</span><button data-id="${id}" data-n="1" aria-label="Ajouter">+</button></div>
      </div>`;
    }).join('');
    body.querySelectorAll('.qty button').forEach(b=>b.onclick=()=>add(b.dataset.id, +b.dataset.n));
    foot.innerHTML = `<div class="total"><span>Sous-total</span><span>${fmt(total())}</span></div>
      <p class="hint" style="margin:-.6rem 0 .9rem">Livraison locale : +${fmt(DELIVERY_FEE)} (retrait au stand gratuit)</p>
      <button class="btn btn-primary btn-full" id="toForm">Passer commande →</button>`;
    $('#toForm').onclick = ()=>{ step='form'; renderDrawer(); };
  }
  else if(step==='form'){
    $('#dTitle').textContent = 'Mes informations';
    body.innerHTML = `
      <button class="back" id="back">← Retour au panier</button>
      <form id="orderForm" novalidate>
        <div class="field"><label for="nom">Nom et prénom *</label><input id="nom" required autocomplete="name"></div>
        <div class="row2">
          <div class="field"><label for="tel">Téléphone *</label><input id="tel" type="tel" required autocomplete="tel"></div>
          <div class="field"><label for="mail">E-mail</label><input id="mail" type="email" autocomplete="email"></div>
        </div>
        <div class="field"><label>Mode de retrait *</label>
          <div class="radio-group">
            <label><input type="radio" name="mode" value="Retrait sur le stand" checked><span>Sur le stand</span></label>
            <label><input type="radio" name="mode" value="Livraison locale"><span>Livraison locale (+${fmt(DELIVERY_FEE)})</span></label>
          </div>
        </div>
        <div class="field" id="adrField" style="display:none"><label for="adr">Adresse de livraison *</label><input id="adr" autocomplete="street-address"></div>
        <div class="row2">
          <div class="field"><label for="date">Date souhaitée *</label><input id="date" type="date" min="${minDate()}" required></div>
          <div class="field"><label for="heure">Créneau</label>
            <select id="heure"><option>Matin</option><option>Midi</option><option>Après-midi</option></select></div>
        </div>
        <div class="field"><label>Paiement *</label>
          <div class="radio-group">
            <label><input type="radio" name="pay" value="En ligne (SumUp)" checked><span>En ligne · SumUp</span></label>
            <label><input type="radio" name="pay" value="Sur place"><span>Sur place</span></label>
          </div>
        </div>
        <div class="field"><label for="msg">Message (allergies, occasion…)</label><textarea id="msg" rows="3"></textarea></div>
        <p class="err" id="err">Merci de remplir les champs obligatoires (*).</p>
      </form>`;
    $('#back').onclick = ()=>{ step='cart'; renderDrawer(); };
    body.querySelectorAll('input[name=mode]').forEach(r=>r.onchange=()=>{
      $('#adrField').style.display = isDelivery() ? 'block' : 'none';
      $('#fDel').style.display = isDelivery() ? 'flex' : 'none';
      $('#fTot').textContent = fmt(grandTotal());
    });
    foot.innerHTML = `<div class="total" style="font-size:.95rem;font-weight:400;margin-bottom:.3rem"><span>Sous-total</span><span>${fmt(total())}</span></div>
      <div class="total" id="fDel" style="display:none;font-size:.95rem;font-weight:400;margin-bottom:.3rem"><span>Livraison</span><span>${fmt(DELIVERY_FEE)}</span></div>
      <div class="total"><span>Total</span><span id="fTot">${fmt(grandTotal())}</span></div>
      <button class="btn btn-primary btn-full" id="validate">Valider ma commande</button>`;
    $('#validate').onclick = submitOrder;
    $('#orderForm').onsubmit = e=>{ e.preventDefault(); submitOrder(); };
  }
}

function submitOrder(){
  const v = id => ($('#'+id)?.value||'').trim();
  const mode = document.querySelector('input[name=mode]:checked').value;
  const needAdr = mode==='Livraison locale';
  const pay = document.querySelector('input[name=pay]:checked').value;
  if(!v('nom') || !v('tel') || !v('date') || (needAdr && !v('adr'))){
    $('#err').style.display='block'; return;
  }
  const d = new Date(v('date')+'T12:00:00').toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});
  const lines = Object.entries(cart).map(([id,q])=>{
    const p = products.find(x=>x.id===id);
    return `• ${q} × ${p.name} — ${fmt(p.price*q)}`;
  }).join('\n');
  const recap =
`NOUVELLE COMMANDE
${lines}
${needAdr?'• Livraison — '+fmt(DELIVERY_FEE)+'\n':''}TOTAL : ${fmt(grandTotal())}
Paiement : ${pay}

Client : ${v('nom')}
Tél : ${v('tel')}${v('mail')?'\nE-mail : '+v('mail'):''}
${mode} — ${d} (${v('heure')})${needAdr?'\nAdresse : '+v('adr'):''}${v('msg')?'\nMessage : '+v('msg'):''}`;
  showConfirm(recap, pay);
}

function showConfirm(recap, pay){
  const amount = fmt(grandTotal());
  step='done';
  $('#dTitle').textContent = 'Presque fini !';
  const subject = encodeURIComponent('Commande Ludivine Pâtisserie');
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(recap)}`;
  const smsHref = `sms:${CONTACT_PHONE}?&body=${encodeURIComponent(recap)}`;
  $('#dBody').innerHTML = `
    <div class="ok-ico">✓</div>
    <p style="text-align:center">Votre récapitulatif est prêt. <strong>Envoyez-le</strong> pour que votre commande soit prise en compte : je vous confirme la disponibilité au plus vite.</p>
    <div class="recap" id="recap">${recap.replace(/</g,'&lt;')}</div>
    ${pay==='En ligne (SumUp)' ? (SUMUP_LINK
      ? `<div class="paybox"><p><strong>Paiement : ${amount}</strong><br>1. Envoyez la commande · 2. Payez en ligne de façon sécurisée.</p><a class="btn btn-sumup" href="${SUMUP_LINK}" target="_blank" rel="noopener">Payer ${amount} avec SumUp</a></div>`
      : `<div class="paybox"><p>💳 Après confirmation de la disponibilité, vous recevrez un <strong>lien de paiement SumUp sécurisé</strong> de ${amount} (carte, Apple Pay, Google Pay).</p></div>`) : ''}
    <div class="send-grid">
      <a class="btn btn-primary" href="${mailHref}">Envoyer par e-mail</a>
      <a class="btn btn-ghost" href="${smsHref}">Envoyer par SMS</a>
      <button class="btn btn-ghost" id="copy">Copier le récapitulatif</button>
    </div>
    <p class="hint">Si le bouton ne s'ouvre pas : copiez le récapitulatif et envoyez-le à ${CONTACT_EMAIL} ou au 06 40 59 97 60.</p>`;
  $('#copy').onclick = async ()=>{
    try{ await navigator.clipboard.writeText(recap); toast('Récapitulatif copié'); }
    catch(e){ toast('Sélectionnez le texte pour le copier'); }
  };
  $('#dFoot').innerHTML = `<button class="btn btn-ghost btn-full" id="newOrder">Nouvelle commande</button>`;
  $('#newOrder').onclick = ()=>{ Object.keys(cart).forEach(k=>delete cart[k]); updateBadges(); step='cart'; renderDrawer(); };
}

/* ===== Toast ===== */
let tt;
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(tt); tt = setTimeout(()=>t.classList.remove('show'), 1800);
}

renderFilters(); renderGrid(); updateBadges();
$('#mobileCart').classList.remove('show');
