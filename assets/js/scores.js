var storedJsonString  = localStorage.getItem('scoreData');
var storedScoreData = JSON.parse(storedJsonString);
console.log(storedScoreData)
var highscoresEl = document.querySelector('#highscores');
var clearEl = document.querySelector('#clear')

if (storedScoreData) {
    var storedInitials = storedScoreData.initials;
    var storedTime = storedScoreData.time;

    var listItem = document.createElement('ol');
    listItem.textContent = `${storedInitials}: ${storedTime}`;

    highscoresEl.appendChild(listItem);

} else {
    highscoresEl.textContent = "No Scores Yet!";
}

clearEl.addEventListener("click", clear)

function clear() {
    highscoresEl.innerHTML = "No Scores Yet!";
    localStorage.clear(); 
}