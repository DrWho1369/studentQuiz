var storedJsonString  = localStorage.getItem('scoreData');
var storedScoreData = JSON.parse(storedJsonString);
console.log(storedScoreData)
var highscoresEl = document.querySelector('#highscores');
var clearEl = document.querySelector('#clear')

if (storedScoreData && storedScoreData.score) {

    for (var i = 0; i < storedScoreData.score.length; i++) {
        var currentScore = storedScoreData.score[i];

        var initials = currentScore.initials;
        var time = currentScore.time;

        var listItem = document.createElement('ol');
        listItem.textContent = `${initials}: ${time}`;

        highscoresEl.appendChild(listItem);
    }
} else {
    highscoresEl.textContent = "No Scores Yet!";
}

clearEl.addEventListener("click", clear)

function clear() {
    highscoresEl.innerHTML = "No Scores Yet!";
    localStorage.clear(); 
}