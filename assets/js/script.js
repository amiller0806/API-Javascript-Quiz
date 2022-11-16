// list of all questions, choices, and answers
var questionsDB = [
  {
    title: 'Which of the following is correct about JavaScript?:',
    choices: ['JavaScript is a lightweight, interpreted programming language.',
      'JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.',
      'The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.',
      'All of the above'],
    answer: 'All of the above',
  },
  {
    title: 'Which of the following function of Array object joins all elements of an array into a string?',
    choices: ['concat()', 'join()', 'pop()', 'map()'],
    answer: 'join()',
  },
  {
    title: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
    choices: [
      'shift()',
      'reverse()',
      'slice()',
      'some()',
    ],
    answer: 'slice()',
  },
  {
    title:
      'Which of the following joins two or more strings or arrays and returns a new string or array, without changing the existing strings or arrays?',
    choices: ['splice()', 'merge()', 'push()', 'concat()'],
    answer: 'concat()',
  },
  {
    title:
      'How should you begin a Javascript document?',
    choices: ['Declaring variables',
      'Declaring functions',
      'Declaring all the algorithms you will use ',
      'Calling the functions you will use'],
    answer: 'Declaring variables',
  },
];




// list of DOM elements to reference 

var start = document.getElementById('start-quiz');
var quizBox = document.getElementById('quiz-box');
var quizQuestions = document.getElementById('questions');
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');


var option1 = document.getElementById('option-1');
var option2 = document.getElementById('option-2');
var option3 = document.getElementById('option-3');
var option4 = document.getElementById('option-4');
var option5 = document.getElementById('option-5');
var timerEl = document.getElementById('timer');
var instructions = document.getElementById('instructions');
var myQuizScore = document.getElementById('quiz-score');
var submitInitialsEl = document.querySelector('#btn btn-success');
const scoreDisplay = document.getElementById('score');
var finalScoreDisplay = document.getElementById('final-score');
var currentScore = document.getElementById('current-score');
var currentQuestion = 0;


// On the first page of the quiz, the quiz, final score, and updated score (scoreDisplay) will not be shown
// Since user has not done the quiz yet, score is 0 at start 
quizBox.style.display = 'none';
finalScoreDisplay.style.display = 'none';
scoreDisplay.style.display = 'none';
currentScore.style.display = "none";
timerEl.style.display = "none";
let score = 0;
// introduces timerObject, sets the timer count to 50 seconds, as there are 5 questions, 5x10 is 50
var timerObject;
var timerCount = questionsDB.length * 10;

// Sets the start of the quiz with the start event listener for "click" - when user clicks start button
start.addEventListener("click", function () {
  score = 0;
  // shows the timer
  timerEl.style.display = "block";
  // shows the quiz 
  quizBox.style.display = 'block';
  // hides the instructions
  instructions.style.display = 'none';
  // starts the timer 
  timerObject = setInterval(function () {
    timerEl.textContent = "Timer: " + timerCount
    // if statement - if timer is more than 0, continue decrementing time by 1 or else call the scoreShow() function
    if (timerCount > 0) {
      timerCount--
    } else {
      scoreShow();
    }
  }, 1000)
  // calls the displayQuestions() function, shows questions
  displayQuestions();
});

// event listeners for option buttons - when clicked, checkANswer function is activated 
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
option5.addEventListener("click", checkAnswer);

// function to show the quiz questions and choices 
function displayQuestions() {

  quizQuestions.textContent = questionsDB[currentQuestion].title;
  option1.textContent = questionsDB[currentQuestion].choices[0];
  option2.textContent = questionsDB[currentQuestion].choices[1];
  option3.textContent = questionsDB[currentQuestion].choices[2];
  option4.textContent = questionsDB[currentQuestion].choices[3]
  option5.textContent = questionsDB[currentQuestion].choices[4]
  incorrect.style.display = "block";
  correct.style.display = "block";

}

// function to check user's answer - if it is correct or incorrect 
function checkAnswer() {
  // grab text of button 
  var optionText = this.textContent;

  // if answer is correct, add 20 points and show message "Correct! Great job!"
  if (optionText === questionsDB[currentQuestion].answer) {
    score += 20;
    // correct.style.display = "block";
    correct.textContent = "Correct! Great job!";
    



  }

  // Or else, if answer if incorrect decrement time by 5 seconds and score by 3, and show message, "Wrong answer!"
  else {
    timerCount -= 5;
    score -= 3;
    incorrect.textContent = "Wrong answer!";
  
    // correct.textContent = none

  };
setTimeout(function(){
  correct.textContent = "";
  incorrect.textContent = "";
  correct.style.display = "none";
  incorrect.style.display = "none";

},1500)
  // If there are more questions left over, display the next question
  if (currentQuestion < questionsDB.length - 1) {
    currentQuestion++;
    displayQuestions();

  }

  // If there are no more questions left over, display the final score
  else {
    localStorage.setItem('updatedScore', 'score');
    scoreShow();

  }
  myScore();
}

// Displays current score 
function myScore() {
  currentScore.style.display = 'block';
  currentScore.textContent = 'SCORE:' + score;
}

// Displays final score 
function scoreShow() {
  clearInterval(timerObject);
  quizBox.style.display = 'none';



  finalScoreDisplay.style.display = 'block';
  scoreDisplay.style.display = 'block';
  scoreDisplay.textContent = 'SCORE:' + score;

  // When quiz is over, clear timer 
  clearTimer();
}



function clearTimer() {
  timerEl.style.display = 'none';
}


