const options = ["rock", "paper", "scissors"]; 

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]; 
    console.log(choice);
}

function checkWinner() {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return "Player";
    } else {
        return "Computer";
    } 
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a tie!"
    } else if (result === "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "Computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
