import React from 'react';

import './TopCity.css';

export default function TopCity({ blockDetails }) {
  const { color, name, currentPlayers, owner, houseCount } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-div" key={name}>
        <div className="p-box" style={{ backgroundColor: color }}></div>
      </div>
    );
  });

  return (
    <div className="place">
      <div
        className="top-owner"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>

      <div className="player-top-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div className="top-city-houses">{houseCount ? houseCount : null}</div>
      <div className="top-name">{name}</div>

      <div className="top-city" style={{ backgroundColor: color }}></div>
    </div>
  );
}
