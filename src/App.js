import React from 'react';
import './App.css';
import Board from './Components/Compute/Board/Board';
import StartGame from './Components/UI/StartGame/StartGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      playerOne: 'Shaktiman',
      playerTwo: 'Kilvish',
      playerThree: 'Dr. Strange',
      playerFour: 'Thanos',
      startingCapital: 1500,
    };
  }
  onPlayerOneChange = (event) => {
    const { value } = event.target;
    this.setState({ playerOne: value });
  };
  onPlayerTwoChange = (event) => {
    const { value } = event.target;
    this.setState({ playerTwo: value });
  };
  onPlayerThreeChange = (event) => {
    const { value } = event.target;
    this.setState({ playerThree: value });
  };
  onPlayerFourChange = (event) => {
    console.log('player four changed!');
    const { value } = event.target;
    this.setState({ playerFour: value });
  };

  onStartGame = (e) => {
    console.log('enterin');
    this.setState({ gameOn: true });
  };

  onStartingCapitalChange = (event) => {
    console.log('capital changed!');
    const { value } = event.target;
    this.setState({ startingCapital: Number(value) });
  };

  render() {
    const {
      playerOne,
      playerTwo,
      playerThree,
      playerFour,
      gameOn,
      startingCapital,
    } = this.state;
    const boardComponent = gameOn ? (
      <Board
        playerOne={playerOne}
        playerTwo={playerTwo}
        playerThree={playerThree}
        playerFour={playerFour}
        startingCapital={startingCapital}
      ></Board>
    ) : null;
    const startGame = !gameOn ? (
      <StartGame
        playerOne={playerOne}
        playerTwo={playerTwo}
        playerThree={playerThree}
        playerFour={playerFour}
        onPlayerFourChange={this.onPlayerFourChange}
        onPlayerOneChange={this.onPlayerOneChange}
        onPlayerThreeChange={this.onPlayerThreeChange}
        onPlayerTwoChange={this.onPlayerTwoChange}
        onStartGame={this.onStartGame}
        startingCapital={startingCapital}
        onStartingCapitalChange={this.onStartingCapitalChange}
      ></StartGame>
    ) : null;
    return (
      <div className="App">
        {boardComponent}
        {startGame}
      </div>
    );
  }
}
export default App;
