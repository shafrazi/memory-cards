import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("card updated");
    console.log(prevProps);
  }

  render() {
    return (
      <div className="card" onClick={this.props.handleClick}>
        <div className="card-content">
          <img
            className="card-image"
            src={this.props.character.image}
            alt={this.props.character.name}
          />
          <p className="card-name">{this.props.character.name}</p>
        </div>
      </div>
    );
  }
}

export default Card;
