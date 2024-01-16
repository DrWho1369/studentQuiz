import questions from './questions.js';

// Step 1 - make the start quiz button display the questions

var startEl = document.querySelector('#start')
var startScreenEl = document.querySelector('#start-screen')
var questionsEl = document.querySelector('#questions')
var questionTitleEl = document.querySelector('#question-title')
var choicesEl = document.querySelector('#choices')
var feedbackEl = document.querySelector('#feedback')
var endScreenEl = document.querySelector('#end-screen')

var currentQuestionIndex = 0;


startEl.addEventListener("click", displayQuiz)

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
        alert('correct!')
    } else {
        // remove 5 seconds from time
    }

    currentQuestionIndex++;

    // Display the next question (or end the quiz if there are no more questions)

    if (currentQuestionIndex < questions.length) {
        displayQuiz();
    } else {
        alert('End of the quiz');
        endScreenEl.classList.remove("hide")
        endScreenEl.classList.add("start")
    }
}


