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
    // Inform player of tie
    console.log(
      `Tie! ${
        humanChoice[0].toUpperCase() + humanChoice.substring(1)
      } and ${computerChoice} is a stalemate! No points`
    );
    return "tie";
  }

  // Winning conditions for player
  const WIN_CONDITIONS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Test results
  let winCondition = WIN_CONDITIONS[humanChoice];

  // Player win
  if (winCondition === computerChoice) {
    // Inform player of win
    console.log(
      `${
        humanChoice[0].toUpperCase() + humanChoice.substring(1)
      } beats ${computerChoice}! You win!`
    );
    return "player";

    // Computer win
  } else {
    // Inform player of loss
    console.log(
      `${
        computerChoice[0].toUpperCase() + computerChoice.substring(1)
      } beats ${humanChoice}! You lose!`
    );
    return "computer";
  }
}

// Logic for game of 5 rounds
function playGame() {
  // Declare playRound and score variables inside playGame
  // Declare the computer and human scores
  let computerScore = 0;
  let humanScore = 0;
  let gameOver = false;
  let i = 0;

  // Iterate through the game 5 times, but if game is tied continue until tie breaker
  do {
    i++;
    const HUMAN_SELECTION = getHumanChoice();
    const COMPUTER_SELECTION = getComputerChoice();

    // Announce the game round
    if (i > 6 && humanScore === computerScore) {
      console.log("Tie breaker round!");
      console.log("May the best player win.");
      console.log(`Round ${i} start!`);
    } else {
      console.log(`Round ${i} start!`);
    }

    let winner = playRound(HUMAN_SELECTION, COMPUTER_SELECTION);

    // Apply Scores
    if (winner === "player") {
      humanScore++;
    }

    if (winner === "computer") {
      computerScore++;
    }

    // Game Over Condition -> Must have one winner no ties!
    if (i > 5 && humanScore !== computerScore) {
      gameOver = true;
    }
  } while (!gameOver);

  // Determine the game winner
  if (humanScore > computerScore) {
    console.log("Player Wins!");
  } else {
    console.log("Computer Wins!");
  }
  console.log("Final Scores: ");
  console.log(`Player: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

playGame();
