const startButton = document.getElementById("start");
const quizCard = document.querySelector(".quiz");
const questionDiv = document.querySelector(".question");
const answerChoices = quizCard.querySelectorAll(".answerChoice");
const timer = document.querySelector(".timer");
const result = document.querySelector(".results");
const playAgain = document.querySelector(".playAgain");
const againButton = document.querySelector(".again");
const header = document.querySelector(".header");

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

// Array for results
const results = [];




// Start quiz called when start button is clicked
function startQuiz() {
    timeLeft = 1200;
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

// Function called when user clicks an answer choice checking if answer is correct or incorrect
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

    // Taking users choice and pushing it to results array
    results.push(quizQuestions[currentQuestionIndex].question + " " + answerChoice.innerText);
    // Function to create a new list item for each result and append to results list
    function displayResults() {
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            const li = document.createElement("li");
            li.textContent = result;
            score.appendChild(li);
        }
    }
    // Timeout to display next question after 1 seconds
    setTimeout(function() {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

// Display results when quiz is over or time runs out
function endQuiz() {
    quizCard.remove();
    result.

// Event listener for selecting answer

// Event listener for start button to start quiz and timer
