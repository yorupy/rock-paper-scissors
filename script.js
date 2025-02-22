

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



function generateRoundString(winner, winnerChoice, loserChoice) {
    return `${winner} wins! ${capitalize(winnerChoice)} beats ${capitalize(loserChoice)}`;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
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
    while (humanScore !== 5 && computerScore !== 5) {
        const result = playRound(getHumanChoice(), getComputerChoice());
        if (result.startsWith("Human")) humanScore++;
        else if (result.startsWith("Computer")) computerScore++;
        console.log(result);
    }
    if (humanScore === 5) {
        console.log("Human wins the game! Computers suck at RPS!");
    } else {
        console.log("Computer wins the game! Machines will rule the world!");
    }
}

playGame();