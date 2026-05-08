const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-site-nav]');
const header = document.querySelector('.site-header');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.setAttribute('data-open', String(open));
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    setOpen(!open);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!header || header.contains(event.target)) {
      return;
    }
    setOpen(false);
  });

  for (const link of nav.querySelectorAll('a')) {
    link.addEventListener('click', () => {
      setOpen(false);
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      setOpen(false);
    }
  });
}

for (const yearNode of document.querySelectorAll('[data-current-year]')) {
  yearNode.textContent = new Date().getFullYear();
}
