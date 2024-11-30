let humanScore = 0;
let computerScore = 0;

const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "✊"; // Rock
    } else if (randomNum < 0.66) {
        return "📄"; // Paper
    } else {
        return "✌️"; // Scissors
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "✊" && computerChoice === "✌️") ||
        (humanChoice === "📄" && computerChoice === "✊") ||
        (humanChoice === "✌️" && computerChoice === "📄")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function updateScores() {
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}

function displayResult(message) {
    resultElement.textContent = message;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
    resultElement.textContent = "";
}

document.getElementById("rock").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const resultMessage = playRound("✊", computerSelection);
    displayResult(resultMessage);
    updateScores();
});

document.getElementById("paper").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const resultMessage = playRound("📄", computerSelection);
    displayResult(resultMessage);
    updateScores();
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const resultMessage = playRound("✌️", computerSelection);
    displayResult(resultMessage);
    updateScores();
});

restartButton.addEventListener("click", resetGame);