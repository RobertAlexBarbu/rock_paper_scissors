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
                score--;
                return "You Lost! Paper beats Rock";
                break;
            case "scissors":
                score++;
                return "You Won! Rock beats Scissors";
                break;
        }
    }
    if(playerChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                score++;
                return "You Won! Paper beats Rock";
                break;
            case "paper":
                return "Draw! Both you and the computer chose the same thing";
                break;
            case "scissors":
                score--;
                return "You Lost! Scissors beats Paper"
                break;
        }
    }
    if(playerChoice == "scissors") {
        switch(computerChoice) {
            case "rock":
                score--;
                return "You Lost! Rock beats Scissors";
                break;
            case "paper":
                score++;
                return "You Won! Scissors beats Paper";
                break;
            case "scissors":
                return "Draw! Both you and the computer chose the same thing";
                break;
        }
    }
    return "Something went wrong!";
}

function game() {
    for(let i=1; i<=5; i++) {
        let playerChoice = window.prompt("Rock, Paper or Scissors?");
        let computerChoice = getComputerChoice();
        console.log(`\nROUND ${i}:`)
        console.log(playRound(playerChoice, computerChoice));
    }
    switch(true) {
        case score==0:
            console.log("\nFINAL RESULT: Draw! No one won");
            break;
        case score < 0:
            console.log("\nFINAL RESULT: You Lost! The computer won");
            break;
        case score > 0:
            console.log("\nFINAL RESULT: You Won!")
            break;
    }
    console.log(`FINAL SCORE: ${score}`);
}

let score=0;
game();
