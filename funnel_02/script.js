/**
 * script.js - Funnel 02 Interaction Logic
 * Handles reveal-on-scroll animations and interactive elements.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal on Scroll Logic
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset the trigger point
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Smooth Scroll for CTA buttons (if not handled by CSS)
    // Most buttons already have inline onclick or CSS scroll-behavior, 
    // but this ensures all internal links work smoothly.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Trade Widget - Fake dynamic update for more "premium" feel (Optional)
    // Simply to show we can add logic here if needed.
});
