document.addEventListener("DOMContentLoaded", function(event)
{

    let spel1_1 = parseInt(document.getElementById("Ettor:1").value);
 
    let spel1_2 = parseInt(document.getElementById("Tvåor:1").value);

    let spel1_3 = parseInt(document.getElementById("Treor:1").value);

    let spel1_4 = parseInt(document.getElementById("Fyror:1").value);

    let spel1_5 = parseInt(document.getElementById("Femmor:1").value);

    let spel1_6 = parseInt(document.getElementById("Sexor:1").value);

    

 let knapp = document.getElementById("submit")

knapp.addEventListener("click", function(event)
 { 
    let resultat = (spel1_1) + (spel1_2) + (spel1_3) + (spel1_4) + (spel1_5) + (spel1_6);
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