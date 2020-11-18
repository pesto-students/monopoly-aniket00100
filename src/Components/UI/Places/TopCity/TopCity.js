import React from 'react';

import './TopCity.css';

export default function TopCity({ blockDetails }) {
  const { color, name, currentPlayers, owner } = blockDetails;
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
        className="player-top-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
      <div className="top-city-content">
        <div className="player-top-position">
          <div className="d-flex">{playerBoxes}</div>
        </div>
        <div className="top-city-houses"></div>
        <div className="top-city-name">{name}</div>
      </div>
      <div className="top-city" style={{ backgroundColor: color }}></div>
    </div>
  );
}
