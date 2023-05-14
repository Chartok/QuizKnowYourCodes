// DOM selectors
let startButtn = document.getElementById('start-buttond');
let startCard = document.getElementById('start-card');
let questions = document.getElementById('questions');
let choices = document.getElementById('multi-choice');
let timer = document.getElementById('timer');

// Variables for quiz tracking
let currentQuestion = 0;
let time = 60;
let timerId;

function startQuiz() {
    startCard.setAttribute('class', 'hide');
    questions.removeAttribute('class');
    timerId = setInterval(clockTick, 1000);
    timer.textContent = time;
    throwQuestion();
}

function throwQuestion() {
    let currentQ = quizQuestions[currentQuestion];
    let title = document.getElementById('question-title');
    title.textContent = currentQ.question;
    choices.innerHTML = '';
    for (let i = 0; i < currentQ.choices.length; i++) {
        let choice = document.createElement('button');
        choice.setAttribute('class', 'choice');
        choice.setAttribute('value', currentQ.choices[i]);
        choice.textContent = i + 1 + '. ' + currentQ.choices[i];
        choice.onclick = answerClick;
        choices.appendChild(choice);
    }
}

function answerClick(event) {
    if (event.target.value !== quizQuestions[currentQuestion].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timer.textContent = time;
    }
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
        quizEnd();
    } else {
        throwQuestion();
    }
}

function endQuiz() {
    clearInterval(timerId);
    let endScreen = document.getElementById('end-card');
    endScreen.removeAttribute('class');
    let resultsCard = document.getElementById('results');
    questions.setAttribute('class', 'hide');
}