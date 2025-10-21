// small interactive helpers: theme toggle, smooth scroll, demo contact submit
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const current = localStorage.getItem('theme') || 'dark';
  if (current === 'light') root.classList.add('light');

  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // demo contact form behaviour (no backend)
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sent (demo)';
      setTimeout(()=>{ submitBtn.disabled = false; submitBtn.textContent = 'Send (demo)'; }, 1400);
    });
  }
});
