import React, { Component } from 'react';
import { MagicBoxComp } from './MagicBox';
import './App.css';

export class App extends Component {
  rockHandler = () => {
    console.log('rock clicked');
  }
  paperHandler = () => {
    console.log('paper clicked');
  }
  userHanderChoice = () => {
  }
render() {
    return (
      <div className="App">
        <h1 className='header'>Rock , Paper... <span id='magic'>Magic box?</span></h1>
        <div className='players'>
          <h3>Player: <span>0</span></h3>
          <h3>Cpu: <span>0</span></h3>
        </div>
        <div className="Container">
          <div className="game-area">
            <MagicBoxComp />
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
        {/* <button onClick={this.getRandomNum}>random buttom</button> */}
      </div>
    )
  }
}
export default App; 

// constructor(props) {
  //   super(props);
  //   this.state = {
  //     randomNum: 0,
  //   }
  // };
  // getRandomNum = () => {
  //   const randNums = Math.floor(Math.random() * 10 + 1);
  //   this.setState({ randomNum: randNums });
  //   console.log('randomNum: ', randNums);
  // }