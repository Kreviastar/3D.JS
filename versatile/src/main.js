import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
const canvas = document.getElementById('canvas');

//1. create the scene
const Scene = new THREE.Scene();
Scene.background = new THREE.Color("#F0F0F0");


//2. Create the camera
const Camera = new THREE.PerspectiveCamera(75, window.innerHeight / window.innerWidth, 0.1, 100  )
Camera.position.z = 5;

//3. Create the Object
const Geometry = new THREE.OctahedronGeometry();
const Material = new THREE.MeshStandardMaterial({color: '#468585', emissive: '#468585'});
const Doedechra =  new THREE.Mesh(Geometry, Material)


//4/ another object
const BoxGeometry = new THREE.BoxGeometry();
const BoxMaterial =  new THREE.MeshLambertMaterial({color: '#567989',  emissive: '#468585'});
const Box = new THREE.Mesh(BoxGeometry, BoxMaterial);
Box.position.y = -1.89;

Scene.add(Doedechra);
Scene.add(Box);


//5. add the light
const light = new THREE.SpotLight(0x006769, 1000);
light.position.set(1, 1, 1);
Scene.add(light);


//6 render the scene
const Renderer = new THREE.WebGLRenderer({canvas});
Renderer.setSize(window.innerWidth, window.innerHeight);
Renderer.setPixelRatio(window.devicePixelRatio);
Renderer.render(Scene, Camera);

//7. Add Orbit 
const controls = new OrbitControls(Camera, Renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan  = true;


function animate(){
    requestAnimationFrame(animate);

    Doedechra.rotation.x += 0.01;
    Doedechra.rotation.y += 0.01;

    Box.rotation.y += 0.005;

    controls.update();
    Renderer.render(Scene, Camera);
}

window.addEventListener('resize', () => {
    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();
    Renderer.setSize(window.innerWidth, window.innerHeight);
})
animate()