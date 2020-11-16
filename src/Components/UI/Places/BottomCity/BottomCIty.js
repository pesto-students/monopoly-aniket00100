import React from 'react';

import './BottomCity.css';

export default function BottomCity({ blockDetails }) {
  const { color, name, currentPlayers } = blockDetails;
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
    <div className="bottom-city">
      <div
        className="bottom-city-box mb-auto"
        style={{ backgroundColor: color }}
      ></div>
      <div className="bottom-city-content">
        <p>{name}</p>
        <div className="bottom-city-construction"></div>
        <div className="player-position-bottom">
          <div className="d-flex">{playerBoxes}</div>
        </div>
      </div>
      <div className="player-bottom-color"></div>
    </div>
  );
}
