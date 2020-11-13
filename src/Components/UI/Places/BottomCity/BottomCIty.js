import React from 'react';

import './BottomCity.css';

export default function BottomCity({ blockDetails }) {
  const { color, name } = blockDetails;
  return (
    <div className="bottom-city">
      <div
        className="bottom-city-box mb-auto"
        style={{ backgroundColor: color }}
      ></div>
      <div className="bottom-city-content">
        <p>{name}</p>
        <div className="bottom-city-construction"></div>
        <div style={{ margin: 'auto', width: '90px' }}>
          <div className="d-flex">
            <div className="player-box-bottom-city"></div>
            <div className="player-box-bottom-city"></div>
            <div className="player-box-bottom-city"></div>
            <div className="player-box-bottom-city"></div>
          </div>
        </div>
      </div>
      <div className="player-bottom-color"></div>
    </div>
  );
}
