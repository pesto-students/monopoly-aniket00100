import React from 'react';

import './RightPlace.css';

export default function RightPlace({ blockDetails }) {
  const { name, currentPlayers, owner, price, index } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-container">
        <div
          className="p-box"
          key={name}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    );
  });

  const text = index === 33 || index === 36 ? name : `${name} $${price}`;

  return (
    <div className="left-property-container">
      <div className="d-flex left-property">
        <div className="right-place-content">
          <div className="right-place-title">{text}</div>
          <div className="left-place-image"></div>
          <div className="left-player-positions">
            <div className="d-flex">{playerBoxes}</div>
          </div>
        </div>
        <div
          className="right-owner"
          style={{ backgroundColor: owner ? owner.color : 'transparent' }}
        ></div>
      </div>
    </div>
  );
}
