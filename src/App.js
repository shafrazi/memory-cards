import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import { characters } from "./Character";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      bestScore: 0,
      characters: characters,
      isGameOver: false,
    };
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleClick = (character) => {
    if (character.isClicked) {
      this.setState((prevState) => {
        if (prevState.currentScore > prevState.bestScore) {
          return {
            isGameOver: true,
            bestScore: prevState.currentScore,
            currentScore: 0,
          };
        } else {
          return {
            isGameOver: true,
            currentScore: 0,
          };
        }
      });
    } else {
      this.setState((prevState) => {
        for (let i = 0; i < prevState.characters.length; i++) {
          if (character === prevState.characters[i]) {
            prevState.characters[i].isClicked = true;
          }
        }

        return {
          characters: prevState.characters,
          currentScore: this.state.currentScore + 1,
        };
      });
    }
  };

  refreshCharacters = () => {
    this.setState((prevState) => {
      for (let i = 0; i < prevState.characters.length; i++) {
        prevState.characters[i].isClicked = false;
      }

      return {
        characters: prevState.characters,
      };
    });
  };

  componentDidMount() {
    const randomCharacters = this.shuffleArray(this.state.characters);
    this.setState({
      characters: randomCharacters,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentScore !== this.state.currentScore) {
      const randomCharacters = this.shuffleArray(this.state.characters);
      this.setState({
        characters: randomCharacters,
      });
    }

    if (prevState.isGameOver) {
      this.refreshCharacters();
      this.setState({
        isGameOver: false,
      });
    }
  }

  render() {
    const cardComponents = this.state.characters.map((character, index) => {
      return (
        <Card
          key={index}
          character={character}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <div className="content">{cardComponents}</div>
      </div>
    );
  }
}

export default App;
