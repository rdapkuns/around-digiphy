import './style.css'



import * as THREE from 'three';
import { createFloor as Floor1 } from './floors/floor1.js';
import { createFloor as Floor2 } from './floors/floor2.js';
import { createFloor as Floor3 } from './floors/floor3.js';
import { createFloor as Floor4 } from './floors/floor4.js';
import { createFloor as Floor5 } from './floors/floor5.js';
import { initNavigation } from './navigation.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let scene, camera, renderer;
let floors = [];
let currentFloor = 0;
const canvas = document.querySelector(".three-canvas")
let currentCameraHeight = 4


init();
animate();

function init() {
  // Basic setup
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xccf2fc)

  camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(17, 4, -8)
  camera.lookAt(0, 0, 0)


  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.8))
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(15, 7, 17.5)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(2048, 2048)
  scene.add(dirLight)


  const light = new THREE.DirectionalLight(0xFFFFFF, .5);
  light.position.set(25, 7, 27.5);

  light.castShadow = true;
  light.shadow.mapSize.set(4096, 4096);

  const cam = light.shadow.camera;
  cam.near = 0.5;
  cam.far = 200;

  cam.left = -30;
  cam.right = 30;
  cam.top = 30;
  cam.bottom = -30;

  cam.updateProjectionMatrix();

  scene.add(light);



  const pmrem = new THREE.PMREMGenerator(renderer)

  new HDRLoader().load('/hdri/sunset.hdr', (hdrTexture) => {
    const envMap = pmrem.fromEquirectangular(hdrTexture).texture

    scene.environment = envMap         // used for lighting
    scene.background = envMap          // used as background

    hdrTexture.dispose()
    pmrem.dispose()

    // Now intensity works
    scene.backgroundBlurriness = 0.05
    scene.backgroundIntensity = 0.2
    scene.environmentIntensity = 0.1
  })




  // Load chapters
  const fl1 = Floor1(scene);
  const fl2 = Floor2(scene);
  const fl3 = Floor3(scene);
  const fl4 = Floor4(scene);
  const fl5 = Floor5(scene);
  

  floors.push(fl1);
  floors.push(fl2);
  floors.push(fl3);
  floors.push(fl4);
  floors.push(fl5);
  


  // Add chapter groups to the scene
  scene.add(fl1.group);
  scene.add(fl2.group);
  scene.add(fl3.group);
  scene.add(fl4.group);
  scene.add(fl5.group);
  

  setupKeyboardCameraControl(camera);

  // Position each chapter in world space if needed
  // ch2.group.position.set(50, 0, 0); // e.g., next zone in the world
}

function render() {
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.render(scene, camera)
}

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
}

//pin the canvas
gsap.to('.canvas-wrapper', {
  ease: "linear",
  scrollTrigger: {
    trigger: '.three-section',
    start: "top top",
    end: "bottom bottom",
    pin: '.canvas-wrapper',
  }
});

//move camera on scroll
gsap.to(camera.position, {
  ease: "linear",
  y: camera.position.y + 70,
  scrollTrigger: {
    trigger: '.three-section',
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      currentCameraHeight = camera.position.y;
      camera.lookAt(0, currentCameraHeight - 4, 0)
    }
  }
})


function setupKeyboardCameraControl(camera, model) {
  const cameraPoints = [
    new THREE.Vector3(0, currentCameraHeight, 20),
    new THREE.Vector3(17, currentCameraHeight, -8),
    new THREE.Vector3(-17, currentCameraHeight, -8),
  ]

  let currentIndex = 0
  let isAnimating = false

  function moveCameraTo(targetVec3) {
    isAnimating = true
    gsap.to(camera.position, {
      x: targetVec3.x,
      y: currentCameraHeight,
      z: targetVec3.z,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => camera.lookAt(0, currentCameraHeight - 4, 0),
      onComplete: () => (isAnimating = false),
    })
  }

  camera.position.copy(cameraPoints[currentIndex])
  camera.lookAt(0, 0, 0)

  window.addEventListener('keydown', (e) => {
    if (isAnimating) return
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % cameraPoints.length
      moveCameraTo(cameraPoints[currentIndex])
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + cameraPoints.length) % cameraPoints.length
      moveCameraTo(cameraPoints[currentIndex])
    }
  })
}



window.addEventListener('resize', resize);


function animate() {
  requestAnimationFrame(animate);



  // Update only *current* chapter or all chapters as needed
  floors[currentFloor]?.update();
  render()

  // renderer.render(scene, camera);
}



window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  initNavigation(camera);
});