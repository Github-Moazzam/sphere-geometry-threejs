import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

// import imageSource from './image.png'
// console.log(imageSource)

// const image = new Image()
// const texture = new THREE.Texture(image)
// image.addEventListener('load', () =>
// {
//     texture.needsUpdate = true
// })
// image.src = 'image.png'  
// texture.colorSpace = THREE.SRGBColorSpace   

const canvas = document.querySelector('canvas.canvas1')

const scene = new THREE.Scene()
const geometry = new THREE.SphereGeometry(1 ,52,52)
const material = new THREE.MeshBasicMaterial({ color:'red', wireframe:true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
const sizes = {
    width: window.innerWidth,
    height:window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z=4
scene.add(camera)

const controls = new OrbitControls( camera,canvas);
controls.autoRotate=true


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias:true

})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
controls.update();

const tick =()=>{

console.log('hello')
    // mesh.rotation.y += 0.01
    // mesh.rotation.x += 0.01
    controls.update();
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
