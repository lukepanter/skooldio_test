// import prompt-sync for handle user input
const prompt = require("prompt-sync")();

// shuffle card (represent in numbers 1 - 52)
const shuffle = () => {
    let numbers = []; 
    let r, n, p;

    let min = 1;
    let max = 52;

    r = 4; 

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

// Change from number to text 
const isCard = (numbers) => {
    const suitDeck = ["spades","hearts","diamonds","clubs"]; 
    const number = ["King","Ace","2","3","4","5","6","7","8","9","10","Jack","Queen"];
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

// Calculate total score for each players
const scoring = (numbers) => {
    let score = 0
    for (let i = 0; i < numbers.length; i++ ){
        let num = numbers[i]%13;
        if (num <= 9){
            score += num;
        }else{
            score += 0
        }
    }
    return score%10
}

// Justify who won and handle result
const showScores = (numbers,bet) => {
    let player = scoring(numbers.slice(0,2))
    let dealer = scoring(numbers.slice(2,4))
    if (player > dealer){
        return [`You won !!!, received ${bet} chips.`, bet]
    }else if (player === dealer){
        return ["You tie !!!, not lost any chips" , 0]
    }else{
        return [`You lost !!!, lost ${bet} chips` , -bet]
    }
}

// Main function
const play = () => {
    let net = 0
    while(1){
        const bet = prompt("Please put your bet: ");
        let numbers = shuffle();
        let cards = isCard(numbers);
        console.log(`You got ${cards[0]}, ${cards[1]}`);
        console.log(`Dealer got ${cards[2]}, ${cards[3]}`);
        let result = showScores(numbers,bet);
        console.log(result[0])
        net += parseInt(result[1]);

        const again = prompt("Wanna play more (Yes/No)? ");
        if( again.toLowerCase() !== "yes" ){
            if(net >= 0){
                console.log(`You got total ${net} chips`)
            }else{
                console.log(`You lost total ${-net} chips`)
            }
            
            break;
        }  
    }
}

play()





