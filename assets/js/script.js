const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
const question = document.querySelector('.question');
const timer = document.querySelector('.timer');
const result = document.querySelector('.results');
const againButton = document.querySelector('.repeatButton');
const header = document.querySelector('.header');
let rightAnswers;
let wrongAnswers;


// Array of quiz questions
const quizQuestions = [ 'What is an Array?', 'What is a String?', 'What is a Boolean?','What is a Function?','What is a Variable?', 'What is an Object?'
];

// Array of multiple choice answers
const multipleChoice = [
    ['A list of items', 'A list of objects', 'A list of variables', 'All of the above'],
    ['Characters used to represent text', 'A list of characters', 'A list of numbers', 'A length of rope'],
    ['A true or false value', 'A list of true or false values', 'A list of numbers', 'A list of characters'],
    ['A list of tasks', 'Code designed to perform a particular task', 'A list of objects', 'A list of items'],
    ['A container for storing data values', 'A list of variables', 'A list of objects', 'A list of items'],
    ['A list of keys with specified values', 'A list of variables and keys', 'A physical thing that can be touched', 'A list of items and objects']
]

// Array of correct answers
const correctAnswers = ['All of the above', 'Characters used to represent text', 'A true or false value', 'Code designed to perform a particular task', 'A container for storing data values', 'A list of keys with specified values'
];






// Display current question
function displayQuestion() {
    const currentQuestion = quizQuestions[0];
    for (let i = 0; i < quizQuestions.length; i++);
    return question.innerText = currentQuestion;
};

console.log(displayQuestion());

// Display answers for current question by appending them to the answerChoicesContainer
const answerChoices = document.createElement('div');
for (let i = 0; i < answerChoices.length; i++) {
    question.appendSibling(answerChoices);
};

function displayMultipleChoice() {
    for (let i = 0; i < quizQuestions[currentQuestion].answers.length; i++) {
        answerChoices.innerText = quizQuestions[currentQuestion].answers[i];
    };

};

// Call functions
// loadQuiz();