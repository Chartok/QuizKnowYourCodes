const startButton = document.querySelector('.startButton');
const quizCard = document.querySelector('.quiz-card');
const question = document.querySelector('.question');
const answerChoices = document.querySelectorAll('.answerChoice');
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
    startButton.addEventListener('click', displayQuestion, timerr); 
    
}



// Display questions and answers
function displayQuestion() {
    startButton.classList.add('hide');
    quizCard.classList.remove('hide');
    header.classList.remove('show');
    for (let i = 0; i < quizQuestions.length; i++) {
        question.innerText = quizQuestions[i].question;
        for (let j = 0; j < quizQuestions[i].answers.length; j++) {
            answerChoices[j].style.display = 'block';
            answerChoices[j].innerText = quizQuestions[i].answers[j];
            answerChoices[j].addEventListener('click', checkAnswer);
        }
    }
}


    

/*

// Function for timer
function timerr() {
    timeLeft = 120;
        setInterval(function () {
        timeLeft--;
        timer.innerText = timeLeft;
        },
            1000);
}





// Function to store answer in local storage
function storeAnswer(event) {
    const answerChoice = event.target;
    const answer = answerChoice.innerText;
    localStorage.setItem('userAnswer' + currentQuestionIndex, answer);
}

// Populate results list with users answers and display the quizQuestions array for comparison
function displayResults() {
    for (let i = 0; i < quizQuestions.length; i++) {
        const userAnswer = localStorage.getItem('userAnswer' + i);
        results.push(userAnswer);
    }
}




// Quiz ends when all questions are answered or timer reaches 0
function endQuiz() {
    quizCard.classList.add('hide');
    result.classList.add('hide');
    header.classList.add('hide');
    const results = document.querySelector('.results');
    results.classList.remove('hide');
    for (let i = 0; i < results.length; i++) {
        resultsListItems[i].innerText = quizQuestions[i].question + ' - ' + displayResults()[i];
    }
    againButton.classList.remove('hide');
    againButton.addEventListener('click', function () {
        location.reload();
    });
}
*/
// Call functions
loadQuiz();