function initScratchCard(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    // Fill with a "scratchable" silver/pink gradient
    ctx.fillStyle = '#ffb3c1';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some "scratch here" text
    ctx.fillStyle = 'white';
    ctx.font = '16px Montserrat';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH HERE ❤️', canvas.width/2, canvas.height/2 + 5);

    let isDrawing = false;

    function scratch(e) {
        if (!isDrawing) return;
        
        // Get coordinates for mouse or touch
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('touchstart', () => isDrawing = true);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('touchend', () => isDrawing = false);
}

// Initialize all cards
initScratchCard('scratch1');
initScratchCard('scratch2');
initScratchCard('scratch3');