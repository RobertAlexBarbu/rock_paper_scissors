function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3)
    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    console.log(`You chose: ${playerChoice}\nThe computer chose: ${computerChoice}`);
    if(playerChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                return "Draw! Both you and the computer chose the same thing";
                break;
            case "paper":
                return "You Lost! Paper beats Rock";
                break;
            case "scissors":
                return "You Won! Rock beats Scissors";
                break;
        }
    }
    if(playerChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                return "You Won! Paper beats Rock";
                break;
            case "paper":
                return "Draw! Both you and the computer chose the same thing";
                break;
            case "scissors":
                return "You Lost! Scissors beats Paper"
                break;
        }
    }
    if(playerChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                return "You Lost! Rock beats Scissors";
                break;
            case "paper":
                return "You Won! Scissors beats Paper";
                break;
            case "scissors":
                return "Draw! Both you and the computer chose the same thing";
                break;
        }
    }
    return "Something went wrong!";
}
let playerChoice = window.prompt("Rock, Paper or Scissors?");
let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));