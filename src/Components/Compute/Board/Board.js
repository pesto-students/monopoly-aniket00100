import React from 'react';
import BoardEl from '../../UI/BoardEl/BoardEl';

import blocks from '../../../data/gameBlocks.json';

import Player from '../Player/Player';
import Dice from '../Dice/Dice';
import Auction from '../AuctionBlock/Auction';
import PlayerStats from '../PlayerStats/PlayerStats';
import Trade from '../Trade/Trade';
import {
  chanceCardHandler,
  communityCardHandler,
} from '../CardHandler/CardHandler';
import ChanceText from '../../UI/ChanceText/ChanceText';
import RollDiceComponent from '../../UI/RollDice/RollDice';

const divStyle = {
  margin: 'auto',
  fontSize: '2rem',
  marginTop: '50px',
  marginBottom: '50px',
};

const btnStyle = {
  margin: '20px',
  fontSize: '2rem',
  padding: '15px 20px 15px 20px',
  // height: '3rem',
};

const COMMUNITY_BLOCKS = [2, 17, 33];
const CHANCE_BLOCKS = [7, 22, 36];
// const TAX_BLOCKS = [4, 38];
const CANT_BUY_BLOCKS = [0, 2, 4, 7, 10, 17, 20, 22, 30, 33, 36, 38];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.gameBlocks = JSON.parse(JSON.stringify(blocks));

    this.setNewProperties();

    this.player1 = new Player(
      props.playerOne,
      'crimson',
      props.startingCapital
    );
    this.player2 = new Player(props.playerTwo, 'black', props.startingCapital);
    this.player3 = new Player(
      props.playerThree,
      'green',
      props.startingCapital
    );
    this.player4 = new Player(
      props.playerFour,
      'purple',
      props.startingCapital
    );

    this.turn = [this.player1, this.player2, this.player3, this.player4];
    this.gameBlocks[0].currentPlayers = [...this.turn];
    this.dice = new Dice();
    this.jailBlock = 10;
    this.goToJailBlock = 30;

    this.state = {
      players: this.turn,
      gameOn: false,
      gameBlocks: this.gameBlocks,
      currentPlayerPlayed: false,
      forcedBid: false,
      disableBuyButton: false,
      disableAuction: false,
      auctionOn: false,
      disableEndTurn: false,
      tradeOn: false,
      chanceCommunityText: '',
      diceRolled: false,
      diceFirst: null,
      diceSecond: null,
    };
  }

  setNewProperties = () => {
    let index = 0;
    this.gameBlocks.forEach((block) => {
      block.currentPlayers = [];
      block.owner = null;
      block.houseCount = 0;
      block.mortgaged = false;
      block.index = index;
      index += 1;
    });
  };

  componentDidMount() {
    this.setState({ disableBuyButton: true, disableAuction: true });
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
    // currentPlayer.currentPosition = 20;
    if (currentPlayer.currentPosition >= 40) {
      currentPlayer.creditSalary(200);
    }
    currentPlayer.currentPosition %= 40;
    const newBlock = gameBlocks[currentPlayer.currentPosition];
    let disableBuyButton = false;
    let disableAuction = false;
    if (playerCash < newBlock.price) {
      disableBuyButton = true;
    }
    if (newBlock.owner !== null) {
      disableAuction = true;
      disableBuyButton = true;
      const { owner } = newBlock;
      const rent = currentPlayer.payRent(newBlock);
      owner.collectRent(rent);
    }

    gameBlocks[currentPosition].currentPlayers.splice(index, 1);
    gameBlocks[currentPlayer.currentPosition].currentPlayers.push(
      currentPlayer
    );

    const cost = gameBlocks[currentPlayer.currentPosition].price;
    const forcedBid = cost > currentPlayer.cash ? true : false;

    if (first !== second) {
      return this.setState(
        {
          gameBlocks,
          currentPlayerPlayed: true,
          disableBuyButton,
          disableAuction,
          forcedBid,
          diceFirst: first,
          diceSecond: second,
        },
        () => {
          this.jailOrCardCheck();
        }
      );
    }
    return this.setState(
      {
        gameBlocks,
        currentPlayerPlayed: false,
        disableBuyButton,
        disableAuction,
        forcedBid,
        diceFirst: first,
        diceSecond: second,
      },
      () => {
        this.jailOrCardCheck();
      }
    );
  };

  jailOrCardCheck = () => {
    const [currentPlayer] = this.turn;
    const { currentPosition } = currentPlayer;
    const onCommunity = COMMUNITY_BLOCKS.indexOf(currentPosition);
    const onChance = CHANCE_BLOCKS.indexOf(currentPosition);
    if (onChance !== -1) {
      const chanceCommunityText = chanceCardHandler(this.turn, this.gameBlocks);
      console.log(chanceCommunityText);
      return this.setState({ chanceCommunityText });
    }
    if (onCommunity !== -1) {
      const chanceCommunityText = communityCardHandler(
        this.turn,
        this.gameBlocks
      );
      return this.setState({ chanceCommunityText });
    }
    // pay tax
    if (currentPosition === 4 || currentPosition === 38) {
      const tax =
        currentPosition === 4
          ? this.gameBlocks[4].price
          : this.gameBlocks[38].price;
      currentPlayer.cash -= tax;
      const chanceCommunityText =
        tax > 100 ? 'Pay City Tax $200' : 'Pay Luxury Tax $100';
      return this.setState({ chanceCommunityText });
    }
    if (currentPosition === 30) {
      const [index] = this.gameBlocks[currentPosition].currentPlayers;
      this.gameBlocks[currentPosition].currentPlayers.splice(index, 1);
      currentPlayer.currentPosition = 10;
      this.gameBlocks[currentPlayer.currentPosition].currentPlayers.push(
        currentPlayer
      );
      this.onTriggerSetState();
    }
  };

  buyProperty = () => {
    const [currentPlayer] = this.turn;
    const { currentPosition } = currentPlayer;
    const disableBuyButton = true;
    const disableAuction = true;
    const cash = currentPlayer.getCurrentCash();
    const block = this.gameBlocks[currentPosition];
    if (cash >= block.price) {
      this.gameBlocks[currentPosition].owner = currentPlayer;
      currentPlayer.buyProperty(block);
      return this.setState({
        gameBlocks: [...this.gameBlocks],
        disableBuyButton,
        disableAuction,
      });
    }
    this.setState({ forcedBid: true, disableBuyButton, disableAuction });
  };

  onAuction = () => {
    const auctionOn = true;
    this.setState({ auctionOn, disableAuction: true, disableEndTurn: true });
  };

  onEndAuction = (player, cost) => {
    const currentBlockIndex = this.state.players[0].currentPosition;
    this.gameBlocks[currentBlockIndex].owner = player;
    const block = this.gameBlocks[currentBlockIndex];
    player.auctionBuyProperty(block, cost);
    this.setState({
      gameBlocks: [...this.gameBlocks],
      auctionOn: false,
      disableEndTurn: false,
      disableBuyButton: true,
      forcedBid: false,
    });
  };

  onTrade = () => {
    this.setState({ tradeOn: true });
  };

  endTurn = () => {
    this.turn = [...this.turn.slice(1), this.turn[0]];

    this.setState({
      players: this.turn,
      currentPlayerPlayed: false,
      auctionOn: false,
      disableBuyButton: true,
      disableAuction: true,
      tradeOn: false,
      chanceCommunityText: '',
      diceFirst: null,
      diceSecond: null,
    });
  };

  onDeclareBankruptcy = () => {
    const [bankruptPlayer] = this.turn;
    const { currentPosition } = bankruptPlayer;
    const index = this.gameBlocks[currentPosition].currentPlayers.indexOf(
      bankruptPlayer
    );
    this.gameBlocks[currentPosition].currentPlayers.splice(index, 1);
    bankruptPlayer.declareBankruptcy();
    this.turn = this.turn.slice(1);
    this.setState({
      players: this.turn,
      gameBlocks: this.gameBlocks,
      currentPlayerPlayed: false,
      auctionOn: false,
      disableBuyButton: true,
      disableAuction: true,
      tradeOn: false,
      chanceCommunityText: '',
      diceFirst: null,
      diceSecond: null,
    });
  };

  onTriggerSetState = () => {
    const { players, gameBlocks } = this.state;
    this.setState({ players, gameBlocks });
  };

  render() {
    const {
      players,
      gameOn,
      gameBlocks,
      currentPlayerPlayed,
      forcedBid,
      disableBuyButton,
      disableAuction,
      auctionOn,
      disableEndTurn,
      tradeOn,
      chanceCommunityText,
      diceFirst,
      diceSecond,
    } = this.state;

    const [currentPlayer] = players;
    const block = gameBlocks[currentPlayer.currentPosition];

    let buyButtonHandleCantNonBuyBlocks = false;
    const { index } = block;
    if (CANT_BUY_BLOCKS.indexOf(index) !== -1) {
      console.log('cant buy block!');
      buyButtonHandleCantNonBuyBlocks = true;
    }

    const tradeComponent = tradeOn ? (
      <Trade
        currentPlayer={currentPlayer}
        players={[...players]}
        onTriggerSetState={this.onTriggerSetState}
      ></Trade>
    ) : null;

    const chanceCommunityComponent = chanceCommunityText.length ? (
      <ChanceText chanceCommunityText={chanceCommunityText}></ChanceText>
    ) : null;

    return (
      <div className="d-flex">
        <BoardEl gameBlocks={gameBlocks} gameOn={gameOn}></BoardEl>
        <div style={divStyle}>
          <div>
            <RollDiceComponent
              first={diceFirst}
              second={diceSecond}
            ></RollDiceComponent>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.rollDice}
              disabled={currentPlayerPlayed || auctionOn}
            >
              Roll Dice
            </button>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.buyProperty}
              disabled={
                forcedBid ||
                disableBuyButton ||
                auctionOn ||
                block.owner ||
                buyButtonHandleCantNonBuyBlocks
              }
            >
              Buy Property
            </button>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.onAuction}
              disabled={disableAuction || buyButtonHandleCantNonBuyBlocks}
            >
              Auction
            </button>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.onTrade}
            >
              Trade
            </button>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.endTurn}
              disabled={forcedBid || disableEndTurn}
            >
              End Turn
            </button>
            <button
              className="btn btn-dark"
              style={btnStyle}
              onClick={this.onDeclareBankruptcy}
            >
              Declare Bankruptcy
            </button>
          </div>
          <div style={divStyle}>
            <h1>{currentPlayer.name}</h1>
            <p>{`Cash: $${currentPlayer.getCurrentCash()}`}</p>
          </div>
          {chanceCommunityComponent}
          <Auction
            auctionOn={auctionOn}
            biddingSequence={[...players]}
            name={currentPlayer.name}
            onEndAuction={this.onEndAuction}
          ></Auction>
          <PlayerStats
            player={currentPlayer}
            gameBlocks={gameBlocks}
            onTriggerSetState={this.onTriggerSetState}
          ></PlayerStats>
          {tradeComponent}
        </div>
      </div>
    );
  }
}

export default Board;
