document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Parallax Hero Background (Smooth JS handling instead of jumpy background-attachment)
    const heroBg = document.querySelector('.parallax-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // Move background 40% of the speed of scroll
            heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
        });
    }

    // 3. Reveal on Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-el');
                observer.unobserve(entry.target); // Optional: only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-el');
    hiddenElements.forEach(el => observer.observe(el));
});
