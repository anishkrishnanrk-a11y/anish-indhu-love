const poemText = `🌹 கவிதை (The Poem)


என் கடந்த காலத்தில், மழையைத் தேடித் தவிக்கும் பாலைவனத்துப் பூவாய் நான் இருந்தேன்... ஆனால் ஒரு அதிசயமாக, என்னைச் செழிக்க வைக்க மழையாக நீ வந்தாய்! ❤️

பல இதயங்கள் தந்த காயங்களால், முட்கள் தைத்த வலியோடு நான் நின்றேன்... யாராலும் காயப்படாத ஒரு காலத்திற்கு என் இதயத்தைக் காலப்பயணம் செய்ய வைத்துவிட்டாய்! ✨

உடைந்த கண்ணாடியை ஒட்டுவது கடினம் தான், ஆனால் அதை பழைய காலத்திற்கே கொண்டு சென்றால் மீண்டும் அழகாய் மாறிவிடுமே... அப்படித்தான் நீ என் இதயத்தின் காவலனாகவும், என் வாழ்வின் தெய்வமாகவும் மாறிவிட்டாய்! 💕

💍 உன்னை காதலிக்கிறேன் இந்து! என்றும் உனக்காக - அனிஷ். இனிய காதலர் தின நல்வாழ்த்துகள் என் செல்லோ! ❤️.`;

const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
    if (index < poemText.length) {
        typewriterElement.innerHTML += poemText.charAt(index);
        index++;
        // Random typing speed for a natural feel
        setTimeout(typeWriter, Math.random() * 50 + 50);
    } else {
        document.getElementById('final-btn').classList.remove('hidden');
    }
}

// Floating Notes Logic
const thoughts = ["My Love", "My World", "Always You", "Indhu ❤️ Anish", "Forever"];

function createFloatingNote() {
    const note = document.createElement('div');
    note.classList.add('note-float');
    note.innerText = thoughts[Math.floor(Math.random() * thoughts.length)];
    
    note.style.left = Math.random() * 80 + 10 + "vw";
    note.style.top = Math.random() * 80 + 10 + "vh";
    note.style.opacity = "0";
    note.style.transition = "all 3s ease";
    
    document.body.appendChild(note);

    // Fade in and move slightly
    setTimeout(() => {
        note.style.opacity = "0.6";
        note.style.transform = "translateY(-20px)";
    }, 100);

    // Fade out and remove
    setTimeout(() => {
        note.style.opacity = "0";
        setTimeout(() => note.remove(), 3000);
    }, 4000);
}

// Start animations
setTimeout(typeWriter, 1000);
setInterval(createFloatingNote, 2500);