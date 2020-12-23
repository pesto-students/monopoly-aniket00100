import React from 'react';
import communityIcon from '../../../../assets/community_chest_icon.png';
import chanceIcon from '../../../../assets/chance_icon.png';
import trainIcon from '../../../../assets/train_icon.png';
import taxIcon from '../../../../assets/tax_icon.png';

import './BottomPlace.css';

export default function TopPlace({ blockDetails }) {
  const { name, currentPlayers, owner, index } = blockDetails;
  // const cp = [
  //   { name: 'a', color: 'red' },
  //   { name: 'a', color: 'red' },
  //   { name: 'a', color: 'red' },
  //   { name: 'a', color: 'red' },
  // ];
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

  let communityIconSrc;
  let communityImage = null;
  if (index === 2) {
    communityIconSrc = communityIcon;
    communityImage = (
      <img
        className="bottom-chance-image"
        src={communityIconSrc}
        alt="Community Chest"
      ></img>
    );
  }

  let chanceIconSrc;
  let chanceImage = null;
  if (index === 7) {
    chanceIconSrc = chanceIcon;
    chanceImage = (
      <img
        className="bottom-chance-image"
        src={chanceIconSrc}
        alt="Community Chest"
      ></img>
    );
  }

  let taxIconSrc;
  let taxImage = null;
  if (index === 4) {
    taxIconSrc = taxIcon;
    taxImage = (
      <img
        className="bottom-chance-image"
        src={taxIconSrc}
        alt="Community Chest"
      ></img>
    );
  }

  return (
    <div className="bottom">
      <div className="bottom-name">{name}</div>
      <div className="bottom-place-image">
        {trainImage || taxImage || communityImage || chanceImage}
      </div>
      <div className="player-position-bottom">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div
        className="player-bottom-place-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
    </div>
  );
}
