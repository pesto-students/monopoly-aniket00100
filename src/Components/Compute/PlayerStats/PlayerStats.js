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
    const { gameBlocks, currentPlayer } = this.state;
    const block = gameBlocks[propertyIndex];
    block.houseCount += 1;
    block.houseCount = Math.min(block.houseCount, 5);
    currentPlayer.buildOnProperty(block.groupNumber);
    this.setState({ gameBlocks }, () => {
      this.props.onTriggerSetState();
    });
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
