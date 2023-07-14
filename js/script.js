// Array of question

let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ]
  },
  

     {
     numb: 6,
     question: "String value must be enclosed within _______ when being assigned to variables",
     answer: "curly brackets",
  
     options: [
       "commas",
       "curly brackets",
       "quotes",
       "parenthesis"
    ]
   },


   {
    numb: 7,
    question: "Arrays in javascript can be used to store _______ ",
    answer: "all the above",
    options: [
      "number of strings",
      "other arrays",
      "booleans",
      "all the above"
   ]
  },


  {
    numb: 8,
    question: "The condition in an if statement is enclosed with _______ ",
    answer : "parenthesis",
    options: [
      "commas",
      "curly brackets",
      "quotes",
      "parenthesis"
   ]
  },

  {
    numb: 9,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer : "console.log",
    options: [
      "javascript",
      "terminal/bash",
      "for loops",
      "console.log"
   ]
  },


  {
    numb: 10,
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answer : "var",
    options: [
      "var",
      "let",
      "if ",
      "while"
   ]
  },
  

];

//Required elements from the html

const startButton = document.getElementById('start-btn');
const quizContainer = document.querySelector('.quiz_box');
const resultContainer = document.querySelector('.result_box');
const questionElement = document.querySelector('.que_text');
const optionList = document.querySelector('.option_list');
const nextButton = document.querySelector('.next_btn');
const restartButtons = document.querySelectorAll('.restart');
const quitButtons = document.querySelectorAll('.quit');
const timerElement = document.querySelector('.timer_sec');
const scoreForm = document.getElementById('score-form');
const finalScoreElement = document.getElementById('final-score');

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerId;
let selectedOptions = []; // Array to store the selected options

// Start quiz
startButton.addEventListener('click', startQuiz);

// Answer click event
optionList.addEventListener('click', handleAnswer);


// Next question
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  showQuestion();
  selectedOptions = []; // Reset the selected options array
});

// Restart buttons
restartButtons.forEach(button => {
  button.addEventListener('click', startQuiz);
});

// Quit buttons
quitButtons.forEach(button => {
  button.addEventListener('click', () => {
    location.reload();
  });
});

// Save score
scoreForm.addEventListener('submit', saveScore);

//  function to start the quiz
function startQuiz() {
  startButton.style.display = 'none';
  document.querySelector('.info_box').style.display = 'none';
  quizContainer.style.display = 'block';
  timerId = setInterval(updateTimer, 1000);

  showQuestion();
}
// function show answer 
function  showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionList.innerHTML = '';

    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      button.setAttribute('data-index', currentQuestionIndex)
      optionList.appendChild(button);
    });

    // Highlight the previously selected options
    optionList.querySelectorAll('.option').forEach((option, index) => {
      if (selectedOptions[currentQuestionIndex] === index) {
        option.classList.add('selected');
      }
    });
  } else {
    endQuiz();
  }
}

function handleAnswer(event) {
  let index = event.target.getAttribute('data-index');
    // Toggle the selected state of the option
    if (event.target.textContent===questions[index].answer){
  console.log('correct'); score++
    } else {
      
    }

    nextButton.style.display = 'block';
  }
// function to indicate end of quiz//
function endQuiz() {
  clearInterval(timerId);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  finalScoreElement.textContent = score;
}
// function for the timer//
function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerId);
    endQuiz();
  }
}
// functiion for enable me save my initial, scorer and save it to my local storage//
function saveScore(event) {
  event.preventDefault();
  const initials = document.getElementById('initials').value;

  // Save the initials and score to your desired storage or perform any other action
  console.log("Initials:", initials);
  console.log("Score:", score);
}
