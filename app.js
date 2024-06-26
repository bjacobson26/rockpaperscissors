var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var playerScoreDisplay = document.getElementById("playerScore");
var computerScoreDisplay = document.getElementById("computerScore");
var resultsDisplay = document.getElementById("results");

var playerScore = 0;
var computerScore = 0;

rock.addEventListener("click", function() {
  playRound("rock");
});

paper.addEventListener("click", function() {
  playRound("paper");
});

scissors.addEventListener("click", function() {
  playRound("scissors");
});


function playRound(playerSelection) {
  var computerSelection = computerPlay();

  if(playerSelection === computerSelection) {
    tie(computerSelection);
  } else if(playerSelection === "rock" && computerSelection === "scissors") {
    playerWin(computerSelection);
  } else if(playerSelection === "rock" && computerSelection === "paper") {
    computerWin(computerSelection);
  } else if(playerSelection === "paper" && computerSelection === "rock") {
    playerWin(computerSelection);
  } else if(playerSelection === "paper" && computerSelection === "scissors") {
    computerWin(computerSelection);
  } else if(playerSelection === "scissors" && computerSelection === "paper") {
    playerWin(computerSelection);
  } else if(playerSelection === "scissors" && computerSelection === "rock") {
    computerWin(computerSelection);
  }
}

function computerPlay() {
  var choices = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  return choices[random];
}

function tie(computerSelection) {
  resultsDisplay.textContent = `Computer chose ${computerSelection}. It's a tie!`;
}

function playerWin(computerSelection) {
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
  resultsDisplay.textContent = `Computer chose ${computerSelection}. You win!`;
}

function computerWin(computerSelection) {
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
  resultsDisplay.textContent = `Computer chose ${computerSelection}. You lose!`;
}
