import React from 'react';
import './StartGame.css';

export default function StartGame(props) {
  const {
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    onPlayerOneChange,
    onPlayerTwoChange,
    onPlayerThreeChange,
    onPlayerFourChange,
    onStartGame,
  } = props;
  return (
    <div className="start-game-div">
      <h1 className="game-title">MONOPOLY</h1>
      <br></br>
      <h2>A multiplayer game of wit, business accumen and a bit of luck!</h2>
      <br></br>
      <br></br>
      <div className="player-input-outer">
        <div className="input-group">
          <div></div>
          <div className="input-group input-group-lg player-input">
            <span className="input-group-text text">Plalyer 1</span>
            <input
              type="text"
              className="form-control text"
              value={playerOne}
              onChange={onPlayerOneChange}
            ></input>
          </div>
          <div className="input-group input-group-lg player-input">
            <span className="input-group-text">Plalyer 2</span>
            <input
              type="text"
              className="form-control"
              value={playerTwo}
              onChange={onPlayerTwoChange}
            ></input>
          </div>
          <div className="input-group input-group-lg player-input ">
            <span className="input-group-text">Plalyer 3</span>
            <input
              type="text"
              className="form-control"
              value={playerThree}
              onChange={onPlayerThreeChange}
            ></input>
          </div>
          <div className="input-group input-group-lg player-input ">
            <span className="input-group-text">Plalyer 4</span>
            <input
              type="text"
              className="form-control"
              value={playerFour}
              onChange={onPlayerFourChange}
            ></input>
          </div>
        </div>
      </div>
      <button className="btn btn-success state-game" onClick={onStartGame}>
        Start Game
      </button>
    </div>
  );
}
