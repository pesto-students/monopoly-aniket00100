import React from 'react';

import './PlayerStats.css';

export default function PlayerStats(props) {
  const { player, gameBlocks, onBuild } = props;
  const properties = player.properties.map((index) => {
    return gameBlocks[index];
  });
  const mortgagedProperties = player.mortgagedProperties.map((index) => {
    return gameBlocks[index];
  });
  const propertiesList = properties.map((property) => {
    const { name, index } = property;
    return (
      <div key={name} className="d-flex cell">
        <p className="property-title mr-auto">{name}</p>
        <button className="mtg-btn">Mortgage</button>
        <button className="mtg-btn" onClick={(event) => onBuild(event, index)}>
          Build
        </button>
      </div>
    );
  });
  const mortgagedPropertyList = properties.map((property) => {
    const { name } = property;
    return <p key={name}>{name}</p>;
  });
  return (
    <div>
      <h1>Player Stats</h1>
      <h3>{player.name}</h3>
      <div className="d-flex">
        <div className="tables">
          <p>Owned Properties</p>
          <hr />
          {properties.length ? propertiesList : null}
        </div>
        <div className="tables">
          <p>Mortgaged Properties</p>
          <hr />
          {mortgagedProperties.length ? mortgagedPropertyList : null}
        </div>
      </div>
    </div>
  );
}
