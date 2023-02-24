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

const isCard = (numbers) => {
    const suitDeck = ["spades","hearts","diamonds","clubs"]; 
    const number = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    let cards=[]
    for (let i = 0; i < numbers.length; i++ ){
        result = ""
        num = numbers[i]%13
        if (numbers[i] <= 13){
            result = suitDeck[0] + "-" + number[num];
        }else if (number[i] <= 26){
            result = suitDeck[1] + "-" + number[num];
        }else if (number[i] <= 39){
            result = suitDeck[2] + "-" + number[num];
        }else{
            result = suitDeck[3] + "-" + number[num];
        }
        cards.push(result);
    }
    return cards
};

let numbers = shuffle();
let cards = isCard(numbers);
console.log(numbers)
console.log(cards)



