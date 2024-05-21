//Module Imports
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

export function Plane(scene, length, width, name) {
    const planeGeo = new THREE.PlaneGeometry( length, width, 32, 32 )
    const planeColor = new THREE.Color('rgb(140, 217, 71)')
    const planeMat = new THREE.MeshStandardMaterial( {color: planeColor} )
    const plane = new THREE.Mesh ( planeGeo, planeMat )
    plane.receiveShadow = true
    plane.material.roughness = .95
    plane.name = name
    scene.add( plane )
}

export function Cylinder(scene, x, y, color) {
    const cylGeo = new THREE.CylinderGeometry( 5, 5, 2, 32,)
    const cylColor = new THREE.Color(color)
    const cylMat = new THREE.MeshStandardMaterial( {color: cylColor} )
    const cylinder = new THREE.Mesh(cylGeo, cylMat)
    cylinder.castShadow = true
    cylinder.rotation.x = 90 * Math.PI / 180
    cylinder.position.x = x
    cylinder.position.y = y
    cylinder.position.z = 1
    scene.add(cylinder)
    console.log(cylinder)
}

export default { Plane, Cylinder }