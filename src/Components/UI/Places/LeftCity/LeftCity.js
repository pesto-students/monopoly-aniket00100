import React from 'react';

import './LeftCity.css';

export default function LeftCity({ blockDetails }) {
  const { color, name, currentPlayers, owner, houseCount } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div
        className="p-box"
        key={name}
        style={{ backgroundColor: color }}
      ></div>
    );
  });
  return (
    <div className="horizontal-place mr-auto">
      <div className="d-flex">
        <div
          className="player-left-color"
          style={{ backgroundColor: owner ? owner.color : 'transparent' }}
        ></div>
        <div className="player-left-position">
          <div className="p-boxes">{playerBoxes}</div>
        </div>
        <div className="left-city-houses">
          <p>{houseCount ? houseCount : null}</p>
        </div>
        <div className="left-city-name">{name}</div>
        <div className="left-city" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}
