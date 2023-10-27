let playerScore = 0 
let computerScore = 0


function playRound(playerSelection, computerSelection) {
           if (playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore=+1
            return('You loose! Paper beat rock')
        }else if  (playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore=+1
            return('You win! Scissors beat paper');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            computerScore=+1
            return('You loose! Scissors beat paper')
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore=+1
            return('You win! Paper beat rock');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore=+1
            return('You win! Rock beat scissors');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore=+1
            return('You loose! Rock beat scissors')
        } else if (playerSelection ===  computerSelection){
            return('Draw');
        }    
    }

function getplayerChoice() {
    let result = prompt('Your turn, choose an element');
    let resultLow = result.toLowerCase();
    return(resultLow);
}

// try to make functions for playerScore and computerScore

// try add +1 point to function play game

// add цикл to playRound 5 times

// check the code from Odin The Project


function getComputerChoice() {
    let numbArray = ['rock', 'paper', 'scissors'];
    let randomElement = numbArray[Math.floor(Math.random()* numbArray.length)];
    return(randomElement);
} 

let playerSelection = getplayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log (playerScore, computerScore);