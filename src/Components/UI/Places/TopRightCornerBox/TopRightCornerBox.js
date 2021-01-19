import React from 'react';

import './TopRightCornerBox.css';

export default function TopRightCornerBox({ blockDetails }) {
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
      <div style={{ fontSize: '2rem' }}>Go to Jail!</div>
    </div>
  );
}
