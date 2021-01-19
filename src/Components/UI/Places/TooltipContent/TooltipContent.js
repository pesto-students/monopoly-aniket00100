import React from 'react';
import './tooltipContent.css';

export default function TooltipContent({ blockDetails }) {
  const { owner, price, houseCount, name, mortgaged } = blockDetails;
  const ownershipText = owner
    ? `Owner: ${owner.name}`
    : `Available to Buy at $${price}`;

  const houseElement = () => {
    if (mortgaged) {
      return (
        <p>
          Consrtuction: Redeem the property from mortgage to start the
          construction
        </p>
      );
    }
    let text;
    if (houseCount === 0) {
      text = 'Collect all properties of this group to start the construction';
    } else if (houseCount === 1) {
      text = '1 House';
    } else if (houseCount > 1) {
      text = `${houseCount} Houses`;
    }
    if (houseCount === 5) {
      text = `1 Hotel`;
    }
    return <p>{`Construction: ${text}`}</p>;
  };

  return (
    <div className="tooltip-container">
      <p>{name}</p>
      <p>{ownershipText}</p>
      <p>{mortgaged ? `Mortgaged: True` : null}</p>
      {houseElement()}
    </div>
  );
}
