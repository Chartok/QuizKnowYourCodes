const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
let question = document.querySelector('.question');
const timer = document.querySelector('.timer');
let result = document.querySelector('.results');
const againButton = document.querySelector('.repeatButton');
let answerChoiceContainer = document.querySelector('.multiChoice');
const header = document.querySelector('.header');
let rightAnswers;
let wrongAnswers;


// Array of quiz questions
const quizQuestions = ['What is an Array?', 'What is a String?', 'What is a Boolean?', 'What is a Function?', 'What is a Variable?', 'What is the best IDE?'
];

// Array of multiple choice answers
const multipleChoice = [
    ['A list of items', 'A list of objects', 'A list of variables', 'All of the above'],
    ['Characters used to represent text', 'A list of characters', 'A list of numbers', 'A length of rope'],
    ['A true or false value', 'A list of true or false values', 'A list of numbers', 'A list of characters'],
    ['A list of tasks', 'Code designed to perform a particular task', 'A list of objects', 'A list of items'],
    ['A container for storing data values', 'A list of variables', 'A list of objects', 'A list of items'],
    ['VS Code', 'EMACS', 'IntelliJ', 'Vim']
]

// Array of correct answers
const correctAnswers = ['All of the above', 'Characters used to represent text', 'A true or false value', 'Code designed to perform a particular task', 'A container for storing data values', 'NeoVim'
];



/*

I need to write a function that will iterate over the multipleChoice 2D array and append the strings to the answerChoiceContainer div corresponding to the current question.

I need to write a function with an event listener that listens for a click on the answers and store it client-side locally so that the user can see their answers at the end of the quiz.

I need to write a function that will display the user's answers at the end of the quiz.

I need to write a function that will move to the next question in the quizQuestions array and display the next question and answers in the multipleChoice array.

I need to write a function that will start the quiz when the user clicks the "Start" button.

I need to write a function that will restart the quiz when the user clicks the "Repeat Quiz" button.

*/

function questions(quizQuestions, multipleChoice) {
    let question = [];
    for (let i = 0; i < quizQuestions.length; i++) {
        const obj = {
            question: quizQuestions[i],
        };
        question.push(obj);
    }
    let answers = [];
    for (let i = 0; i < multipleChoice.length; i++) {
        const obj = {
            answers: multipleChoice[i],
        };
        answers.push(obj);
    }
    return question, answers;
}

console.log(questions(quizQuestions, multipleChoice));

console.log(answerChoiceContainer);

question.innerHTML = questions(quizQuestions, multipleChoice)[0];
const answers = document.createElement('div');
answers.classList.add('answers');
answers.appendChild(answerChoiceContainer);
answers.innerHTML = questions(quizQuestions, multipleChoice);
console.log(answers);

// Display current question
// function displayQuestion() {
//     let currentQuestion = quizQuestions[0];
//     for (let i = 0; i < quizQuestions.length; i++);
//     return question.innerText = currentQuestion;
// };

// console.log(displayQuestion());
// console.log(multipleChoice);

// Display answers for current question by appending them to multipleChoice Container
// function displayMultipleChoice() {
//     for (let i = 0; i < multipleChoice.length; i++) {
//         for (let j = 0; j < multipleChoice[i].length; j++) {
//             let answerChoice = document.createElement('div');
//             answerChoiceContainer.appendChild(answerChoice); return answerChoice.innerText = multipleChoice[i][j];
//         }
//     }
// };

// console.log(displayMultipleChoice());