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







var start = document.getElementById('start-quiz');
var quizBox = document.getElementById('quiz-box');
var quizQuestions = document.getElementById('questions');
var rightWrong = document.getElementById('right-or-wrong');
var option1 = document.getElementById('option-1');
var option2 = document.getElementById('option-2');
var option3 = document.getElementById('option-3');
var option4 = document.getElementById('option-4');
// var option5 = document.getElementById('option-5');
var timerEl = document.getElementById('timer');
var instructions = document.getElementById('instructions');
var submitInitialsEl = document.querySelector('#btn btn-success');
var scoreDisplay = document.getElementById('final-score');
var currentQuestion = 0;
quizBox.style.display = 'none';
scoreDisplay.style.display = 'none';
var score = 0;

var timerObject;
var timerCount = questionsDB.length * 10;

start.addEventListener("click", function (e) {
  quizBox.style.display = 'block';
  instructions.style.display = 'none';
  timerObject = setInterval(function () {
    timerEl.textContent = "Timer: " + timerCount
    if(timerCount >0){
      timerCount--
    }else{
      scoreShow()
    }
  },1000)
  console.log(questionsDB);
  displayQuestions();
});

option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
// option5.addEventListener("click", checkAnswer);

function displayQuestions() {
  quizQuestions.textContent = questionsDB[currentQuestion].title;
  option1.textContent = questionsDB[currentQuestion].choices[0];
  option2.textContent = questionsDB[currentQuestion].choices[1];
  option3.textContent = questionsDB[currentQuestion].choices[2];
  option4.textContent = questionsDB[currentQuestion].choices[3]
  option5.textContent = questions[currentQuestion].choices[4]
}
function checkAnswer() {
  // grab text of button 
  var optionText = this.textContent;
  console.log(optionText);
  if (optionText === questionsDB[currentQuestion].answer) {
    score += 20;
    rightWrong.textContent = "Correct! Great job!"
    
  }
  else {
    timerCount-=5;
    score -=3;
    rightWrong.textContent = "Wrong answer. "
  }
  if (currentQuestion < questionsDB.length - 1) {
    currentQuestion++;
    displayQuestions();
  }
  else {
      localStorage.setItem('mostRecentScore', score);
    scoreShow();

  }
}
function scoreShow() {
  clearInterval(timerObject);
  quizBox.style.display = 'none';
  scoreDisplay.style.display = 'block';
  // timerCount.style.display = 'none';
clearTimer();
}


function clearTimer() {
    timerEl.style.display = 'none';
}





// TODO: Ensure points system is correct 
// TODO: Comments

// TODO: LOCAL STORAGE - save it in script.js, have it in high scores: saving initials and score
// TODO: Display score 
//TODO: Add CSS file
// TODO: Write instructions for quiz
// TODO: End quiz?