import React, { Component } from 'react';
import Rock from './images/rock.png';
import Shield from './images/shield.png';
import MagicBox from './images/magic-box.jpeg';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rock , Paper... Magic box?</h1>
        <p>Display Images</p>
        <img src={Rock} alt="rock" />
        <img src={Shield} alt="shield" />
        <img src={MagicBox} alt="magic-box" />
      </div>
      
    )
  }
}

export default App; 
