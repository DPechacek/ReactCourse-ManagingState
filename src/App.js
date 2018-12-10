import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

class App extends Component {
  value1 = Math.floor(Math.random() * 100);
  value2 = Math.floor(Math.random() * 100);
  value3 = Math.floor(Math.random() * 100);
  
  state = {
    value1: this.value1,
    value2: this.value2,
    value3: this.value3,
    proposedAnswer: Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3,
    numQuestions: 0,
    numCorrect: 0
  };

  processAnswer = (userChoice) => {
    let correctAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    let newValue1 = Math.floor(Math.random() * 100);
    let newValue2 = Math.floor(Math.random() * 100);
    let newValue3 = Math.floor(Math.random() * 100);
    
    if((this.state.proposedAnswer === correctAnswer && userChoice) || 
      (this.state.proposedAnswer !== correctAnswer && !userChoice)) {
      this.setState(currentState => ({
        numCorrect: currentState.numCorrect + 1
      }));
    }
    
    this.setState(currentState => ({
        value1: newValue1,
        value2: newValue2,
        value3: newValue3,
        proposedAnswer: Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3,
        numQuestions: currentState.numQuestions + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <GameBoard value1={this.state.value1} 
                     value2={this.state.value2} 
                     value3={this.state.value3} 
                     proposedAnswer={this.state.proposedAnswer} 
                     processAnswer={this.processAnswer}/>
          <ScoreBoard numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
