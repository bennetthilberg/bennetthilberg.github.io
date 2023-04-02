let gameOver = false;

function playGameCommanded(playerSelected){
  if(gameOver == false){
    playerSelection = playerSelected;
    game();
  }
}

function checkForWinner(){
  if(playerScore == 5 || cpuScore == 5){
    gameOver = true;
  }
}

let info = document.getElementById("info");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerScoreDisplay = document.getElementById("playerScore");
let cpuScoreDisplay = document.getElementById("cpuScore")

let playerSelection;
let computerSelection;

function playRound() {
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    return "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    checkForWinner();
    if(gameOver == true){return "PLAYER WINS";}
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    cpuScore++;
    checkForWinner();
    if(gameOver == true){return "CPU WINS";}
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    cpuScore++;
    checkForWinner();
    if(gameOver == true){return "CPU WINS";}
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    checkForWinner();
    if(gameOver == true){return "PLAYER WINS";}
    return "You Win! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    cpuScore++;
    checkForWinner();
    if(gameOver == true){return "CPU WINS";}
    return "You Lose! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    checkForWinner();
    if(gameOver == true){return "PLAYER WINS";}
    return "You Win! Scissors beats Paper!";
  }
  else{
    return "Try again!";
  }
}

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice == 0) {
    return "rock";
  } else if (compChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function game(){
  info.textContent = playRound();
  playerScoreDisplay.textContent = playerScore;
  cpuScoreDisplay.textContent = cpuScore;
}

let playerScore = 0;
let cpuScore = 0;

rock.addEventListener("click", () => playGameCommanded("rock"));
paper.addEventListener("click", () => playGameCommanded("paper"));
scissors.addEventListener("click", () => playGameCommanded("scissors"));