import questions from './questions.js';

// Step 1 - make the start quiz button display the questions

var startEl = document.querySelector('#start')
var startScreenEl = document.querySelector('#start-screen')
var questionsEl = document.querySelector('#questions')
var questionTitleEl = document.querySelector('#question-title')
var choicesEl = document.querySelector('#choices')

var currentQuestionIndex = 0;

startEl.addEventListener("click", displayQuiz)

function displayQuiz() {
    // Step 1 change the CSS
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide")
    questionsEl.classList.add("start")

    

    // Now pull in the first question from questions and iterate over each one whilst count is less than 
    // do {
        
    
    var currentQuestion = questions[currentQuestionIndex];
    var questionText = currentQuestion.question;
    var choices = currentQuestion.choices

    questionTitleEl.textContent = `Question: ${questionText}`;
    for (let choiceKey in choices) {
        const buttonHTML = `<button>${choiceKey}: ${choices[choiceKey]}</button>`;
        choicesEl.insertAdjacentHTML('beforeend', buttonHTML);
    }
    
    // } while (count < questions.length);
}

