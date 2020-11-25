import React from 'react';

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
  // console.log('sssssssssssssss');
  // console.log(mainPartyProperties);
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
          <hr />
          {counterPartyProperties.length ? counterPartyPropertyList : null}
          <div className="d-flex">
            <input
              placeholder="Ask Money"
              value={cashAsked}
              onChange={onAskMoneyChanged}
            ></input>
            {/* <button className="ml-auto">Ask</button> */}
          </div>
          <button onClick={onApproveCounterParty}>Approve Trade</button>
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
          >
            {render()}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Trade Block</h1>
      <div className="d-flex">
        <div>
          <p>Current Player</p>
          <div className="tables">
            <p className="tables-title">{mainParty.name}</p>
            <hr />
            {mainPartyProperties.length ? mainPartyPropertyList : null}
            <div className="d-flex">
              <input
                placeholder="Send Money"
                onChange={onSendMoneyChange}
                value={cashToSend}
              ></input>
              {/* <button className="ml-auto">Send</button> */}
            </div>
            <button onClick={onApproveMainParty}>Approve Trade</button>
          </div>
        </div>
        <div>{counterPartyElement}</div>
      </div>
    </div>
  );
}
