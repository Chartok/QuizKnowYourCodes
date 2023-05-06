const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
const question = document.querySelector('.question');
const answerChoicesContainer = document.querySelectorAll('.answerChoicesContainer');
const timer = document.querySelector('.timer');
const result = document.querySelector('.results');
const againButton = document.querySelector('.repeatButton');
const header = document.querySelector('.header');


let rightAnswers;
let wrongAnswers;


// Array of questions and answers
const quizQuestions = [
    {
        question: 'What is an Array?',
        answers: ['A list of items', 'A list of objects', 'A list of variables', 'All of the above'],
        correctAnswer: 'All of the above',
    },
    {
        question: 'What is a String?',
        answers: [ 'Characters used to represent text', 'A list of characters', 'A list of numbers', 'A length of rope'],
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
        answers: [ 'A container for storing data values', 'A list of variables', 'A list of objects', 'A list of items'],
        correctAnswer: 'A container for storing data values',
    },
    {
        question: 'What is an Object?',
        answers: ['A list of keys with specified values', 'A list of variables and keys', 'A physical thing that can be touched','A list of items and objects'],
        correctAnswer: 'A list of keys with specified values',
    }
];

// Function to load quiz interface, timer, and start button on page load
function loadQuiz() {
    quizCard.classList.add('hide');
    result.classList.add('hide');
    againButton.classList.add('hide');
    header.classList.add('show');
    startButton.classList.remove('hide');
    startButton.addEventListener('click', displayQuestion); 
    
}


// Function to display current question
function displayQuestion() {
    startButton.classList.add('hide');
    quizCard.classList.remove('hide');
    header.classList.remove('show');
    for (let i = 0; i < quizQuestions[i].length; i++) {
        return question.innerText = quizQuestions[i].question; 
    }
}

// Function to display possible answers for current question
function displayAnswers() {
    for (let i = 0; i < quizQuestions[i].answers.length; i++) {
        return answerChoices.innerText = quizQuestions[i].answers[i];
    }
}


    


// Call functions
loadQuiz();