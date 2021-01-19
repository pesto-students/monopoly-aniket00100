import React from 'react';
import { Tooltip } from 'react-tippy';
import TooltipContent from '../TooltipContent/TooltipContent';
import './LeftCity.css';

export default function LeftCity({ blockDetails }) {
  const {
    color,
    name,
    currentPlayers,
    owner,

    price,
  } = blockDetails;
  const playerBoxes = currentPlayers.map((player) => {
    const { name, color } = player;
    return (
      <div key={name} className="p-box-container">
        <div className="p-box" style={{ backgroundColor: color }}></div>
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
            className="left-owner"
            style={{ backgroundColor: owner ? owner.color : 'transparent' }}
          ></div>
          <div className="left-city-content">
            <div className="left-place-title">{`${name} $${price}`}</div>
            <div className="left-place-image"></div>
            <div className="left-player-positions">
              <div className="d-flex">{playerBoxes}</div>
            </div>
          </div>
          <div
            className="left-city-color"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </Tooltip>
  );
}
