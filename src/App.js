import React, { Component } from 'react';
import './App.css';

import Splash from './components/splash'
import Game from './components/game/game'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        active:'game'
    }
  }
  

  startGame(){
    this.setState({
      active:'game'
    })
  }

  render() {
    const {active} = this.state
    return (
      <div className="App">
        <header className="App-header">
        {active==='splash'&& <Splash startGame={this.startGame.bind(this)} />}
        {active==='game'&& <Game/>}
        </header>
      </div>
    );
  }
}

export default App;
