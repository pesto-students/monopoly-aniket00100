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
      <h1>Auction Block!</h1>
      <h3>{`It's ${player.name}'s turn..!`}</h3>
      <h3>{`Bid to beat: $${highestBid ? highestBid : 0}`}</h3>
      <input
        placeholder="Enter your bid"
        onChange={(event, player) => onInputChange(event, player)}
      />
      <button onClick={onBidSubmit}>Bid</button>
      <button onClick={onGiveUp}>Give Up!</button>
      <button onClick={onEndAuction}>End Auction!</button>
    </div>
  );
}
