

function playRound(playerSelection, computerSelection) {
    switch(playRound){
        case 0:
            (playerSelection === 'rock' && computerSelection === 'paper')
        return('You loose! Paper beat rock')
        break;
        
        case 1:
            (playerSelection === 'scissors' && computerSelection === 'paper')
        return('You win! Scissors beat paper');
        break;

        case 2:
            (playerSelection === 'paper' && computerSelection === 'scissors')
        return('You loose! Scissors beat paper');
        break;

        case 3:
            (playerSelection === 'paper' && computerSelection === 'rock')
        return('You win! Paper beat rock');
        break;

        case 4:
            (playerSelection === 'rock' && computerSelection === 'scissors')
        return('You win! Rock beat scissors');
        break;

        case 5:
            (playerSelection === 'scissors' && computerSelection === 'rock')
        return('You loose! Rock beat scissors');
        break;

        case 6:
            (playerSelection ===  computerSelection)
        return('Draw');
        break;
    }
}
 
    

    

function getplayerChoice() {
    let result = prompt('Your turn, choose an element')
    let resultLow = result.toLowerCase();
    return(resultLow);
}


function getComputerChoice() {
    let numbArray = [ 'rock', 'paper', 'scissors'];
    let randomElement = numbArray[Math.floor(Math.random()* numbArray.length)];
    return(randomElement);
} 

let playerSelection = getplayerChoice();
let computerSelection = getComputerChoice('paper');

console.log(playRound(playerSelection, computerSelection));