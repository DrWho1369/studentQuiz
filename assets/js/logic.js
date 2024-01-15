// GIVEN I am taking a code quiz
// WHEN I click the start button
var startEl = document.querySelector('#start-screen')
var startButtonEl = document.querySelector('#start')
var questionsEl = document.querySelector('#questions')
var timeEl = document.querySelector('#time')
// THEN a timer starts and I am presented with a question
function start(event) {
    event.preventDefault();
    console.log("started")
    // startEl class set to hide
    // populate question Elements
    // questionsEl class set to start
}

function question() {

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