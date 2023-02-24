const prompt = require("prompt-sync")();

const bet = prompt("Please put your bet: ");
console.log(`You have ${bet} bahts.`,'\n');

const shuffle = () => {
    let numbers = []; 
    let r, n, p;

    let min = 1;
    let max = 52;

    r = 4; // how many numbers you want to extract

    for (let i = 0; i < r; i++) {
    do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers.includes(n);
        if(!p){
        numbers.push(n);
        }
    }
    while(p);
    }

    return numbers;
  };



