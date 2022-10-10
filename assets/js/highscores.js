// https://www.youtube.com/watch?v=DFhmNLKwwGw 
// https://www.youtube.com/watch?v=jfOv18lCMmw

var initialsInput = document.getElementById('initials');
var saveUserScore = document.getElementById('saveUserScore');
var finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// keyup indicates which key is pressed 
initialsInput.addEventListener('keyup', function () {
  console.log(initialsInput.value);
  saveUserScore.disabled = !initialsInput.value;
});

function saveHighScore() {
  console.log("clicked the save button");
}