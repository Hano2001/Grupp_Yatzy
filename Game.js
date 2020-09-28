class Game {
    constructor() {  
        let player = new Player();

      
    }

    summa() {     
      let numberArray = document.getElementsByClassName("siffror1");
      let arr2 = Array.from(numberArray);
      let arr3 = arr2.map((element) => {
        return Number(element.value);
      });

      let summ = arr3.reduce((acc, currValue) => 
         acc + currValue, 0);
      

      console.log(summ);

      let summa = document.getElementById("Summa1");

      summa.innerHTML = summ;
      let bonus1 = document.getElementById("Bonus1");

      let bonus = 0;

      if (summ >= 63) {
        bonus = 50;
      } else {
        bonus = 0;
      }

      bonus1.innerHTML = bonus;
    }
    

    summa2() 
    {
        let numberArray = document.getElementsByClassName("siffror2");
        let arr2 = Array.from(numberArray);
        let arr3 = arr2.map((element) => {
          return Number(element.value);
        });
  
        let summ = arr3.reduce((acc, currValue) => 
           acc + currValue, 0);
        
  
        console.log(summ);
  
        let summa = document.getElementById("Summa2");
  
        summa.innerHTML = summ;
        let bonus1 = document.getElementById("Bonus2");
  
        let bonus = 0;
  
        if (summ >= 63) {
          bonus = 50;
        } else {
          bonus = 0;
        }
  
        bonus1.innerHTML = bonus;
      }
      
    }