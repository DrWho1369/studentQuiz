import questions from './questions.js';

// Step 1 - make the start quiz button display the questions

var startEl = document.querySelector('#start')
var startScreenEl = document.querySelector('#start-screen')
var questionsEl = document.querySelector('#questions')
var questionTitleEl = document.querySelector('#question-title')
var choicesEl = document.querySelector('#choices')
var endScreenEl = document.querySelector('#end-screen')
var finalScoreEl = document.querySelector('#final-score')
var timeEl = document.querySelector('#time')
var submitEl = document.querySelector('#submit')
var feedbackEl = document.querySelector('#feedback')
var initialsEl = document.querySelector('#initials')

var currentQuestionIndex = 0;
let score = 0;

startEl.addEventListener("click", displayQuiz)
submitEl.addEventListener("click", storeScore)
function displayQuiz() {
    // Step 1 change the CSS
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide")
    questionsEl.classList.add("start")
 
    var currentQuestion = questions[currentQuestionIndex];
    var questionText = currentQuestion.question;
    var choices = currentQuestion.choices;

    questionTitleEl.textContent = `Question: ${questionText}`;
    for (let choiceKey in choices) {
        const buttonHTML = `<button>${choiceKey}: ${choices[choiceKey]}</button>`;
        choicesEl.insertAdjacentHTML('beforeend', buttonHTML);
    }
    
    const buttons = choicesEl.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    })
}

function handleButtonClick(event) {
    choicesEl.innerHTML = '';
    const selectedChoice = event.target.dataset.choice;
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedChoice === correctAnswer) {
        console.log(score)
    } else {
        // timer = timer - 10
        // remove 5 seconds from time
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuiz();
    } else {
        endScreenEl.classList.remove("hide")
        endScreenEl.classList.add("start")
        finalScoreEl.textContent = timeEl.textContent
    }
}

function storeScore() {
    var scoreData = ("score", {initials: initialsEl.value, time: timeEl.textContent});
    var jsonString = JSON.stringify(scoreData);
    localStorage.setItem('scoreData', jsonString)

}