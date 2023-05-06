const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
const question = document.querySelector('.question');
const answerChoicesContainer = document.querySelector('.answerChoicesContainer');
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
    timer.classList.add('hide');
    quizCard.classList.add('hide');
    result.classList.add('hide');
    againButton.classList.add('hide');
    header.classList.add('show');
}



// Display current question when the quiz starts
function displayQuestion() {
    timer.classList.remove('hide');
    startButton.classList.add('hide');
    quizCard.classList.remove('hide');
    header.classList.remove('show');
    for (let i = 0; i < quizQuestions[i].length; i++) {
        return question.innerText = quizQuestions[i].question;
    }
}

// Display answers for current question by appending them to the answerChoicesContainer
function displayAnswers() {
    answerChoicesContainer.classList.remove('hide');
    for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
        const answerChoice = document.createElement('div');
        answerChoice.classList.add('answerChoice');
        answerChoice.innerText = quizQuestions[currentQuestion].answers[i];
    }
}






// Call functions
loadQuiz();