const audio = document.getElementById('myVoice');
const playBtn = document.getElementById('playBtn');
const icon = document.getElementById('icon');
const proposalArea = document.getElementById('proposal-area');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        icon.innerText = "⏸️";
        document.getElementById('play-hint').innerText = "Playing...";
    } else {
        audio.pause();
        icon.innerText = "▶️";
    }
}

// Show proposal after audio ends or after 10 seconds
audio.onended = () => {
    proposalArea.classList.remove('hidden');
    proposalArea.style.animation = "fadeInUp 1s ease forwards";
};

// If she tries to click NO, the button moves away
function moveNo() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    // Hide the No button and the text
    document.querySelector('.glass-box').innerHTML = `
        <h1 class="romantic-title">I Love You!</h1>
        <p class="subtitle">Forever & Always, Indhu.</p>
        <div class="final-heart">💖</div>
    `;
    
    // Trigger final "Impressive" Heart Explosion (Simulation)
    setInterval(createHeart, 50); 
}