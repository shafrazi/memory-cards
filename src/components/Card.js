import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div
        className="card"
        onClick={() => {
          this.props.handleClick(this.props.character);
        }}
      >
        <div className="card-content">
          <img
            className="card-image"
            src={require(this.props.character.image)}
            alt={this.props.character.name}
          />
          <p className="card-name">{this.props.character.name}</p>
        </div>
      </div>
    );
  }
}

export default Card;
