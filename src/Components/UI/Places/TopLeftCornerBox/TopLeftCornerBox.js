import React from 'react';

import './TopLeftCornerBox.css';
export default function TopLeftCornerBox({ blockDetails }) {
  const { currentPlayers } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-div" key={name}>
        <div className="p-box" style={{ backgroundColor: color }}></div>
      </div>
    );
  });
  return (
    <div className="corner-box">
      <div className="tlc-player-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div>Parking!</div>
    </div>
  );
}
