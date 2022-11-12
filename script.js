function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        return "Draw, Got Same Figures";

    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You Won, Rock beats Scissors";
    else if (playerSelection === "rock" && computerSelection === "paper")
        return "You Lose, Paper beats Rock";

    else if (playerSelection === "paper" && computerSelection === "rock")
        return "You Won, Paper beats Rock";
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "You Lose, Scissors beats Paper";

    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "You Won, Scissors beats Paper";
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return "You Lose, Rock beats Scissors";
}