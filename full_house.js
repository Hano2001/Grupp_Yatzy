function countDice(dice) {
    let values = [];

    for (let i = 0; i <= 6; i++) {
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

countDice([3, 4, 5, 5, 6]);