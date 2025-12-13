import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let overlayModel;
    let alignmentModels
    let overlayVisible = false;
    let floorGroup = new THREE.Group();
    let headset
    let basicModels


    function createGeometry() {


        const texture = new THREE.TextureLoader().load("baked/floor-3-a.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        loader.load("floors/floor-3-a.glb", (gltf) => {
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

            const glass = model.getObjectByName("glass008");
            if (glass) {
                glass.material = glass.material.clone();
                glass.material.transparent = true;
                glass.material.opacity = 0.6;
                // glass.material.roughness = 0;
                // glass.material.metalness = 1;
                glass.material.color.setHex(0xf2f9ff);   // or .setRGB(r, g, b)
            }

            // scene.add(model);
            floorGroup.add(model);
        });

        loader.load("floors/floor-3-b.glb", (gltf) => {

            alignmentModels = gltf.scene;

            alignmentModels.position.set(0, 0, 0);
            alignmentModels.rotateY(Math.PI);



            alignmentModels.traverse(child => {
                if (child.isMesh && child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 0;
                    alignmentModels.visible = false;
                }
            });

            floorGroup.add(alignmentModels);
            // scene.add(alignmentModels);

        });




        loader.load("floors/floor-3-c.glb", (gltf) => {

            basicModels = gltf.scene;

            basicModels.position.set(0, 0, 0);
            basicModels.rotateY(Math.PI);

            // scene.add(basicModels);
            floorGroup.add(basicModels);
        });


        loader.load('models/digiphy-overlay.glb', (gltf) => {
            overlayModel = gltf.scene;
            overlayModel.position.set(0, 2, 0);

            overlayModel.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 0;
                    overlayModel.visible = false;
                }
            });

            // floorGroup.add(overlayModel);
            scene.add(overlayModel);
            scene.add(floorGroup);


            // --- configuration
            const holdY = 15;                       // 26 because camera starts at 6 and this at 0
            const moveUpAmount = 63;                // how far up the camera moves overall
            const ratio = { first: 1, hold: 6, last: 4.2 };
            // first:hold:last = fraction of scroll allocated to phase1/phase2/phase3
            // here hold will take 1/(4+1+5)=10% of the scroll distance

            // compute targets
            const startY = 2;
            const finalY = startY + moveUpAmount;

            // create timeline mapped to scroll
            const modelTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.three-section',
                    start: 'top top',
                    end: 'bottom bottom',    // or use "+=1000" to control exact scroll length
                    scrub: true,
                }
            });

            // Phase 1: move from startY to holdY
            modelTl.to(overlayModel.position, {
                y: holdY,
                ease: 'linear',
                duration: ratio.first
            });

            // Phase 2: hold at holdY (same y target) — duration controls how much scroll is spent holding
            modelTl.to(overlayModel.position, {
                y: holdY,
                ease: 'none',    // no easing for a perfectly flat hold
                duration: ratio.hold
            });

            // Phase 3: continue to finalY
            modelTl.to(overlayModel.position, {
                y: finalY,
                ease: 'linear',
                duration: ratio.last
            });

            gsap.to(overlayModel.rotation, {
                ease: "linear",
                y: overlayModel.rotation.y + 5,
                scrollTrigger: {
                    trigger: '.three-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })


        })

    }



    function toggleOverlayOpacity(model) {
        if (!model) return;

        if (overlayVisible) {
            model.visible = true;

            model.traverse(child => {
                if (child.isMesh) {
                    gsap.to(child.material, {
                        opacity: 0.5,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                }
            });

        } else {
            model.traverse(child => {
                if (child.isMesh) {
                    gsap.to(child.material, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            model.visible = false;
                        }
                    });
                }
            });
        }
    }

    function overlayOff() {
        console.log("overlay should be off")
        if (!overlayModel) return;

        overlayVisible = false;

        overlayModel.traverse(child => {
            if (child.isMesh) {
                gsap.to(child.material, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        overlayModel.visible = false;
                    }
                });
            }
        });

        alignmentModels.traverse(child => {
            if (child.isMesh) {
                gsap.to(child.material, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        alignmentModels.visible = false;
                    }
                });
            }
        });
        // hideUI(".floor3-ui-container .ui-tip")
        overlayButton.classList.remove('activeOverlay');
    }

    const overlayButton = document.querySelector('.overlay-button')

    overlayButton.addEventListener('click', () => {

        overlayVisible = !overlayVisible;

        overlayButton.classList.toggle('activeOverlay');
        overlayButton.classList.remove('pulsing');

        toggleOverlayOpacity(overlayModel)
        toggleOverlayOpacity(alignmentModels)

        toggleTextPanel()
    });

    const textPanel1 = document.querySelector("#ui-panel-3-1")
    const textPanel2 = document.querySelector("#ui-panel-3-2")
    let currentText1 = true

    function toggleTextPanel() {
        currentText1 = !currentText1
        if (currentText1) {

            textPanel1.classList.remove("visually-hidden");
            gsap.fromTo(textPanel1,
                { opacity: 0, scale: 0.8, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                }
            );

            gsap.to(textPanel2, {
                opacity: 0,
                scale: 0.8,
                y: 20,
                duration: 0.3,
                stagger: 0.06,
                ease: "power2.in",
                onComplete: () => {
                    textPanel2.classList.add("visually-hidden");
                }
            });
        } else {
            textPanel2.classList.remove("visually-hidden");
            gsap.fromTo(textPanel2,
                { opacity: 0, scale: 0.8, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                }
            );

            gsap.to(textPanel1, {
                opacity: 0,
                scale: 0.8,
                y: 20,
                duration: 0.3,
                stagger: 0.06,
                ease: "power2.in",
                onComplete: () => {
                    textPanel1.classList.add("visually-hidden");
                }
            });
        }



        // textPanel1.classList.toggle("visually-hidden")
        // textPanel2.classList.toggle("visually-hidden")


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


    function createLights() {
    }

    // --- animations
    function initAnimations() {
    }

    // --- update loop
    function update() {
    }

    // initialize floor
    createGeometry();
    createLights();
    initAnimations();



    function showUI(targetSelector) {
        const target = document.querySelector(targetSelector)
        target.classList.remove("visually-hidden");
        gsap.fromTo(target,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }
        );

        document.querySelector(".overlay-button-container").classList.remove("visually-hidden")
        gsap.fromTo(".overlay-button-container",
            {
                opacity: 0,
                y: 200
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 1,
                ease: "power2.out"
            }
        );
    }

    function hideUI(targetSelector) {
        if (targetSelector !== ".floor3-ui-container .ui-tip") {
            currentText1 = true
        }
        const target = document.querySelector(targetSelector)

        gsap.to(target, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                target.classList.add("visually-hidden");
            }
        });

        gsap.to(".overlay-button-container",
            {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    document.querySelector(".overlay-button-container").classList.add("visually-hidden")
                }
            }
        );
    }


    return { group, update, toggleOverlayOpacity, overlayOff, rotateFloor, showUI, hideUI };
}

