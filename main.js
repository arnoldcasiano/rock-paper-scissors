const rockPlayer = document.getElementById('rock-player');
const paperPlayer = document.getElementById('paper-player');
const scissorsPlayer = document.getElementById('scissors-player');
const rockCom = document.getElementById('rock-com');
const paperCom = document.getElementById('paper-com');
const scissorsCom = document.getElementById('scissors-com');

const gameScreen = document.querySelector('.game');
const startScreen = document.querySelector('.start-game');
const endGameScreen = document.querySelector('.end-game');
const playBtn = document.querySelector('.play-btn');
const playAgainBtn = document.querySelector('.play-again');

// Score Output
const result = document.querySelector('.result');
const ptsContainer = document.querySelector('.pts-container');
let playerPts = document.createElement('p');
let compPts = document.createElement('p');
playerPts.id = 'player-pts';
compPts.id = 'comp-pts';
let playerScore = 0;
let compScore = 0;




rockPlayer.onclick = () => playGame('rock');
paperPlayer.onclick = () => playGame('paper');
scissorsPlayer.onclick = () => playGame('scissors');




function playGame(player) {
    const computer = computerPlay();
    comAnimation(computer);
    playRound(player, computer);

    playerPts.textContent = playerScore;
    playerPts.style.marginRight = '400px';
    ptsContainer.appendChild(playerPts);

    compPts.textContent = compScore;
    compPts.style.marginLeft = '400px';
    ptsContainer.appendChild(compPts);

    if (playerScore === 5) {
        gameScreen.style.display = 'none';
        rockCom.style.transform = `rotate(0deg)`;
        paperCom.style.transform = `rotate(0deg)`;
        scissorsCom.style.transform = `rotate(0deg)`;
        endGame();
    } 
    else if (compScore === 5) {
        gameScreen.style.display = 'none';
        rockCom.style.transform = `rotate(0deg)`;
        paperCom.style.transform = `rotate(0deg)`;
        scissorsCom.style.transform = `rotate(0deg)`;
        endGame();
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result.textContent = 'You lose! Paper beats Rock';
        compScore++;
    } 
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result.textContent = 'You win! Paper beats Rock';
        playerScore++;
    } 
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result.textContent = 'You win! Rock beats Scissors';
        roundPlayed = false;
    } 
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result.textContent = 'You lose! Scissor beats Paper';
        compScore++;
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result.textContent = 'You lose! Rock beats Scissors';
        compScore++;
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result.textContent = 'You win! Scissor beats Paper';
        playerScore++;
    } 
    else {
        result.textContent = 'It\'s a tie!';
    }
}




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


function comAnimation(comChoice) {
    if (comChoice === 'rock') {
        rockCom.style.transform = `rotate(-50deg)`;
        paperCom.style.transform = `rotate(0deg)`;
        scissorsCom.style.transform = `rotate(0deg)`;
    } 
    else if (comChoice === 'paper') {
        paperCom.style.transform = `rotate(-50deg)`;
        rockCom.style.transform = `rotate(0deg)`;
        scissorsCom.style.transform = `rotate(0deg)`;
    } 
    else if (comChoice === 'scissors') {
        scissorsCom.style.transform = `rotate(-50deg)`;
        rockCom.style.transform = `rotate(0deg)`;
        paperCom.style.transform = `rotate(0deg)`; 
    }
}



// Game Screens
function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    playerPts.textContent = '';
    compPts.textContent = '';
    result.textContent = '';
}


function endGame() {
    endGameScreen.style.display = 'flex';

    const win = document.getElementById('win');
    const lose = document.getElementById('lose');

    if (playerScore > compScore) {
        win.style.display = 'block';
        lose.style.display = 'none';
        playAgainBtn.style.display = 'block';
    }
    else if (compScore > playerScore) {
        lose.style.display = 'block';
        win.style.display = 'none';
        playAgainBtn.style.display = 'block';
    }

    playerScore = 0;
    compScore = 0;

    playAgainBtn.onclick = () => {
        startScreen.style.display = 'flex';
        startScreen.style.justifyContent = 'center';
        startScreen.style.alignItems = 'center';
        endGameScreen.style.display = 'none';
    }
}