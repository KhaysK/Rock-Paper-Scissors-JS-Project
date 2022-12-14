function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        return "Draw!";

    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You Won Round!";
    else if (playerSelection === "rock" && computerSelection === "paper")
        return "You Lost Round!";

    else if (playerSelection === "paper" && computerSelection === "rock")
        return "You Won Round!";
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "You Lost Round!";

    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "You Won Round!";
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return "You Lost Round!";
}

async function game(choice){
    playerSelection = choice;
    playerSign.classList.remove(playerLastChoice + "Sign");
    cpuSign.classList.remove(cpuLastChoice + "Sign");
    
    playerSign.classList.add("rockSign");
    cpuSign.classList.add("rockSign");
    playerSign.classList.add("slide-top");
    cpuSign.classList.add("slide-top-reverse");

    await sleep(2000);

    playerSign.classList.remove("rockSign");
    cpuSign.classList.remove("rockSign");
    playerSign.classList.remove("slide-top");
    cpuSign.classList.remove("slide-top-reverse");
    
    playerLastChoice = choice;

    if (playerSelection == 'rock') playerSign.classList.add("rockSign");
    else if (playerSelection == 'paper') playerSign.classList.add("paperSign");
    else if (playerSelection == 'scissors') playerSign.classList.add("scissorsSign");

    playerSelection = choice;

    computerSelection = getComputerChoice();
    cpuLastChoice = computerSelection;

    if (computerSelection == 'rock') cpuSign.classList.add("rockSign");
    else if (computerSelection == 'paper') cpuSign.classList.add("paperSign");
    else if (computerSelection == 'scissors') cpuSign.classList.add("scissorsSign");

    result = playRound(playerSelection, computerSelection);
    const text = document.querySelector('.textResult');

    if (result.charAt(4) === "W"){
        playerScore[humanScore].classList.add('won');
        humanScore++;
    }
        
    else if (result.charAt(4) === "L"){
        cpuScore[computerScore].classList.add('won');
        computerScore++;
    }    

    if (humanScore == 5) {
        text.textContent = "You Won Game!";
        playerScore.forEach(circle => {
            circle.classList.remove('won');
        });
        cpuScore.forEach(circle => {
            circle.classList.remove('won');
        });
        computerScore = 0;
        humanScore = 0;
    }
    else if (computerScore == 5){
        text.textContent = "You Lost Game!";
        playerScore.forEach(circle => {
            circle.classList.remove('won');
        });
        cpuScore.forEach(circle => {
            circle.classList.remove('won');
        });
        computerScore = 0;
        humanScore = 0;
    } 
    else
        text.textContent = result;
    
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelectorAll(".playerOne .circle");
const playerSign = document.querySelector(".person");
const cpuScore = document.querySelectorAll(".playerTwo .circle");
const cpuSign = document.querySelector(".cpu");
let playerLastChoice = "rock";
let cpuLastChoice = "rock";
let humanScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    rock.classList.add('clickedBtn');
    game('rock');
});
paper.addEventListener('click', () => {
    paper.classList.add('clickedBtn');
    game('paper');
});
scissors.addEventListener('click', () => {
    scissors.classList.add('clickedBtn');
    game('scissors')
});

rock.addEventListener('transitionend', function(e){
      if (e.propertyName !== 'transform') return;
      this.classList.remove('clickedBtn');
});

paper.addEventListener('transitionend', function(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clickedBtn');
});

scissors.addEventListener('transitionend', function(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clickedBtn');
});