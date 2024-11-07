const choices = ['rock', 'paper', 'scissors'];


function getUserChoice(input) {
    let userChoice = input.toLowerCase();   //converts user input to lowwer case
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        console.log(`You have selected: ${userChoice[0].toUpperCase()}` + `$    {userChoice.slice(1)}`);        //validates the choice and capitalizes it
    }  else {
        console.log(`Select a valid element.`); 
    }
}




// function getComputerChoice () {
//     let computerChoice = 
// }