import React from 'react';

import './BotLeftCornerBox.css';

export default function BotLeftCornerBox({ blockDetails }) {
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
      <div className="blc-content-div">
        <div className="blc-content">Jail</div>
      </div>
      <div className="brc-player-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
    </div>
  );
}
