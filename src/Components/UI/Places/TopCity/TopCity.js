import React from 'react';

import './TopCity.css';

export default function TopCity({ blockDetails }) {
  const { color } = blockDetails;
  return (
    <div className="place">
      <div className="player-top-color"></div>
      <div className="top-city-content"></div>
      <div className="top-city" style={{ backgroundColor: color }}></div>
    </div>
  );
}
