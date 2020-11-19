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
    this.propertyGroups = {
      1: {
        max: 4,
        properties: [],
        maxHouses: 0,
      },
      2: {
        max: 2,
        properties: [],
        maxHouses: 0,
      },
      3: {
        max: 2,
        properties: [],
        maxHouses: 0,
      },
      4: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      5: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      6: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      7: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      8: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      9: {
        max: 3,
        properties: [],
        maxHouses: 0,
      },
      10: {
        max: 2,
        properties: [],
        maxHouses: 0,
      },
    };
  }

  buyProperty(block) {
    this.properties.push(block);
    const { price, groupNumber } = block;
    this.cash -= price;
    const propertyGroup = this.propertyGroups[groupNumber];
    propertyGroup.properties.push(block);
    return;
  }

  getCurrentCash() {
    return this.cash;
  }

  tradeProperty(getProperty, giveProperty = null, extraCash = 0) {}

  mortgageProperty(property) {
    console.log(property);
    const { price } = property;
    this.cash += Math.round(price / 2);
    this.mortgagedProperties.push(property);
    return;
  }

  redeemMortgagedProperty(property) {
    const { price } = property;
    const propIndex = this.mortgagedProperties.indexOf(property);
    this.mortgagedProperties.splice(propIndex, 1);
    const cost = Math.round((price / 2) * 1.1);
    console.log('mortgage redeem cost = ', cost);
    this.cash -= cost;
    return;
  }

  buildOnProperty(groupNumber) {
    console.log('Player js..');
    const group = this.propertyGroups[`${groupNumber}`];
    let { properties, maxHouses } = group;
    for (const property of properties) {
      const { houseCount } = property;
      if (houseCount >= maxHouses) {
        maxHouses = houseCount;
        maxHouses = Math.min(maxHouses, 5);
      }
    }
    console.log(maxHouses);
  }

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
