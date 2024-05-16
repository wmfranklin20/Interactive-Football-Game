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
ThrePointSpotLight('rgb(244,244,239)', 50, 100, -100, 500, scene);
//hemisphereLight('rgb(255,255,255)', 'rgb(155,155,155)', 1, scene);

//Generic Three Objects
Plane(scene);

const homeColor = 'rgb(255,155,155)'
const homeGKColor = 'rgb(155,55,55)'
const awayColor = 'rgb(155,155,255)'
const awayGKColor = 'rgb(55,55,155)'

function fourthreethree(side) {
    if (side === 'home') {
        Cylinder(scene, -10, 0, homeColor);
        Cylinder(scene, -20, 80, homeColor);
        Cylinder(scene, -20, -80, homeColor);
        
        Cylinder(scene, -80, 0, homeColor);
        Cylinder(scene, -50, 40, homeColor);
        Cylinder(scene, -50, -40, homeColor);
        
        Cylinder(scene, -110, 30, homeColor);
        Cylinder(scene, -110, -30, homeColor);
        Cylinder(scene, -110, 80, homeColor);
        Cylinder(scene, -110, -80, homeColor);
        
        Cylinder(scene, -150, 0, homeGKColor);
    } else if (side === 'away') {
        Cylinder(scene, 10, 0, awayColor);
        Cylinder(scene, 20, 80, awayColor);
        Cylinder(scene, 20, -80, awayColor);
        
        Cylinder(scene, 80, 0, awayColor);
        Cylinder(scene, 50, 40, awayColor);
        Cylinder(scene, 50, -40, awayColor);
        
        Cylinder(scene, 110, 30, awayColor);
        Cylinder(scene, 110, -30, awayColor);
        Cylinder(scene, 110, 80, awayColor);
        Cylinder(scene, 110, -80, awayColor);
        
        Cylinder(scene, 150, 0), awayGKColor;

    }
}
function fourfourtwo(side) {
    if (side === 'home') {
        Cylinder(scene, -20, 30, homeColor );
        Cylinder(scene, -20, -30, homeColor);
        
        Cylinder(scene, -80, 20, homeColor);
        Cylinder(scene, -80, -20, homeColor);
        Cylinder(scene, -50, 40, homeColor);
        Cylinder(scene, -50, -40, homeColor);
        
        Cylinder(scene, -110, 30, homeColor);
        Cylinder(scene, -110, -30, homeColor);
        Cylinder(scene, -110, 80, homeColor);
        Cylinder(scene, -110, -80, homeColor);
        
        Cylinder(scene, -150, 0, homeGKColor);
    } else if (side === 'away') {
        Cylinder(scene, 20, 30, awayColor);
        Cylinder(scene, 20, -30, awayColor);
        
        Cylinder(scene, 60, 30, awayColor);
        Cylinder(scene, 60, -30, awayColor);
        Cylinder(scene, 60, 80, awayColor);
        Cylinder(scene, 60, -80, awayColor);
        
        Cylinder(scene, 110, 30, awayColor);
        Cylinder(scene, 110, -30, awayColor);
        Cylinder(scene, 110, 80, awayColor);
        Cylinder(scene, 110, -80, awayColor);
        
        Cylinder(scene, 150, 0, awayGKColor);

    }
}

fourthreethree('home');
fourfourtwo('away');

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