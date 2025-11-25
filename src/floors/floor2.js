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
    let overlayVisible = false;


    // --- build floor
    function createGeometry() {
        loader.load("floors/floor-2.glb", (gltf) => {
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

        loader.load('models/digiphy-overlay.glb', (gltf) => {
            overlayModel = gltf.scene;
            overlayModel.position.set(0, 2, 0);

            // ensure all materials can use opacity
            overlayModel.traverse((child) => {
                if (child.isMesh && child.material) {
                    child.material.transparent = true;
                    child.material.opacity = 0; // start at 0 opacity
                    overlayModel.visible = false;
                }
            });

            scene.add(overlayModel);

            // gsap.to(overlayModel.position, {
            //     ease: "linear",
            //     y: overlayModel.position.y + 63,
            //     scrollTrigger: {
            //         trigger: '.three-section',
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: true,
            //     }
            // })

            // --- configuration
            const holdY = 28;                       // 26 because camera starts at 6 and this at 0
            const moveUpAmount = 63;                // how far up the camera moves overall
            const ratio = { first: 3, hold: 4, last: 4.2 };
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
    

    function toggleOverlayOpacity() {
        if (!overlayModel) return;

        overlayVisible = !overlayVisible;

        if (overlayVisible) {
            overlayModel.visible = true;

            overlayModel.traverse(child => {
                if (child.isMesh) {
                    gsap.to(child.material, {
                        opacity: 0.5,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                }
            });

        } else {
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
        }
        console.log("overlayVisible: ",overlayVisible)
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


    return { group, update, toggleOverlayOpacity, overlayOff };
}
