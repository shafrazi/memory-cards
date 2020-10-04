import React from "react";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <h1>Marvel Memory Game</h1>
      </div>
      <div className="score-card">
        <p>Current score: {props.currentScore}</p>
        <p>Best score: {props.bestScore}</p>
      </div>
    </header>
  );
}

export default Header;
