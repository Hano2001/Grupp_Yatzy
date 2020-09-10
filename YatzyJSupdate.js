document.addEventListener("DOMContentLoaded", function(event)
{

    

    /*let ones = Number(spel1_1);
    let twos = Number(spel1_2);
    let threes = Number(spel1_3);
    let fours = Number(spel1_4);
    let fives = Number(spel1_5);
    let six = Number(spel1_6);*/

    

 let knapp = document.getElementById("submit")

knapp.addEventListener("click", function(event)
 { 
    let spel1_1 = Number(document.getElementById("Ettor_1").value);
 
    let spel1_2 = Number(document.getElementById("Tvåor_1").value);

    let spel1_3 = Number(document.getElementById("Treor_1").value);

    let spel1_4 = Number(document.getElementById("Fyror_1").value);

    let spel1_5 = Number(document.getElementById("Femmor_1").value);

    let spel1_6 = Number(document.getElementById("Sexor_1").value);
    
    let ones = spel1_1;
    let twos = spel1_2;
    let threes = spel1_3;
    let fours = spel1_4;
    let fives = spel1_5;
    let six = spel1_6;
    let resultat = ones + twos + threes + fours + fives + six;
    /*let spel1_1 = Number(document.getElementById("Ettor:1").value);
 
    let spel1_2 = Number(document.getElementById("Tvåor:1").value);

    let spel1_3 = Number(document.getElementById("Treor:1").value);

    let spel1_4 = Number(document.getElementById("Fyror:1").value);

    let spel1_5 = Number(document.getElementById("Femmor:1").value);

    let spel1_6 = Number(document.getElementById("Sexor:1").value);*/

    console.log("Händer det ens något?");
    //let resultat = spel1_1 + spel1_2 + spel1_3 + spel1_4 + spel1_5 + spel1_6;

    let summa1=document.getElementById("Summa1");

    summa1.innerHTML = resultat;
    console.log(resultat);
}
);
}
);