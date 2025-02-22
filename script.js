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

console.log(getHumanChoice());