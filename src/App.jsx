import React, { Component } from 'react';
import { MagicBoxComp } from './MagicBox';
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
  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
    }
  };
  getRandomNum = () => {
    const randNums = Math.floor(Math.random() * 10 + 1);
    this.setState({ randomNum: randNums });
    console.log('randomNum: ', randNums);
  }
  rockHandler = () => {
    console.log('rock clicked');
  }
  paperHandler = () => {
    console.log('paper clicked');
  }
  magicBoxHandler = () => {
    console.log('magic box clicked');
  }
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
            <img src={Rock} onClick={this.rockHandler} name="rock" />
            <img src={Paper} onClick={this.paperHandler} name="paper" />
            <MagicBoxComp onClick={this.magicBoxHandler} />
            {/* <img src={MagicBox} onClick={this.magicBoxHandler} name="magicbox" /> */}
          </div>
          {/* invis item box */}
          {/* <div class="ItemBox">
            <div class="item-area">
              dont mind this
              <img src={Scissors} name="scissors" />
              <img src={Shield} name="shield" />
              <img src={Sword} name="sword" />
              <img src={Tank} name="tank" />
              <img src={Wand} name="wand" />
              <img src={WaterGun} name="water-gun" />
              <img src={LightSaberBlue} name="lightsaber-blue" />
              <img src={LightSaberGreen} name="lightsaber-green" />
              <img src={LightSaberRed} name="lightsaber-red" />
            </div>
          </div> */}
        </div>
        <button onClick={this.getRandomNum}>random buttom</button>
      </div>
    )
  }
}

export default App; 
