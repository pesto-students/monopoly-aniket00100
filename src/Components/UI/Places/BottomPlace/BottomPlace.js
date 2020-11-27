import React from 'react';
import communityIcon from '../../../../assets/community_chest_icon.png';
import chanceIcon from '../../../../assets/chance_icon.png';
import trainIcon from '../../../../assets/train_icon.png';
import taxIcon from '../../../../assets/tax_icon.png';

import './BottomPlace.css';

export default function TopPlace({ blockDetails }) {
  const { name, currentPlayers, owner, index } = blockDetails;
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

  let trainImageSrc;
  let trainImage = null;
  if (index === 5) {
    trainImageSrc = trainIcon;
    trainImage = (
      <img
        className="bottom-chance-image"
        src={trainImageSrc}
        alt="train"
      ></img>
    );
  }

  return (
    <div className="bottom-place">
      <div className="bottom-place-content">
        <p>{name}</p>
        <div className="bottom-place-image">{trainImage}</div>
        <div className="player-position-bottom">
          <div className="d-flex">{playerBoxes}</div>
        </div>
      </div>
      <div
        className="player-bottom-place-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
    </div>
  );
}
