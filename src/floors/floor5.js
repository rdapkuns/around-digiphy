import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const textSets = {
    "5-0": [
        "One of our clients is a leading automotive design team, and from their designers' point of view, DigiPHY feels like a creative boost to their entire workflow. They explain how refreshing it is to step into a physical buck and instantly switch between different interior concepts, adjust HMI elements, or test ergonomic ideas without waiting for new mock-ups or time-consuming CAD reviews. Everything becomes experiential right away.",
        "For these designers, DigiPHY opens up the space to explore more intuitively. Concepts don't stay theoretical — they become something you can feel, compare, and refine in real time. They describe DigiPHY as a tool that encourages play, speeds up iteration, and allows them to make decisions based on lived experience rather than flat images on a screen. It brings confidence, momentum, and a much more human touch to the design process.",
    ],

    "5-1": [
        "Another of our clients is Renault, a team that tackles design by combining creativity with engineering precision.For their designers, DigiPHY feels like a true accelerator. They relate how, in workshops, they seamlessly switch between interior configurations, move screen locations, or change structural components such as the B - pillar - all the while experiencing seating position and ergonomics as if the car were already built.",
        "For Renault's design team, DigiPHY opens up space to explore more freely. Ideas become immediately tangible, comparisons are instant, and decisions feel grounded in real experience rather than abstract sketches or CAD views.They describe it as a tool that lets them play, validate, and refine their work with a level of confidence and speed tha traditional mock - ups simply can't match.",
    ],

    "5-2": [
        "One of our clients is Mazda, a team that puts a strong focus on creating authentic, human-centered design experiences. From their perspective, DigiPHY feels like a major accelerator in their process. They explain how, during workshops, they could effortlessly switch between different interior and package options while still feeling the physical seating experience and ergonomics as if they were real.",
        "For them, DigiPHY makes it possible to make decisions faster because ideas become instantly tangible — without having to build new mock-ups each time. Mazda describes it as a tool that gives them more freedom to play, compare, and make design decisions based on what they actually experience, not just what they see on a screen.",
    ],
};



export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let box;

    function createGeometry() {
        loader.load("floors/cartest-2.glb", (gltf) => {
            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            scene.add(model);
        });
    }

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



    function initSwapPanel(panelId, texts) {

        let currentIndex = 0;

        const panel = document.querySelector(`#ui-panel-${panelId}`);
        if (!panel) return;

        const textElement = panel.querySelector(".ui-swaptext");
        const nextBtn = panel.querySelector(".ui-panel-next");
        const backBtn = panel.querySelector(".ui-panel-back");
        const progressDots = panel.querySelectorAll(".ui-panel-progress div");

        function updateText() {
            textElement.textContent = texts[currentIndex];

            progressDots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });

            // button state updates
            backBtn.classList.toggle("ui-footer-button-disabled", currentIndex === 0);
            nextBtn.classList.toggle("ui-footer-button-disabled", currentIndex === texts.length - 1);
        }

        nextBtn.addEventListener("click", () => {
            if (currentIndex < texts.length - 1) {
                currentIndex++;
                updateText();
            }
        });

        backBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateText();
            }
        });

        updateText();
    }



    initSwapPanel("5-0", textSets["5-0"]);
    initSwapPanel("5-1", textSets["5-1"]);
    initSwapPanel("5-2", textSets["5-2"]);




    return { group, checkHeight };
}
