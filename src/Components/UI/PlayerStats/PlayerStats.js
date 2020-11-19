import React from 'react';

import './PlayerStats.css';

export default function PlayerStats(props) {
  const { player, gameBlocks, onBuild, onMortgage, onRedeem } = props;
  const { properties, mortgagedProperties } = player;
  const propertiesList = properties.map((property) => {
    const { name, index, groupNumber } = property;
    const { propertyGroups } = player;
    const { max, properties, maxHouses } = propertyGroups[groupNumber];
    const buildDisable = max === properties.length;
    const canBuild = maxHouses > gameBlocks[index].houseCount;

    return (
      <div key={name} className="d-flex cell">
        <p className="property-title mr-auto">{name}</p>
        <button
          className="mtg-btn"
          onClick={(event) => onMortgage(event, index)}
        >
          Mortgage
        </button>
        <button
          className="mtg-btn"
          onClick={(event) => onBuild(event, index)}
          disabled={buildDisable || !canBuild}
        >
          Build
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
