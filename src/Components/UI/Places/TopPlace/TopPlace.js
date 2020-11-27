import React from 'react';
import chanceIcon from '../../../../assets/chance_icon.png';
import trainIcon from '../../../../assets/train_icon.png';
import waterWorksIcon from '../../../../assets/water_icon.png';
import './TopPlace.css';

export default function TopPlace({ blockDetails }) {
  const { name, currentPlayers, owner, index } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-div" key={name}>
        <div className="p-box" style={{ backgroundColor: color }}></div>
      </div>
    );
  });

  let chanceImageSrc;
  let chanceImage = null;
  if (name === 'Chance') {
    chanceImageSrc = chanceIcon;
    chanceImage = (
      <img className="top-chance-image" src={chanceImageSrc} alt="chance"></img>
    );
  }
  let trainImageSrc;
  let trainImage = null;
  if (index % 5 === 0) {
    trainImageSrc = trainIcon;
    trainImage = (
      <img className="top-chance-image" src={trainImageSrc} alt="train"></img>
    );
  }

  let waterWorksImageSrc;
  let waterWorksImage = null;
  if (index === 28) {
    waterWorksImageSrc = waterWorksIcon;
    waterWorksImage = (
      <img
        className="top-chance-image"
        src={waterWorksImageSrc}
        alt="water works"
      ></img>
    );
  }

  return (
    <div className="top-place">
      <div
        className="player-top-color"
        style={{ backgroundColor: owner ? owner.color : 'transparent' }}
      ></div>
      <div className="player-top-position">
        <div className="d-flex">{playerBoxes}</div>
      </div>
      <div className="top-place-image">
        {chanceImage || trainImage || waterWorksImage}
      </div>
      <div className="top-place-name">{name}</div>
    </div>
  );
}
