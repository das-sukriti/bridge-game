import React from "react";
import "./card-stack-style.css";
import { Card } from "../../utils/card";

export class CardStack extends React.Component {

  constructor() {
    super();
    this.suits = ["s", "c", "h", "d"];
    this.values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
    this.state = {
      hideDeck: false
    }

    this.deck = this.initDeck();
  }

  initDeck = () => {
    return this.suits.flatMap(suit => {
      return this.values.map(value => {
        return new Card(suit, value)
      })
    })
  }

  shuffle = () => {
    if (this.deck.length > 0) {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.deck[newIndex]
        this.deck[newIndex] = this.deck[i]
        this.deck[i] = oldValue
      }
    }
  }

  divideHand = () => {
    let counter = 0;
    this.northPlayerCards = this.deck.slice(counter, counter = counter + 13);
    this.southPlayerCards = this.deck.slice(counter, counter = counter + 13);
    this.eastPlayerCards = this.deck.slice(counter, counter = counter + 13);
    this.westPlayerCards = this.deck.slice(counter, counter = counter + 13);
  }

  onCardClick = () => {
    this.shuffle();
    this.divideHand();    
    let paramObj = {
      north: [...this.northPlayerCards],
      south: [...this.southPlayerCards],
      east: [...this.eastPlayerCards],
      west: [...this.westPlayerCards],
    }
    this.props.parentCallback(paramObj);
    this.setState({hideDeck: true});
  };

  render() {
    let visiStyle = this.state.hideDeck? 'hidden' : 'visible';
    let display = this.state.hideDeck? 'none' : '';

    return (
      <div className="card" style={{
        visibility: visiStyle,
        display: display
      }}>
        <img
          src={require("./back.png")}
          alt="Card back"
          onClick={this.onCardClick}
          title="Click to shuffle and deal"
        ></img>
      </div>
    );
  }
}



