

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return('You loose! Paper beat rock')
    }
       
}

function getplayerChoice() {
    let result = prompt('Your turn, choose an element')
    return(result);
}


function getComputerChoice() {
    let numbArray = [ 'rock', 'paper', 'scissors'];
    let randomElement = numbArray[Math.floor(Math.random()* numbArray.length)];
    return(randomElement);
} 

let playerSelection = getplayerChoice();
let computerSelection = getComputerChoice('paper');
console.log(playRound(playerSelection, computerSelection));