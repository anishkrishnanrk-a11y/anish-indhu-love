const gameBoard = document.getElementById('game-board');
const nextBtn = document.getElementById('next-btn');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

const images = [
    'game1.jpg', 'game2.jpg', 'game3.jpg', 
    'game4.jpg', 'game5.jpg', 'game6.jpg'
];

const cardData = [...images, ...images];
cardData.sort(() => Math.random() - 0.5);

function createBoard() {
    cardData.forEach(img => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.image = img;
        card.innerHTML = `
            <div class="front-face"><img src="${img}"></div>
            <div class="back-face">❤️</div>
        `;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    if (isMatch) {
        matchedPairs++;
        if (matchedPairs === 6) nextBtn.style.display = 'inline-block';
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

createBoard();