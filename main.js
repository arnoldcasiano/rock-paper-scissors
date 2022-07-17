let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let result = document.querySelector('.outcome');
let playerScoreCount = document.createElement('p');
let compScoreCount = document.createElement('p');
let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors'
            break;
    }
}

function playerChoice() {
    rock.addEventListener('click', playGame); 
    paper.addEventListener('click', playGame);
    scissors.addEventListener('click', playGame);
}


function playGame(e) {
    const computer = computerPlay();
    let game = playRound(e.target.id, computer);

    playerScoreCount.textContent = 'Player: ' + playerScore;
    result.appendChild(playerScoreCount);
    compScoreCount.textContent = 'Computer: ' + compScore;
    result.appendChild(compScoreCount);

    if (playerScore == 5) {
        result.textContent = 'YOU W0N! CONGRATULATIONS!';
        resetGame();
    } else if (compScore == 5) {
        result.textContent = 'YOU LOST! TRY YOUR LUCK AGAIN!';
        resetGame();
    }
;}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats Rock';
        compScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock';
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors';
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissor beats Paper';
        compScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors';
        compScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissor beats Paper';
        playerScore++;
    } else {
        result.textContent = 'It\'s a tie!';
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerChoice();
}


playerChoice();
