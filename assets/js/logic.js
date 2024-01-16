import questions from './questions.js';

// Start Screen 
var startEl = document.querySelector('#start-screen');
var startButtonEl = document.querySelector('#start');

// Countdown Timer
var timeEl = document.querySelector('#time');

// Questions
var questionsEl = document.querySelector('#questions');
var questionTitleEl = document.querySelector('#question-title');
var choicesEl = document.querySelector('#choices');

// End Screen
var endScreenEl = document.querySelector('#end-screen');
var finalScoreEl = document.querySelector('#final-score');
var initialsEl = document.querySelector('#initials');
var submitEl = document.querySelector('#submit');

// Feedback Noises
var feedbackEl = document.querySelector('#feedback')
var winSoundEl = document.querySelector('#win-sound');
var looseSoundEl = document.querySelector('#loose-sound');

// Initialise the timer and intervals
var timeRemaining = 0;
var TIME_REMAINING = 100;
var PENALTY = 5;
var INTERVAL = 1000;

// Initialise the trackers
var players_score = 0;
var questionNumber = 0;
var currentQuestion = {};
var correctAnswer = "";




// Quiz

// Resetting everything to baseline
baselineQuiz() {
    questionNumber = 0;
    score = 0;
    timeRemaining = TIME_REMAINING;
}

function start() {
    baselineQuiz();
    time.textContent = timeLeft;
    showQuestions();
    beginTimer();
}

function beginTimer() {
    
}

    console.log("started");

    startEl.classList.remove("start");
    startEl.classList.add("hide");
 
    questionsEl.classList.remove("hide");
    questionsEl.classList.add("start");

    console.log(questions)
    question()

    // run question function()
}

function question() {
    questionTitleEl.textContent = questions[count].question;
    var choices = questions[0].choices;
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.id = `answer${index + 1}`
        choicesEl.appendChild(button);
    });

    choicesEl.addEventListener('click', compare)
}

function compare() {
    if (button.id === questions[count].correctAnswer) {
        console.log("True")
    }
}
startButtonEl.addEventListener('click', start)


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score