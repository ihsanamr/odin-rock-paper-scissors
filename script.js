let winnerText = document.querySelector(".rule");
let choiceText = document.querySelector(".choice-instructions");

let playerScoreOutput = document.querySelector("#player-score-place");
let computerScoreOutput = document.querySelector("#computer-score-display");
let gamesWonOutput = document.querySelector("#games-won");

let playerScore = 0;
let computerScore = 0;

let gamesWon = 0;
let isOver = false;

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);

  return choices[choice];
}

function playRound(playerChoice, computerChoice) {
  let winner = "";

  if (isOver) {
    isOver = false;

    playerScore = 0;
    computerScore = 0;

    playerScoreOutput.textContent = playerScore;
    computerScoreOutput.textContent = computerScore;
  }

  if (playerChoice === computerChoice) {
    winner = "tie";
    winnerText.textContent = "IT'S A TIE!";
    choiceText.textContent = `You both chose [${playerChoice.toUpperCase()}]`;
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    winner = "computer";
    computerScore++;
    winnerText.textContent = "COMPUTER WIN THIS ROUND!";
    choiceText.textContent = `Computer chose [${computerChoice.toUpperCase()}] and you chose [${playerChoice.toUpperCase()}]`;
  } else {
    winner = "player";
    playerScore++;
    winnerText.textContent = "YOU WIN THIS ROUND!";
    choiceText.textContent = `You chose [${playerChoice.toUpperCase()}] and computer chose [${computerChoice.toUpperCase()}]`;
  }

  playerScoreOutput.textContent = playerScore;
  computerScoreOutput.textContent = computerScore;

  if (playerScore === 5) {
    winnerText.textContent =
      "YOU WINS THIS GAME! (CLICK THE ICON TO PLAY AGAIN!)";
    choiceText.textContent = `You chose [${playerChoice.toUpperCase()}] and computer chose [${computerChoice.toUpperCase()}]`;
    isOver = true;

    gamesWonOutput.textContent = ++gamesWon;
  } else if (computerScore === 5) {
    winnerText.textContent =
      "COMPUTER WINS THE GAME! (CLICK THE ICON TO PLAY AGAIN!)";
    choiceText.textContent = `Computer chose [${computerChoice.toUpperCase()}] and you chose [${playerChoice.toUpperCase()}]`;
    isOver = true;
  }
}

const buttons = document.querySelector(".buttons");
console.log(buttons);

buttons.addEventListener("click", (event) => {
  //   console.log(event);

  let playerChoice = event.target.parentElement.id;
  //   console.log(playerChoice);
  let computerChoice = getComputerChoice();
  //   console.log(computerChoice);

  playRound(playerChoice, computerChoice);
});
