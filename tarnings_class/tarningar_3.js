document.addEventListener("DOMContentLoaded", function (e) {
    
    let button = document.getElementById("throw"),
    count = 3;

    button.addEventListener("click", newNumber);

    function newNumber(event) {
        let diceBlock = document.getElementsByClassName("dice");
        let children = diceBlock.children;
        //let children = Array.from(diceBlock.children);
        //let images = diceBlocks.children.

        //for (let dice_img of diceBlocks);


        console.log(children);
    }

    // let test = new Dice();

    // console.log(test);
});

class Dice {
    constructor() {
        this.dice = [];
        this.diceValues = [0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 5; i++) {
            this.dice[i] = new Die()
        }   
        this.calculatDiceValues()         
    }
    calculatDiceValues() {
        this.dice.map(curretValue => {
            this.diceValues[curretValue.value]++;
        })
    }
}
class Die {
    constructor() {
        this.value = this.newRandom()
    }
    newRandom(){
        for (let i = 0; i <=6; i++) {
            return Math.floor(Math.random() * 6) + 1;
        }
    }
}