export function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const nav = btn?.closest('nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('#mobile-menu a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}
