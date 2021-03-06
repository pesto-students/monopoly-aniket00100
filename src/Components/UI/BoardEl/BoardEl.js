import React from 'react';
import BottomCity from '../Places/BottomCity/BottomCIty';
import LeftCity from '../Places/LeftCity/LeftCity';
import RightCity from '../Places/RightCity/RightCity';
import TopCity from '../Places/TopCity/TopCity';
import TopPlace from '../Places/TopPlace/TopPlace';
import BottomPlace from '../Places/BottomPlace/BottomPlace';
import LeftPlace from '../Places/LeftPlace/LeftPlace';
import RightPlace from '../Places/RightPlace/RightPlace';
// import TopLeftCornerBox from '../Places/TopLeftCornerBox/TopLeftCornerBox';
// import TopRightCornerBox from '../Places/TopRightCornerBox/TopRightCornerBox';
// import BotLeftCornerBox from '../Places/BotLeftCornerBox/BotLeftCornerBox';
// import BotRightCornerBox from '../Places/BotRightCornerBox/BotRightCornerBox';

import './BoardEl.css';
import PlayersMoney from '../PlayersMoney/PlayersMoney';

export default function BoardComponent(props) {
  const { gameBlocks } = props;
  return (
    <div className="grid-container">
      <div className="property-card">20</div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[21]} />
      </div>
      <div className="property-card">
        <TopPlace blockDetails={gameBlocks[22]} />
      </div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[23]} />
      </div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[24]} />
      </div>
      <div className="property-card">
        <TopPlace blockDetails={gameBlocks[25]} />
      </div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[26]} />
      </div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[27]} />
      </div>
      <div className="property-card">
        <TopPlace blockDetails={gameBlocks[28]} />
      </div>
      <div className="property-card">
        <TopCity blockDetails={gameBlocks[29]} />
      </div>
      <div className="property-card">30</div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[19]} />
      </div>
      <div className="property-card">
        <RightCity blockDetails={gameBlocks[31]} />
      </div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[18]} />
      </div>
      <div className="property-card">
        <RightCity blockDetails={gameBlocks[32]} />
      </div>
      <div className="property-card">
        <LeftPlace blockDetails={gameBlocks[17]} />
      </div>
      <div className="property-card">
        <RightPlace blockDetails={gameBlocks[33]} />
      </div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[16]} />
      </div>
      <div className="property-card">
        <RightCity blockDetails={gameBlocks[34]} />
      </div>
      <div className="property-card">
        <LeftPlace blockDetails={gameBlocks[15]} />
      </div>
      <div className="property-card">
        <RightPlace blockDetails={gameBlocks[35]} />
      </div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[14]} />
      </div>
      <div className="property-card">
        <RightPlace blockDetails={gameBlocks[36]} />
      </div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[13]} />
      </div>
      <div className="property-card">
        <RightCity blockDetails={gameBlocks[37]} />
      </div>
      <div className="property-card">
        <LeftPlace blockDetails={gameBlocks[12]} />
      </div>
      <div className="property-card">
        <RightPlace blockDetails={gameBlocks[38]} />
      </div>
      <div className="property-card">
        <LeftCity blockDetails={gameBlocks[11]} />
      </div>
      <div className="property-card">
        <RightCity blockDetails={gameBlocks[39]} />
      </div>
      <div className="property-card">10</div>
      <div className="property-card">
        <BottomCity blockDetails={gameBlocks[9]} />
      </div>
      <div className="property-card">
        <BottomCity blockDetails={gameBlocks[8]} />
      </div>
      <div className="property-card">
        <BottomPlace blockDetails={gameBlocks[7]} />
      </div>
      <div className="property-card">
        <BottomCity blockDetails={gameBlocks[6]} />
      </div>
      <div className="property-card">
        <BottomPlace blockDetails={gameBlocks[5]} />
      </div>
      <div className="property-card">
        <BottomPlace blockDetails={gameBlocks[4]} />
      </div>
      <div className="property-card">
        <BottomCity blockDetails={gameBlocks[3]} />
      </div>
      <div className="property-card">
        <BottomPlace blockDetails={gameBlocks[2]} />
      </div>
      <div className="property-card">
        <BottomCity blockDetails={gameBlocks[1]} />
      </div>
      <div className="property-card">0</div>
      <div className="Arena">
        <div>
          <PlayersMoney />
        </div>
        <div>Game Log</div>
      </div>
    </div>
  );
}
