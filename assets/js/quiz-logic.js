// DOM selectors
const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const startCard = document.getElementById('start-card');
const questionsContainer = document.getElementById('questions');
const choicesContainer = document.getElementById('multi-choice');
const timerElement = document.getElementById('time');
const feedbackElement = document.getElementById('feedback');
const questionTitleElement = document.getElementById('question-title');
const endCard = document.getElementById('end-card');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');

// Variables for quiz tracking
let currentQuestionIndex = 0;
let time = 60;
let timerId;

// Quiz initialization
function initializeQuiz() {
    startCard.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timerId = setInterval(updateTimer, 1000);
    timerElement.textContent = time;
    askQuestion();
}

// Ask current question
function askQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionTitleElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = '';

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = document.createElement('button');
        choice.classList.add('choice');
        choice.value = currentQuestion.choices[i];
        choice.textContent = `${i + 1}. ${currentQuestion.choices[i]}`;
        choice.addEventListener('click', answerClick);
        choicesContainer.appendChild(choice);
    }
}

// Handle user's answer and move to the next question, penalize time if incorrect
function answerClick(event) {
    const selectedChoiceValue = event.target.value;
    const currentQuestion = questions[currentQuestionIndex];

    feedbackElement.classList.remove('hide');
    feedbackElement.classList.add('feedback');
    if (selectedChoiceValue === currentQuestion.answer) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect!';
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerElement.textContent = time;
    }

    setTimeout(() => {
        feedbackElement.classList.add('hide');
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        askQuestion();
    }
}

// End the quiz, stop the timer, and display the final score
function endQuiz() {
    clearInterval(timerId);
    questionsContainer.classList.add('hide');
    endCard.classList.remove('hide');
    finalScoreElement.textContent = time;
}

// Update the timer
function updateTimer() {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
        endQuiz();
    }
}

// Save the score with initials to local storage
function saveScore() {
    const initials = initialsInput.value.trim();
    if (initials !== '') {
        const scores = JSON.parse(localStorage.getItem('scores')) || [];
        const newScore = {
            score: time,
            initials: initials
        };
        scores.push(newScore);
        localStorage.setItem('scores', JSON.stringify(scores));
        location.href = 'score.html';
    }
}

// Event listeners
startButton.addEventListener('click', initializeQuiz);
submitButton.addEventListener('click', saveScore);
initialsInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        saveScore();
    }
});
