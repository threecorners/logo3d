import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,  window.innerWidth / window.innerHeight, 0.1, 2000 );
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

camera.scale.set(1,1,1);
camera.position.set(0,0.2,1.2)

renderer.clearColor(0x000000, 0)
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.setAttribute("id", "Universe");
document.body.insertBefore(renderer.domElement, document.body.firstChild); 

const aLight = new THREE.AmbientLight(0xFFFFFF, 70);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 70);
pLight.position.set(5, 1, 1);
scene.add(pLight); 

let loader = new GLTFLoader();
let obj = null;

loader.load('model/logo3d.glb', function(gltf){
    
    obj = gltf;  
    obj.scene.scale.set( 1 , 1, 1);
    scene.add(obj.scene);

});

function animate() {

    requestAnimationFrame(animate);

    obj.scene.rotation.y += 0.003
    renderer.render(scene, camera);

};

animate() 

