import React from 'react';
import PlayerStatsUI from '../../UI/PlayerStats/PlayerStats';

export default class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: this.props.player,
      gameBlocks: this.props.gameBlocks,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.player.name !== this.props.player.name) {
      this.setState({ currentPlayer: this.props.player });
    }
  }

  onBuild = (_, propertyIndex) => {
    console.log('building on = ', propertyIndex);
    const { gameBlocks } = this.state;
    console.log(gameBlocks);
    const block = gameBlocks[propertyIndex];
    block.houseCount += 1;
    this.setState({ gameBlocks });
  };

  onMortgage = (_, propertyIndex) => {
    const { currentPlayer, gameBlocks } = this.state;
    currentPlayer.mortgageProperty(gameBlocks[propertyIndex]);
    this.setState({ currentPlayer }, () => {
      this.props.onTriggerSetState();
    });
  };

  onRedeem = (_, propertyIndex) => {
    const { currentPlayer, gameBlocks } = this.state;
    currentPlayer.redeemMortgagedProperty(gameBlocks[propertyIndex]);
    this.setState({ currentPlayer }, () => {
      this.props.onTriggerSetState();
    });
  };

  render() {
    // console.log(this.state.gameBlocks);
    const { currentPlayer, gameBlocks } = this.state;
    return (
      <PlayerStatsUI
        player={currentPlayer}
        gameBlocks={gameBlocks}
        onBuild={this.onBuild}
        onMortgage={this.onMortgage}
        onRedeem={this.onRedeem}
      ></PlayerStatsUI>
    );
  }
}
