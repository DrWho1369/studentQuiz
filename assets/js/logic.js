// GIVEN I am taking a code quiz
// WHEN I click the start button

import questions from './questions.js';


var startEl = document.querySelector('#start-screen')
var startButtonEl = document.querySelector('#start')
var questionsEl = document.querySelector('#questions')
var timeEl = document.querySelector('#time')
var questionTitleEl = document.querySelector('#question-title')
var choicesEl = document.querySelector('#choices')

// THEN a timer starts and I am presented with a question
function start(event) {
    event.preventDefault();

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
    questionTitleEl.textContent = questions[0].question;
    var choices = questions[0].choices;
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        choicesEl.appendChild(button);
    });

    choicesEl.addEventListener('click', next)
}

function next() {
    console.log("next")
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