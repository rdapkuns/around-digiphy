import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { supabase } from '../supabase';
import QRCode from "qrcode";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let box;
    let dashboard = null
    const objects = {};

    let accessoriesTimeline;
    let accessories = []; // will hold { mesh, originalPos }
    const accessoryOffsets = {
        "accessory-console-2": { x: -10, y: 0, z: 0 },
        "accessory-dashboard-2": { x: 0, y: 5, z: 0 },
        "accessory-frame-1": { x: 0, y: 0, z: -10 },
        "accessory-frame-2": { x: 0, y: 0, z: 10 },
        "accessory-tablet-1": { x: 0, y: 8, z: 0 },

    };


    const mobileUrl = `${window.location.origin}/mobile.html`;
    QRCode.toCanvas(document.getElementById("qrcode"), mobileUrl, function (error) {
        if (error) console.error(error)
        console.log("QR code ready:", mobileUrl)
    });



    // --- build floor
    function createGeometry() {
        // loader.load("/floors/floor-2.glb", (gltf) => {
        //     const model = gltf.scene;

        //     // Common transforms
        //     model.position.set(0, 20, 0);
        //     model.rotateY(Math.PI);

        //     // Enable shadows only once
        //     model.traverse(child => {
        //         if (child.isMesh) {
        //             child.castShadow = true;
        //             child.receiveShadow = true;
        //         }
        //     });

        //     // Add to scene
        //     scene.add(model);
        // });

        loader.load('/models/digiphy-accessories.glb', (gltf) => {
            const model = gltf.scene
            model.position.set(0, 2, 0)
            scene.add(model)

            //finds all the accessories
            model.traverse(child => {
                if (!child.isMesh) return;
                if (!child.name.startsWith("accessory-")) return;

                // CLONE material so opacity changes do NOT affect other meshes
                if (Array.isArray(child.material)) {
                    child.material = child.material.map(mat => {
                        const clone = mat.clone();
                        clone.transparent = true;
                        clone.opacity = 0;
                        return clone;
                    });
                } else {
                    const originalMat = child.material;
                    const clone = originalMat.clone();
                    clone.transparent = true;
                    clone.opacity = 0;
                    child.material = clone;
                }

                child.visible = false;

                accessories.push({
                    name: child.name,
                    mesh: child,
                    originalPos: child.position.clone()
                });
            });

            createAccessoriesTimeline();  // build AFTER loading



            // Find and store references to each chair
            for (let i = 1; i <= 4; i++) {
                const chair = model.getObjectByName(`chair-${i}`);
                if (chair) objects[`chair-${i}`] = chair;
                // chair.defaultPos = chair.position
                chair.defaultPos = chair.position.clone();

            }

            dashboard = model.getObjectByName('dashboard');
            if (dashboard) {
                dashboard.defaultPos = dashboard.position.clone();
                objects.dashboard = dashboard;
            }


            // gsap.to(model.position, {
            //     ease: "linear",
            //     y: model.position.y + 63,
            //     scrollTrigger: {
            //         trigger: '.three-section',
            //         start: "top top",
            //         end: "bottom bottom",
            //         scrub: true,
            //     }
            // })


            // --- configuration
            const holdY = 28;                       // Y where camera stops to "hold"
            const moveUpAmount = 63;                // how far up the camera moves overall
            const ratio = { first: 3, hold: 4, last: 4.2 };
            // first:hold:last = fraction of scroll allocated to phase1/phase2/phase3

            const startY = 2;
            const finalY = startY + moveUpAmount;

            const modelTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.three-section',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                }
            });

            // Phase 1: move from startY to holdY
            modelTl.to(model.position, {
                y: holdY,
                ease: 'linear',
                duration: ratio.first
            });


            modelTl.addLabel("phase2Start")
                .to(model.position, {
                    y: holdY,
                    duration: ratio.hold,
                    ease: "none"
                })
                .addLabel("phase2End");

            // Phase 3: continue to finalY
            modelTl.to(model.position, {
                y: finalY,
                ease: 'linear',
                duration: ratio.last
            });


            modelTl.add(accessoriesTimeline, "phase2Start+=0.3");
            accessoriesTimeline.duration(ratio.hold * 0.6);


            gsap.to(model.rotation, {
                ease: "linear",
                y: model.rotation.y + 5,
                scrollTrigger: {
                    trigger: '.three-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })


        })

        loader.load('/models/platform.glb', (gltf) => {
            const model = gltf.scene
            model.position.set(0, 0, 0)
            scene.add(model)


            // --- configuration
            const holdY = 26;                       // 26 because camera starts at 6 and this at 0
            const moveUpAmount = 63;                // how far up the camera moves overall
            const ratio = { first: 3, hold: 4, last: 4.2 };
            // first:hold:last = fraction of scroll allocated to phase1/phase2/phase3

            const startY = 0;
            const finalY = startY + moveUpAmount;

            const modelTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.three-section',
                    start: 'top top',
                    end: 'bottom bottom',  
                    scrub: true,
                }
            });

            modelTl.to(model.position, {
                y: holdY,
                ease: 'linear',
                duration: ratio.first
            });

            modelTl.to(model.position, {
                y: holdY,
                ease: 'none',  
                duration: ratio.hold
            });

            modelTl.to(model.position, {
                y: finalY,
                ease: 'linear',
                duration: ratio.last
            });

        })
    }

    function createAccessoriesTimeline() {
        accessoriesTimeline = gsap.timeline();

        accessories.forEach(({ mesh, originalPos, name }) => {
            const offset = accessoryOffsets[name] || { x: 0, y: 0, z: 0 };

            // START HIDDEN
            mesh.visible = false;

            // Build the animation
            accessoriesTimeline

                // Make visible right before animation begins
                .set(mesh, { visible: true })

                // Position animation
                .fromTo(mesh.position,
                    {
                        x: originalPos.x + offset.x,
                        y: originalPos.y + offset.y,
                        z: originalPos.z + offset.z
                    },
                    {
                        x: originalPos.x,
                        y: originalPos.y,
                        z: originalPos.z,
                        duration: 1,
                        ease: "power3.out"
                    },
                    "<"
                )

                // Opacity animation
                .fromTo(mesh.material,
                    { opacity: 0 },
                    { opacity: 1, duration: 1, ease: "power2.out" },
                    "<"
                )

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

    function moveObject(obj, axis, direction) {

        console.log("i work")
        const step = 0.2 * direction;

        // if (obj === dashboard) {
        gsap.to(obj.position, {
            [axis]: obj.defaultPos[axis] + direction * 1,
            duration: 0.3,
            ease: 'power2.out',
            onUpdate: () => {
                console.log(obj.defaultPos)
            }
        });

    }





    const channel = supabase.channel('room1', {
        config: {
            broadcast: {
                self: true,
                ack: true
            }
        }
    });



    channel.on('broadcast', { event: 'command' }, ({ payload }) => {
        console.log("Received command:", payload);

        switch (payload.object) {
            case "dashboard":
                moveObject(dashboard, payload.direction, payload.amount)
                break;
            case "chair-1":
                moveObject(objects[payload.object], payload.direction, payload.amount)
                break;
            case "chair-2":
                moveObject(objects[payload.object], payload.direction, payload.amount)
                break;
            case "chair-3":
                moveObject(objects[payload.object], payload.direction, payload.amount)
                break;
            case "chair-4":
                moveObject(objects[payload.object], payload.direction, payload.amount)
                break;
            case "playSound":
                playSound(payload.data);
                break;
            default:
                console.warn("Unknown command type:", payload.type);
        }
    });

    // Subscribe
    channel.subscribe((status) => {
        console.log("channel status:", status);
    });

    // initialize floor
    createGeometry();
    createLights();
    initAnimations();


    initAnimations();


    // document.querySelector('.uni-button').addEventListener('click', animateAccessoriesIn);


    return { group, update };
}
