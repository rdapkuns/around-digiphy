import * as THREE from 'three';
import { createFloor as Floor1 } from './floors/floor1.js';
import { createFloor as Floor2, createAccessoryMenu, toggleAccessoryMenu, toggleTextPanel, toggleFloor2Desk } from './floors/floor2.js';
import { createFloor as Floor3 } from './floors/floor3.js';
import { createFloor as Floor4, showTasks, hideTasks, setupTasks, checkTasks, atFloor4 } from './floors/floor4.js';
import { createFloor as Floor5, showFloor5Tip, hideFloor5Tip } from './floors/floor5.js';
import { createFloor as Floor6, showForm, hideForm } from './floors/floor6.js';
import { setupBuck, stopFlashingAccessory } from './buck.js';
import { initNavigation } from './navigation.js';
import { initIntro } from './intro.js';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let scene, camera, renderer;
let floors = [];
const canvas = document.querySelector(".three-canvas")
let currentCameraHeight = 6
let prevFloor = 1

let cameraTargetOffset = { value: 4 }
let atRoof = false

let cameraScrollTrigger;


let orbitTween = null;
const orbitState = { angle: 0 };

init();
animate();
initIntro()


export const cameraControls = {};


async function init() {

  scene = new THREE.Scene()
  scene.background = null

  camera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.set(17, currentCameraHeight, -8)
  camera.lookAt(0, currentCameraHeight - 4, 0)


  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  scene.add(new THREE.AmbientLight(0xffffff, 0.5))


  const pmrem = new THREE.PMREMGenerator(renderer)

  new HDRLoader().load('hdri/studio.hdr', (hdrTexture) => {
    const envMap = pmrem.fromEquirectangular(hdrTexture).texture

    scene.environment = envMap         // used for lighting
    // scene.background = envMap          // used as background

    hdrTexture.dispose()
    pmrem.dispose()

    scene.backgroundBlurriness = 0.05
    scene.backgroundIntensity = 0.2
    scene.environmentIntensity = 0.5
  })

  const { accessoryGroups, setAccessoryVariant, animateSelected, objects } = await setupBuck(scene);
  const primaryMaterialState = { value: 0xbfbdb4, roughness: 0.1, metalness: 0.1 };
  const secondaryMaterialState = { value: 0xbfbdb4, roughness: 0.1, metalness: 0.1 };

  setupKeyboardCameraControl(camera);
  createAccessoryMenu('#accessory-menu', accessoryGroups, setAccessoryVariant, primaryMaterialState, secondaryMaterialState);
}

function render() {
  renderer.outputColorSpace = THREE.SRGBColorSpace
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

gsap.to('.canvas-wrapper', {
  ease: "linear",
  scrollTrigger: {
    trigger: '.three-section',
    start: "top top",
    end: "bottom bottom",
    pin: '.canvas-wrapper',
  }
});


document.querySelector(".instructions-button").addEventListener("click", () => {
  document.querySelector(".instruction-wrapper").classList.remove("visually-hidden")

  gsap.to(".instruction-wrapper", {
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
  });
})

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

    }
  }
});

cameraTL.to(camera.position, {
  y: holdY,
  ease: 'linear',
  duration: ratio.first
});

cameraTL.call(() => {
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
}, "lastPhase");

cameraTL.call(() => {
  document.querySelector("#three-canvas").classList.remove("canvas-dark")
}, null, "lastPhase+=" + (ratio.last * 0.875));

cameraTL.call(() => {
  document.querySelector("#three-canvas").classList.add("canvas-dark")
}, null, "lastPhase+=" + (ratio.last * 0.88));

cameraTL.call(() => {
  stopCameraOrbit();
}, null, "lastPhase+=" + (ratio.last * 0.995));

cameraTL.call(() => {
  startCameraOrbit(camera, {
    center: new THREE.Vector3(0, currentCameraHeight - cameraTargetOffset.value, 0),
    radius: 23,
    speed: 80
  });
}, null, "lastPhase+=" + (ratio.last));



cameraTL.call(() => {

}, null, "holdStart+=" + ratio.hold);



const qr = document.querySelector(".qr-wrapper")
const fl1 = Floor1(scene);
const fl2 = Floor2(scene);
const fl3 = Floor3(scene);
const fl4 = Floor4(scene);
const fl5 = Floor5(scene);
const fl6 = Floor6(scene)

let currentFloor = 1

function checkCurrentFloor() {
  currentFloor = Math.floor(currentCameraHeight / 13.3) + 1
  if (currentFloor !== prevFloor) {

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

      fl3.hideUI("#ui-panel-3-1")
      fl3.hideUI("#ui-panel-3-2")
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
      qr.classList.remove("visually-hidden")

      fl3.hideUI("#ui-panel-3-1")
      fl3.hideUI("#ui-panel-3-2")
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

      hideFloor5Tip()


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

      showFloor5Tip()

      hideForm()
      atRoof = false
    }

    if (currentFloor === 6) {
      hideFloor5Tip()
      showForm()
      atRoof = true
    }

    if (currentFloor === 2 || currentFloor === 4) {
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

    if (currentFloor === 5 && prevFloor === 6) {
      const targetPoint = new THREE.Vector3(0, currentCameraHeight, 23);

      moveCameraToPoint(camera, targetPoint, currentCameraHeight, cameraTargetOffset, fl1, fl5);

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


  window.cameraControls = cameraControls;

  cameraControls.moveCameraTo = moveCameraTo;


  fl1.checkHeight(currentCameraHeight, currentIndex);
  fl5.checkHeight(currentCameraHeight, currentIndex);



  camera.position.copy(cameraPoints[currentIndex])
  camera.lookAt(0, currentCameraHeight - cameraTargetOffset.value, 0)

  window.addEventListener('keydown', (e) => {
    if (isAnimating) return
    if (e.key === 'ArrowRight' && !atRoof) {
      currentIndex = (currentIndex + 1) % cameraPoints.length
      moveCameraTo(cameraPoints[currentIndex])
    } else if (e.key === 'ArrowLeft' && !atRoof) {
      currentIndex = (currentIndex - 1 + cameraPoints.length) % cameraPoints.length
      moveCameraTo(cameraPoints[currentIndex])
    } else if (e.key === 'ArrowUp') {
      sideNav(`floor${currentFloor + 1}`)
    } else if (e.key === 'ArrowDown') {
      sideNav(`floor${currentFloor - 1}`)
    }
  })

  window.addEventListener("cameraMove", (e) => {
    moveCameraTo(e.detail.target);
    currentIndex = 2
  });

  const $buttonRight = document.querySelector(".horizontal-controls-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cameraPoints.length
    moveCameraTo(cameraPoints[currentIndex])
  })
  const $buttonLeft = document.querySelector(".horizontal-controls-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cameraPoints.length) % cameraPoints.length
    moveCameraTo(cameraPoints[currentIndex])
  })
}



function startCameraOrbit(camera, {
  center = new THREE.Vector3(0, 0, 0),
  radius = 10,
  speed = 50,
} = {}) {

  stopCameraOrbit();

  const height = camera.position.y;

  orbitState.angle = Math.atan2(
    camera.position.z - center.z,
    camera.position.x - center.x
  );

  orbitTween = gsap.to(orbitState, {
    angle: orbitState.angle + Math.PI * 2,
    duration: speed,
    repeat: -1,
    ease: "power1.inOut",
    onUpdate: () => {
      camera.position.x = center.x + Math.cos(orbitState.angle) * radius;
      camera.position.z = center.z + Math.sin(orbitState.angle) * radius;
      camera.position.y = height;

      camera.lookAt(center);
    }
  });
}

function stopCameraOrbit() {
  if (orbitTween) {
    orbitTween.kill();
    orbitTween = null;

  }
}


function moveCameraToPoint(camera, targetVec3, currentCameraHeight, cameraTargetOffset, fl1, fl5) {
  currentIndex = 0
  gsap.to(camera.position, {
    x: targetVec3.x,
    z: targetVec3.z,
    duration: 1.5,
    ease: 'power2.inOut',
    onStart: () => {
      fl5.checkHeight(currentCameraHeight, -1);
    },
    onComplete: () => {
      fl5.checkHeight(currentCameraHeight, 0);
    }
  });
}






window.addEventListener('resize', resize);


function animate() {
  requestAnimationFrame(animate);

  render()
}


let sideNav

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  sideNav = initNavigation(camera);
  console.log(sideNav)
});

const muteBtn = document.getElementById("muteBtn");
const audios = document.querySelectorAll("audio");

let isMuted = false;

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;

  audios.forEach(audio => {
    audio.muted = isMuted;
  });

  muteBtn.innerHTML = !isMuted ? `
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7 16V3L19 1V14M7 16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13C5.65685 13 7 14.3431 7 16ZM19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14Z"
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ` : `
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M7 16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13C5.65685 13 7 14.3431 7 16ZM7 16V11.5M16 17C14 17 13 16 13 15M16 11C16.5 11 18.5 11 19 13V1L7 3V4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 5L20.5 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
  `
});
