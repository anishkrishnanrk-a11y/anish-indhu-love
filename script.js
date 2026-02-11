// script.js - ONLY FOR INDEX.HTML

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const types = ['❤️', '💖', '✨', '🌸', '💕'];
    heart.innerHTML = types[Math.floor(Math.random() * types.length)];
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";
    const size = Math.random() * 30 + 10;
    heart.style.fontSize = size + "px";
    heart.style.opacity = size > 30 ? "0.3" : "0.7";
    if (size > 30) heart.style.filter = "blur(1px)";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}

function checkPassword() {
    const passwordInput = document.getElementById('passwordField').value;
    const audio = document.getElementById('myAudio');

    if (passwordInput === "Anish>Indhu") {
        if(audio) audio.play(); 
        // These two lines are the "Start" commands
        localStorage.setItem("musicPlaying", "true");
        localStorage.setItem("musicTime", "0"); 

        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 2s ease"; 

        setTimeout(() => { 
            window.location.href = "page2.html"; 
        }, 2000); 
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.classList.remove('hidden');
        document.getElementById('passwordField').value = "";
    }
}

// Sparkle Effect
document.addEventListener('pointermove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.fontSize = '10px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    document.body.appendChild(sparkle);
    sparkle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${(Math.random()-0.5)*50}px, 50px) scale(0)`, opacity: 0 }
    ], { duration: 1000 });
    setTimeout(() => sparkle.remove(), 1000);
});

setInterval(createHeart, 3000);