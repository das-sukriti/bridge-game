import React, { Component } from "react";
import "./card-details-style.css";
import PubSub from "pubsub-js";
import { CardDataProvider } from "../../utils/card-data-provider";

export class CardDetails extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      playerData: [],
      playerName: "",
      qSum: 0,
      kSum: 0,
      jSum: 0,
      aSum: 0,
      sum: 0,
      showDetails: "hidden",
      expand: false,
      nameClass: "",
    };
  }

  componentDidMount = () => {
    PubSub.subscribe("display-cards", (topic, playerName) => {      
      this.playerName = playerName;
      let cardData = CardDataProvider.getCardData();
      let qSum = 0;
      let kSum = 0;
      let jSum = 0;
      let aSum = 0;
      cardData[playerName.toLowerCase()].forEach((item) => {
        switch (item.value) {
          case "q":
            qSum += 2;
            break;
          case "j":
            jSum += 1;
            break;
          case "1":
            aSum += 4;
            break;
          case "k":
            kSum += 3;
            break;
          default:
            break;
        }
      });

      this.setState({
        playerData: cardData[playerName.toLowerCase()],
        playerName: playerName,
        qSum,
        jSum,
        kSum,
        aSum,
        sum: qSum + jSum + kSum + aSum,
        showDetails: "visible",
        expand: true,
      });
      this.getClassName();
    });
  };

  getClassName = () => {
    if (
      this.playerName &&
      (this.playerName.toLowerCase() === "north" ||
        this.playerName.toLowerCase() === "south")
    ) {
      this.setState({ nameClass: "team1" });
    } else {
      this.setState({ nameClass: "team2" });
    }
  };

  render() {
    let x = 20;
    return (
      <div
        className="details"
        style={{
          visibility: this.state.showDetails,
          width: this.state.expand ? "50vw" : "0px",
          opacity: this.state.expand ? "1" : "0",
          marginLeft: this.state.expand ? "80px" : "",
          transition: this.state.expand ? "width 1s, opacity 3s" : "",
        }}
      >
        <div className="details-container">
          {this.state.playerData.map((item, index) => {
            return (
              <div
                className="details-imgBox"
                key={index}
                style={{
                  transformOrigin: "bottom center",
                  transform: `translate(${(x = x + 10)}px) rotate(${
                    5 * (index + 2) - 35
                  }deg)`,
                  transition: "transform 3s",
                }}
              >
                <img
                  key={index}
                  src={require(`../../utils/resources/png/${item.value.concat(
                    item.suit
                  )}.png`)}
                  alt="Card"
                ></img>
              </div>
            );
          })}
        </div>
        <div className="sum-box">
          <h1 className={this.state.nameClass}>Player: {this.playerName}</h1>
          <div
            style={{
              visibility: this.state.showDetails,
              width: this.state.width,
            }}
          >
            <span>Ace: {this.state.aSum}</span>
            <span>King: {this.state.kSum}</span>
            <span>Queen: {this.state.qSum}</span>            
            <span>Jack: {this.state.jSum}</span>            
            <span>Total Points: {this.state.sum}</span>
          </div>
        </div>
      </div>
    );
  }
}
