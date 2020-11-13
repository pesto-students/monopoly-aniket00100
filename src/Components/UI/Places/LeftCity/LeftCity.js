import React from 'react';

import './LeftCity.css';

export default function LeftCity({ blockDetails }) {
  const { color } = blockDetails;
  console.log(blockDetails);
  return (
    <div className="horizontal-place mr-auto">
      <div className="d-flex">
        <div className="player-left-color mr-auto"></div>
        <div className="left-city" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}
