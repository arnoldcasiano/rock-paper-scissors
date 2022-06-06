// Make computer randomly returns Rock Paper or Scissor
function computerPlay() {
    // Generate a random number from 1 to 3
    let random = Math.floor(Math.random() * 3) + 1;

    // Create switch statement that will make each number equal rock, paper or scissors
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

// Create function that plays 1 round of the game
function round(playerSelection, computerSelection) {
    // IF ELSE statements to test out which player won
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissor beats Paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissor beats Paper';
    } else {
        return 'It\'s a tie!';
    }
}

// Play the game 5 times
function game() {
    let ptCount = 0; // Player's round wins

    for (let i = 0; i < 5; i++) {
        let player = prompt('Enter Rock, Paper or Scissors: ');
        player = player.toLowerCase(); // Make player's input case insensitive
        const computer = computerPlay();
        console.log(computer);
        alert(round(player, computer));

        switch (round(player, computer)) {
            case 'You win! Paper beats Rock':
            case 'You win! Rock beats Scissors':
            case 'You win! Scissor beats Paper':
                ptCount += 1;
                break;
        }
    }

    if (ptCount >= 3) {
        alert('CONGRATS! YOU WON THE GAME!');
    } else {
        alert('YOU LOSE! GAME OVER!');
    }
}

game();