const quizData = [
    {
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Pt", "Cu"],
        answer: "Ag"
    },
 
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
        answer: "Antarctica"
    },
    {
        question: "What is the currency of Brazil?",
        options: ["Euro", "Pound Sterling", "Real", "Peso"],
        answer: "Real"
    },
    
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Au", "Ag", "Cu"],
        answer: "Fe"
    },


    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
 
    {
        question: "What is the chemical symbol for hydrogen?",
        options: ["H", "He", "Ho", "Hy"],
        answer: "H"
    },

    {
        question: "What is National Animal of India?",
        options: ["Lion", "Tiger", "Rhino", "Horse"],
        answer: "Tiger"
    },
];


const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(option) {
    const currentQuizData = quizData[currentQuestion];
    if (option === currentQuizData.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultElement.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
    resultElement.style.display = 'block';
}

loadQuestion();



