import React from 'react';
import BottomCity from '../Places/BottomCity/BottomCIty';
import LeftCity from '../Places/LeftCity/LeftCity';
import RightCity from '../Places/RightCity/RightCity';
import TopCity from '../Places/TopCity/TopCity';
import TopPlace from '../Places/TopPlace/TopPlace';
import BottomPlace from '../Places/BottomPlace/BottomPlace';
import gameBlocks from '../../../data/gameBlocks.json';

import './BoardEl.css';
import LeftPlace from '../Places/LeftPlace/LeftPlace';
import RightPlace from '../Places/RightPlace/RightPlace';

class BoardEl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container main-div">
        <div className="board">
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="corner-box" id="20"></div>
                <TopCity blockDetails={gameBlocks[21]}></TopCity>
                <TopPlace blockDetails={gameBlocks[22]}></TopPlace>
                <TopCity blockDetails={gameBlocks[23]}></TopCity>
                <TopCity blockDetails={gameBlocks[24]}></TopCity>
                <TopPlace blockDetails={gameBlocks[25]}></TopPlace>
                <TopCity blockDetails={gameBlocks[26]}></TopCity>
                <TopCity blockDetails={gameBlocks[27]}></TopCity>
                <TopPlace blockDetails={gameBlocks[28]}></TopPlace>
                <TopCity blockDetails={gameBlocks[29]}></TopCity>
                <div className="corner-box" id="30"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[19]}></LeftCity>
                <RightCity blockDetails={gameBlocks[31]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[18]}></LeftCity>
                <RightCity blockDetails={gameBlocks[32]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={gameBlocks[17]}></LeftPlace>
                <RightPlace blockDetails={gameBlocks[33]}></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[16]}></LeftCity>
                <RightCity blockDetails={gameBlocks[34]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={gameBlocks[15]}></LeftPlace>
                <RightPlace blockDetails={gameBlocks[35]}></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[14]}></LeftCity>
                <RightPlace blockDetails={gameBlocks[36]}></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[13]}></LeftCity>
                <RightCity blockDetails={gameBlocks[37]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={gameBlocks[12]}></LeftPlace>
                <RightPlace blockDetails={gameBlocks[38]}></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={gameBlocks[11]}></LeftCity>
                <RightCity blockDetails={gameBlocks[39]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="corner-box" id="0"></div>
                <BottomCity blockDetails={gameBlocks[9]}></BottomCity>
                <BottomCity blockDetails={gameBlocks[8]}></BottomCity>
                <BottomPlace blockDetails={gameBlocks[7]}></BottomPlace>
                <BottomCity blockDetails={gameBlocks[6]}></BottomCity>
                <BottomPlace blockDetails={gameBlocks[5]}></BottomPlace>
                <BottomPlace blockDetails={gameBlocks[4]}></BottomPlace>
                <BottomCity blockDetails={gameBlocks[3]}></BottomCity>
                <BottomPlace blockDetails={gameBlocks[2]}></BottomPlace>
                <BottomCity blockDetails={gameBlocks[1]}></BottomCity>
                <div className="corner-box" id="10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardEl;
