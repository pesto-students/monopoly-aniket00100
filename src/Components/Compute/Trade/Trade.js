import React from 'react';
import TradeUI from '../../UI/TradeUI/TradeUI';

export default class Trade extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      approveMainParty: false,
      approveCounterParty: false,
      mainParty: this.props.currentPlayer,
      counterParty: null,
      players: this.props.players,
      cashAsked: 0,
      cashToSend: 0,
    };
    this.state = {
      ...this.initialState,
      propertiesToAsk: [],
      propertiesToSend: [],
    };
  }

  componentDidMount() {
    // console.log('exeksdjfsdflksdflks');
    // this.setState({ mainParty: this.props.currentPlayer });
  }

  onValueChange = (event) => {
    // console.log('valeue changed to = ', event.target.value);
    const [counterParty] = this.state.players.filter(
      (player) => player.name === event.target.value
    );
    this.setState({ counterParty });
  };

  onSend = (_, property) => {
    const { propertiesToSend } = this.state;
    propertiesToSend.push(property);
    this.setState({ propertiesToSend });
  };

  onAsk = (_, property) => {
    const { propertiesToAsk } = this.state;
    propertiesToAsk.push(property);
    this.setState({ propertiesToAsk });
  };

  onApproveMainParty = () => {
    this.setState({ approveMainParty: true }, () => {
      this.completeTrade();
    });
  };

  onApproveCounterParty = () => {
    this.setState({ approveCounterParty: true }, () => {
      this.completeTrade();
    });
  };

  completeTrade = () => {
    const {
      approveCounterParty,
      approveMainParty,
      mainParty,
      counterParty,
      propertiesToSend,
      propertiesToAsk,
      cashAsked,
      cashToSend,
    } = this.state;
    if (approveCounterParty && approveMainParty) {
      // console.log('before');
      // console.log('main party = ', mainParty);
      // console.log('counter party = ', counterParty);
      mainParty.trade(
        counterParty,
        propertiesToSend,
        propertiesToAsk,
        cashToSend,
        cashAsked
      );
      // console.log('after');
      // console.log('main party = ', mainParty);
      // console.log('counter party = ', counterParty);
      this.setState(
        { ...this.initialState, propertiesToAsk: [], propertiesToSend: [] },
        () => {
          this.props.onTriggerSetState();
        }
      );
    }
  };

  onSendMoneyChange = (event) => {
    const { value } = event.target;
    this.setState({ cashToSend: value });
  };

  onAskMoneyChanged = (event) => {
    const { value } = event.target;
    this.setState({ cashAsked: value });
  };

  render() {
    const {
      mainParty,
      counterParty,
      players,
      cashAsked,
      cashToSend,
    } = this.state;
    console.log(cashToSend);
    const filteredPlayerList = players.filter((player) => player !== mainParty);
    const playersToTradeWith = filteredPlayerList.map((player) => {
      const { name } = player;
      return (
        <option key={name} value={name}>
          {name}
        </option>
      );
    });
    return (
      <TradeUI
        mainParty={mainParty}
        counterParty={counterParty}
        players={players}
        render={() => playersToTradeWith}
        onValueChange={this.onValueChange}
        onSend={this.onSend}
        onAsk={this.onAsk}
        onApproveMainParty={this.onApproveMainParty}
        onApproveCounterParty={this.onApproveCounterParty}
        onSendMoneyChange={this.onSendMoneyChange}
        onAskMoneyChanged={this.onAskMoneyChanged}
        cashAsked={cashAsked}
        cashToSend={cashToSend}
      ></TradeUI>
    );
  }
}
