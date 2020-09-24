document.addEventListener("DOMContentLoaded", function (event) {
  let game = new Game();
  
  let spel1_1 = document.getElementById("Ettor_1");
  let spel1_2 = document.getElementById("Tvåor_1");
  let spel1_3 = document.getElementById("Treor_1");
  let spel1_4 = document.getElementById("Fyror_1");
  let spel1_5 = document.getElementById("Femmor_1");
  let spel1_6 = document.getElementById("Sexor_1");
<<<<<<< HEAD
 
  spel1_1.addEventListener("change", function()
  {
    game.summa();

    
  });
  spel1_2.addEventListener("change", function()
  {
    game.summa();
    
  });
  spel1_3.addEventListener("change", function()
  {
    game.summa();
  });
  spel1_4.addEventListener("change", function()
  {
    game.summa();
  });
  spel1_5.addEventListener("change", function()
  {
    game.summa();
  });
  spel1_6.addEventListener("change", function()
  {
    game.summa();
  });
  
=======

  spel1_1.addEventListener("change", summa1);
  spel1_2.addEventListener("change", summa1);
  spel1_3.addEventListener("change", summa1);
  spel1_4.addEventListener("change", summa1);
  spel1_5.addEventListener("change", summa1);
  spel1_6.addEventListener("change", summa1);

>>>>>>> 0d3358fcf34730a9dbc62f36b23d62e203937eb0
  let spel2_1 = document.getElementById("Ettor_2");
  let spel2_2 = document.getElementById("Tvåor_2");
  let spel2_3 = document.getElementById("Treor_2");
  let spel2_4 = document.getElementById("Fyror_2");
  let spel2_5 = document.getElementById("Femmor_2");
  let spel2_6 = document.getElementById("Sexor_2");

<<<<<<< HEAD
  spel2_1.addEventListener("change", function()
  {
    game.summa2();
  });
  spel2_2.addEventListener("change", function()
  {
    game.summa2();
  });
  spel2_3.addEventListener("change", function()
  {
    game.summa2();
  });
  spel2_4.addEventListener("change", function()
  {
    game.summa2();
  });
  spel2_5.addEventListener("change", function()
  {
    game.summa2();
  });
  spel2_6.addEventListener("change", function()
  {
    game.summa2();
  });
  
 
//----------------------------------Tärningskastaren--------------------------------------
=======
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
>>>>>>> 0d3358fcf34730a9dbc62f36b23d62e203937eb0

  let dice = new Dice();

  let button = document.getElementById("throw");

  /*Collecting checked values on mousedown and generating 
  new ones on mouseup*/

  button.addEventListener("mousedown", function (e) {
    dice.addSaved();
  });
  button.addEventListener("mouseup", function (e) {
    dice.addImage();
  });
  let btnSubmit = document.getElementById("toScoreboard");
  btnSubmit.addEventListener("click", function (e) {    
    dice.reset();
    dice = new Dice();
  });
});
