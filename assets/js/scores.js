var storedJsonString  = localStorage.getItem('scoreData');
var storedScoreData = JSON.parse(storedJsonString);

var highscoresEl = document.querySelector('#highscores');

if (storedScoreData && storedScoreData.score) {
    var storedInitials = storedScoreData.score.initials;
    var storedTime = storedScoreData.score.time;
    highscoresEl.innerHTML += `${storedInitials}: ${storedTime}`;
} else {
    highscoresEl.textContent = "No Scores Yet!";
}