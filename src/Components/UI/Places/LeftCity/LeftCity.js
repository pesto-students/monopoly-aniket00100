import React from 'react';

import './LeftCity.css';

export default function LeftCity({ blockDetails }) {
  const {
    color,
    name,
    currentPlayers,
    owner,
    houseCount,
    price,
  } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-container">
        <div
          className="p-box"
          key={name}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    );
  });
  return (
    <div className="left-property-container">
      <div className="d-flex left-property">
        <div
          className="left-owner"
          style={{ backgroundColor: owner ? owner.color : 'transparent' }}
        ></div>
        <div className="left-city-content">
          <div className="left-place-title">{`${name} $${price}`}</div>
          <div className="left-place-image"></div>
          <div className="left-player-positions">
            <div className="d-flex">{playerBoxes}</div>
          </div>
        </div>
        <div
          className="left-city-color"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}
