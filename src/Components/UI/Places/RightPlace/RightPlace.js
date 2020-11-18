import React from 'react';

import './RightPlace.css';

export default function RightPlace({ blockDetails }) {
  const { name, currentPlayers, owner } = blockDetails;
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
    <div className="right-place">
      <div className="d-flex">
        <div className="right-place-name">{name}</div>
        <div className="right-place-image"></div>
        <div className="player-right-position">
          <div className="p-boxes">{playerBoxes}</div>
        </div>
        <div
          className="ml-auto player-right-place-color"
          style={{ backgroundColor: owner ? owner.color : 'transparent' }}
        ></div>
      </div>
    </div>
  );
}
