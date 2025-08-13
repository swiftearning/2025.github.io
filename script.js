// Simple demo state using localStorage. Replace with Firebase/Supabase for real auth & data.

// Your WhatsApp contact (08109898824) — wa.me requires country code:
const WAPP = "https://wa.me/2348109898824";

function $$(sel, ctx=document){ return ctx.querySelector(sel); }

function setActive(link){
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const el = document.querySelector(`.nav-links a[href='${link}']`);
  if(el) el.classList.add('active');
}

function getUser(){
  try { return JSON.parse(localStorage.getItem('se_user')); } catch { return null; }
}
function setUser(u){
  localStorage.setItem('se_user', JSON.stringify(u));
}
function signOut(){
  localStorage.removeItem('se_user');
  location.href='login.html';
}
function currency(n){ return '₦' + (Number(n||0)).toLocaleString(); }

window.addEventListener('DOMContentLoaded', ()=>{
  // Highlight current tab
  setActive(location.pathname.split('/').pop() || 'index.html');

  const u = getUser();
  const nameEl = $$('#username'); if(nameEl && u) nameEl.textContent = u.username;
  const balEl = $$('#balance'); if(balEl && u) balEl.textContent = currency(u.balance);

  // Set WhatsApp links
  const waFloat = document.querySelector(".whatsapp a"); if(waFloat){ waFloat.href = WAPP; }
  const waBtn = document.querySelector("a.btn[href^='https://wa.me']"); if(waBtn){ waBtn.href = WAPP; }
});
