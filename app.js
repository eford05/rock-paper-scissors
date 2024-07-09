// Human and Computer Score
let humanScore = 0;
let computerScore = 0;

// Write a function that returns "rock", "paper", "scissors" for computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  let strChoice;

  switch (computerChoice) {
    case 1:
      strChoice = "rock";
      break;

    case 2:
      strChoice = "paper";
      break;

    default:
      strChoice = "scissors";
  }

  return strChoice;
}

// Write logic for human choice
function getHumanChoice() {
  let playerChoice;
  let choice = false;

  // Prompt player for choice of rock, paper, scissors
  do {
    playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();

    // Check choices, if correct choice is true break
    switch (playerChoice) {
      case "rock":
        choice = true;
        break;

      case "paper":
        choice = true;
        break;

      case "scissors":
        choice = true;
        break;

      // Alert player to choose correctly
      default:
        alert("Please enter: rock, paper, or scissors.");
        break;
    }
  } while (!choice);

  return playerChoice;
}

// Create function to play single round
function playRound(humanChoice, computerChoice) {
  // Tie Condition
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    console.log(`Tie! ${humanChoice} and ${computerChoice} is a stalemate!`);
    return;
  }

  // Winning Conditions
  // Rock beats scissors
  // Paper beats rock
  // Scissors beat paper
  const WIN_CONDITION = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const WIN_RESULT = WIN_CONDITION.hasOwnProperty(humanChoice);
  if (WIN_CONDITION === false) {
    computerScore++;
    console.log(`Sorry you lose ${computerChoice} beats ${humanChoice}`);
  } else {
    humanScore++;
    console.log(
      `You win! ${
        humanChoice[0].toUpperCase() + humanChoice.substring(1)
      } beats ${computerChoice}`
    );
  }

  return;
}

const HUMAN_SELECTION = getHumanChoice();
const COMPUTER_SELECTION = getComputerChoice();

// Play the game with 5 rounds declare winner for best out 5 games
function playGame() {
  // Loop through game 5 times
  for (let i = 1; i < 6; i++) {
    playRound(HUMAN_SELECTION, COMPUTER_SELECTION);
  }

  // Declare winner
  if (humanScore === computerScore) {
    console.log("Amazing! You tied with the computer 5 times!");
    console.log("What are the odds of that?!");
  } else if (humanScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }

  console.log("Score:");
  console.log(`Player: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

playGame();
