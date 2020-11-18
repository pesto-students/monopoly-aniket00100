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
    this.getOutOfJailFreeCard = 0;
  }
  buyProperty(cost, propertyIndex) {
    console.log(cost);
    this.properties.push(propertyIndex);
    this.cash -= cost;
    console.log('bought property at = ', propertyIndex);
  }
  getCurrentCash() {
    return this.cash;
  }
  tradeProperty(getProperty, giveProperty = null, extraCash = 0) {}
  mortgageProperty(property) {}
  buildOnProperty(property) {}
  collectRent(rent) {
    this.cash += rent;
    return;
  }

  creditSalary(salary) {
    console.log('before salary = ', this.cash);
    this.cash += salary;
    console.log('after salary = ', this.cash);
    return;
  }

  payRent(property) {
    const { houseCount } = property;
    const rentString = `rent${houseCount + 1}`;
    const rent = property[rentString];
    this.cash -= rent;
    return rent;
  }
  declareBankruptcy() {}
}
