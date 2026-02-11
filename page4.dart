const photos = [
    'photo1.jpg', 
    'photo2.jpg', 
    'photo3.jpg',
    'photo1.jpg', 
    'photo2.jpg', 
    'photo3.jpg'
];

let board = document.getElementById('gameBoard');
let flippedCards = [];
let matchedCount = 0;

// Shuffle photos
const shuffledPhotos = photos.sort(() => 0.5 - Math.random());

// Create Cards
shuffledPhotos.forEach((imgSrc, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = imgSrc;
    card.innerHTML = `
        <div class="card-back">❤️</div>
        <div class="card-front"><img src="${imgSrc}"></div>
    `;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.name === card2.dataset.name) {
        matchedCount += 2;
        flippedCards = [];
        if (matchedCount === photos.length) {
            setTimeout(() => {
                document.getElementById('winMessage').classList.remove('hidden');
            }, 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}