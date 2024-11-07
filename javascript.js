const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getUserChoice() {
    let choice = prompt('What is your choice?');
    let userChoice = choice.toLowerCase();   // Converts user input to lowercase
    if (choices.includes(userChoice)) {
        console.log(`You have selected: ${userChoice[0].toUpperCase()}${userChoice.slice(1)}`);
        return userChoice; // Returns the validated choice
    } else {
        console.log('Select a valid element.');
        return null; // Returns null for an invalid choice
    }
}


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    return console.log(`The computer has selected:` + ' ' + choices[computerChoice]); // Returns 'rock', 'paper', or 'scissors'
        
}





function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("The player has won this round.");
        return 'human';
    } else {
        console.log("The computer has prevailed in this round.");
        return 'computer';
    }
}

function playGame() {
    let userChoice = getUserChoice();
    if (!userChoice) return; // Exit if user choice is invalid

    let computerChoice = getComputerChoice();
    let winner = determineWinner(userChoice, computerChoice);

    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    console.log(`Current Scores - Player: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

playGame();

playGame();

playGame();

