

function playRound(playerSelection, computerSelection) {
           if (playerSelection === 'rock' && computerSelection === 'paper'){
            return('You loose! Paper beat rock');
        }else if  (playerSelection === 'scissors' && computerSelection === 'paper'){
            return('You win! Scissors beat paper');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return('You loose! Scissors beat paper');
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            return('You win! Paper beat rock');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return('You win! Rock beat scissors');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            return('You loose! Rock beat scissors');
        } else if (playerSelection ===  computerSelection){
            return('Draw');
        }    
    }

 
    

    

function getplayerChoice() {
    let result = prompt('Your turn, choose an element');
    let resultLow = result.toLowerCase();
    return(resultLow);
}


function getComputerChoice() {
    let numbArray = ['rock', 'paper', 'scissors'];
    let randomElement = numbArray[Math.floor(Math.random()* numbArray.length)];
    return(randomElement);
} 

let playerSelection = getplayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));