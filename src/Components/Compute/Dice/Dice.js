export default class Dice {
  constructor() {
    this.current = null;
  }

  rollDice() {
    const random1 = Math.round(Math.random() * 6);
    const random2 = Math.round(Math.random() * 6);
    this.current = [random1, random2];
    return this.current;
  }
}
