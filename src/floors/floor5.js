import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);




export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    let floorGroup = new THREE.Group();
    scene.add(group);
    let box;

    function createGeometry() {


        const texture = new THREE.TextureLoader().load("baked/floor-5-a.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        loader.load("floors/floor-5-a.glb", (gltf) => {
            // loader.load("models/floor5cars.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.material = material
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
                // console.log(child.name)
            });

            const glass = model.getObjectByName("glass001");
            if (glass) {
                glass.material = glass.material.clone();
                glass.material.transparent = true;
                glass.material.opacity = 0.6;
                glass.material.color.setHex(0xf2f9ff);
            }

            floorGroup.add(model)
            // scene.add(model);
        });






        loader.load("floors/floor-5-c.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            floorGroup.add(model)

            
        });
    }
    scene.add(floorGroup);

    createGeometry();






    let uiVisible = false
    let currentStation
    let cameraY


    function checkHeight(cameraHeight, currentStationIndex) {
        cameraY = cameraHeight

        if (currentStationIndex !== currentStation) {
            hideUI()
        }
        if (currentStationIndex === -1) {
            return
        }
        currentStation = currentStationIndex
        if (55 <= cameraHeight && cameraHeight < 63 && uiVisible === false) {
            showUI()
        }
        if (55 > cameraHeight || cameraHeight > 63 && uiVisible === true) {
            hideUI()
        }
    }


    function showUI() {
        const activeStation = document.querySelector(`#ui-panel-5-${currentStation}`);

        if (!activeStation) return;

        activeStation.classList.remove("visually-hidden");

        gsap.fromTo(activeStation,
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
        const activeStation = document.querySelector(`#ui-panel-5-${currentStation}`);
        if (!activeStation) return;

        if (uiVisible) {



            gsap.to(activeStation, {
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
    }



    function rotateFloor(deg) {
        if (!floorGroup) {
            console.warn("Floor model not loaded yet.");
            return;
        }

        const radians = THREE.MathUtils.degToRad(deg);
        console.log(radians)

        gsap.to(floorGroup.rotation, {
            y: radians,
            duration: 0,
            ease: "power2.inOut",
            onUpdate: () => {
                console.log(floorGroup.rotation.y)
            }
        });
    }


    return { group, checkHeight, rotateFloor };
}
