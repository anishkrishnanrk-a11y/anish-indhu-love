const cards = document.querySelectorAll('.polaroid');

cards.forEach((card) => {
    let startX = 0;
    let distance = 0;
    let isDragging = false;

    const start = (clientX) => {
        isDragging = true;
        startX = clientX;
        card.style.transition = 'none';
        card.style.zIndex = "100"; // Bring current card to very top while dragging
    };

    const move = (clientX) => {
        if (!isDragging) return;
        distance = clientX - startX;
        let rotation = distance / 15;
        card.style.transform = `translateX(${distance}px) rotate(${rotation}deg)`;
    };

    const end = () => {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'transform 0.5s ease-out, opacity 0.5s';

        if (Math.abs(distance) > 100) {
            let moveOut = distance > 0 ? 1000 : -1000;
            card.style.transform = `translateX(${moveOut}px) rotate(${distance / 5}deg)`;
            card.style.opacity = '0';
            setTimeout(() => card.remove(), 500);
        } else {
            card.style.transform = `translateX(0) rotate(0deg)`;
        }
        distance = 0;
    };

    // --- MOBILE ---
    card.addEventListener('touchstart', (e) => start(e.touches[0].clientX));
    card.addEventListener('touchmove', (e) => move(e.touches[0].clientX));
    card.addEventListener('touchend', end);

    // --- DESKTOP ---
    card.addEventListener('mousedown', (e) => {
        start(e.clientX);
        
        const onMouseMove = (e) => move(e.clientX);
        const onMouseUp = () => {
            end();
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
        
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });
});