// Importing Questions Array

import questions from './questions.js';




// Get elements from HTML

const correctSound = new Audio('./assets/sfx/correct.wav');
const wrongSound = new Audio('./assets/sfx/incorrect.wav');

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




// Initiate Some Variables

var currentQuestionIndex = 0;
var secondsLeft = 30;
var timerInterval;
var scoreData = {}




// Add Event Listeners

startEl.addEventListener("click", displayQuiz)
submitEl.addEventListener("click", storeScore)




// Define Functions For Program

function displayQuiz() {
    currentQuestionIndex = 0;
    secondsLeft = 30;
    timerInterval;
    scoreData = {}
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide")
    questionsEl.classList.add("start")

    setTime()
    beginQuestions()
}


function beginQuestions() {

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


function setTime() {

    timerInterval = setInterval(function() {

        secondsLeft--
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz()
        }
    }, 1000)
}


function handleButtonClick(event) {

    choicesEl.innerHTML = '';
    feedbackEl.textContent = ''

    const selectedChoice = event.target.firstChild.data[0];

    const currentQuestion = questions[currentQuestionIndex];

    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedChoice === correctAnswer) {
        
        feedbackEl.classList.remove("hide");
        feedbackEl.classList.add("start")
        feedbackEl.textContent = 'Correct!';
        correctSound.play();

    } else {
        secondsLeft -= 5;

        feedbackEl.classList.remove("hide");
        feedbackEl.classList.add("start")
        feedbackEl.textContent = 'Wrong!';
        wrongSound.play();

        if (secondsLeft < 0) {
            secondsLeft = 0;
            timeEl.textContent = secondsLeft;
            endQuiz()   
        }

        timeEl.style.color = 'red';
        timeEl.style.fontSize = '200%';
        
        setTimeout(() => {
            timeEl.style.color = ''; 
            timeEl.style.fontSize = '';
        }, 1000);
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        beginQuestions();
    } else {
        endQuiz()
    }
}


function endQuiz() {

    questionsEl.classList.add("hide");
    endScreenEl.classList.remove("hide");
    endScreenEl.classList.add("start");
    feedbackEl.classList.add("hide")
    finalScoreEl.textContent = timeEl.textContent;
    clearInterval(timerInterval);    
}


function storeScore() {

    var newScore = {
        initials: initialsEl.value,
        time: timeEl.textContent
    };

    if (!scoreData.hasOwnProperty("score")) {
        scoreData.score = [];
    }

    scoreData.score.push(newScore);
    var jsonString = JSON.stringify(scoreData);
    localStorage.setItem('scoreData', jsonString)

    endScreenEl.classList.add("hide")
    startScreenEl.classList.remove("hide");
    startScreenEl.classList.add("start");
}