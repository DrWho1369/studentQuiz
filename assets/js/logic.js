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
 
    var currentQuestion = questions[currentQuestionIndex];
    var questionText = currentQuestion.question;
    var choices = currentQuestion.choices

    questionTitleEl.textContent = `Question: ${questionText}`;
    for (let choiceKey in choices) {
        const buttonHTML = `<button>${choiceKey}: ${choices[choiceKey]}</button>`;
        choicesEl.insertAdjacentHTML('beforeend', buttonHTML);
    }
    
    const buttons = questionElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    })
}

function handleButtonClick(event) {
    const selectedChoice = event.target.dataset.choice;
    const currentQuetion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;
    // You can add your logic based on the selected choice if needed
    // For example, check if it's the correct answer
    if (selectedChoice ===)
    // Move to the next question
    currentQuestionIndex++;

    // Display the next question (or end the quiz if there are no more questions)
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('End of the quiz');
    }
}
