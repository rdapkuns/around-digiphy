import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const titles = [
    "Hey, I'm Digi",
    "What is DigiPHY?",
];

const texts = [
    "Have you ever wondered how your ideas would look like or behave once they become real? DigiPHY turns your early concepts and sketches into full - scale, interactive experiences in seconds.Sketch → test → refine - all in one continuous loop, without interrupting your creative momentum.",
    "DigiPHY, created by Granstudio, merges a physical seating frame with a real-time digital layer. It allows me to sit in the adjustable frame, change seat positions, move displays, test visibility, and see everything update instantly wearing any AR goggles. DigiPHY lets me experience and adjust a full car interior long before a physical prototype exists - saving huge amounts of time and money.",
];

let componentsOpen = false

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let box;
    let cameraY


    // --- build floor
    function createGeometry() {

        // const texture = new THREE.TextureLoader().load("baked/baked.jpg")
        const texture = new THREE.TextureLoader().load("baked/floor-1-aa.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        // loader.load("floors/floor-1.glb", (gltf) => {
        loader.load("floors/floor-1-a.glb", (gltf) => {
            const model = gltf.scene;

            // Common transforms
            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            // Enable shadows only once
            model.traverse(child => {
                if (child.isMesh) {
                    child.material = material
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
                // console.log(child.name)
            });

            const glass = model.getObjectByName("glass006");
            if (glass) {
                glass.material = glass.material.clone();
                glass.material.transparent = true;
                glass.material.opacity = 0.6;
                // glass.material.roughness = 0;
                // glass.material.metalness = 1;
                glass.material.color.setHex(0xf2f9ff);   // or .setRGB(r, g, b)
            }

            // Add to scene
            scene.add(model);

        });


        // const texture = new THREE.TextureLoader().load("baked/baked.jpg")
        const textureB = new THREE.TextureLoader().load("baked/floor-1-b.jpg")
        textureB.flipY = false
        textureB.colorSpace = THREE.SRGBColorSpace;
        const materialB = new THREE.MeshBasicMaterial({ map: textureB })

        // loader.load("floors/floor-1.glb", (gltf) => {
        loader.load("floors/floor-1-b.glb", (gltf) => {
            const model = gltf.scene;

            // Common transforms
            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            // Enable shadows only once
            model.traverse(child => {
                if (child.isMesh) {
                    child.material = materialB
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            // Add to scene
            scene.add(model);

        });

        // loader.load("floors/floor-1-nb.glb", (gltf) => {
        loader.load("floors/floor-1-c.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

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
            // scene.add(model);

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

    let activeComponent = null
    let uiVisible = false
    let currentStation
    const physicalButtons = document.querySelectorAll(".physical-component")


    function checkHeight(cameraHeight, currentStationIndex) {
        cameraY = cameraHeight

        //SHOW HIDE THE PHYSICAL BUTTONS
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

        // btn.addEventListener("mouseover", () => physical(target));
        btn.addEventListener("click", (event) => {
            console.log(componentsOpen)
            event.stopPropagation()
            physical(target)
        });
        // btn.addEventListener("mouseout", () => physicalHide(target));

        // btn.addEventListener("mouseover", () => animateUI(target, true));
        // btn.addEventListener("mouseout", () => animateUI(target, false));
    });
    // document.querySelector(".floor1-ui-station1").addEventListener("click", () => {fvergbvg
    window.addEventListener("click", () => {
        physicalHide(activeComponent)
        console.log("activeComponent: ", activeComponent)
    })

    const gsapDefaults = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out"
        },
        hide: {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in"
        }
    };

    function animateUI(target, show = true) {
        const el = document.querySelector(target);
        if (!el) return;

        const children = [...el.children];

        if (show) {
            el.classList.toggle("visually-hidden", !show);
            gsap.fromTo(children, gsapDefaults.hidden, gsapDefaults.show);
        } else {
            // gsap.to(children, {
            //     ...gsapDefaults.hide,
            //     // onComplete: () => el.classList.add("visually-hidden")
            // });
            gsap.fromTo(children, gsapDefaults.show, gsapDefaults.hide);

        }
    }

    // const station1Tip = document.querySelector(".floor1-ui-station1 > .ui-tip")

    function physical(target) {
        if (currentStation !== 1 || cameraY > 8) {
            return
        }
        const activeStation = document.querySelector(target);
        if (!activeStation) return;

        if (componentsOpen) return
        componentsOpen = true

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

        componentsOpen = false

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


    // SHOW THE UI
    function showUI() {
        const activeStation = document.querySelector(`.floor1-ui-station${currentStation}`);

        if (!activeStation) return;


        const children = [...activeStation.children];
        // console.log("active children: ", children)

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
        console.log(activeStation)
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


    function rotateFloor(deg = 30) {
        if (!floorGroup) {
            console.warn("Floor model not loaded yet.");
            return;
        }

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


    return { group, update, checkHeight, rotateFloor };
}
