const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});