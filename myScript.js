function computerChoice(choices) {
    const randomValue = Math.floor(Math.random() * choices.length);

    const item = choices[randomValue];

    return item;

    
}
const choices = ["rock","paper","scissors"];

function checkWinner(playerSelection,computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
        
    }
    else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")

    ) {
        return "Player";
    }
    else {
        return "Computer";
    }

}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);

    if (result == "Tie") {
        return "Tie!"
        
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}!!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}

function getPlayerChoice() {
    let validateImput = false;
    while (validateImput == false) {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null) {
            continue;

        }
        const choiceInLower = choice.toLowerCase();
        if (choice.includes(choiceInLower)) {
            validateImput = true;
            return choiceInLower;
        }
        
    }
    
}


function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = computerChoice(choices);
        console.log(playRound(playerSelection, computerSelection));
    }
    
}

game();