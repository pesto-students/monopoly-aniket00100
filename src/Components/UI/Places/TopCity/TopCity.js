import React from 'react';
import { Tooltip } from 'react-tippy';
import TooltipContent from '../TooltipContent/TooltipContent';

import './TopCity.css';

export default function TopCity({ blockDetails }) {
  const {
    color,
    name,
    currentPlayers,
    owner,
    houseCount,
    price,
  } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div className="p-box-div" key={name}>
        <div className="p-box" style={{ backgroundColor: color }}></div>
      </div>
    );
  });

  return (
    <Tooltip
      html={<TooltipContent blockDetails={blockDetails} />}
      position="left-end"
    >
      <div className="place">
        <div
          className="top-owner"
          style={{ backgroundColor: owner ? owner.color : 'transparent' }}
        ></div>

        <div className="player-top-position">
          <div className="d-flex">{playerBoxes}</div>
        </div>
        <div className="top-city-houses">{houseCount ? houseCount : null}</div>
        <div className="top-name">{`${name} $${price}`}</div>

        <div className="top-city" style={{ backgroundColor: color }}></div>
      </div>
    </Tooltip>
  );
}
