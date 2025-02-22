let humanScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors", "rock", "paper"]

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It is a draw!";
    } else if (computerChoice === choices[choices.indexOf(humanChoice) + 1]) {
        return generateRoundString("Computer", computerChoice, humanChoice);
    } else {
        return generateRoundString("Human", humanChoice, computerChoice);
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    else if (randomNumber === 1) return "paper";
    else return "scissors";
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function generateRoundString(winner, winnerChoice, loserChoice) {
    return `${winner} wins! ${capitalize(winnerChoice)} beats ${capitalize(loserChoice)}`;
}

function updateGame(result) {
    if (result.startsWith("It")) return;
    else if (result.startsWith("Human")) humanScore++;
    else computerScore++;
}

function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

const choiceButtons = document.querySelectorAll(".choices button");

function handleChoiceClick() {
    choiceButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.id;
            const result = playRound(id, getComputerChoice());
            updateGame(result);
            updateView(createLog(result));
        })
    })
}

function appendLog(log) {
    const resultsDiv = document.querySelector(".results");
    resultsDiv.appendChild(log);
}

function createLog(log) {
    const newLog = document.createElement("p");
    newLog.textContent = log;
    newLog.classList.add("log");
    return newLog;
}

function updateScores() {
    const humanScoreSpan = document.querySelector(".human-score");
    humanScoreSpan.textContent = humanScore;
    const computerScoreSpan = document.querySelector(".computer-score");
    computerScoreSpan.textContent = computerScore;
}

function scrollResults() {
    const results = document.querySelector(".results");
    if (results.scrollHeight > results.clientHeight) {
        results.scrollTop = results.scrollHeight;
    }
}

function updateView(newLog) {
    appendLog(newLog);
    if (humanScore === 5 || computerScore === 5) {
        disableButtons();
        if (humanScore === 5) {
            appendLog(createLog("Human wins the game! Computers suck at RPS!"));
        } else {
            appendLog(createLog("Computer wins the game! Machines will rule the world!"));
        }
    }
    updateScores();
    scrollResults();
}

handleChoiceClick();