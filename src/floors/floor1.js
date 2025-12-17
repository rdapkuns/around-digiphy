import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const popupsOn = new Audio("./audio/popups.mp3");
const popupsOff = new Audio("./audio/popupsOff.mp3");


let componentsOpen = false

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let cameraY


    function createGeometry() {

        const texture = new THREE.TextureLoader().load("baked/floor-1-aa.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        loader.load("floors/floor-1-a.glb", (gltf) => {
            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.material = material
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            const glass = model.getObjectByName("glass006");
            if (glass) {
                glass.material = glass.material.clone();
                glass.material.transparent = true;
                glass.material.opacity = 0.6;
                glass.material.color.setHex(0xf2f9ff);
            }

            scene.add(model);

        });


        const textureB = new THREE.TextureLoader().load("baked/floor-1-b.jpg")
        textureB.flipY = false
        textureB.colorSpace = THREE.SRGBColorSpace;
        const materialB = new THREE.MeshBasicMaterial({ map: textureB })

        loader.load("floors/floor-1-b.glb", (gltf) => {
            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.material = materialB
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            scene.add(model);

        });

        loader.load("floors/floor-1-c.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            scene.add(model);

        });
    }


    let activeComponent = null
    let uiVisible = false
    let currentStation
    const physicalButtons = document.querySelectorAll(".physical-component")


    function checkHeight(cameraHeight, currentStationIndex) {
        cameraY = cameraHeight

        if (currentStationIndex === 1 && cameraY < 7) {
            physicalButtons.forEach(element => {
                element.classList.remove("visually-hidden")
            });
        } else {
            physicalButtons.forEach(element => {
                element.classList.add("visually-hidden")
            });
        }


        if (currentStationIndex !== currentStation) {


            hideUI()

        }
        if (currentStationIndex === -1) {
            return
        }
        currentStation = currentStationIndex
        if (6 <= cameraHeight && cameraHeight < 10 && uiVisible === false) {
            showUI()
        }
        if (6 > cameraHeight || cameraHeight > 10 && uiVisible === true) {
            hideUI()
            physicalHide(activeComponent)
        }
    }


    document.querySelectorAll("[data-target]").forEach(btn => {
        const target = btn.dataset.target;

        btn.addEventListener("click", (event) => {
            btn.classList.remove("pulsing")
            event.stopPropagation()
            physical(target)
        }); 
    });
    window.addEventListener("click", () => {
        physicalHide(activeComponent)
    })


    function physical(target) {
        if (currentStation !== 1 || cameraY > 8) {
            return
        }
        const activeStation = document.querySelector(target);
        if (!activeStation) return;

        if (componentsOpen) return
        componentsOpen = true

        popupsOn.currentTime = 0;
        popupsOn.play();

        activeComponent = target

        const children = [...activeStation.children];

        activeStation.classList.remove("visually-hidden");


        gsap.fromTo(children,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "power2.out"
            }
        );
        uiVisible = true;

    }

    function physicalHide(target) {
        if (currentStation !== 1) {
            return
        }
        const activeStation = document.querySelector(target);
        if (!activeStation) return;

        if (componentsOpen) {
            componentsOpen = false
            popupsOff.currentTime = 0;
            popupsOff.play();
        }


        const children = [...activeStation.children];

        gsap.to(children, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                activeStation.classList.add("visually-hidden");
            }
        });

        uiVisible = false;
    }


    function showUI() {
        const activeStation = document.querySelector(`.floor1-ui-station${currentStation}`);

        if (!activeStation) return;


        const children = [...activeStation.children];

        activeStation.classList.remove("visually-hidden");

        gsap.fromTo(children,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "power2.out"
            }
        );

        uiVisible = true;
    }


    function hideUI() {
        const activeStation = document.querySelector(`.floor1-ui-station${currentStation}`);
        if (!activeStation) return;

        const children = [...activeStation.children];

        gsap.to(children, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                activeStation.classList.add("visually-hidden");
            }
        });

        uiVisible = false;
    }

    createGeometry();

    function rotateFloor(deg = 30) {
        if (!floorGroup) return;

        const radians = THREE.MathUtils.degToRad(deg);

        gsap.to(floorGroup.rotation, {
            y: radians,
            duration: 0,
            ease: "power2.inOut",
            onUpdate: () => {
            }
        });
    }

    document.querySelector(".btn-wrap > button").addEventListener("click", closeInstruction)

    function closeInstruction() {
        gsap.to(".instruction-wrapper", {
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            onComplete: () => {
                document.querySelector(".instruction-wrapper").classList.add("visually-hidden")
            }
        });
    }


    return { group, checkHeight, rotateFloor };
}
