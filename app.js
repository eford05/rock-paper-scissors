// Declare the computer and human scores
let computerScore = 0;
let humanScore = 0;

// Write the logic to get the computer choice
function getComputerChoice() {
  // Randomly generate one: rock, paper, scissors
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

  // Prompt player for correct choice of rock, paper, scissors
  do {
    playerChoice = prompt("Choose: rock, paper, scissors").toLowerCase();

    switch (playerChoice) {
      // Correct choices choice is true
      case "rock":
        choice = true;
        break;

      case "paper":
        choice = true;
        break;

      case "scissors":
        choice = true;
        break;

      // Alert of incorrect choice
      default:
        alert("Please enter: rock, paper, scissors.");
        break;
    }
  } while (!choice);

  return playerChoice;
}

// Write logic to play one round
function playRound(humanChoice, computerChoice) {
  console.log(`Player choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  // Tie
  if (humanChoice === computerChoice) {
    return console.log(
      `Tie! ${
        humanChoice[0].toUpperCase() + humanChoice.substring(1)
      } and ${computerChoice} is a stalemate!`
    );
  }

  // Winning conditions for player
  const WIN_CONDITIONS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Test results
  let winCondition = WIN_CONDITIONS[humanChoice];
  console.log(`Win condition key: ${humanChoice} `);
  console.log(`Win condition value: ${winCondition} `);
}

const HUMAN_SELECTION = getHumanChoice();
const COMPUTER_SELECTION = getComputerChoice();

// Test
playRound(HUMAN_SELECTION, COMPUTER_SELECTION);
