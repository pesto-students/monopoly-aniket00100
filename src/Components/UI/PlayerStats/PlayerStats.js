import React from 'react';

import './PlayerStats.css';

export default function PlayerStats(props) {
  const { player, onBuild, onMortgage, onRedeem, onSellHouse } = props;
  const { properties, mortgagedProperties, propertyGroups } = player;

  const propertiesList = properties.map((property) => {
    const { name, index, groupNumber, houseCount } = property;
    const { max, properties, maxHouses, allOnSameHouseLevel } = propertyGroups[
      groupNumber
    ];
    const buildEnable = max === properties.length;
    let canBuild = false;
    let canSell = false;
    if (buildEnable) {
      if (maxHouses === 0 || maxHouses > houseCount || allOnSameHouseLevel) {
        canBuild = true;
      } else {
        canSell = true;
      }
      if (maxHouses > 0 && allOnSameHouseLevel) {
        canSell = true;
      }
    }

    const mortgageDisabled = maxHouses !== 0;

    return (
      <div key={name} className="d-flex cell">
        <p className="property-title mr-auto">{name}</p>
        <button
          className="mtg-btn"
          onClick={(event) => onMortgage(event, index)}
          disabled={mortgageDisabled}
        >
          Mortgage
        </button>
        <button
          className="mtg-btn"
          onClick={(event) => onBuild(event, index)}
          disabled={!canBuild}
        >
          Build
        </button>
        <button
          className="mtg-btn"
          disabled={!canSell}
          onClick={(event) => onSellHouse(event, index)}
        >
          Sell
        </button>
      </div>
    );
  });

  const mortgagedPropertyList = properties.map((property) => {
    const { name, index } = property;
    return (
      <div className="d-flex cell" key={name}>
        <p className="property-title mr-auto">{name}</p>
        <button className="mtg-btn" onClick={(event) => onRedeem(event, index)}>
          Redeem
        </button>
      </div>
    );
  });
  return (
    <div>
      <h1>Player Stats</h1>
      <h3>{player.name}</h3>
      <div className="d-flex">
        <div className="tables">
          <p className="tables-title">Owned Properties</p>
          <hr />
          {properties.length ? propertiesList : null}
        </div>
        <div className="tables">
          <p className="tables-title">Mortgaged Properties</p>
          <hr />
          {mortgagedProperties.length ? mortgagedPropertyList : null}
        </div>
      </div>
    </div>
  );
}
