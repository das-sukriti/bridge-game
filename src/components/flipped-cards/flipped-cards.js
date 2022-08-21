import React from "react";
import "./flipped-cards-style.css";

const hand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export class FlippedCards extends React.Component {

  render() {
    let x = 2;
    let y = 2;

    return (
      <div>
        <div
          className="container"
          title="Click to show hand"
        >
          {hand.map((item, index) => {
            return (
              <div className="imgBox" key={index} style={{
                transform: `translate(${x=x+5}px, ${y=y++}px)`
              }}>
                <img
                  key={index}
                  src={require("./back.png")}
                  alt="Card back"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
