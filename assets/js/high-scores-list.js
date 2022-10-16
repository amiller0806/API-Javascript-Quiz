// // // ------------------- DISPLAY HIGH SCORES---------------------------------------------
const myHighScoresList = document.getElementById("myHighScores");
const highScores = JSON.parse(localStorage.getItem("highScores"));

myHighScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`;
})
.join("");


// TODO: WRITE COMMENTS 
//TODO: REVIEW: https://www.youtube.com/watch?v=jfOv18lCMmw&t=24s 
