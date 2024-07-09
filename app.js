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
