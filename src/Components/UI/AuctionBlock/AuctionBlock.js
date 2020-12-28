import React from 'react';

import './AuctionBlock.css';

export default function AuctionBlock(props) {
  const {
    player,
    onInputChange,
    onBidSubmit,
    onEndAuction,
    highestBid,
    onGiveUp,
  } = props;
  return (
    <div className="auction-block">
      <h5>Auction Block</h5>
      <p>{`It's ${player.name}'s turn..!`}</p>
      <p className="strong">{`Bid to beat: $${highestBid ? highestBid : 0}`}</p>
      <input
        placeholder="Enter your bid"
        type="number"
        onChange={onInputChange}
      />
      <button className="btn btn-dark" onClick={onBidSubmit}>
        Bid
      </button>
      <button className="btn btn-dark" onClick={onGiveUp}>
        Give Up!
      </button>
    </div>
  );
}
