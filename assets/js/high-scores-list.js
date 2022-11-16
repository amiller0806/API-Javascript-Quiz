// get reference to high scores list 
const highScoresList = document.getElementById("myHighScores");


// get high scores out of local storage 
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// innerHTML returns the HTML content (innerHTML) of the high scores list
highScoresList.innerHTML = highScores
// map() creates a new array from calling a function for every array element, in this case each high score/username pair 
// https://www.w3schools.com/jsref/jsref_map.asp 
.map(score => {
    // creates a list of high-scores that has both the username and the user's score 
    return `<li id= "userInitials" class="high-score">${score.name} <li id = "userHighScore" class="high-score"> ${score.score}</li> </li>`;

})

// join () creates and returns new string by concatenating (merging) all elements in high scores list separated by a separator 
// (in this case bullet points)
.join("");
