import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let box;

    // --- build floor
    function createGeometry() {
        loader.load("floors/floor-1.glb", (gltf) => {
            const model = gltf.scene;

            // Common transforms
            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            // Enable shadows only once
            model.traverse(child => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Add to scene
            scene.add(model);

        });

        loader.load("floors/enviorment.glb", (gltf) => {
            const model = gltf.scene;

            // Common transforms
            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            // Enable shadows only once
            model.traverse(child => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Add to scene
            scene.add(model);

        });
    }

    function createLights() {
    }

    // --- animations
    function initAnimations() {
    }

    // --- update loop
    function update() {
    }

    let uiVisible = false
    let currentStation

    function checkHeight(cameraHeight, currentStationIndex) {
        console.log("received change")
        if (currentStationIndex !== currentStation) {
            hideUI()
        }
        if (currentStationIndex === -1) {
            return
        }
        currentStation = currentStationIndex
        // console.log(currentStation)
        if (6 <= cameraHeight && cameraHeight < 10 && uiVisible === false) {
            showUI()
        }
        if (6 > cameraHeight || cameraHeight > 10 && uiVisible === true) {
            hideUI()
        }
    }
    // SHOW THE UI


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



    // initialize floor
    createGeometry();
    createLights();
    initAnimations();


    initAnimations();

    return { group, update, checkHeight };
}
