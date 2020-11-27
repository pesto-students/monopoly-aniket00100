import React from 'react';
import die1 from '../../../assets/Die_1.png';
import die2 from '../../../assets/Die_2.png';
import die3 from '../../../assets/Die_3.png';
import die4 from '../../../assets/Die_4.png';
import die5 from '../../../assets/Die_5.png';
import die6 from '../../../assets/Die_6.png';
import './RollDice.css';

export default function RollDiceComponent({ first, second }) {
  if (!first) {
    return null;
  }
  const imgSrcFirst = getDieSrc(first);
  const imgSrcSecond = getDieSrc(second);
  return (
    <div className="dice-div">
      <div className="d-flex">
        <img className="dice-image" src={imgSrcFirst} alt="first die" />
        <img className="dice-image" src={imgSrcSecond} alt="second die" />
      </div>
    </div>
  );
}

function getDieSrc(value) {
  switch (value) {
    case 1:
      return die1;
    case 2:
      return die2;
    case 3:
      return die3;
    case 4:
      return die4;
    case 5:
      return die5;
    case 6:
      return die6;
    default:
      return;
  }
}
