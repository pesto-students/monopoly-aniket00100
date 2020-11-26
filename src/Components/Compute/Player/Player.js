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
        allOnSameHouseLevel: false,
      },
      2: {
        max: 2,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      3: {
        max: 2,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      4: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      5: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      6: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      7: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      8: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      9: {
        max: 3,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
      10: {
        max: 2,
        properties: [],
        maxHouses: 0,
        allOnSameHouseLevel: false,
      },
    };
  }

  auctionBuyProperty(block, cost) {
    this.properties.push(block);
    const { groupNumber } = block;
    this.cash -= cost;
    const propertyGroup = this.propertyGroups[groupNumber];
    propertyGroup.properties.push(block);
    return;
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

  handleConstructionOnProperty(groupNumber) {
    const propertyGroup = this.propertyGroups[groupNumber];
    let { properties } = propertyGroup;
    properties.forEach((property) => {
      const { houseCount } = property;
      if (houseCount >= propertyGroup.maxHouses) {
        propertyGroup.maxHouses = houseCount;
        propertyGroup.maxHouses = Math.min(propertyGroup.maxHouses, 5);
      }
    });
    let newHouseLevel = true;
    properties.forEach((property) => {
      if (propertyGroup.maxHouses !== property.houseCount) {
        newHouseLevel = false;
      }
    });
    propertyGroup.allOnSameHouseLevel = newHouseLevel;
    if (propertyGroup.maxHouses >= 5) {
      propertyGroup.allOnSameHouseLevel = false;
    }
  }

  collectRent(rent) {
    this.cash += rent;
    return;
  }

  creditSalary(salary) {
    this.cash += salary;
    return;
  }

  payRent(property) {
    const { houseCount } = property;
    const rentString = `rent${houseCount + 1}`;
    const rent = property[rentString];
    this.cash -= rent;
    return rent;
  }

  trade(
    counterParty,
    propertiesToSend,
    propertiesToAsk,
    cashToSend,
    cashAsked
  ) {
    const mainPartyProperties = this.properties;
    const counterPartyProperties = counterParty.properties;
    propertiesToSend.forEach((property) => {
      const index = mainPartyProperties.indexOf(property);
      mainPartyProperties.splice(index, 1);
      counterPartyProperties.push(property);
      property.owner = counterParty;
    });
    propertiesToAsk.forEach((property) => {
      const index = counterPartyProperties.indexOf(property);
      counterPartyProperties.splice(index, 1);
      mainPartyProperties.push(property);
      property.owner = this;
    });
    this.cash -= Number(cashToSend);
    counterParty.cash += Number(cashToSend);
    counterParty.cash -= Number(cashAsked);
    this.cash += Number(cashAsked);
    return;
  }

  countHouses = () => {
    let houses = 0;
    this.properties.forEach((property) => {
      const { houseCount } = property;
      if (houseCount < 5) {
        houses += houseCount;
      }
    });
    return houses;
  };

  countHotels = () => {
    let hotels = 0;
    this.properties.forEach((property) => {
      const { houseCount } = property;
      if (houseCount >= 5) {
        hotels += 1;
      }
    });
    return hotels;
  };

  declareBankruptcy() {
    this.properties.forEach((property) => {
      property.owner = null;
      property.houseCount = 0;
      property.mortgaged = false;
    });
  }
}
