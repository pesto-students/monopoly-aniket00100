import React from 'react';
import communityChestIcon from '../../../../assets/community_chest_icon.png';
import electricIcon from '../../../../assets/electric_icon.png';

import './LeftPlace.css';

export default function LeftPlace({ blockDetails }) {
  const { name, currentPlayers, owner, index } = blockDetails;
  const cp = [
    { name: 'a', color: 'green' },
    { name: 'a', color: 'green' },
    { name: 'a', color: 'green' },
    { name: 'a', color: 'green' },
  ];
  const playerBoxes = cp.map((player) => {
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

  let communityIconSrc;
  let communityImage = null;
  if (index === 17) {
    communityImage = (
      <img
        src={communityChestIcon}
        alt="Community chest"
        className="left-image"
      />
    );
  }

  return (
    <div className="left-property-container">
      <div className="d-flex left-property">
        <div className="left-owner"></div>
        <div className="left-place-content">
          <div className="left-place-title">{name}</div>
          <div className="left-place-image"></div>
          <div className="left-player-positions">
            <div className="d-flex">{playerBoxes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const previous = (
//   <div className="horizontal-place mr-auto">
//     <div className="d-flex">
//       <div
//         className="player-left-color"
//         style={{ backgroundColor: owner ? owner.color : 'transparent' }}
//       ></div>
//       <div className="player-left-position">
//         <div className="p-boxes">{playerBoxes}</div>
//       </div>
//       <div className="left-place-image"></div>
//       <div className="left-place-name">{name}</div>
//     </div>
//   </div>
// );
