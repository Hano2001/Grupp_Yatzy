document.addEventListener("DOMContentLoaded", function (event) {
  let game = new Game();

  let spel1_1 = document.getElementById("Ettor_1");
  let spel1_2 = document.getElementById("Tvåor_1");
  let spel1_3 = document.getElementById("Treor_1");
  let spel1_4 = document.getElementById("Fyror_1");
  let spel1_5 = document.getElementById("Femmor_1");
  let spel1_6 = document.getElementById("Sexor_1");

  spel1_1.addEventListener("change", function () {
    game.summa();
  });
  spel1_2.addEventListener("change", function () {
    game.summa();
  });
  spel1_3.addEventListener("change", function () {
    game.summa();
  });
  spel1_4.addEventListener("change", function () {
    game.summa();
  });
  spel1_5.addEventListener("change", function () {
    game.summa();
  });
  spel1_6.addEventListener("change", function () {
    game.summa();
  });

  let spel2_1 = document.getElementById("Ettor_2");
  let spel2_2 = document.getElementById("Tvåor_2");
  let spel2_3 = document.getElementById("Treor_2");
  let spel2_4 = document.getElementById("Fyror_2");
  let spel2_5 = document.getElementById("Femmor_2");
  let spel2_6 = document.getElementById("Sexor_2");

  spel2_1.addEventListener("change", function () {
    game.summa2();
  });
  spel2_2.addEventListener("change", function () {
    game.summa2();
  });
  spel2_3.addEventListener("change", function () {
    game.summa2();
  });
  spel2_4.addEventListener("change", function () {
    game.summa2();
  });
  spel2_5.addEventListener("change", function () {
    game.summa2();
  });
  spel2_6.addEventListener("change", function () {
    game.summa2();
  });

  //----------------------------------Tärningskastaren--------------------------------------

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
