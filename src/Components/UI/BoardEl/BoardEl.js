import React from 'react';
import BottomCity from '../Places/BottomCity/BottomCIty';
import LeftCity from '../Places/LeftCity/LeftCity';
import RightCity from '../Places/RightCity/RightCity';
import TopCity from '../Places/TopCity/TopCity';
import TopPlace from '../Places/TopPlace/TopPlace';
import BottomPlace from '../Places/BottomPlace/BottomPlace';
import LeftPlace from '../Places/LeftPlace/LeftPlace';
import RightPlace from '../Places/RightPlace/RightPlace';
import TopLeftCornerBox from '../Places/TopLeftCornerBox/TopLeftCornerBox';
import TopRightCornerBox from '../Places/TopRightCornerBox/TopRightCornerBox';
import BotLeftCornerBox from '../Places/BotLeftCornerBox/BotLeftCornerBox';
import BotRightCornerBox from '../Places/BotRightCornerBox/BotRightCornerBox';

import './BoardEl.css';

class BoardEl extends React.Component {
  render() {
    return (
      <div className="container main-div">
        <div className="board">
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <TopLeftCornerBox
                  blockDetails={this.props.gameBlocks[20]}
                ></TopLeftCornerBox>
                <TopCity blockDetails={this.props.gameBlocks[21]}></TopCity>
                <TopPlace blockDetails={this.props.gameBlocks[22]}></TopPlace>
                <TopCity blockDetails={this.props.gameBlocks[23]}></TopCity>
                <TopCity blockDetails={this.props.gameBlocks[24]}></TopCity>
                <TopPlace blockDetails={this.props.gameBlocks[25]}></TopPlace>
                <TopCity blockDetails={this.props.gameBlocks[26]}></TopCity>
                <TopCity blockDetails={this.props.gameBlocks[27]}></TopCity>
                <TopPlace blockDetails={this.props.gameBlocks[28]}></TopPlace>
                <TopCity blockDetails={this.props.gameBlocks[29]}></TopCity>
                <TopRightCornerBox
                  blockDetails={this.props.gameBlocks[30]}
                ></TopRightCornerBox>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[19]}></LeftCity>
                <RightCity blockDetails={this.props.gameBlocks[31]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[18]}></LeftCity>
                <RightCity blockDetails={this.props.gameBlocks[32]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={this.props.gameBlocks[17]}></LeftPlace>
                <RightPlace
                  blockDetails={this.props.gameBlocks[33]}
                ></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[16]}></LeftCity>
                <RightCity blockDetails={this.props.gameBlocks[34]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={this.props.gameBlocks[15]}></LeftPlace>
                <RightPlace
                  blockDetails={this.props.gameBlocks[35]}
                ></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[14]}></LeftCity>
                <RightPlace
                  blockDetails={this.props.gameBlocks[36]}
                ></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[13]}></LeftCity>
                <RightCity blockDetails={this.props.gameBlocks[37]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftPlace blockDetails={this.props.gameBlocks[12]}></LeftPlace>
                <RightPlace
                  blockDetails={this.props.gameBlocks[38]}
                ></RightPlace>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity blockDetails={this.props.gameBlocks[11]}></LeftCity>
                <RightCity blockDetails={this.props.gameBlocks[39]}></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <BotLeftCornerBox
                  blockDetails={this.props.gameBlocks[10]}
                ></BotLeftCornerBox>
                <BottomCity
                  blockDetails={this.props.gameBlocks[9]}
                ></BottomCity>
                <BottomCity
                  blockDetails={this.props.gameBlocks[8]}
                ></BottomCity>
                <BottomPlace
                  blockDetails={this.props.gameBlocks[7]}
                ></BottomPlace>
                <BottomCity
                  blockDetails={this.props.gameBlocks[6]}
                ></BottomCity>
                <BottomPlace
                  blockDetails={this.props.gameBlocks[5]}
                ></BottomPlace>
                <BottomPlace
                  blockDetails={this.props.gameBlocks[4]}
                ></BottomPlace>
                <BottomCity
                  blockDetails={this.props.gameBlocks[3]}
                ></BottomCity>
                <BottomPlace
                  blockDetails={this.props.gameBlocks[2]}
                ></BottomPlace>
                <BottomCity
                  blockDetails={this.props.gameBlocks[1]}
                ></BottomCity>
                <BotRightCornerBox
                  blockDetails={this.props.gameBlocks[0]}
                ></BotRightCornerBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardEl;
