// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Close menu on link click (mobile)
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Smooth reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .hero-card, .skill-card, .edu-card, .timeline-item')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

// Resume download feedback
document.querySelectorAll('a[download]').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.innerHTML;
    this.innerHTML = '✔ Downloading...';
    setTimeout(() => { this.innerHTML = original; }, 2000);
  });
});