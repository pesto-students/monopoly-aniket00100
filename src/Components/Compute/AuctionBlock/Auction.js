import React from 'react';

import AuctionBlock from '../../UI/AuctionBlock/AuctionBlock';

export default class Auction extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      biddingSequence: props.biddingSequence,
      highestBid: null,
      winningPlayer: null,
      currentBid: null,
    };
    this.state = { ...this.initialState };
  }

  componentDidUpdate(prevProps) {
    const { biddingSequence, name } = this.props;
    if (prevProps.name !== name) {
      this.setState({ biddingSequence });
    }
  }

  onBidSubmit = () => {
    let { currentBid, highestBid, biddingSequence, winningPlayer } = this.state;
    if (!highestBid || currentBid > highestBid) {
      highestBid = currentBid;
      winningPlayer = biddingSequence[0];
      biddingSequence = [...biddingSequence.slice(1), biddingSequence[0]];
      return this.setState({ highestBid, biddingSequence, winningPlayer });
    }
    biddingSequence = [...biddingSequence.slice(1), biddingSequence[0]];
    return this.setState({ biddingSequence });
  };

  onEndAuction = () => {
    const { winningPlayer } = this.state;
    this.setState({ ...this.initialState }, () => {
      this.props.onEndAuction(winningPlayer);
    });
  };

  onInputChange = (event, player) => {
    const { value } = event.target;
    this.setState({ currentBid: Number(value) });
  };

  onGiveUp = () => {
    let { biddingSequence } = this.state;
    biddingSequence = biddingSequence.slice(1);
    this.setState({ biddingSequence }, () => {
      if (this.state.biddingSequence.length === 1) {
        this.onEndAuction();
      }
    });
  };

  render() {
    // console.log(this.state.winningPlayer);
    let auctionComponent = null;
    if (this.props.auctionOn) {
      const [currentPlayer] = this.state.biddingSequence;
      auctionComponent = (
        <AuctionBlock
          player={currentPlayer}
          onBidSubmit={this.onBidSubmit}
          onEndAuction={this.onEndAuction}
          onInputChange={this.onInputChange}
          onGiveUp={this.onGiveUp}
          highestBid={this.state.highestBid}
        ></AuctionBlock>
      );
    }
    return auctionComponent;
  }
}
