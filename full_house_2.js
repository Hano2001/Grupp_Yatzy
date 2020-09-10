function countDice(dice) {
    let values = [];

    for (let i = 0; i <= 6; i++) {
        values[i] = 0;
    }

    for(let current_dice of dice) {
        values[current_dice]++;
    }

    console.log(values);

    let n = values.includes(3);
    let a = values.includes(2)

    console.log(n)
    console.log(a)

    if (n == true && a == true) {
        console.log("asdasd")
    }


    // if (values[1]===3); {
    //     console.log(values);
    // }    
}

countDice([4, 4, 5, 5, 5]);