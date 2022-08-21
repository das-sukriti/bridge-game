import React from 'react'
import { CardStack } from '../card-stack/card-stack'
import { Player } from '../player/player'
import { CardDataProvider } from '../../utils/card-data-provider'
import './table-style.css';

export class Table extends React.Component {

  constructor() {
    super();
    this.state = {
      isCardDataAvailable: false
    }
  }

  shuffleTriggered = (childData) => {
    this.setState({isCardDataAvailable: true});
    CardDataProvider.setCardData(childData);
  }

  render() {
    return (
      <div data-testid="playerGrid" className='table-grid'>
        <Player name='North' isCardDataAvailable={this.state.isCardDataAvailable}></Player>
        <Player name='West' isCardDataAvailable={this.state.isCardDataAvailable}></Player>
        <div>
          <CardStack parentCallback={this.shuffleTriggered}></CardStack>
        </div>
        <Player name='East' isCardDataAvailable={this.state.isCardDataAvailable}></Player>
        <Player name='South' isCardDataAvailable={this.state.isCardDataAvailable}></Player>
      </div>
    )
  }  
}

