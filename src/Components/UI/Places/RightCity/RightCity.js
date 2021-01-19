import React from 'react';
import { Tooltip } from 'react-tippy';
import TooltipContent from '../TooltipContent/TooltipContent';

import './RightCity.css';

export default function RightCity({ blockDetails }) {
  const { color, name, currentPlayers, owner, price } = blockDetails;

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
  return (
    <Tooltip
      html={<TooltipContent blockDetails={blockDetails} />}
      position="top-start"
    >
      <div className="left-property-container">
        <div className="d-flex left-property">
          <div
            className="right-city-color"
            style={{ backgroundColor: color }}
          ></div>
          <div className="left-city-content">
            <div className="right-place-title">{`${name} $${price}`}</div>
            <div className="right-place-price"></div>
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
    </Tooltip>
  );
}

// (
//   <div className="horizontal-place-2">
//     <div className="d-flex">
//       <div className="right-city" style={{ backgroundColor: color }}></div>
//       <div className="right-city-name">{name}</div>
//       <div className="right-city-house">
//         <p>{houseCount ? houseCount : null}</p>
//       </div>
//       <div className="player-right-position">
//         <div className="p-boxes">{playerBoxes}</div>
//       </div>
//       <div
//         className="player-right-color"
//         style={{ backgroundColor: owner ? owner.color : 'transparent' }}
//       ></div>
//     </div>
//   </div>
// );
