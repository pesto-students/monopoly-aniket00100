import React from 'react';

import './LeftPlace.css';

export default function LeftPlace({ blockDetails }) {
  const { name, currentPlayers } = blockDetails;
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
        <div className="player-left-color"></div>
        <div className="player-left-position">
          <div className="p-boxes">{playerBoxes}</div>
        </div>
        <div className="left-place-image"></div>
        <div className="left-place-name">{name}</div>
      </div>
    </div>
  );
}
