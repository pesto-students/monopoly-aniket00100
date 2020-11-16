export default class Player {
  constructor(name, color, startingCapital) {
    this.name = name;
    this.color = color;
    this.properties = [];
    this.cash = startingCapital;
    this.mortgagedProperties = [];
    this.inJail = false;
    this.doubleRollCount = 0;
    this.currentPosition = 0;
  }
  buyProperty(property) {}
  tradeProperty(getProperty, giveProperty = null, extraCash = 0) {}
  mortgageProperty(property) {}
  buildOnProperty(property) {}
  collectTax(property) {}
  payTax(property) {}
  declareBankruptcy() {}
}
