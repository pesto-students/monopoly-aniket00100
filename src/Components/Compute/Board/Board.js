import React from 'react';
import BoardEl from '../../UI/BoardEl/BoardEl';

import blocks from '../../../data/gameBlocks.json';
// import communityCards from '../../../data/communityCards.json';
// import chanceCards from '../../../data/chanceCards.json';
import Player from '../Player/Player';
import Dice from '../Dice/Dice';
import Auction from '../AuctionBlock/Auction';

const btnStyle = {
  margin: 'auto',
  fontSize: '2rem',
  marginTop: '50px',
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.gameBlocks = JSON.parse(JSON.stringify(blocks));

    this.setNewProperties();

    this.communityBlocks = [2, 17, 33];
    this.chanceBlocks = [7, 22, 36];
    this.taxBlocks = [4, 38];

    this.player1 = new Player('Player 1', 'black', 1500);
    this.player2 = new Player('Player 2', 'purple', 1500);
    this.player3 = new Player('Player 3', 'blue', 1500);
    this.player4 = new Player('Player 4', 'green', 1500);

    this.turn = [this.player1, this.player2, this.player3, this.player4];
    this.gameBlocks[0].currentPlayers = [...this.turn];
    this.dice = new Dice();
    this.jailBlock = 10;
    this.goToJailBlock = 30;

    this.state = {
      players: [...this.turn],
      gameOn: false,
      gameBlocks: this.gameBlocks,
      currentPlayerPlayed: false,
      forcedBid: false,
      disableBuyButton: false,
      disableBid: false,
      auctionOn: false,
    };
  }

  setNewProperties = () => {
    this.gameBlocks.forEach((block) => {
      block.currentPlayers = [];
      block.owner = null;
      block.houseCount = 0;
      block.mortgaged = false;
    });
  };

  componentDidMount() {
    // this.setState({gameOn: true});
  }

  rollDice = () => {
    const currentPlayer = this.state.players[0];
    const { currentPosition } = currentPlayer;
    const playerCash = currentPlayer.getCurrentCash();
    const { gameBlocks } = this.state;

    const index = gameBlocks[currentPosition].currentPlayers.indexOf(
      currentPlayer
    );

    const [first, second] = this.dice.rollDice();

    currentPlayer.currentPosition += first + second;
    if (currentPlayer.currentPosition >= 40) {
      currentPlayer.creditSalary(200);
    }
    currentPlayer.currentPosition %= 40;
    const newBlock = gameBlocks[currentPlayer.currentPosition];
    let disableBuyButton = false;
    let disableBid = false;
    if (playerCash < newBlock.price) {
      disableBuyButton = true;
    }
    if (newBlock.owner !== null) {
      disableBid = true;
      disableBuyButton = true;
      const { owner } = newBlock;
      const rent = currentPlayer.payRent(newBlock);
      owner.collectRent(rent);
    }

    gameBlocks[currentPosition].currentPlayers.splice(index, 1);
    gameBlocks[currentPlayer.currentPosition].currentPlayers.push(
      currentPlayer
    );
    if (first !== second) {
      return this.setState({
        gameBlocks,
        currentPlayerPlayed: true,
        disableBuyButton,
        disableBid,
      });
    }
    return this.setState({
      gameBlocks,
      currentPlayerPlayed: false,
      disableBuyButton,
      disableBid,
    });
  };

  buyProperty = () => {
    const currentPlayer = this.turn[0];
    const { currentPosition } = currentPlayer;

    const cash = currentPlayer.getCurrentCash();
    const costOfProperty = this.gameBlocks[currentPosition].price;
    if (cash >= costOfProperty) {
      this.gameBlocks[currentPosition].owner = currentPlayer;
      currentPlayer.buyProperty(costOfProperty, currentPosition);
      return this.setState({ gameBlocks: [...this.gameBlocks] });
    }
    this.setState({ forcedBid: true });
  };

  bid = () => {
    // const currentPlayer = this.turn[0];
    // const { currentPosition } = currentPlayer;
    const auctionOn = true;
    this.setState({ auctionOn });
  };

  onEndAuction = (player) => {
    const currentBlockIndex = this.state.players[0].currentPosition;
    this.gameBlocks[currentBlockIndex].owner = player;
    const { price } = this.gameBlocks[currentBlockIndex];
    player.buyProperty(price, currentBlockIndex);
    console.log(player);
    this.setState({ gameBlocks: [...this.gameBlocks], auctionOn: false });
  };

  endTurn = () => {
    this.turn = [...this.turn.slice(1), this.turn[0]];

    this.setState({
      players: this.turn,
      currentPlayerPlayed: false,
      auctionOn: false,
    });
  };

  render() {
    // console.log(this.state.players);
    const currentPlayerName = this.state.players[0].name;
    // console.log(currentPlayerName);
    return (
      <div>
        <BoardEl
          gameBlocks={this.state.gameBlocks}
          gameOn={this.state.gameOn}
        ></BoardEl>
        <div style={btnStyle}>
          <button
            onClick={this.rollDice}
            disabled={this.state.currentPlayerPlayed || this.state.auctionOn}
          >
            Roll Dice
          </button>
          <button
            onClick={this.buyProperty}
            disabled={
              this.state.forcedBid ||
              this.state.disableBuyButton ||
              this.state.auctionOn
            }
          >
            Buy Property
          </button>
          <button onClick={this.bid} disabled={this.state.disableBid}>
            Auction
          </button>
          <button onClick={this.endTurn} disabled={this.state.forcedBid}>
            End Turn
          </button>
        </div>
        <div style={btnStyle}>
          <h1>{this.state.players[0].name}</h1>
          <p>{`Cash: $${this.state.players[0].getCurrentCash()}`}</p>
        </div>
        <Auction
          auctionOn={this.state.auctionOn}
          biddingSequence={[...this.state.players]}
          name={currentPlayerName}
          onEndAuction={this.onEndAuction}
        ></Auction>
      </div>
    );
  }
}

export default Board;
