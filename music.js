// music.js - THE TIME KEEPER

const audio = document.getElementById("myAudio");

// Function to handle the "jump" to saved time
const syncMusic = () => {
    const isPlaying = localStorage.getItem("musicPlaying");
    const savedTime = localStorage.getItem("musicTime");

    if (isPlaying === "true" && audio) {
        // Wait for metadata to load so the browser knows the file duration
        audio.addEventListener('loadedmetadata', () => {
            if (savedTime) {
                audio.currentTime = parseFloat(savedTime);
            }
            audio.play().catch(() => console.log("Waiting for user interaction..."));
        }, { once: true });
        
        // Safety: If audio is already partially loaded, jump now
        if (audio.readyState >= 1) {
            audio.currentTime = parseFloat(savedTime || 0);
            audio.play().catch(() => {});
        }
    }
};

// Save the exact second very frequently (every 200ms)
setInterval(() => {
    if (audio && !audio.paused) {
        localStorage.setItem("musicTime", audio.currentTime);
    }
}, 200);

// Run sync on load
window.addEventListener('load', syncMusic);

// Force resume if browser blocks autoplay on new page
window.addEventListener('click', () => {
    if (audio && audio.paused && localStorage.getItem("musicPlaying") === "true") {
        audio.play();
    }
});