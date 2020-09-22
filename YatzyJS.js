document.addEventListener("DOMContentLoaded", function (event) {
  function summa1() {
    let numberArray = document.getElementsByClassName("siffror1");
    let arr2 = Array.from(numberArray);
    let arr3 = arr2.map((element) => {
      return Number(element.value);
    });

    console.log(arr3);

    let summ = arr3.reduce(function (acc, currValue) {
      return acc + currValue;
    }, 0);

    console.log(summ);

    let sum_1_field = document.getElementById("Summa1");

    sum_1_field.innerHTML = summ;
    let bonus1 = document.getElementById("Bonus1");

    let bonus = 0;

    if (summ >= 63) {
      bonus = 50;
    } else {
      bonus = 0;
    }

    bonus1.innerHTML = bonus;
  }

  function summa2() {
    let numberArray = document.getElementsByClassName("siffror2");
    let arr2 = Array.from(numberArray);
    let arr3 = arr2.map((element) => {
      return Number(element.value);
    });

    console.log(arr3);

    let summ2 = arr3.reduce(function (acc, currValue) {
      return acc + currValue;
    }, 0);

    console.log(summ2);

    let sum_2_field = document.getElementById("Summa2");

    sum_2_field.innerHTML = summ2;
    let bonus2 = document.getElementById("Bonus2");

    let bonus = 0;

    if (summ2 >= 63) {
      bonus = 50;
    } else {
      bonus = 0;
    }

    bonus2.innerHTML = bonus;
  }

  function summa3() {
    let numberArray = document.getElementsByClassName("siffror3");
    let arr2 = Array.from(numberArray);
    let arr3 = arr2.map((element) => {
      return Number(element.value);
    });

    console.log(arr3);

    let summ3 = arr3.reduce(function (acc, currValue) {
      return acc + currValue;
    }, 0);

    console.log(summ3);

    let sum_3_field = document.getElementById("Summa3");

    sum_3_field.innerHTML = summ3;
    let bonus3 = document.getElementById("Bonus3");

    let bonus = 0;

    if (summ3 >= 63) {
      bonus = 50;
    } else {
      bonus = 0;
    }

    bonus3.innerHTML = bonus;
  }

  function summa4() {
    let numberArray = document.getElementsByClassName("siffror4");
    let arr2 = Array.from(numberArray);
    let arr3 = arr2.map((element) => {
      return Number(element.value);
    });

    console.log(arr3);

    let summ4 = arr3.reduce(function (acc, currValue) {
      return acc + currValue;
    }, 0);

    console.log(summ4);

    let sum_4_field = document.getElementById("Summa4");

    sum_4_field.innerHTML = summ4;
    let bonus4 = document.getElementById("Bonus4");

    let bonus = 0;

    if (summ4 >= 63) {
      bonus = 50;
    } else {
      bonus = 0;
    }

    bonus4.innerHTML = bonus;
  }

  let spel1_1 = document.getElementById("Ettor_1");
  let spel1_2 = document.getElementById("Tvåor_1");
  let spel1_3 = document.getElementById("Treor_1");
  let spel1_4 = document.getElementById("Fyror_1");
  let spel1_5 = document.getElementById("Femmor_1");
  let spel1_6 = document.getElementById("Sexor_1");
 
  spel1_1.addEventListener("change", summa1);
  spel1_2.addEventListener("change", summa1);
  spel1_3.addEventListener("change", summa1);
  spel1_4.addEventListener("change", summa1);
  spel1_5.addEventListener("change", summa1);
  spel1_6.addEventListener("change", summa1);


  let spel2_1 = document.getElementById("Ettor_2");
  let spel2_2 = document.getElementById("Tvåor_2");
  let spel2_3 = document.getElementById("Treor_2");
  let spel2_4 = document.getElementById("Fyror_2");
  let spel2_5 = document.getElementById("Femmor_2");
  let spel2_6 = document.getElementById("Sexor_2");

  spel2_1.addEventListener("change", summa2);
  spel2_2.addEventListener("change", summa2);
  spel2_3.addEventListener("change", summa2);
  spel2_4.addEventListener("change", summa2);
  spel2_5.addEventListener("change", summa2);
  spel2_6.addEventListener("change", summa2);

  let spel3_1 = document.getElementById("Ettor_3");
  let spel3_2 = document.getElementById("Tvåor_3");
  let spel3_3 = document.getElementById("Treor_3");
  let spel3_4 = document.getElementById("Fyror_3");
  let spel3_5 = document.getElementById("Femmor_3");
  let spel3_6 = document.getElementById("Sexor_3");

  spel3_1.addEventListener("change", summa3);
  spel3_2.addEventListener("change", summa3);
  spel3_3.addEventListener("change", summa3);
  spel3_4.addEventListener("change", summa3);
  spel3_5.addEventListener("change", summa3);
  spel3_6.addEventListener("change", summa3);

  let spel4_1 = document.getElementById("Ettor_4");
  let spel4_2 = document.getElementById("Tvåor_4");
  let spel4_3 = document.getElementById("Treor_4");
  let spel4_4 = document.getElementById("Fyror_4");
  let spel4_5 = document.getElementById("Femmor_4");
  let spel4_6 = document.getElementById("Sexor_4");

  spel4_1.addEventListener("change", summa4);
  spel4_2.addEventListener("change", summa4);
  spel4_3.addEventListener("change", summa4);
  spel4_4.addEventListener("change", summa4);
  spel4_5.addEventListener("change", summa4);
  spel4_6.addEventListener("change", summa4);

//----------------------------------Tärningskastaren--------------------------------------

let numberOfThrows = document.getElementById("throws_left");
  let button = document.getElementById("throw"),
    count = 3;

  button.addEventListener("mousedown", addToSum);
  button.addEventListener("mouseup", addNumber);

  function addNumber(event) {
    event.preventDefault();
    

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

    count -= 1;
    console.log("count = " + count);

    if (count >= 0) {
      numberOfThrows.innerHTML = "Antal kast kvar: " + count;
    } else if (count == -1) {      
      document.getElementById("dc1").disabled = true;
      document.getElementById("dc2").disabled = true;
      document.getElementById("dc3").disabled = true;
      document.getElementById("dc4").disabled = true;
      document.getElementById("dc5").disabled = true;

      document.getElementById("dc1").checked = true;
      document.getElementById("dc2").checked = true;
      document.getElementById("dc3").checked = true;
      document.getElementById("dc4").checked = true;
      document.getElementById("dc5").checked = true;

      button.disabled = true; 
    }

    for (let k = 0; k < dice.length; k++) {
      if (dice[k].checked) {
        sum.push(Number(dice[k].value));
      }
    }
    let total = sum.reduce((currentValue, previousValue) => currentValue + previousValue, 0);
    console.log(sum);
    console.log(total);
    let counter = document.getElementById("total");
    counter.innerHTML = "Summa: " + total;
  }

});
