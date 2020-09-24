class Die {
  constructor() {
    this.value = this.newRandom();
  }
  //Method for adding new value witch can be called from Dice-class
  throw() {
    this.value = this.newRandom();
  }
  newRandom() {
    for (let i = 0; i <= 6; i++) {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
}