import Rock from './images/rockhand.png';
import Paper from './images/paper.png';
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

const choicesItem = [
    { id: 1, component: Rock, beats: [3, 8], losesTo: [2, 4, 5, 6, 7, 9, 10, 11] },
    { id: 2, component: Paper, beats: [1], losesTo: [3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { id: 3, component: Scissors, beats: [2], losesTo: [1, 4, 5, 6, 7, 8, 9, 10, 11] },
    { id: 4, component: Shield, beats: [1, 2, 3, 5, 8], losesTo: [6, 7, 9, 10, 11] },
    { id: 5, component: Sword, beats: [2, 3, 8], losesTo: [1, 4, 6, 7, 9, 10, 11] },
    { id: 6, component: Tank, beats: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11], losesTo: [7] },
    { id: 7, component: Wand, beats: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11], losesTo: [6] },
    { id: 8, component: WaterGun, beats: [2], losesTo: [1, 4, 5, 6, 7, 9, 10, 11] },
    { id: 9, component: LightSaberRed, beats: [1, 2, 3, 4, 5, 8], losesTo: [6, 7] },
    { id: 10, component: LightSaberGreen, beats: [1, 2, 3, 4, 5, 8], losesTo: [6, 7] },
    { id: 11, component: LightSaberBlue, beats: [1, 2, 3, 4, 5, 8], losesTo: [6, 7] }
];
export function MagicBoxComp() {
    function clickHandler() {
        console.log('clicked');
    };
    function randomizer() {
        const randomChoice = choicesItem[Math.floor(Math.random() * choicesItem.length)];
        console.log('Random Box Item:', randomChoice);
    };

    return <div className='game-area'>
        <img src={Rock} onClick={(clickHandler)} />
        <img src={Paper} onClick={(clickHandler)} />
        <img src={MagicBox} onClick={(clickHandler, randomizer)} />
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
