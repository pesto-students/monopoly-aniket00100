import React from 'react';

import './TopPlace.css';

export default function TopPlace({ blockDetails }) {
  const { name, currentPlayers, owner } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-div" key={name}>
        <div className="p-box" style={{ backgroundColor: color }}></div>
      </div>
    );
  });
  return (
    <div className="top-place">
      <div
        className="player-top-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
      <div className="player-top-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div className="top-place-image"></div>
      <div className="top-place-name">{name}</div>
    </div>
  );
}
