import React from 'react';
import BoardEl from '../../UI/BoardEl/BoardEl';

import blocks from '../../../data/gameBlocks.json';
import Player from '../Player/Player';
import Dice from '../Dice/Dice';

const btnStyle = {
  width: '200px',
  height: '50px',
  backgroundColor: 'cyan',
  margin: 'auto',
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.gameBlocks = JSON.parse(JSON.stringify(blocks));
    this.setNewProperties();
    this.player1 = new Player('Player 1', 'black', 1500);
    this.player2 = new Player('Player 2', 'purple', 1500);
    this.player3 = new Player('Player 3', 'blue', 1500);
    this.player4 = new Player('Player 4', 'white', 1500);
    this.turn = [this.player1, this.player2, this.player3, this.player4];
    this.gameBlocks[0].currentPlayers = [...this.turn];
    this.dice = new Dice();
    this.state = {
      players: [...this.turn],
      gameOn: false,
      gameBlocks: this.gameBlocks,
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

    const { gameBlocks } = this.state;
    const index = gameBlocks[currentPosition].currentPlayers.indexOf(
      currentPlayer
    );

    const [first, second] = this.dice.rollDice();
    currentPlayer.currentPosition += first + second;

    gameBlocks[currentPosition].currentPlayers.splice(index, 1);
    gameBlocks[currentPlayer.currentPosition].currentPlayers.push(
      currentPlayer
    );
    this.turn = [...this.turn.slice(1), this.turn[0]];
    this.setState({ players: [...this.turn], gameBlocks });
  };

  render() {
    return (
      <div className="d-flex">
        <BoardEl
          gameBlocks={this.gameBlocks}
          gameOn={this.state.gameOn}
        ></BoardEl>
        <button onClick={this.rollDice} style={btnStyle}>
          Roll Dice
        </button>
      </div>
    );
  }
}

export default Board;
