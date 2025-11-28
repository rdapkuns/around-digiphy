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
    "DigiPHY, created by Granstudio, merges a physical seating frame with a real-time digital layer. I allows me to sit in the adjustable frame, change seat positions, move displays, test visibility, and see everything update instantly wearing any AR goggles. DigiPHY lets me experience and adjust a full car interior long before a physical prototype exists - saving huge amounts of time and money.",
];



export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let box;
    let cameraY


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
    const physicalButtons = document.querySelectorAll(".physical-component")


    function checkHeight(cameraHeight, currentStationIndex) {
        cameraY = cameraHeight

        //SHOW HIDE THE PHYSICAL BUTTONS
        if (currentStationIndex === 1 && cameraY < 8) {
            physicalButtons.forEach(element => {
                element.classList.remove("visually-hidden")
            });
        } else {
            physicalButtons.forEach(element => {
                element.classList.add("visually-hidden")
            });
        }


        // console.log("received change")
        if (currentStationIndex !== currentStation) {


            hideUI()
            // animateUI(`.floor1-ui-station${currentStation}`, false);

        }
        if (currentStationIndex === -1) {
            return
        }
        currentStation = currentStationIndex
        // console.log(currentStation)
        if (6 <= cameraHeight && cameraHeight < 10 && uiVisible === false) {
            showUI()
            // animateUI(`.floor1-ui-station${currentStation}`, true);
        }
        if (6 > cameraHeight || cameraHeight > 10 && uiVisible === true) {
            hideUI()
            // animateUI(`.floor1-ui-station${currentStation}`, false);
        }
    }


    document.querySelectorAll("[data-target]").forEach(btn => {
        const target = btn.dataset.target;

        btn.addEventListener("mouseover", () => physical(target));
        btn.addEventListener("mouseout", () => physicalHide(target));

        // btn.addEventListener("mouseover", () => animateUI(target, true));
        // btn.addEventListener("mouseout", () => animateUI(target, false));
    });

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

    const station1Tip = document.querySelector(".floor1-ui-station1 > .ui-tip")

    function physical(target) {
        if (currentStation !== 1 || cameraY > 8) {
            return
        }
        const activeStation = document.querySelector(target);
        if (!activeStation) return;

        const children = [...activeStation.children];

        activeStation.classList.remove("visually-hidden");

        gsap.to(station1Tip, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                station1Tip.classList.add("visually-hidden");
            }
        });

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

    let currentTextPanelIndex = 0;
    const textElement = document.querySelector(".ui-swaptext");
    const titleElement = document.querySelector(".ui-swaptitle");
    const progressDots = document.querySelectorAll(".ui-panel-progress div");

    function updateText() {
        textElement.textContent = texts[currentTextPanelIndex];
        titleElement.textContent = titles[currentTextPanelIndex];
        progressDots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentTextPanelIndex);
        });
    }

    const nextBtn = document.querySelector(".ui-panel-next").addEventListener("click", () => {
        if (currentTextPanelIndex < texts.length - 1) {
            currentTextPanelIndex++;


            updateText();
        }
    });
    const backBtn = document.querySelector(".ui-panel-back").addEventListener("click", () => {
        if (currentTextPanelIndex > 0) {
            currentTextPanelIndex--;
            updateText();
        }
    });

    updateText()


    return { group, update, checkHeight };
}
