//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';
import { Rhino3dmLoader } from 'https://unpkg.com/three@0.164.1/examples/jsm/loaders/3DMLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.164.1/examples/jsm/controls/OrbitControls.js';
import { Tween } from 'https://unpkg.com/three@0.164.1/examples/jsm/libs/tween.module.js'

//Function Imports
import SceneInit from './src/model/SceneInit';
import windowResize from './src/utils/HandleWindowResize';
import {ThrePointSpotLight, ambientLight} from './src/model/Lighting';
import { Plane, Cylinder } from './src/model/BaseGeometry';

//Initialize Scene
const { scene, sceneContainer, renderer, camera, controls } = SceneInit();
camera.position.set(250, -250, 250)

//Lighting Setup
ambientLight('rgb(255,255,255)', 1, scene);
ThrePointSpotLight('rgb(244,244,239)', 250, 100, -100, 300, scene);
//hemisphereLight('rgb(255,255,255)', 'rgb(155,155,155)', 1, scene);

let pitchLength = 340
let pitchWidth = 220
//Generic Three Objects
Plane(scene, pitchLength, pitchWidth);

let firstLine = 30
let midLine = (pitchLength / 2) - 100
let defLine = (pitchLength / 2) - 60
let gkLine = (pitchLength / 2) - 20

const homeColor = 'rgb(255,155,155)'
const homeGKColor = 'rgb(155,55,55)'
const awayColor = 'rgb(155,155,255)'
const awayGKColor = 'rgb(55,55,155)'

function fourthreethree(side) {
    if (side === 'home') {
        Cylinder(scene, -firstLine + 10, 0, homeColor);
        Cylinder(scene, -firstLine, 80, homeColor);
        Cylinder(scene, -firstLine, -80, homeColor);
        
        Cylinder(scene, -midLine - 10, 0, homeColor);
        Cylinder(scene, -midLine + 10, 40, homeColor);
        Cylinder(scene, -midLine + 10, -40, homeColor);
        
        Cylinder(scene, -defLine, 30, homeColor);
        Cylinder(scene, -defLine, -30, homeColor);
        Cylinder(scene, -defLine + 10, 80, homeColor);
        Cylinder(scene, -defLine + 10, -80, homeColor);
        
        Cylinder(scene, -gkLine, 0, homeGKColor);
    } else if (side === 'away') {
        Cylinder(scene, firstLine, 0, awayColor);
        Cylinder(scene, firstLine, 80, awayColor);
        Cylinder(scene, firstLine, -80, awayColor);
        
        Cylinder(scene, midLine, 0, awayColor);
        Cylinder(scene, midLine, 40, awayColor);
        Cylinder(scene, midLine, -40, awayColor);
        
        Cylinder(scene, defLine, 30, awayColor);
        Cylinder(scene, defLine, -30, awayColor);
        Cylinder(scene, defLine, 80, awayColor);
        Cylinder(scene, defLine, -80, awayColor);
        
        Cylinder(scene, gkLine, 0, awayGKColor);

    }
}
function threefourthree(side) {
    if (side === 'home') {
        Cylinder(scene, -firstLine + 10, 0, homeColor);
        Cylinder(scene, -firstLine, 60, homeColor);
        Cylinder(scene, -firstLine, -60, homeColor);
        
        Cylinder(scene, -midLine - 10, 30, homeColor);
        Cylinder(scene, -midLine - 10, -30, homeColor);
        Cylinder(scene, -midLine + 10, 80, homeColor);
        Cylinder(scene, -midLine + 10, -80, homeColor);
        
        Cylinder(scene, -defLine, 0, homeColor);
        Cylinder(scene, -defLine + 10, 60, homeColor);
        Cylinder(scene, -defLine + 10, -60, homeColor);
        
        Cylinder(scene, -gkLine, 0, homeGKColor);
    } else if (side === 'away') {
        Cylinder(scene, firstLine, 0, awayColor);
        Cylinder(scene, firstLine, 60, awayColor);
        Cylinder(scene, firstLine, -60, awayColor);
        
        Cylinder(scene, midLine, 30, awayColor);
        Cylinder(scene, midLine, -30, awayColor);
        Cylinder(scene, midLine, 80, awayColor);
        Cylinder(scene, midLine, -80, awayColor);
        
        Cylinder(scene, defLine, 0, awayColor);
        Cylinder(scene, defLine, 60, awayColor);
        Cylinder(scene, defLine, -60, awayColor);

        
        Cylinder(scene, gkLine, 0, awayGKColor);

    }
}
function fourfourtwo(side) {
    if (side === 'home') {
        Cylinder(scene, -firstLine, 30, homeColor );
        Cylinder(scene, -firstLine, -30, homeColor);
        
        Cylinder(scene, -midLine, 20, homeColor);
        Cylinder(scene, -midLine, -20, homeColor);
        Cylinder(scene, -midLine, 40, homeColor);
        Cylinder(scene, -midLine, -40, homeColor);
        
        Cylinder(scene, -defLine, 30, homeColor);
        Cylinder(scene, -defLine, -30, homeColor);
        Cylinder(scene, -defLine, 80, homeColor);
        Cylinder(scene, -defLine, -80, homeColor);
        
        Cylinder(scene, -gkLine, 0, homeGKColor);
    } else if (side === 'away') {
        Cylinder(scene, firstLine, 30, awayColor);
        Cylinder(scene, firstLine, -30, awayColor);
        
        Cylinder(scene, midLine, 30, awayColor);
        Cylinder(scene, midLine, -30, awayColor);
        Cylinder(scene, midLine, 80, awayColor);
        Cylinder(scene, midLine, -80, awayColor);
        
        Cylinder(scene, defLine, 30, awayColor);
        Cylinder(scene, defLine, -30, awayColor);
        Cylinder(scene, defLine, 80, awayColor);
        Cylinder(scene, defLine, -80, awayColor);
        
        Cylinder(scene, gkLine, 0, awayGKColor);

    }
}

fourthreethree('home');
threefourthree('away');

//Window Resize
windowResize(camera, renderer, sceneContainer);

function render () {
    camera.updateMatrixWorld();
    renderer.render( scene, camera );
}
function animate() {
    requestAnimationFrame(animate)
    controls.update();
    render();
}
animate();

//console.log(scene)