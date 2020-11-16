import React from 'react';

import './BottomPlace.css';

export default function TopPlace({ blockDetails }) {
  const { name, currentPlayers } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box" key={name}>
        <div
          className="player-box-bottom-city"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    );
  });
  return (
    <div className="bottom-place">
      <div className="bottom-place-content">
        <p>{name}</p>
        <div className="bottom-place-image"></div>
        <div className="player-position-bottom">
          <div className="d-flex">{playerBoxes}</div>
        </div>
      </div>
      <div className="player-bottom-place-color"></div>
    </div>
  );
}
