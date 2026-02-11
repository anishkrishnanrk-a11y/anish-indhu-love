const questions = [
    {
        q: "Where did we have our very first conversation?",
        options: ["WhatsApp", "Instagram", "In Person", "Snapchat"],
        answer: 1 // Index of the correct option
    },
    {
        q: "What is the one thing I love most about you?",
        options: ["Your Eyes", "Your Kindness", "Everything", "Your Laugh"],
        answer: 2
    },
    {
        q: "Which month did we first meet?",
        options: ["January", "June", "September", "December"],
        answer: 0
    }
];

let currentQuestion = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const quizEl = document.getElementById('quiz');
const winEl = document.getElementById('quiz-win');

function loadQuestion() {
    const data = questions[currentQuestion];
    questionEl.innerText = data.q;
    optionsEl.innerHTML = '';
    
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(index, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const correct = questions[currentQuestion].answer;
    
    if (selected === correct) {
        btn.classList.add('correct');
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                quizEl.classList.add('hidden');
                winEl.classList.remove('hidden');
            }
        }, 800);
    } else {
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 500);
    }
}

loadQuestion();