import communityCards from '../../../data/communityCards.json';
import chanceCards from '../../../data/chanceCards.json';

const HOUSE_REPAIR_COST = 25;
const HOTEL_REPAIR_COST = 100;
const SPEEDING_FINE = 15;
const CHAIRMAN_COST = 50;
const BROADWALK_INDEX = 39;
const READING_RAIL_INDEX = 5;
const ILLINOIS_AVENUE = 24;
const ST_CHARLES_PLACE = 11;
const JAIL_INDEX = 10;
const UTILITIES = [5, 12, 15, 25, 28, 35];
const RAILROADS = [5, 15, 25, 35];
const DIVIDEND = 50;
const POOR_TAX = 15;
const SALARY = 200;
const BUILDING_LOAN = 150;

export const chanceCardHandler = (players, gameBlocks) => {
  console.log('in handler');
  const max = chanceCards.length - 1;
  const chanceIndex = Math.round(Math.random() * max) + 1;
  return chanceCardUtil(chanceIndex, players, gameBlocks);
};
export const communityCardHandler = (players, gameBlocks) => {
  console.log('in handler');
  const max = chanceCards.length - 1;
  const communityIndex = Math.round(Math.random() * max) + 1;
  return communityCardUtil(communityIndex, players, gameBlocks);
};

const chanceCardUtil = (chanceIndex, players, gameBlocks) => {
  console.log('in util');
  const [player, ...playerQueue] = players;
  const { currentPosition } = player;
  let index;
  switch (chanceIndex) {
    case 0:
      player.getOutOfJailFreeCard += 1;
      return chanceCards[0];
    case 1:
      const housesRepairCost = player.countHouses() * HOUSE_REPAIR_COST;
      const hotelsRepairCost = player.countHotels() * HOTEL_REPAIR_COST;
      player.cash -= housesRepairCost + hotelsRepairCost;
      return chanceCards[1];
    case 2:
      player.cash -= SPEEDING_FINE;
      return chanceCards[2];
    case 3:
      playerQueue.forEach((notCurrentPlayer) => {
        player.cash -= CHAIRMAN_COST;
        notCurrentPlayer.cash += CHAIRMAN_COST;
      });
      return chanceCards[3];

    case 4:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition -= 3;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[4];

    case 5:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);

      UTILITIES.push(currentPosition);
      const newUtilitiesArray = [...new Set([...UTILITIES])];
      newUtilitiesArray.sort(function (a, b) {
        return a - b;
      });
      const nearestUtilityIndex = newUtilitiesArray.indexOf(currentPosition);
      let newPositon = nearestUtilityIndex + 1;
      newPositon = newPositon < newUtilitiesArray.length - 1 ? newPositon : 0;
      player.currentPosition = newUtilitiesArray[newPositon];
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[5];

    case 6:
      player.cash += DIVIDEND;
      return chanceCards[6];

    case 7:
      const curPosition = player.currentPosition;

      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);

      RAILROADS.push(curPosition);
      const newUtilitiesArrayRail = [...new Set([...RAILROADS])];
      newUtilitiesArrayRail.sort(function (a, b) {
        return a - b;
      });
      const nearestRailIndex = newUtilitiesArrayRail.indexOf(curPosition);
      let newPositon2 = nearestRailIndex + 1;
      newPositon2 =
        newPositon2 < newUtilitiesArrayRail.length - 1 ? newPositon2 : 0;
      console.log(newPositon2);
      player.currentPosition = newUtilitiesArrayRail[newPositon2];
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[7];

    case 8:
      player.cash -= POOR_TAX;
      return chanceCards[8];

    case 9:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition = READING_RAIL_INDEX;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[9];

    case 10:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition = BROADWALK_INDEX;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[10];

    case 11:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      if (ILLINOIS_AVENUE <= player.currentPosition) {
        player.cash += SALARY;
      }
      player.currentPosition = ILLINOIS_AVENUE;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[11];

    case 12:
      player.cash += BUILDING_LOAN;
      return chanceCards[12];

    case 13:
      return chanceCardUtil(7, players, gameBlocks);

    case 14:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      if (ST_CHARLES_PLACE <= player.currentPosition) {
        player.cash += SALARY;
      }
      player.currentPosition = ST_CHARLES_PLACE;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[14];

    case 15:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition = JAIL_INDEX;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return chanceCards[15];

    default:
      break;
  }
};

const communityCardUtil = (communityIndex, players, gameBlocks) => {
  console.log('in util');
  const [player, ...playerQueue] = players;
  const { currentPosition } = player;
  let index;
  switch (communityIndex) {
    case 0:
      player.getOutOfJailFreeCard += 1;
      return communityCards[0];

    case 1:
      player.cash += 10;
      return communityCards[1];

    case 2:
      player.cash += 50;
      return communityCards[2];
    case 3:
      player.cash += 100;
      return communityCards[3];
    case 4:
      player.cash += 20;
      return communityCards[4];
    case 5:
      player.cash += 100;
      return communityCards[5];
    case 6:
      player.cash += 100;
      return communityCards[6];
    case 7:
      player.cash += 25;
      return communityCards[7];
    case 8:
      player.cash -= 100;
      return communityCards[8];
    case 9:
      player.cash += 200;
      return communityCards[9];
    case 10:
      player.cash -= 50;
      return communityCards[10];
    case 11:
      player.cash -= 50;
      return communityCards[11];
    case 12:
      playerQueue.forEach((notCurrentPlayer) => {
        notCurrentPlayer.cash -= 10;
        player.cash += 10;
      });
      return communityCards[12];
    case 13:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition = 0;
      player.cash += 200;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return communityCards[13];
    case 14:
      const streetRepairCost = player.countHouses() * 45;
      const hotelStreetRepairCost = player.countHotels() * 115;
      player.cash -= streetRepairCost + hotelStreetRepairCost;
      return communityCards[14];
    case 15:
      index = gameBlocks[currentPosition].currentPlayers.indexOf(player);
      gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      player.currentPosition = JAIL_INDEX;
      gameBlocks[player.currentPosition].currentPlayers.push(player);
      return communityCards[15];
    default:
      break;
  }
};
