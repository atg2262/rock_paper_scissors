const options = ["rock", "paper", "scissors"]; 

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]; 
    return choice; 
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return "Player";
    } else {
        return "Computer";
    } 
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!"
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (result == "Computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false; 
    while(validatedInput == false) {
        const choice = prompt("Please choose 'Rock, Paper, or Scissors'");
        if (choice == null) {
            continue; 
        }
        const choiceLowerCase = choice.toLocaleLowerCase(); 
        if(options.includes(choiceLowerCase)){
            validatedInput = true; 
            return choiceLowerCase; 
        }
    }
}

function game() {
    console.log("Did Dumb Dumb actually get this to work?");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(); 
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();