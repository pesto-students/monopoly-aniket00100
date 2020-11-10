import React from 'react';
import BottomCity from '../Places/BottomCity/BottomCIty';
import LeftCity from '../Places/LeftCity/LeftCity';
import RightCity from '../Places/RightCity/RightCity';
import TopCity from '../Places/TopCity/TopCity';
import TopPlace from '../Places/TopPlace/TopPlace';

import './BoardEl.css';

class BoardEl extends React.Component {
  render() {
    return (
      <div className="container main-div">
        <div className="board">
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="corner-box" id="20"></div>
                <TopCity></TopCity>
                <TopPlace></TopPlace>
                <TopCity></TopCity>
                <TopCity></TopCity>
                <TopPlace></TopPlace>
                <TopCity></TopCity>
                <TopCity></TopCity>
                <TopPlace></TopPlace>
                <TopCity></TopCity>
                <div className="corner-box" id="20"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <RightCity></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <RightCity></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="horizontal-place mr-auto"></div>
                <div className="horizontal-place2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <RightCity></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="horizontal-place mr-auto"></div>
                <div className="horizontal-place2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <div className="horizontal-place2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <RightCity></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="horizontal-place mr-auto"></div>
                <div className="horizontal-place2"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <LeftCity></LeftCity>
                <RightCity></RightCity>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex">
                <div className="corner-box" id="20"></div>
                <BottomCity></BottomCity>
                <BottomCity></BottomCity>
                <TopPlace></TopPlace>
                <BottomCity></BottomCity>
                <TopPlace></TopPlace>
                <TopPlace></TopPlace>
                <BottomCity></BottomCity>
                <TopPlace></TopPlace>
                <BottomCity></BottomCity>
                <div className="corner-box" id="20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardEl;
