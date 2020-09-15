document.addEventListener("DOMContentLoaded", function (event) {
    let resultat = 0;

    function summa() 
    {
        let spel1_1 = Number(document.getElementById("Ettor_1").value);
        let spel1_2 = Number(document.getElementById("Tvåor_1").value);
        let spel1_3 = Number(document.getElementById("Treor_1").value);
        let spel1_4 = Number(document.getElementById("Fyror_1").value);
        let spel1_5 = Number(document.getElementById("Femmor_1").value);
        let spel1_6 = Number(document.getElementById("Sexor_1").value);

        let sum = spel1_1 + spel1_2 + spel1_3 + spel1_4 + spel1_5 + spel1_6;

    let numberArray = document.getElementsByClassName("siffror");
    let arr2 = Array.from(numberArray);
    let arr3 = arr2.map((element) => {return Number(element.value)});
    

    console.log(arr3);

    let summ = arr3.reduce(function(acc, currValue){return acc + currValue;},0);

    console.log(summ);



        let sum_1_field = document.getElementById("Summa1");

        sum_1_field.innerHTML = sum;
        let bonus1 = document.getElementById("Bonus1");

        let bonus = 0;

    if (sum >= 63) {
        bonus = 50;
    }

    else {
        bonus = 0;
    }

    bonus1.innerHTML = bonus;
    }



    /*let ones = Number(spel1_1);
    let twos = Number(spel1_2);
    let threes = Number(spel1_3);
    let fours = Number(spel1_4);
    let fives = Number(spel1_5);
    let six = Number(spel1_6);*/



    //let knapp = document.getElementById("submit")

    //knapp.addEventListener("click", function(summa)

    let spel1_1 = document.getElementById("Ettor_1");
    let spel1_2 = document.getElementById("Tvåor_1");
    let spel1_3 = document.getElementById("Treor_1");
    let spel1_4 = document.getElementById("Fyror_1");
    let spel1_5 = document.getElementById("Femmor_1");
    let spel1_6 = document.getElementById("Sexor_1");

    spel1_1.addEventListener("change", summa);
    spel1_2.addEventListener("change", summa);
    spel1_3.addEventListener("change", summa);
    spel1_4.addEventListener("change", summa);
    spel1_5.addEventListener("change", summa);
    spel1_6.addEventListener("change", summa);

    




    /*let ones = spel1_1;
    let twos = spel1_2;
    let threes = spel1_3;
    let fours = spel1_4;
    let fives = spel1_5;
    let six = spel1_6;
    let resultat = ones + twos + threes + fours + fives + six;*/
    /*let spel1_1 = Number(document.getElementById("Ettor:1").value);
 
    let spel1_2 = Number(document.getElementById("Tvåor:1").value);

    let spel1_3 = Number(document.getElementById("Treor:1").value);

    let spel1_4 = Number(document.getElementById("Fyror:1").value);

    let spel1_5 = Number(document.getElementById("Femmor:1").value);

    let spel1_6 = Number(document.getElementById("Sexor:1").value);*/

    //console.log("Händer det ens något?");
    //let resultat = spel1_1 + spel1_2 + spel1_3 + spel1_4 + spel1_5 + spel1_6;

   

    
    
    console.log(resultat);
}
);

