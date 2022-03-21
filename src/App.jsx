import React, { Component } from 'react';
import Rock from './images/rock.png';
import Scissors from './images/scissor.png';
import Shield from './images/shield.png';
import Sword from './images/sword.png';
import Tank from './images/tank.png';
import Wand from './images/wand.png';
import MagicBox from './images/magic-box.jpeg';
import WaterGun from './images/water-gun.png';
import LightSaberBlue from'./images/light-saber-blue.png';
import LightSaberGreen from './images/light-saber-green.png';
import LightSaberRed from './images/light-saber-red.png';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Rock , Paper... Magic box?</h1>
        <div className="Images">
        <img src={Rock} alt="rock" />
        <img src={Scissors} alt="scissors" />
        <img src={MagicBox} alt="magic-box" />
        <img src={Shield} alt="shield" />
        <img src={Sword} alt="sword" />
        <img src={Tank} alt="tank" />
        <img src={Wand} alt="wand" />
        <img src={WaterGun} alt="water-gun" />
        <img src={LightSaberBlue} alt="light-saber-blue" />
        <img src={LightSaberGreen} alt="light-saber-green" />
        <img src={LightSaberRed} alt="light-saber-red" />
      </div>
      </div>
      
    )
  }
}

export default App; 
