import './reset.css'
import './style.css'



import * as THREE from 'three';
import { createFloor as Floor1 } from './floors/floor1.js';
import { createFloor as Floor2 } from './floors/floor2.js';
import { createFloor as Floor3, createAccessoryMenu, toggleAccessoryMenu } from './floors/floor3.js';
import { createFloor as Floor4 } from './floors/floor4.js';
import { createFloor as Floor5 } from './floors/floor5.js';
import { setupBuck } from './buck.js';
import { initNavigation } from './navigation.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let scene, camera, renderer;
let floors = [];
// let currentFloor = 0;
const canvas = document.querySelector(".three-canvas")
let currentCameraHeight = 6
let prevFloor = 1

let cameraTargetOffset = { value: 4 }


let cameraScrollTrigger;
let scrollLocked = false

init();
animate();







async function init() {
  // Basic setup
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xccf2fc)

  camera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(17, currentCameraHeight, -8)
  camera.lookAt(0, currentCameraHeight - 4, 0)


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

  // setupCameraScroll();

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

  // const buck = setupBuck(scene);


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

  // const { accessoryGroups } = await setupBuck(scene);
  const { accessoryGroups, setAccessoryVariant } = await setupBuck(scene);
  // createAccessoryMenu('#menu-container', accessoryGroups);


  setupKeyboardCameraControl(camera);
  createAccessoryMenu('#accessory-menu', accessoryGroups, setAccessoryVariant);
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
// gsap.to(camera.position, {
//   ease: "linear",
//   y: camera.position.y + 63,
//   scrollTrigger: {
//     trigger: '.three-section',
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//     onUpdate: () => {
//       currentCameraHeight = camera.position.y;
//       camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)

//       checkCurrentFloor()
//     }
//   }
// })


function setupCameraScroll() {
  const tween = gsap.to(camera.position, {
    ease: "linear",
    y: camera.position.y + 63,
    scrollTrigger: {
      trigger: ".three-section",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: () => {
        camera.lookAt(0, camera.position.y - cameraTargetOffset.value, 0);
        checkCurrentFloor();
      }
    }
  });

  cameraScrollTrigger = tween.scrollTrigger;
}





// --- configuration
const holdY = 32;                       // Y where camera stops to "hold"
const moveUpAmount = 63;                // how far up the camera moves overall
const ratio = { first: 3, hold: 4, last: 4.2 };
// first:hold:last = fraction of scroll allocated to phase1/phase2/phase3
// here hold will take 1/(4+1+5)=10% of the scroll distance

// compute targets
const startY = camera.position.y;
const finalY = startY + moveUpAmount;



// create timeline mapped to scroll
const cameraTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.three-section',
    start: 'top top',
    end: 'bottom bottom',    // or use "+=1000" to control exact scroll length
    scrub: true,
    onUpdate: () => {
      // update derived values every frame
      currentCameraHeight = camera.position.y;
      // console.log(currentCameraHeight)
      camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0);
      checkCurrentFloor();
    }
  }
});

// Phase 1: move from startY to holdY
cameraTL.to(camera.position, {
  y: holdY,
  ease: 'linear',
  duration: ratio.first
});

cameraTL.call(() => {
  console.log("ENTERED HOLD");
  // onEnterHold();
});

// Phase 2: hold at holdY (same y target) — duration controls how much scroll is spent holding
cameraTL.to(camera.position, {
  y: holdY,
  ease: 'none',    // no easing for a perfectly flat hold
  duration: ratio.hold
});

// Phase 3: continue to finalY
cameraTL.to(camera.position, {
  y: finalY,
  ease: 'linear',
  duration: ratio.last
});






// cameraTL.add(holdTL, "+=0");





const qr = document.querySelector(".qr-wrapper")
const overlayButton = document.querySelector(".overlay-button-container")
const fl2 = Floor2(scene);
let overlayOn = false

document.querySelector('.overlay-button').addEventListener('click', fl2.toggleOverlayOpacity);


function checkCurrentFloor() {
  //each is 11
  const currentFloor = Math.floor(currentCameraHeight / 13.3) + 1
  if (currentFloor !== prevFloor) {
    console.log("new floor: ", currentFloor)

    if (currentFloor === 2){
      gsap.to(camera, {
        fov: 65,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.updateProjectionMatrix();
        }
      });

      gsap.to(cameraTargetOffset, {
        value: 4,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)
        }
      });
    }
    if (currentFloor === 3) {
      //ARRIVE FLOOR 4
      qr.classList.add("visually-hidden")
      gsap.to(camera, {
        fov: 30,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.updateProjectionMatrix();
        }
      });

      gsap.to(cameraTargetOffset, {
        value: 2,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)
        }
      });

    }
    if (currentFloor === 4) {
      //ARRIVE FLOOR 4
      qr.classList.remove("visually-hidden")
      gsap.to(camera, {
        fov: 30,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.updateProjectionMatrix();
        }
      });

      gsap.to(cameraTargetOffset, {
        value: 2,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)
        }
      });

    }

    if (currentFloor === 5) {
      qr.classList.add("visually-hidden")

      gsap.to(camera, {
        fov: 65,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.updateProjectionMatrix();
        }
      });

      gsap.to(cameraTargetOffset, {
        value: 4,
        duration: 1,
        ease: "power3.inOut",
        onUpdate() {
          camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)
        }
      });
    }
    if (currentFloor === 2 || currentFloor === 4) {
      overlayButton.classList.remove("visually-hidden")

    }
    if (currentFloor === 1 || currentFloor === 5) {
      overlayButton.classList.add("visually-hidden")

      fl2.overlayOff();
      // fl2.toggleOverlayOpacity()

      // console.log(fl2.overlayVisible)
    }

    if (currentFloor === 3 || prevFloor === 3){
      toggleAccessoryMenu()
    }


    prevFloor = currentFloor
    setActiveFloor(prevFloor)

  }

}

const navButtons = document.querySelectorAll('.nav-button');

function setActiveFloor(floorNumber) {
  navButtons.forEach(btn => btn.classList.remove('nav-active'));
  const target = document.querySelector(`.nav-button[data-floor="floor${floorNumber}"]`);
  if (target) {
    target.classList.add('nav-active');
  }
}

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
      onUpdate: () => {
        camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)

      },
      onComplete: () => (isAnimating = false),
    })
  }

  camera.position.copy(cameraPoints[currentIndex])
  camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)

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

  const $buttonRight = document.querySelector(".horizontal-controls-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cameraPoints.length
    moveCameraTo(cameraPoints[currentIndex])
  })
  const $buttonLeft = document.querySelector(".horizontal-controls-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cameraPoints.length) % cameraPoints.length
    moveCameraTo(cameraPoints[currentIndex])
  })
}



window.addEventListener('resize', resize);


function animate() {
  requestAnimationFrame(animate);



  // Update only *current* chapter or all chapters as needed
  // floors[currentFloor]?.update();
  render()

  // renderer.render(scene, camera);
}



window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  initNavigation(camera);
});