function computerChoice(choices) {
    const randomValue = Math.floor(Math.random() * choices.length);

    const item = choices[randomValue];

    return item;

    
}
const choices = ["rock","paper","scissors"];

computerChoice(choices);