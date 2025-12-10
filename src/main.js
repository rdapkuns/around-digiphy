



import * as THREE from 'three';
import { createFloor as Floor1 } from './floors/floor1.js';
import { createFloor as Floor2, createAccessoryMenu, toggleAccessoryMenu, toggleTextPanel, toggleFloor2Desk } from './floors/floor2.js';
import { createFloor as Floor3 } from './floors/floor3.js';
import { createFloor as Floor4, showTasks, hideTasks, setupTasks, checkTasks, atFloor4 } from './floors/floor4.js';
import { createFloor as Floor5 } from './floors/floor5.js';
import { showForm, hideForm } from './floors/floor6.js';
import { setupBuck, stopFlashingAccessory } from './buck.js';
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
  scene.background = null

  camera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(17, currentCameraHeight, -8)
  camera.lookAt(0, currentCameraHeight - 4, 0)


  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))
  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(15, 7, 17.5)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(2048, 2048)
  // scene.add(dirLight)


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

  // scene.add(light);

  // setupCameraScroll();

  const pmrem = new THREE.PMREMGenerator(renderer)

  new HDRLoader().load('hdri/studio.hdr', (hdrTexture) => {
    const envMap = pmrem.fromEquirectangular(hdrTexture).texture

    scene.environment = envMap         // used for lighting
    // scene.background = envMap          // used as background

    hdrTexture.dispose()
    pmrem.dispose()

    // Now intensity works
    scene.backgroundBlurriness = 0.05
    scene.backgroundIntensity = 0.2
    scene.environmentIntensity = 0.5
  })




  // Load chapters
  const fl1 = Floor1(scene);
  // const fl2 = Floor2(scene);
  // const fl3 = Floor3(scene);
  // const fl4 = Floor4(scene);
  const fl5 = Floor5(scene);

  // const buck = setupBuck(scene);


  floors.push(fl1);
  // floors.push(fl2);
  // floors.push(fl3);
  // floors.push(fl4);
  floors.push(fl5);



  // Add chapter groups to the scene
  scene.add(fl1.group);
  // scene.add(fl2.group);
  // scene.add(fl3.group);
  // scene.add(fl4.group);
  scene.add(fl5.group);

  // const { accessoryGroups } = await setupBuck(scene);
  const { accessoryGroups, setAccessoryVariant, animateSelected, objects } = await setupBuck(scene);
  const primaryMaterialState = { value: 0xbfbdb4, roughness: 0.1, metalness: 0.1 };
  const secondaryMaterialState = { value: 0xbfbdb4, roughness: 0.1, metalness: 0.1 };

  setupKeyboardCameraControl(camera);
  createAccessoryMenu('#accessory-menu', accessoryGroups, setAccessoryVariant, primaryMaterialState, secondaryMaterialState);
}

function render() {
  renderer.outputColorSpace = THREE.SRGBColorSpace
  // renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMapping = THREE.NoToneMapping;
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
const holdY = 19;
const moveUpAmount = 63;
const ratio = { first: 1, hold: 6, last: 4.2 };

const startY = camera.position.y;
const finalY = startY + moveUpAmount;



const cameraTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.three-section',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: () => {
      currentCameraHeight = camera.position.y;
      camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0);
      checkCurrentFloor();

      fl1.checkHeight(currentCameraHeight, currentIndex);
      fl5.checkHeight(currentCameraHeight, currentIndex);

      // console.log(currentCameraHeight)

    }
  }
});

cameraTL.to(camera.position, {
  y: holdY,
  ease: 'linear',
  duration: ratio.first
});

cameraTL.call(() => {
  console.log("ENTERED HOLD");
  toggleTextPanel()

});

cameraTL.to(camera.position, {
  y: holdY,
  ease: 'none',
  duration: ratio.hold
}, "holdStart");


cameraTL.call(() => {

  toggleTextPanel()

  gsap.to(camera, {
    fov: 20,
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

  toggleFloor2Desk()

}, null, "holdStart+=" + (ratio.hold * 0.1));

cameraTL.call(() => {
  toggleAccessoryMenu()
}, null, "holdStart+=" + (ratio.hold * 0.65));

cameraTL.call(() => {
  toggleAccessoryMenu()
}, null, "holdStart+=" + (ratio.hold * 0.95));


cameraTL.to(camera.position, {
  y: finalY,
  ease: 'linear',
  duration: ratio.last
});

cameraTL.call(() => {

}, null, "holdStart+=" + ratio.hold);




// cameraTL.add(holdTL, "+=0");





const qr = document.querySelector(".qr-wrapper")
const overlayButton = document.querySelector(".overlay-button-container")
const fl1 = Floor1(scene);
const fl2 = Floor2(scene);
const fl3 = Floor3(scene);
const fl4 = Floor4(scene);
const fl5 = Floor5(scene);
// const { animateSelected } = setupBuck(scene);



let overlayOn = false

document.querySelector('.overlay-button').addEventListener('click', fl3.toggleOverlayOpacity);


function checkCurrentFloor() {
  //each is 11
  const currentFloor = Math.floor(currentCameraHeight / 13.3) + 1
  if (currentFloor !== prevFloor) {
    console.log("new floor: ", currentFloor)

    if (currentFloor === 1) {
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

    if (currentFloor === 2) {

      if (currentIndex === 0) {
        fl2.rotateFloor(0)
      }
      if (currentIndex === 1) {
        fl2.rotateFloor(120)
      }
      if (currentIndex === 2) {
        fl2.rotateFloor(-120)
      }



      // fl3.toggleTextPanel()
      fl3.hideUI("#ui-panel-3-1")
      fl3.hideUI(".floor3-ui-container .ui-tip")


    }
    if (currentFloor === 3) {

      if (currentIndex === 0) {
        fl3.rotateFloor(0)
      }
      if (currentIndex === 1) {
        fl3.rotateFloor(120)
      }
      if (currentIndex === 2) {
        fl3.rotateFloor(-120)
      }


      overlayButton.classList.remove("visually-hidden")

      // fl3.toggleTextPanel()
      fl3.showUI("#ui-panel-3-1")
      fl3.showUI(".floor3-ui-container .ui-tip")

      fl4.hideQR()
      hideTasks()
      stopFlashingAccessory()
      atFloor4.flag = false;


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

      fl3.hideUI("#ui-panel-3-1")
      fl3.hideUI(".floor3-ui-container .ui-tip")
      fl4.showQR()
      atFloor4.flag = true;
      showTasks()

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
      stopFlashingAccessory()
      fl4.hideQR()
      hideTasks()
      atFloor4.flag = false;

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

      hideForm()

    }

    if (currentFloor === 6) {
      // spinModel()
      showForm()
    }

    if (currentFloor === 2 || currentFloor === 4) {
      // overlayButton.classList.remove("visually-hidden")

    }
    if (currentFloor === 2 || currentFloor === 4) {
      overlayButton.classList.add("visually-hidden")

      fl3.overlayOff();
    }

    if (currentFloor === 2 && prevFloor === 3) {
      gsap.to(camera, {
        fov: 20,
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

let currentIndex

function setupKeyboardCameraControl(camera, model) {
  const cameraPoints = [
    new THREE.Vector3(0, currentCameraHeight, 23),
    new THREE.Vector3(20, currentCameraHeight, -10),
    new THREE.Vector3(-20, currentCameraHeight, -10),
  ]

  currentIndex = 0
  let isAnimating = false

  function moveCameraTo(targetVec3) {
    isAnimating = true
    gsap.to(camera.position, {
      x: targetVec3.x,
      y: currentCameraHeight,
      z: targetVec3.z,
      duration: 1.5,
      ease: 'power2.inOut',
      onStart: () => {
        fl1.checkHeight(currentCameraHeight, -1);
        fl5.checkHeight(currentCameraHeight, -1);

      },
      onUpdate: () => {
        camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)
      },
      onComplete: () => {
        fl1.checkHeight(currentCameraHeight, currentIndex);
        fl5.checkHeight(currentCameraHeight, currentIndex);

        isAnimating = false
      },
    })
  }

  fl1.checkHeight(currentCameraHeight, currentIndex);
  fl5.checkHeight(currentCameraHeight, currentIndex);



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