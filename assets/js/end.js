const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';

const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];
const initialsInput = document.getElementById("initials");
// TODO: UPDATE SCORE? LIST MAKE IT WORK
// TODO: COMMENTS


 
function getNewScore(score) {
const updatedScore = JSON.parse(localStorage.getItem("updatedScore"));
if (score > 0 | score < 0) {
  updateScore(score, updatedScore);
}
  // showHighScores(); // TODO

};

function updateScore(score, updatedScore) {
  const initials = initialsInput.value;
  const scoreUpdate = { score: updatedScore, initials,};
  updatedScore.push(scoreUpdate, score);

}


function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  

  
  if (score > lowestScore) {
    saveHighScore(score, highScores);
  }

}

function saveHighScore(score, highScores) {
  // const initials = prompt('You got a highscore! Enter initials:');
  const name = initialsInput.value;
  const newScore = { score, name,};
  
  // 1. Add to list
  highScores.push(newScore);


  // 2. Sort the list
  highScores.sort((a, b) => b.score - a.score);
  
  // 3. Select new list
  highScores.splice(NO_OF_HIGH_SCORES);
  
  // 4. Save to local storage
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
};


checkHighScore(score);

  







// // references DOM elements 
// var initialsInput = document.getElementById("initials");
// var saveUserScore = document.getElementById("saveUserScore");
// var finalScore = document.getElementById("final-score");

// // gets updatedScore from local storage
// const updatedScore = localStorage.getItem("updatedScore");
// // gets highScores from local storage by parsing the highscores data from local storage, 
// // turning data into a Javascript object
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// // declares maximum high scores as 5 
// const MAX_HIGH_SCORES = 5;


// //  keyup indicates which key is pressed 
// initialsInput.addEventListener("keyup", function () {
//   //  if user doesn't input initials, option to save score is disabled 
//   saveUserScore.disabled = !initialsInput.value;

// });

// function saveHighScores(event) {
//   event.preventDefault();



//   // declares const variable, score to be user's updated score along with their initials 
//   const score= {
//     score: updatedScore,
//     name: initialsInput.value,
 
//   };

//   highScores.push(score);
//   highScores.sort((a, b) => b.score - a.score);
//   highScores.splice(5);

//   localStorage.setItem('highScores', JSON.stringify(highScores));


// };



//   //  Adds user's current score to end of array and returns new length 
//   // highScores.unshift(score);

// // got from https://www.w3schools.com/HOWTO/howto_js_trigger_button_enter.asp 
// // Execute a function when the user presses a key on the keyboard
// initialsInput.addEventListener("keypress", function (event) {
//   // If  user presses "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("saveUserScore").click();
//   }
// });







