import React, { Component } from 'react';
import Rock from './images/rockhand.png';
import Paper from './images/paper.png';
import MagicBox from './images/magicbox.png';
import Scissors from './images/scissorhand.png';
import Shield from './images/shield.png';
import Sword from './images/sword.png';
import Tank from './images/tank.png';
import Wand from './images/wand.png';
import WaterGun from './images/water gun.png';
import LightSaberBlue from './images/lightsaber-blue.png';
import LightSaberGreen from './images/lightsaber-green.png';
import LightSaberRed from './images/lightsaber-red.png';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 class='header'>Rock , Paper... <span id='magic'>Magic box?</span></h1>
        <div class='players'>
          <h3>Player: <span>0</span></h3>
          <h3>Cpu: <span>0</span></h3>
        </div>
        <div class="Container">
          <div class="game-area">
            <img src={Rock} alt="rock" />
            <img src={Paper} alt="paper" />
            <img src={MagicBox} alt="magicbox" />
          </div>
          {/* <div className="Box">
            <img src={Scissors} alt="scissors" />
            <img src={Shield} alt="shield" />
            <img src={Sword} alt="sword" />
            <img src={Tank} alt="tank" />
            <img src={Wand} alt="wand" />
            <img src={WaterGun} alt="water-gun" />
            <img src={LightSaberBlue} alt="lightsaber-blue" />
            <img src={LightSaberGreen} alt="lightsaber-green" />
            <img src={LightSaberRed} alt="lightsaber-red" />
        */}
        </div >
      </div>

    )
  }
}

export default App; 
