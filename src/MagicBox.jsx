import MagicBox from './images/magicbox.png'
import Scissors from './images/scissorhand.png';
import Shield from './images/shield.png';
import Sword from './images/sword.png';
import Tank from './images/tank.png';
import Wand from './images/wand.png';
import WaterGun from './images/water gun.png';
import LightSaberBlue from './images/lightsaber-blue.png';
import LightSaberGreen from './images/lightsaber-green.png';
import LightSaberRed from './images/lightsaber-red.png';

function magicBoxHandler () { 

}

export function MagicBoxComp() {
    return <div>
        <img src={MagicBox} onClick={magicBoxHandler} />
        {/* <img src={Scissors} />
        <img src={Shield} />
        <img src={Sword} />
        <img src={Tank} />
        <img src={Wand} />
        <img src={WaterGun} />
        <img src={LightSaberBlue} />
        <img src={LightSaberGreen} />
        <img src={LightSaberRed} /> */}
        </div>

}
// img src={MagicBox} onClick={this.magicBoxHandler} alt="magicbox" />
//import MagicBox from './images/magicbox.png';
//return <h1>Hello, {props.name}</h1>;