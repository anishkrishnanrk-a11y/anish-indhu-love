const voice = document.getElementById("myVoice");
const playBtn = document.getElementById("playBtn");
const icon = document.getElementById("icon");
const playHint = document.getElementById("play-hint");
const proposalArea = document.getElementById("proposal-area");

// 1. Voice Note Controller
function toggleAudio() {
    if (voice.paused) {
        voice.play();
        icon.innerText = "⏸️";
        playHint.innerText = "Playing...";
    } else {
        voice.pause();
        icon.innerText = "▶️";
        playHint.innerText = "Paused";
    }
}

// 2. Reveal Proposal when voice ends
voice.onended = () => {
    proposalArea.classList.remove("hidden");
    proposalArea.style.opacity = "0";
    proposalArea.style.transition = "opacity 1.5s ease";
    setTimeout(() => { proposalArea.style.opacity = "1"; }, 100);
};

// 3. The "No" button escape
function moveNo() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// 4. Celebration Logic
function celebrate() {
    // Stop the voice note if it's still playing
    voice.pause();
    
    // Clear the box for the final message
    document.querySelector('.glass-box').innerHTML = `
        <h1 class="romantic-title">I Love You! ❤️</h1>
        <p class="subtitle">Forever & Always, Indhu.</p>
        <div class="final-heart" style="font-size: 80px; animation: heartBeat 1.2s infinite;">❤️</div>
    `;

    // Start Heart Explosion
    setInterval(createHeart, 100);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.transition = "transform 3s linear, opacity 3s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => heart.remove(), 4000);
}


