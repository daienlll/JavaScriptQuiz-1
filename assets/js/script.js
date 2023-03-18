var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var questions = [
  {
      "numb": 1,
      "question": "What is Javascript?",
      "answer": 0,
      "options": []
  },
  {
      "numb": 2,
      "question": 0,
      "answer": 0,
      "options": []
  },    {
      "numb": 3,
      "question": 0,
      "answer": 0,
      "options": []
  },    {
      "numb": 4,
      "question": 0,
      "answer": 0,
      "options": []
  },    {
      "numb": 5,
      "question": 0,
      "answer": 0,
      "options": []
  }
];

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 120;
  showQuetions(0)
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      timerCount = 0
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

function init(){
if (localStorage.getItem("score") === null) {
  localStorage.setItem("score") = []
}
showhs()
}

function showhs() {
  for(i=0; i < localStorage.getItem("score").length; i++){
    
  }
};

function savescore() {
  localStorage.setItem("score") = localStorage.getItem("score").append({"initals": 0})
}

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // todo
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);




function showQuetions(index){
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
  // clearInterval(counter); //clear counter
  // clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items
  
  if(userAns == correcAns){ //if user selected option is equal to array's correct answer
      userScore += 1; 
  }else{
      counter -= 5;
  }
  for(i=0; i < allOptions; i++){
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  que_count++; //increment the que_count value
  que_numb++; //increment the que_numb value
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
}
