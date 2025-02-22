let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = "";
    do {
        choice = prompt("rock, paper or scissors: ");
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It is a draw!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return generateRoundString("Computer", computerChoice, humanChoice);
        } else {
            return generateRoundString("Human", humanChoice, computerChoice);
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return generateRoundString("Computer", computerChoice, humanChoice);
        } else {
            return generateRoundString("Human", humanChoice, computerChoice);
        }
    } else {
        if (computerChoice === "rock") {
            return generateRoundString("Computer", computerChoice, humanChoice);
        } else {
            return generateRoundString("Human", humanChoice, computerChoice);
        }
    }
}

function generateRoundString(winner, winnerChoice, loserChoice) {
    return `${winner} wins! ${capitalize(winnerChoice)} beats ${capitalize(loserChoice)}`;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));