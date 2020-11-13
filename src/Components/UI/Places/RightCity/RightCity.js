import React from 'react';

import './RIghtCity.css';

export default function RightCity({ blockDetails }) {
  const { color } = blockDetails;
  return (
    <div className="horizontal-place-2">
      <div className="d-flex">
        <div
          className="right-city mr-auto"
          style={{ backgroundColor: color }}
        ></div>
        <div className="player-right-color"></div>
      </div>
    </div>
  );
}
