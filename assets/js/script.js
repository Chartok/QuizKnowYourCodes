const startButton = document.getElementById("startBtn");
const quizCard = document.querySelector(".quiz-card");
const questionDiv = document.querySelector(".question");
const answerChoices = quizCard.querySelectorAll(".answerChoice");
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");
const initials = document.querySelector(".initials");
const submitBtn = document.querySelector(".submitBtn");

let currentQuestionIndex = 0;
let timeLeft;
let rightAnswers = 0;
let wrongAnswers = 0;


// Array of questions and answers
const quizQuestions = [
    {
        question: "What is an Array?",
        answers: ["A list of items", "A list of objects", "A list of variables", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "What is a String?",
        answers: [ "Characters used to represent text", "A list of characters", "A list of numbers", "A length of rope"],
        correctAnswer: "Characters used to represent text",
    },
    {
        question: "What is a Boolean?",
        answers: ["A true or false value", "A list of true or false values", "A list of numbers", "A list of characters"],
        correctAnswer: "A true or false value",
    },
    {
        question: "What is a Function?",
        answers: ["A list of tasks", "Code designed to perform a particular task", "A list of objects", "A list of items"],
        correctAnswer: "Code designed to perform a particular task",
    },
    {
        question: "What is a Variable?",
        answers: [ "A container for storing data values", "A list of variables", "A list of objects", "A list of items"],
        correctAnswer: "A container for storing data values",
    },
    {
        question: "What is an Object?",
        answers: ["A list of keys with specified values", "A list of variables and keys", "A physical thing that can be touched","A list of items and objects"],
        correctAnswer: "A list of keys with specified values",
    }
];

// Start quiz, set timer and remove start button
function startQuiz() {
    displayQuestion();
    startButton.remove();
    timeLeft = 1200;
}

// Display questions and answers
function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionDiv.textContent = currentQuestion.question;

        for (let i = 0; i < currentQuestion.answers.length; i++) {
            answerChoices[i].textContent = currentQuestion.answers[i];
        };
    }
}

// Starts and stops timer when time runs out, or when user answers all questions
function startTimer() {
    timeLeft = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeLeft);
            endQuiz();
        } else if (currentQuestionIndex === quizQuestions.length) {
            clearInterval(timeLeft);
        }
    }
        , 1000);
}

// Function to check and track answers when user selects an answer and display next question
function checkAnswer(event) {
    const answerChoice = event.target;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answerChoice.innerText === correctAnswer) {
        answerChoice.color = "green";
        rightAnswers++;
    } else {
        answerChoice.color = "red";
        wrongAnswers++;
    }

    for (let i = 0; i < answerChoices.length; i++) {
        answerChoices[i].removeEventListener("click", checkAnswer);
    }

    // Timeout to display next question after 1 seconds
    setTimeout(function() {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}


// Event listener for selecting answer
for (let i = 0; i < answerChoices.length; i++) {
    answerChoices[i].addEventListener("click", checkAnswer);
}

// Event listener for start button to start quiz and timer
startButton.addEventListener("click", function () {
    startQuiz();
    startTimer();
    displayTimer();
});

// Function ending the quiz if the user runs out of time or if gets too many questions wrong
function endQuiz() {
    if (timeLeft === 0) {
        quizCard.remove();
        endScreen.show();
        score.textContent = rightAnswers;
    } else if (wrongAnswers === 3) {
        quizCard.remove();
        endScreen.show();
        score.textContent = rightAnswers;
    }
}

