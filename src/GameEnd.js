import React from "react";
import "./GameEnd.css";

class GameEnd extends React.Component {
  render() {
    return (
      <>
        <div className="game-end-container">
          <div
            style={
              this.props.score === 11
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <p>
              Wow, we have run out of words to describe you as well as for the
              quiz, literally. You have aced this with flying colors. You are
              truly a champion and deserve this.
              <span role="img" aria-label="medal-emoji">
                {" "}
                🥇{" "}
              </span>
            </p>
          </div>
          <div
            style={
              this.props.score !== 11
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <p style={{ margin: "15px", color: "#A52A2A", fontWeight: "lighter" }}>
              Oh no you have used up all your lives. But if you want to
              continue challenging yourself, try again.
              <span role="img" aria-label="cry-emoji">
                {" "}
                😢{" "}
              </span>
            
            </p>
            <button className="btn" onClick={this.props.startGame}>
              Play Again!
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default GameEnd;

