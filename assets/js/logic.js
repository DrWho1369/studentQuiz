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
var secondsLeft = 30;
var timerInterval;
var scoreData = {}

startEl.addEventListener("click", displayQuiz)
submitEl.addEventListener("click", storeScore)

function displayQuiz() {
    // Step 1 change the CSS
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
    console.log(buttons)
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
    
    const selectedChoice = event.target.firstChild.data[0];
    console.log(selectedChoice)
    const currentQuestion = questions[currentQuestionIndex];

    const correctAnswer = currentQuestion.correctAnswer;


    if (selectedChoice === correctAnswer) {
        
        const pTag = document.createElement('p');
        pTag.textContent = 'Correct!';
        choicesEl.insertAdjacentElement('afterend', pTag);

    } else {
        secondsLeft -= 5;

        const pTag = document.createElement('p');
        pTag.textContent = 'Wrong!';
        choicesEl.insertAdjacentElement('afterend', pTag);

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