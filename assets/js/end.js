// Set max number of high scores as 10 and const variable HIGH_SCORES to highScores
const MAX_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';

// Retrieves high scores from local storage and 
const stringHighScores = localStorage.getItem(HIGH_SCORES);
// Parses the high scores, if expression on left is undefined or null, returns expression on the right: an array of high scores
const highScores = JSON.parse(stringHighScores) ?? [];
// Getting the DOM element, initials 
const initialsInput = document.getElementById("initials");






// Checks to see if the score is a high score 
function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[MAX_HIGH_SCORES - 1]?.score ?? 0;
  

  
  if (score > lowestScore) {
    saveHighScore(score, highScores);
  }

}
// Function to save the high score in local storage
function saveHighScore(score, highScores) {
  const name = initialsInput.value;
  const myNewScore = { score, name,};
  
  // 1. Add to list of high scores 
  highScores.push(myNewScore);

  // 2. Sort the high scores 
  highScores.sort((a, b) => b.score - a.score);
  
  // 3. Select new list
  highScores.splice(MAX_HIGH_SCORES);
  
  // 4. Save to local storage
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
};

// Calling the checkHighScore(score) function
checkHighScore(score);

  
