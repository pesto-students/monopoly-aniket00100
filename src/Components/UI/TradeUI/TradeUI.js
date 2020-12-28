import React from 'react';

import './TradeUI.css';

export default function TradeUI(props) {
  const {
    mainParty,
    counterParty,
    render,
    onValueChange,
    onSend,
    onAsk,
    onApproveMainParty,
    onApproveCounterParty,
    onSendMoneyChange,
    onAskMoneyChanged,
    cashAsked,
    cashToSend,
  } = props;

  const mainPartyProperties = [...mainParty.properties];
  const counterPartyProperties = [];
  if (counterParty) {
    counterPartyProperties.push(...counterParty.properties);
  }

  const mainPartyPropertyList = mainPartyProperties.map((property, index) => {
    const { name } = property;
    return (
      <div className="d-flex cell" key={name}>
        <p className="property-title mr-auto">{name}</p>
        <button
          className="mtg-btn"
          onClick={(event) => onSend(event, property)}
        >
          Send
        </button>
      </div>
    );
  });

  const counterPartyPropertyList = counterPartyProperties.map(
    (property, index) => {
      const { name } = property;
      return (
        <div className="d-flex cell" key={name}>
          <p className="property-title mr-auto">{name}</p>
          <button
            className="mtg-btn"
            onClick={(event) => onAsk(event, property)}
          >
            Ask
          </button>
        </div>
      );
    }
  );

  let counterPartyElement;
  if (counterParty) {
    counterPartyElement = (
      <div>
        <p>Trading with</p>
        <div className="tables">
          <p className="tables-title">{counterParty.name}</p>
          {counterPartyProperties.length ? counterPartyPropertyList : null}
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              Ask Cash
            </span>
            <input
              type="text"
              className="form-control"
              value={cashAsked}
              onChange={onAskMoneyChanged}
            />
          </div>
          <button
            className="btn btn-dark btn-approve-trade"
            onClick={onApproveCounterParty}
          >
            Approve Trade
          </button>
        </div>
      </div>
    );
  } else {
    counterPartyElement = (
      <div>
        <p>Select a player to trade with</p>
        <div className="tables">
          <select
            name="players"
            id="players-trade-list"
            onChange={onValueChange}
            defaultValue="default"
          >
            <option value="default" disabled>
              Select Player
            </option>
            {render()}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="tradebox-container">
      <h5>Trade Block</h5>
      <div className="tradebox">
        <div className="player-tradebox">
          <p>Current Player</p>
          <div className="tables">
            <p className="tables-title">{mainParty.name}</p>
            {mainPartyProperties.length ? mainPartyPropertyList : null}
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                Send Cash
              </span>
              <input
                type="text"
                className="form-control"
                onChange={onSendMoneyChange}
                value={cashToSend}
              />
            </div>
            <button
              className="btn btn-dark btn-approve-trade"
              onClick={onApproveMainParty}
            >
              Approve Trade
            </button>
          </div>
        </div>
        <div className="player-tradebox">{counterPartyElement}</div>
      </div>
    </div>
  );
}
