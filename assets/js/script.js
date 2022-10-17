// TODO: MAKE QUESTIONS YOUR OWN 
// list of all questions, choices, and answers
var questionsDB = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];




// list of DOM elements to reference 

var start = document.getElementById('start-quiz');
var quizBox = document.getElementById('quiz-box');
var quizQuestions = document.getElementById('questions');
var rightWrong = document.getElementById('right-or-wrong');
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
let score = 0;
// introduces timerObject, sets the timer count to 50 seconds, as there are 5 questions, 5x10 is 50
var timerObject;
var timerCount = questionsDB.length * 10;

// Sets the start of the quiz with the start event listener for "click" - when user clicks start button
start.addEventListener("click", function () {
  score = 0;
  // shows the quiz 
  quizBox.style.display = 'block';
  // hides the instructions
  instructions.style.display = 'none';
  // starts the timer 
  timerObject = setInterval(function () {
    timerEl.textContent = "Timer: " + timerCount
    // if statement - if timer is more than 0, continue decrementing time by 1 or else call the scoreShow() function
    if(timerCount >0){
      timerCount--
    }else{
      scoreShow();
    }
  },1000)
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
}

// function to check user's answer - if it is correct or incorrect 
function checkAnswer() {
  // grab text of button 
  var optionText = this.textContent;

  // if answer is correct, add 20 points and show message "Correct! Great job!"
  if (optionText === questionsDB[currentQuestion].answer) {
    score += 20;
    rightWrong.textContent = "Correct! Great job!"
 
    
  }

  // Or else, if answer if incorrect decrement time by 5 seconds and score by 3, and show message, "Wrong answer!"
  else {
    timerCount-=5;
    score -=3;
    rightWrong.textContent = "Wrong answer! "
  
  }

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
currentScore.textContent = 'Score:' + score;
}

// Displays final score 
function scoreShow() {
  clearInterval(timerObject);
  quizBox.style.display = 'none';



  finalScoreDisplay.style.display = 'block';
  scoreDisplay.style.display = 'block';
  scoreDisplay.textContent = 'Score:' + score;

  // When quiz is over, clear timer 
clearTimer();
}



function clearTimer() {
    timerEl.style.display = 'none';
}



