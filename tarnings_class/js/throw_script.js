document.addEventListener("DOMContentLoaded", function (e) {
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
});