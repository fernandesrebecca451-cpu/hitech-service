const WHATSAPP_NUMBER = '918652032858';

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.getElementById('appliance');
    if (select) select.value = link.dataset.service;
  });
});

const form = document.getElementById('enquiryForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const appliance = document.getElementById('appliance').value;
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const area = document.getElementById('area').value.trim();
  const msg = `Hello Hitech Service, I would like to enquire about ${appliance}.\nName: ${name}\nMobile: ${mobile}\nArea: ${area}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
