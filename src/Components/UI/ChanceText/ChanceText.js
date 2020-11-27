import React from 'react';

import './ChanceText.css';

export default function ChanceText({ chanceCommunityText }) {
  return (
    <div className="div-card shadow mb-5 bg-white rounded">
      <div className="card-header">
        <h2>Chance/Community Card</h2>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-text">{chanceCommunityText}</h3>
        </div>
      </div>
    </div>
  );
}
