class Dice {
  constructor() {
    this.dice = [];
    this.count = 3;
    this.checkbox = [];
    this.diceValues = new Array(7).fill(0);

    for (let i = 0; i < 5; i++) {
      this.dice[i] = new Die();
    }
  }
  //New values for dice
  throw() {
    for (let die of this.dice) {
      die.throw();
    }
  }

  addImage() {
    this.throw();

    let diceImg = document.getElementsByClassName("dice_img");

    for (let i = 1; i <= 5; i++) {
      this.checkbox.push(document.getElementById("dc" + i));
    }
    //Give HTML-divs images and values based on dice values
    for (let i = 0; i <= 4; i++) {
      if (this.checkbox[i].checked == false) {
        switch (this.dice[i].value) {
          case 1:
            diceImg[i].src = "images_dice/dice1.jpg";
            this.checkbox[i].value = 1;
            break;
          case 2:
            diceImg[i].src = "images_dice/dice2.jpg";
            this.checkbox[i].value = 2;
            break;
          case 3:
            diceImg[i].src = "images_dice/dice3.jpg";
            this.checkbox[i].value = 3;
            break;
          case 4:
            diceImg[i].src = "images_dice/dice4.jpg";
            this.checkbox[i].value = 4;
            break;
          case 5:
            diceImg[i].src = "images_dice/dice5.jpg";
            this.checkbox[i].value = 5;
            break;
          case 6:
            diceImg[i].src = "images_dice/dice6.jpg";
            this.checkbox[i].value = 6;
            break;
          default:
            diceImg[i].src = "images_dice/dice_nan.jpg";
        }
      }
    }
  }
  addSaved() {
    this.throwCount();

    let saved = [];
    let allDice = document.getElementById("allDice");
    let savedDice = allDice.getElementsByClassName("check");

    //Adding the values with checked checkboxes to a new array
    for (let i = 0; i < savedDice.length; i++) {
      if (savedDice[i].checked) {
        saved.push(Number(savedDice[i].value));
      }
    }
    let total = saved.reduce(
      (curretValue, previousValue) => curretValue + previousValue,
      0
    );
    //diceValues only triggers if all 5 boxes are checked and count is 0
    if (saved[4] != undefined && this.count < 0) {
      for (let current_dice of saved) {
        this.diceValues[current_dice]++;
      }
    }

    console.log("saved= " + saved);
    console.log("total= " + total);
    console.log("diceValues = " + this.diceValues);

    let counter = document.getElementById("total");
    counter.innerHTML = "Summa: " + total;
  }
  throwCount() {
    /*Counts down from default value(3), disables and auto-checks boxes 
        and button if value is less than 0*/
    this.count -= 1;
    let numberOfThrows = document.getElementById("throws_left");
    let button = document.getElementById("throw");
    console.log("count=" + this.count);

    if (this.count >= 0) {
      numberOfThrows.innerHTML = "Antal kast kvar: " + this.count;
    } else if (this.count == -1) {
      for (let i = 1; i <= 5; i++) {
        this.checkbox.push(document.getElementById("dc" + i));
        this.checkbox[i].disabled = true;
        this.checkbox[i].checked = true;
      }
      button.disabled = true;
    }
  }
  reset() {
    console.log("reset");

    let numberOfThrows = document.getElementById("throws_left");
    let diceImg = document.getElementsByClassName("dice_img");
    let button = document.getElementById("throw");
    let counter = document.getElementById("total");
    numberOfThrows.innerHTML = "Antal kast kvar: 3";
    button.disabled = false;
    counter.innerHTML = "Summa: 0";

    for (let i = 0; i < 5; i++) {
      diceImg[i].src = "images_dice/dice_nan.jpg";
      this.checkbox[i].checked = false;
      this.checkbox[i].disabled = false;
    }
  }
}
