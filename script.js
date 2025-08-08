// Smooth fade-in animations on scroll
const elements = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
