import React from 'react';

import './ChanceText.css';

export default function ChanceText({ chanceCommunityText }) {
  return (
    <div className="div-card shadow mb-5 bg-white rounded">
      <div className="card-header">
        <h5>Chance/Community Card</h5>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <p>{chanceCommunityText}</p>
        </div>
      </div>
    </div>
  );
}
