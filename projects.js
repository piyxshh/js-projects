const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}




const deposit = () => {
    while (true) {
        const depositAmount = prompt("enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("invalid deposit, try again.");
        } else {
            return numberDepositAmount;
        }
    } 
 
}


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("enter number of lines to bet on(1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    } 
}


const  getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("enter total bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log("invalid bet, try again.");
        } else {
            return numberBet;
        }
    } 

}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < COLS, i++){

        }
    }
} 




//const depositAmount = deposit(); 
//console.log(depositAmount);
 
let balance = deposit();
const numberOfLines = getNumberOfLines();
//console.log(numberOfLines);
const bet = getBet(balance, numberOfLines);