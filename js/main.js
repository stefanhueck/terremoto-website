// Terremoto website interactions — theme switching aligned with reference site
(function(){
  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  const lightBadges = document.querySelectorAll('.light-badge');
  const darkBadges = document.querySelectorAll('.dark-badge');
  const lightMockup = document.querySelector('.light-mode-mockup');
  const darkMockup = document.querySelector('.dark-mode-mockup');

  function getInitialTheme(){
    const saved = localStorage.getItem('theme');
    if(saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);

    if(theme === 'dark'){
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

    // Swap badges (if present)
    lightBadges.forEach(el => { el.style.display = theme === 'dark' ? 'none' : ''; });
    darkBadges.forEach(el => { el.style.display = theme === 'dark' ? '' : 'none'; });

    // Swap mockups if present
    if(lightMockup && darkMockup){
      lightMockup.style.display = theme === 'dark' ? 'none' : '';
      darkMockup.style.display = theme === 'dark' ? '' : 'none';
    }

    // Update toggle visual (show/hide inline SVGs) and aria-label
    if(themeToggle){
      const sun = themeToggle.querySelector('.sun-icon');
      const moon = themeToggle.querySelector('.moon-icon');
      if(sun) sun.style.display = theme === 'dark' ? '' : 'none';
      if(moon) moon.style.display = theme === 'dark' ? 'none' : '';
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function toggleTheme(){
    const current = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const initial = getInitialTheme();
    applyTheme(initial);

    if(themeToggle) themeToggle.addEventListener('click', toggleTheme);

    // Dynamic year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  });

  // Screenshots displayed as a responsive grid — no carousel logic here
})();
