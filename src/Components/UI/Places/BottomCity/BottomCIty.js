import React from 'react';

import './BottomCity.css';

export default function BottomCity({ blockDetails }) {
  const { color, name, currentPlayers, owner, houseCount } = blockDetails;
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
    <div className="bottom">
      <div className="bottom-city-box" style={{ backgroundColor: color }}></div>
      <div className="bottom-name">{name}</div>
      <div className="bottom-city-houses">{houseCount ? houseCount : null}</div>
      <div className="player-position-bottom">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div
        className="player-bottom-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
    </div>
  );
}
