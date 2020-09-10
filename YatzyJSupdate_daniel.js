document.addEventListener("DOMContentLoaded", function(e) {
    let spel1_1 = document.getElementById("player1_ones"); 
    let spel1_2 = document.getElementById("player1_twos");
    let spel1_3 = document.getElementById("player1_threes");
    let spel1_4 = document.getElementById("player1_fours");
    let spel1_5 = document.getElementById("player1_fives");
    let spel1_6 = document.getElementById("player1_sixes");    

    let knapp = document.getElementById("calc")
    let summa1 = document.getElementById("sum");

knapp.addEventListener("click", function(event) { 
    let resultat = 0;
    let tmp = 0;

        tmp = spel1_1.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        }

        tmp = spel1_2.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        }    

        tmp = spel1_3.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        } 

        tmp = spel1_4.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        } 

        tmp = spel1_5.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        } 

        tmp = spel1_6.value;
        if (!isNaN(Number(tmp))){
            resultat += Number(tmp);
        } 

    console.log("Händer det ens något?");

    summa1.innerHTML = resultat;
    console.log(resultat);
    })
})