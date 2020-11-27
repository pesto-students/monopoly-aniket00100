import React from 'react';

import './ChanceText.css';

export default function ChanceText({ chanceCommunityText }) {
  return (
    <div className="div-card shadow mb-5 bg-white rounded">
      <div class="card-header">
        <h2>Chance/Community Card</h2>
      </div>
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-text">{chanceCommunityText}</h3>
        </div>
      </div>
    </div>
  );
}
