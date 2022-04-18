/*jshint esversion: 6 */

// Wait until DOM is loaded before running the quiz
document.addEventListener('DOMContentLoaded', function() {});

const homeRef = document.querySelector('#home');
const playerNameRef = document.querySelector('#playername');
const quizRulesRef = document.querySelector('#quiz-rules');
const quizStartButtonRef = document.querySelector('#quiz-start');
const displayQuestionNumberRef = document.querySelector('#question-number');
const quizSummaryRef = document.querySelector('#summary');
const quizResultsRef = document.querySelector('#quiz-summary');
const quizRef = document.querySelector('#quiz');
const answerRef = document.querySelectorAll('.answer');
const questionRef = document.querySelector('#question');
const optionARef = document.querySelector('#option-a');
const optionBRef = document.querySelector('#option-b');
const optionCRef = document.querySelector('#option-c');
const optionDRef = document.querySelector('#option-d');
const submitBtnRef = document.querySelector('#submit');
const quizCompletionInfo = document.querySelector('#quiz-completion');
const form = document.querySelector('#playername-form');
let questions;
let listOfQuestions;

// Variables to track the quiz progress
let questionNumber = 1;
let currentQuiz = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  homeRef.style.display = 'none';
  quizRulesRef.classList.remove('hide-content');
  document.querySelector('#player').innerHTML = "Hi " + playerNameRef.value;
  event.preventDefault();
});

// Add event listener to the submit button to start the quiz 
quizStartButtonRef.addEventListener('click', function() {
  quizRulesRef.classList.add('hide-content');
  quizRef.classList.remove('hide-content');
});

//Pull questions from the questions.json file and start the quiz
fetch('./assets/data/questions.json')
  .then(res => res.json())
  .then(data => {
    questions = data;
    listOfQuestions = shuffle(questions);
    loadQuiz();
  })
  .catch((error) => {
    alert("Couldn't load questions");
  });

/**
 * Function to load the quiz
 * questions with 
 * posibble answers  
 */
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = listOfQuestions[currentQuiz];
  questionRef.innerText = currentQuizData.question;
  optionARef.innerText = currentQuizData.a;
  optionBRef.innerText = currentQuizData.b;
  optionCRef.innerText = currentQuizData.c;
  optionDRef.innerText = currentQuizData.d;
  displayQuestionNumberRef.innerHTML = `<h1>Question ${questionNumber} of ${questions.length}</h1>`;
}

// Credit to https://www.youtube.com/watch?v=LxQK4F0xwmU to randomize array elements
function shuffle(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * (i + 1));
    let randomQuestion = questions[i];
    questions[i] = questions[randomNumber];
    questions[randomNumber] = randomQuestion;
  }
  return questions;
}

/**
 * Function to deselect all answers
 * after the question is being displayed  
 */
function deselectAnswers() {
  answerRef.forEach((answerEl) => (
    answerEl.checked = false));
}

/**
 * Function to check which
 * answer was selected by the user
 */
function getSelected() {
  let answer;
  answerRef.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Add event listener to the answer submit button 
submitBtnRef.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    checkAnswer(answer);
    updateQuizStatistics();
    if (currentQuiz < questions.length) {
      loadQuiz();
    } else {
      displayQuizSummary();
    }
  }
});

/**
 * Function to update information
 * about correctly or incorrectly
 * answered question
 */
function updateQuizStatistics() {
  document.querySelector('#correct-answers').innerHTML = correctAnswers;
  document.querySelector('#correct-answers').style.color = "#088308";
  document.querySelector('#incorrect-answers').innerHTML = incorrectAnswers;
  document.querySelector('#incorrect-answers').style.color = "#D10F0F";
}

/**
 * Function to update quiz
 * about correctly or incorrectly
 * answered question
 */
function displayQuizSummary() {
  quizSummaryRef.classList.remove('hide-content');
  quizRef.classList.add('hide-content');
  if (score == 0) {
    quizCompletionInfo.innerHTML = "Oops..";
    quizResultsRef.innerHTML = `
      <h2>None of the questions were answered correctly.</h2>
<button onclick = "location.reload()">Try again</button>
      `;
  } else {
    quizResultsRef.innerHTML = `
      <h2>You have answered ${score} of ${questions.length} questions correctly.</h2>
<button onclick = "location.reload()">Try again</button>
      `;
  }
}

/**
 * Function to check 
 * the answer submitted by the user 
 * and update the quiz variables
 */
function checkAnswer(answer) {
  if (answer === questions[currentQuiz].correct) {
    score++;
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
  currentQuiz++;
  questionNumber++;
  return;
}