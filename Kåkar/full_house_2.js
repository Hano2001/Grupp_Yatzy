function countDice(dice) {
    let values = [];

    for (let i = 0; i <= 6; i++) {
        values[i] = 0;
    }
    
    for(let current_dice of dice) {
        values[current_dice]++;
        console.log(current_dice);
    }

    console.log(values);

    let n = values.includes(3);
    let a = values.includes(2);
    let kak = (n == true && a == true);

    console.log(kak);     
}

countDice([Math.floor(Math.random() * 6) + 1, 
    Math.floor(Math.random() * 6) + 1, 
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1]);

//countDice([1, 1, 5, 5, 5]);