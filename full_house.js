function countDice(dice) {
    let values = [];

    for (let i = 0; i <= countDice.length; i++) {
        values[i] = 0;
    }

    for(let current_dice of dice) {
        values[current_dice]++;
    }

    console.log(values);

    if (values[0]===3); {
        console.log("asdasd");
    }    
}

countDice[(Math.random(1, 6))];