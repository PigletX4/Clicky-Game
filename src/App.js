import React, { Component } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Images from './images.json';

let topScore = 0;
let correctGuesses = 0;
let message = "Click to begin!";

class App extends Component {
  state = {
    Images,
    topScore,
    correctGuesses,
    message
  };

  clickConfirm = id => {
    const Images = this.state.Images;
    const clickedCard = Images.filter(Image => Image.id === id);

    if (clickedCard[0].clicked) {
      correctGuesses = 0;
      message = 'Try again!';

      for(let i=0; i < Images.length; i++){
        Images[i].clicked = false;
      }

      this.setState({message});
      this.setState({correctGuesses});
      this.setState({Images});
    }
    else{
      
      clickedCard[0].clicked = true;
      correctGuesses = correctGuesses + 1;
      message = "Correct!"
      
      if (topScore < correctGuesses) {
        topScore = correctGuesses
        this.setState({topScore});
      }

      Images.sort((a,b) => {
        return 0.5 - Math.random();
      });

      this.setState({message});
      this.setState({correctGuesses});
      this.setState({Images});
      
    }


  }

  render() {
    return (
      <Wrapper>
        <div className="message">
          <h1>{this.state.message}</h1>
        </div>
        <div className="scoreBoard">
          <h1 className="correctGuesses">Correct Guesses:{this.state.correctGuesses}</h1>
          <h1 className="topScore">Top Score:{this.state.topScore}</h1>
        </div>
        {this.state.Images.map(Image => (
          <Card
            id={Image.id}
            image={Image.image}
            clickConfirm={this.clickConfirm}
            />
        ))}
      </Wrapper>
    );
  }

}

export default App;
