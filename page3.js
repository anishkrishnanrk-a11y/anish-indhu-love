document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');

    // Pause rotation when user interacts
    carousel.addEventListener('touchstart', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('touchend', () => {
        // Resume spinning after a short delay
        setTimeout(() => {
            carousel.style.animationPlayState = 'running';
        }, 1000);
    });

    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
});