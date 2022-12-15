function computerChoice(choices) {
    const randomValue = Math.floor(Math.random() * choices.length);

    const item = choices[randomValue];

    return item;

    
}
const choices = ["rock","paper","scissors"];

function checkWinner(playerSelection,computerSelection) {

    if (playerSelection.toLowercase() == computerSelection) {
        return "Draw";
        
    }
    else if (playerSelection.toLowercase() == "rock" && computerSelection == "paper" ) || (playerSelection.toLowercase() == "scissors" && computerSelection == "paper" ) 
    || (playerSelection.toLowercase() == "paper" && computerSelection == "rock" )  {
        return "Player";
        
    }
    else {
        return "Computer";
    }

}

function playRound(playerSelection, computerSelection) {
    let result = checkWinner(playerSelection,computerSelection);

    if (result == "Draw") {
        return "Tie!"
        
    }
    else if (result == Player) {
        
    }
    
}