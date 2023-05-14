const startButton = document.querySelector('#startButton');
const quizCard = document.querySelector('.quiz-card');
let question = document.querySelector('.question');
let timer = document.querySelector('.timer');
let result = document.querySelector('.results');
let answerChoiceContainer = document.querySelector('.multiChoice');
const header = document.querySelector('.header');
const startCard = document.querySelector('.start-card');
const endCard = document.querySelector('.end-card');
let rightAnswers;
let wrongAnswers;
let timeInterval = 120;
let timerId;
let questionsIndex = 0;


// Array of quiz questions
const quizQuestions =[

    {
        question: 'What is a String?',
        choices: ['Characters used to represent text', 'A list of characters', 'A list of numbers', 'A length of rope'],
        answer: 'Characters used to represent text'
    },

    {
        question: 'What is a Boolean?',
        choices:  ['A true or false value', 'A list of true or false values', 'A list of numbers', 'A list of characters'],
        answer: 'A true or false value'
    },

    {
        question:'What is a Function?',
        choices: ['A list of tasks', 'Code designed to perform a particular task', 'A list of objects', 'A list of items'],
        answer: 'Code designed to perform a particular task'
    },

    {
        question: 'What is a Variable?',
        choices: ['A container for storing data values', 'A list of variables', 'A list of objects', 'A list of items'],
        answer: 'A container for storing data values'
    },

    {
        question: 'What is the best IDE?',
        choices: ['VS Code', 'EMACS', 'IntelliJ', 'NeoVim'],
        answer: 'NeoVim'
    }
]

function startQuiz() {
    quizCard.classList.remove('hide');
    startCard.classList.add('hide');
    header.classList.add('hide');
    countdownTimer();
};


function countdownTimer() {
    if (timeInterval === 0) {
        clearInterval(timerId);
        endQuiz();
    } else {
        timer.innerText = timeInterval;
        timeInterval--;
    }
        };
        };
        answers.push(obj);
    }
    return question, answers;
}

console.log(questions(quizQuestions, multipleChoice));

console.log(answerChoiceContainer);
};
        answers.push(obj);
    }
    return question, answers;
}

console.log(questions(quizQuestions, multipleChoice));

console.log(answerChoiceContainer);



startButton.addEventListener('click', startQuiz);
/*

