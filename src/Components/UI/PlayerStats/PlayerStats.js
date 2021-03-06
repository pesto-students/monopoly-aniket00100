import React from 'react';

import './PlayerStats.css';

export default function PlayerStats(props) {
  const { player, onBuild, onMortgage, onRedeem, onSellHouse } = props;
  const { properties, mortgagedProperties, propertyGroups } = player;
  const propertiesList = properties.map((property) => {
    const { name, index, groupNumber, houseCount, mortgaged } = property;
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
        <p
          className="property-title mr-auto"
          style={{ textDecoration: mortgaged ? 'line-through' : null }}
        >
          {name}
        </p>
        <button
          className="mtg-btn"
          onClick={(event) => onMortgage(event, index)}
          disabled={mortgageDisabled || mortgaged}
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

  const mortgagedPropertyList = mortgagedProperties.map((property) => {
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
      <h5>{`Now playing: ${player.name}`}</h5>
      <p>{`Cash: $${player.getCurrentCash()}`}</p>
      <div className="tables-container">
        <div className="tables">
          <p className="tables-title">Owned Properties</p>
          <div className="table-content">
            {properties.length ? propertiesList : null}
          </div>
        </div>
        <div className="tables">
          <p className="tables-title">Mortgaged Properties</p>
          <div className="table-content">
            {mortgagedProperties.length ? mortgagedPropertyList : null}
          </div>
        </div>
      </div>
    </div>
  );
}
