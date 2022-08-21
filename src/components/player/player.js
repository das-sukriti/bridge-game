import React from "react";
import { FlippedCards } from "../flipped-cards/flipped-cards";
import "./player-style.css";
import PubSub from "pubsub-js";

export class Player extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nameClass: ''
    }
    this.props = props;    
  }

  componentDidMount = () => {
    this.getClassName();
  }

  onShowCards = (event) => {
    if(document.querySelector(".selected")) {
      document.querySelector(".selected").classList.remove('selected');
    }
    event.currentTarget.classList.toggle('selected');
    PubSub.publish("display-cards", this.props.name);
  };

  getClassName = () => {
    if(this.props && this.props.name && (this.props.name.toLowerCase() === 'north' || this.props.name.toLowerCase() === 'south')){
      this.setState({nameClass: 'team1'});
    } else {
      this.setState({nameClass: 'team2'});
    }
  }

  render = () => {
    this.name = this.props.name;
    let userVisibility = this.props.isCardDataAvailable ? "hidden" : "visible";
    let flippedCardsVisibility = !this.props.isCardDataAvailable
      ? "hidden"
      : "visible";
    return (
      <div className="player">
        <div>
          <div className="flipped-card"
            style={{
              visibility: flippedCardsVisibility
            }} onClick={this.onShowCards}>
            <FlippedCards name={this.name}></FlippedCards>
          </div>
          <img
            className="user"
            src={require("./user-icon.png")}
            alt="Player"
            style={{
              visibility: userVisibility,
            }}
          ></img>
        </div>
        <span className={this.state.nameClass}>{this.props.name}</span>
      </div>
    );
  };
}
