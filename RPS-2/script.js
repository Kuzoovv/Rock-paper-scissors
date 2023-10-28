let playerScore = 0
let computerScore = 0

function game(){
    let round = 0
    while (round == 5){
        round++;
        playRound(playerSelection, computerSelection)
        return(playRound(playerSelection, computerSelection)); 
    }   

    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore, computerScore)
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
       (playerSelection === 'paper' && computerSelection === 'scissors') || 
       (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore+=1
        return ('You lost. '+computerSelection+' beat '+playerSelection+'')
    } else if ((playerSelection === 'paper' && computerSelection === ' rock') ||
               (playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')){
        playerScore+=1
        return('You won. '+playerSelection+' beat '+computerSelection+'')        
    }else{
        return('Draw');
    }
    
     
}

let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()

function getPlayerChoice(){
    let element = prompt('Choose an element')
    let elementLow = element.toLocaleLowerCase()
    return(elementLow) 
}

function getComputerChoice(){
    let numbArray = ['rock', 'paper', 'scissors' ]
    let elementComp = numbArray[Math.floor(Math.random()*numbArray.length)]
    return(elementComp)
}

game();
