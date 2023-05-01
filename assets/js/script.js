const startButton = document.getElementById("start");
const quizCard = document.querySelector(".quiz-card");
const questionDiv = document.querySelector(".question");
const answerChoices = quizCard.querySelectorAll(".answerChoice");
const timer = document.querySelector(".timer");
const result = document.querySelector(".results");
const playAgain = document.querySelector(".playAgain");
const againButton = document.querySelector(".again");
const header = document.querySelector(".header");

let currentQuestionIndex = 0;
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

// Landing page with start button and welcome header on page load
function init() {
    startButton.addEventListener("click", startQuiz);
    startButton.textContent = "Start Quiz";
    header.innerText = "Welcome to Quiz Code!";
    quizCard.remove();
    result.remove();
    playAgain.remove();
    againButton.remove();
}

// End of quiz function to display results and play again button
function endQuiz() {
    quizCard.remove();
    result.textContent = "You got " + rightAnswers + " right and " + wrongAnswers + " wrong!";
    playAgain.textContent = "Play Again";
    playAgain.addEventListener("click", function () {
        location.reload();
    });
}

// Start quiz called when start button is clicked, 
function startQuiz() {
    timer = 1200;
    startButton.remove();
    header.remove();
    startTimer();
    displayQuestion();
}

// Display questions and answers when start quiz funciton is called
function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionDiv.textContent = currentQuestion.question;
        // Displays answer choices for current question
        for (let i = 0; i < currentQuestion.answers.length; i++) {
            answerChoices[i].textContent = currentQuestion.answers[i];
        };
    }
}

// Starts and stops timer when time runs out, or when user answers all questions
function startTimer() {
    timer = setInterval(function () {
        timer--;
        timer.textContent = timer;
        if (timer === 0) {
            clearInterval(timer);
            endQuiz();
        } else if (currentQuestionIndex === quizQuestions.length) {
            clearInterval(timer);
        }
    }
        , 1000);
}

// Function  when answer choice clicked called to check if answer is correct or incorrect
function checkAnswer(event) {
    const answerChoice = event.target;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;

    // Check if answer is correct or incorrect
    if (answerChoice.innerText === correctAnswer) {
        answerChoice.color = "green";
        rightAnswers++;
    } else {
        answerChoice.color = "red";
        wrongAnswers++;
    }
    // Store users right or wrong choice to client storage
    localStorage.setItem("rightAnswers", rightAnswers);
    localStorage.setItem("wrongAnswers", wrongAnswers);

    // Timeout to display next question after 1 seconds
    setTimeout(function() {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

// Display results at end of quiz

// Event listener for selecting answer

// Event listener for start button to start quiz and timer
