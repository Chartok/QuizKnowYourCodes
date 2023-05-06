const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
const question = document.querySelector('.question');
const timer = document.querySelector('.timer');
const result = document.querySelector('.results');
const againButton = document.querySelector('.repeatButton');
const header = document.querySelector('.header');

let currentQuestion = 0;
let rightAnswers;
let wrongAnswers;


// Array of quiz questions
const quizQuestions = [
    {
        question: 'What is an Array?',
        answers: ['A list of items', 'A list of objects', 'A list of variables', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        question: 'What is a String?',
        answers: ['Characters used to represent text', 'A list of characters', 'A list of numbers', 'A length of rope'],
        correctAnswer: 'Characters used to represent text',
    },
    {
        question: 'What is a Boolean?',
        answers: ['A true or false value', 'A list of true or false values', 'A list of numbers', 'A list of characters'],
        correctAnswer: 'A true or false value',
    },
    {
        question: 'What is a Function?',
        answers: ['A list of tasks', 'Code designed to perform a particular task', 'A list of objects', 'A list of items'],
        correctAnswer: 'Code designed to perform a particular task',
    },
    {
        question: 'What is a Variable?',
        answers: ['A container for storing data values', 'A list of variables', 'A list of objects', 'A list of items'],
        correctAnswer: 'A container for storing data values',
    },
    {
        question: 'What is an Object?',
        answers: ['A list of keys with specified values', 'A list of variables and keys', 'A physical thing that can be touched', 'A list of items and objects'],
        correctAnswer: 'A list of keys with specified values',
    }
];

// Load quiz interface and header on page load
function loadQuiz() {
    displayQuestion();
    displayAnswers();
};


// Display current question when the quiz starts
function displayQuestion() {
    for (let i = 0; i < quizQuestions[currentQuestion].length; i++);
    return question.innerText = quizQuestions[currentQuestion];
};

console.log(displayQuestion());

// Display answers for current question by appending them to the answerChoicesContainer
const answerChoices = document.createElement('div');
for (let i = 0; i < answerChoices.length; i++) {
    question.appendSibling(answerChoices);
};

function displayAnswers() {
    for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
        answerChoices.innerText = quizQuestions[currentQuestion].answers[i];   
    };

};



// Call functions
loadQuiz();