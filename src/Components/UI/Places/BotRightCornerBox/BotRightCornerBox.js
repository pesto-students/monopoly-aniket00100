import React from 'react';

import './BotRightCornerBox.css';

export default function BotRightCornerBox({ blockDetails }) {
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
      <div className="brc-content-div">
        <div className="brc-content">
          <p>Collect $200 salary as you pass.</p>
          <h3>GO</h3>
        </div>
      </div>
      <div className="brc-player-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
    </div>
  );
}
