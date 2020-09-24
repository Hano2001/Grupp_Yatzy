document.addEventListener("DOMContentLoaded", function (e) {
  let numberOfThrows = document.getElementById("throws_left");
  let button = document.getElementById("throw"),
    count = 3;

  button.addEventListener("mousedown", addToSum);
  button.addEventListener("mouseup", addNumber);

  function addNumber(event) {
    event.preventDefault();
    count -= 1;
    console.log("count = " + count);

    let random = [];
    for (let i = 0; i <= 4; i++) {
      random[i] = Math.floor(Math.random() * 6) + 1;
    }
    let diceImg = document.getElementsByClassName("dice_img");
    let diceValue = [
      { name: document.getElementById("d1"), iValue: random[0] },
      { name: document.getElementById("d2"), iValue: random[1] },
      { name: document.getElementById("d3"), iValue: random[2] },
      { name: document.getElementById("d4"), iValue: random[3] },
      { name: document.getElementById("d5"), iValue: random[4] },
    ];

    let checkbox = [
      document.getElementById("dc1"),
      document.getElementById("dc2"),
      document.getElementById("dc3"),
      document.getElementById("dc4"),
      document.getElementById("dc5"),
    ];

    for (let j = 0; j <= diceValue.length; j++) {
      if (count >= 1) {
        numberOfThrows.innerHTML = "Antal kast kvar: " + count;
      } else if (count == 0) {
        button.innerHTML = "Räkna ihop summan";
        document.getElementById("dc1").disabled = true;
        document.getElementById("dc2").disabled = true;
        document.getElementById("dc3").disabled = true;
        document.getElementById("dc4").disabled = true;
        document.getElementById("dc5").disabled = true;
      } else if (count <= -1) {
        button.disabled = true;
        document.getElementById("dc1").checked = true
        document.getElementById("dc2").checked = true;
        document.getElementById("dc3").checked = true;
        document.getElementById("dc4").checked = true;
        document.getElementById("dc5").checked = true;
        break;
      }

      if (checkbox[j].checked == false) {
        switch (diceValue[j].iValue) {
          case 1:
            diceImg[j].src = "images_dice/dice1.jpg";
            checkbox[j].value = 1;
            break;
          case 2:
            diceImg[j].src = "images_dice/dice2.jpg";
            checkbox[j].value = 2;
            break;
          case 3:
            diceImg[j].src = "images_dice/dice3.jpg";
            checkbox[j].value = 3;
            break;
          case 4:
            diceImg[j].src = "images_dice/dice4.jpg";
            checkbox[j].value = 4;
            break;
          case 5:
            diceImg[j].src = "images_dice/dice5.jpg";
            checkbox[j].value = 5;
            break;
          case 6:
            diceImg[j].src = "images_dice/dice6.jpg";
            checkbox[j].value = 6;
            break;
          default:
            diceImg[j].src = "images_dice/dice_nan.jpg";
        }
      }
    }
  }
  function addToSum(event) {
    let sum = [];
    let dices = document.getElementById("dices");
    let dice = dices.getElementsByTagName("INPUT");

    for (let k = 0; k < dice.length; k++) {
      if (dice[k].checked) {
        sum.push(Number(dice[k].value));
      }
    }
    let total = sum.reduce((a, b) => a + b, 0);
    console.log(sum);
    console.log(total);
    let counter = document.getElementById("total");
    counter.innerHTML = "Summa: " + total;
  }
});