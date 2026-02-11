const sky = document.getElementById('sky');
const universe = document.getElementById('universe');
const nextBtn = document.getElementById('next-btn');

const dreams = [
    "Travel the world ✈️", "Midnight walks 🌙", 
    "Cooking together 🍳", "Endless laughs 😂", 
    "Building a home 🏠", "Always us ❤️", 
    "Morning coffees ☕", "Growing old together 👵👴"
];

let clickedCount = 0;

// Colors to brighten the sky as she clicks
const skyColors = [
    "radial-gradient(circle at bottom, #1B2735 0%, #090A0F 100%)",
    "radial-gradient(circle at bottom, #2c3e50 0%, #000000 100%)",
    "radial-gradient(circle at bottom, #4b1248 0%, #000000 100%)",
    "radial-gradient(circle at bottom, #722f37 0%, #000000 100%)",
    "radial-gradient(circle at bottom, #c22e4e 0%, #000000 100%)"
];

function createLantern(text) {
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    lantern.innerHTML = text;
    
    // Set random horizontal position
    lantern.style.left = Math.random() * (window.innerWidth - 80) + 'px';
    
    // Random duration for organic movement
    const duration = 12 + Math.random() * 8;
    lantern.style.animationDuration = duration + 's';

    lantern.onclick = function() {
        clickedCount++;
        
        // Change Sky Color based on progress
        const colorIndex = Math.min(Math.floor(clickedCount / 2), skyColors.length - 1);
        universe.style.background = skyColors[colorIndex];

        // Replace lantern with a permanent star
        const rect = lantern.getBoundingClientRect();
        createStar(rect.left + 35, rect.top + 45);

        lantern.style.transition = "0.5s";
        lantern.style.transform = "scale(0) translateY(-100px)";
        lantern.style.opacity = "0";
        
        setTimeout(() => lantern.remove(), 500);

        if (clickedCount === dreams.length) {
            nextBtn.style.display = "block";
        }
    };

    sky.appendChild(lantern);
}

function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    // Randomize twinkle delay
    star.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(star);
}

// Initial Spawn
dreams.forEach((dream, i) => {
    setTimeout(() => createLantern(dream), i * 2500);
});