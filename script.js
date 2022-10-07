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

function playRound(e) {
    if(playerScore < 3 && computerScore < 3) {

        messageBox.appendChild(lastRound);
        messageBox.appendChild(playerChoiceDiv);
        messageBox.appendChild(computerChoiceDiv)
        messageBox.appendChild(resultDiv);

        const playerChoice = e.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playerChoiceDiv.textContent = `You chose: ${playerChoice}`;
        computerChoiceDiv.textContent = `Computer chose: ${computerChoice}`;

        if(playerChoice === "rock") {
            switch(computerChoice) {
                case "rock":
                    resultDiv.textContent = "Draw! Both you and the computer chose the same thing";
                    break;
                case "paper":
                    computerScore++;
                    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
                    resultDiv.textContent = "You Lost! Paper beats Rock";
                    break;
                case "scissors":
                    playerScore++;
                    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
                    resultDiv.textContent = "You Won! Rock beats Scissors";
                    break;
            }
        }
        if(playerChoice === "paper") {
            switch(computerChoice) {
                case "rock":
                    playerScore++;
                    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
                    resultDiv.textContent = "You Won! Paper beats Rock";
                    break;
                case "paper":
                    resultDiv.textContent = "Draw! Both you and the computer chose the same thing";
                    break;
                case "scissors":
                    computerScore++;
                    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
                    resultDiv.textContent = "You Lost! Scissors beats Paper"
                    break;
            }
        }
        if(playerChoice == "scissors") {
            switch(computerChoice) {
                case "rock":
                    computerScore++;
                    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
                    resultDiv.textContent = "You Lost! Rock beats Scissors";
                    break;
                case "paper":
                    playerScore++;
                    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
                    resultDiv.textContent = "You Won! Scissors beats Paper";
                    break;
                case "scissors":
                    resultDiv.textContent = "Draw! Both you and the computer chose the same thing";
                    break;
            }
        }
        if(playerScore === 3) {
            finalDiv.textContent = "GAME OVER: You Won!";
            gameContainer.appendChild(finalDiv);
            playAgain();
        }
        else if(computerScore === 3) {
            finalDiv.textContent = "GAME OVER: You Lost!";
            gameContainer.appendChild(finalDiv);
            playAgain();
        }
    }
    
}
function playAgain() {

    playAgainBtn.textContent = "Play Again";
    gameContainer.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', playAgainListener);
}
function playAgainListener(e) {
    messageBox.removeChild(lastRound);
    messageBox.removeChild(playerChoiceDiv);
    messageBox.removeChild(computerChoiceDiv);
    messageBox.removeChild(resultDiv);
    playerScore = 0;
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    computerScore = 0;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    gameContainer.removeChild(finalDiv);
    gameContainer.removeChild(e.target);
    gameContainer.appendChild(messageBox);

}
function game() {
    playerScoreDiv.textContent = `Your Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    const buttonsList = document.querySelectorAll("button");
    buttonsList.forEach(function(button) {
        button.addEventListener('click', playRound);
    });
}
function addStyles() {
    lastRound.classList.add("lastRound");
    resultDiv.classList.add("result");
    finalDiv.classList.add("gameOver");
    playAgainBtn.classList.add("againBtn");
}
//Global variables
const gameContainer = document.body.querySelector(".game");

let playerScore = 0, computerScore = 0;
const playerScoreDiv = document.querySelector(".playerScore");
const computerScoreDiv = document.querySelector(".computerScore");

const messageBox = document.querySelector(".message-section");

const lastRound = document.createElement("h3");
lastRound.textContent = "Last Round:";
const playerChoiceDiv = document.createElement("div");
const computerChoiceDiv = document.createElement("div");
const resultDiv = document.createElement("div");

const finalDiv = document.createElement("div");
const playAgainBtn = document.createElement("button");

addStyles();
game();
