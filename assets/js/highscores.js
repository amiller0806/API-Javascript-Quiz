
// TODO: 1. Understand the above code, take VERY BRIEF notes on your computer just for COMPREHENSION
// https://www.w3schools.com/jsref/jsref_sort.asp - READ THIS AND UNDERSTAND
// TODO: https://www.w3schools.com/jsref/jsref_splice.asp - JUST READ THIS 
// TODO: ADD COMMENTS DO NOT EDIT THE CONTENT, perhaps change max scores and splice! Change sort from arrow function to regular 
// TODO: function
// TODO:  2. display high scores

// TODO: 

// https://www.youtube.com/watch?v=DFhmNLKwwGw 
// https://www.youtube.com/watch?v=jfOv18lCMmw

var initialsInput = document.getElementById('initials');
var saveUserScore = document.getElementById('saveUserScore');
var finalScore = document.getElementById('final-score');
// var highScores = document.getElementById('high-score');
const updatedScore = localStorage.getItem('updatedScore');
const highScores = JSON.parse (localStorage.getItem('highScores')) || [];;


const MAX_HIGH_SCORES = 5;


// console.log (updatedScore);

// keyup indicates which key is pressed 
initialsInput.addEventListener('keyup', function () {
  // console.log(initialsInput.value);
  saveUserScore.disabled = !initialsInput.value;

});


 function saveHighScores(event) {
  event.preventDefault();
 const score = {
  score: updatedScore,
  name: initialsInput.value
 };
 
 highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);
  localStorage.setItem('highScores', JSON.stringify(highScores));
 //  window.location.assign('/');

};




// got from https://www.w3schools.com/HOWTO/howto_js_trigger_button_enter.asp 
  // Execute a function when the user presses a key on the keyboard
initialsInput.addEventListener("keypress", function(event) {
  // If  user presses "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
      // Trigger the button element with a click
  document.getElementById("saveUserScore").click();
    
  }

  


 

});

 








  






  


  
  

//  saveHighScores(event);

//  window.location.assign('/');



