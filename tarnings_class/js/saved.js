class Saved {
    constructor() {
        this.saved = [];
        this.sum = [];
        this.dices = document.getElementById("dices");
        this.dice = dices.getElementsByTagName("INPUT");
    
        for (let i = 0; i < dice.length; i++) {
          if (dice[i].checked) {
            sum.push(Number(dice[i].value));
          }
        }
        this.saved = sum.reduce((a, b) => a + b, 0);
    }      
}

// if (saved[4] != undefined) {
    //     this.calculatDiceValues()  
    // }
    // calculatDiceValues() {
    //     this.saved.map(curretValue => {
    //         this.diceValues[curretValue.value]++;
    //     })
    // }
    // this.value = [];

    // // let checkbox = [
    // //     document.getElementById("dc1"),
    // //     document.getElementById("dc2"),
    // //     document.getElementById("dc3"),
    // //     document.getElementById("dc4"),
    // //     document.getElementById("dc5"),
    // //   ];

    // let check1 = document.getElementById("dc1");
    // check1.addEventListener("click", function(e) {
    //     check1.checked == true;
    // })

    // if (check1.checked == true){
    //     this.value.push()
    // }