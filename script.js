
// Nav scroll shadow
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Hero reveals immediately
document.querySelectorAll('.hero .reveal').forEach(el => {
setTimeout(() => el.classList.add('visible'), 100);
});
