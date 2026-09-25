// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Theme toggle (persists for the session)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
let theme = 'dark';
themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
});

// Typing effect in hero
const roles = ['Frontend Developer', 'Backend Developer', 'Problem Solver', 'Lifelong Learner'];
const typingEl = document.getElementById('typing');
let roleIndex = 0, charIndex = 0, deleting = false;

function type() {
  const current = roles[roleIndex];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(type, 1400); return; }
  } else {
    typingEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 45 : 90);
}
type();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form (front-end only — wire up a real backend or a service like Formspree to send it)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Thanks! This form is a front-end demo — connect it to a backend or a service like Formspree to actually send messages.';
  form.reset();
});
