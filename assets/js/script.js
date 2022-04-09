/* Quiz questions */
const data = [{
    question: "Which is the Arduino Board with most number of Pins?",
    a: 'Arduino Nano',
    b: 'Arduino Lillypad',
    c: 'Arduino Mega 2560',
    d: 'Arduino MKR 1000',
    correct: 'c',
},
{
    question: "How to get analog values from an analog pins?",
    a: 'analogWrite()',
    b: 'analogRead()',
    c: 'digitalRead()',
    d: 'Serial.read()',
    correct: 'b',
},
{
    question: "From which language was the Arduino Programming Language derived from?",
    a: 'Python',
    b: 'C/C++',
    c: 'Java',
    d: 'Swift',
    correct: 'b',
},
{
    question: "Which type of pins can be used to control Servo Motors?",
    a: 'All Digital Pins',
    b: 'UART Pins',
    c: 'Digital Pins with PWM Out',
    d: 'Analog Pins',
    correct: 'c',
},
{
    question: "An output is something that happens when a circuit is in use.  An example of an output is:",
    a: 'Light flashing',
    b: 'Buzzer sounding',
    c: 'Temperature being given',
    d: 'All of the answers are correct',
    correct: 'd',
},
{
    question: "In the case of Arduino UNO, which pin is connected internally to the onboard LED?",
    a: 'Pin 10',
    b: 'Pin 6',
    c: 'Pin 11',
    d: 'Pin 13',
    correct: 'd',
},
{
    question: "What is the value of Crystal Oscillator in Arduino UNO?",
    a: '1024 Khz',
    b: '4 MHz',
    c: '700 Mhz',
    d: '16 Mhz',
    correct: 'd',
},
{
    question: "What are Arduino “Shields”?",
    a: 'Shields are water/fire resistant ceramic coating for Arduino',
    b: 'A Hard covering held by straps or a handle attached on one side, used as a protection against blows or physical stress.',
    c: 'Specialized boards with a particular function where you can connect your Arduino.',
    d: 'Shields are protective covers to prevent Arduino from physical damage.',
    correct: 'c',
},
{
    question: "What are the two basics functions used while programming an Arduino Board?",
    a: 'delay() & start()',
    b: 'loop() & setup()',
    c: 'start() & finish()',
    d: 'digitalread() & analogread()',
    correct: 'b',
},
{
    question: "What is the full form of GPIO ?",
    a: 'General Practice Internal Operator',
    b: 'Grand Programmer Initial Order',
    c: 'General Purpose Input Output',
    d: 'General Purpose Internal Object',
    correct: 'c',
},
]
const homeRef = document.getElementById('home');
const playerNameRef = document.getElementById('playername');
const quizRulesRef = document.getElementById('quiz-rules');
const quizStartButtonRef = document.getElementById('quiz-start');
const displayQuestionNumberRef = document.getElementById('question-number');
const quizSummaryRef = document.getElementById('summary');
const quizResultsRef = document.getElementById('quiz-summary');
const quizRef = document.getElementById('quiz');
const answerElsRef = document.querySelectorAll('.answer');
const questionElRef = document.getElementById('question');
const optionARef = document.getElementById('option-a');
const optionBRef = document.getElementById('option-b');
const optionCRef = document.getElementById('option-c');
const optionDRef = document.getElementById('option-d');
const submitBtnRef = document.getElementById('submit');
const form = document.getElementById('playername-form');

/* Variables to track quiz progress */

let questionNumber = 1;
let currentQuiz = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

/* Set array with randomized questions for each quiz - question will not be displayed in the same sequence as in previous quiz*/

let randomArrayItems = shuffleArray(data);

    form.addEventListener('submit', function (event) {
        console.log(event);
        homeRef.style.display = 'none';
    quizRulesRef.classList.remove('hide-content');
    document.getElementById('player').innerHTML = "Hi " + playerName.value;
    console.log('Username', playerName.value);
    event.preventDefault();
});

/* Add event listener to the submit button to start quiz */ 

quizStartButtonRef.addEventListener('click', function () {
    quizRulesRef.classList.add('hide-content');
    quizRef.classList.remove('hide-content');
});

/* credit to https://www.youtube.com/watch?v=LxQK4F0xwmU to randomize array elements*/

function shuffleArray(arrayToShuffle) {
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
        let randomPosition = Math.floor(Math.random() * (i + 1));
        let temp = arrayToShuffle[i];
        arrayToShuffle[i] = arrayToShuffle[randomPosition];
        arrayToShuffle[randomPosition] = temp;
    }
    return arrayToShuffle;
}