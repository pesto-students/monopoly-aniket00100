import React from 'react';

import './RightCity.css';

export default function RightCity({ blockDetails }) {
  const { color, name, currentPlayers } = blockDetails;
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
    <div className="horizontal-place-2">
      <div className="d-flex">
        <div className="right-city" style={{ backgroundColor: color }}></div>
        <div className="right-city-name">{name}</div>
        <div className="right-city-house"></div>
        <div className="player-right-position">
          <div className="p-boxes">{playerBoxes}</div>
        </div>
        <div className="player-right-color"></div>
      </div>
    </div>
  );
}
