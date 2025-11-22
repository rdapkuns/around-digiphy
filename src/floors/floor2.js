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
        loader.load("/floors/studio-saturday.glb", (gltf) => {
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

        loader.load('/models/digiphy-overlay.glb', (gltf) => {
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

            gsap.to(overlayModel.position, {
                ease: "linear",
                y: overlayModel.position.y + 63,
                scrollTrigger: {
                    trigger: '.three-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })

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
