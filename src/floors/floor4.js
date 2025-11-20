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


    const mobileUrl = `${window.location.origin}/mobile.html`;
    QRCode.toCanvas(document.getElementById("qrcode"), mobileUrl, function (error) {
        if (error) console.error(error)
        console.log("QR code ready:", mobileUrl)
    });
  


    // --- build floor
    function createGeometry() {
        loader.load("/floors/floor-2.glb", (gltf) => {
            const model = gltf.scene;

            // Common transforms
            model.position.set(0, 20, 0);
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

        loader.load('/models/digiphy-hq.glb', (gltf) => {
            const model = gltf.scene
            model.position.set(0, 2, 0)
            scene.add(model)

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


            gsap.to(model.position, {
                ease: "linear",
                y: model.position.y + 55,
                scrollTrigger: {
                    trigger: '.three-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }
            })

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

            // Find and store references to each chair
            // for (let i = 1; i <= 4; i++) {
            //     const chair = model.getObjectByName(`chair-${i}`);
            //     if (chair) objects[`chair-${i}`] = chair;
            //     chair.defaultPos = chair.position.clone();

            // }

            gsap.to(model.position, {
                ease: "linear",
                y: model.position.y + 55,
                scrollTrigger: {
                    trigger: '.three-section',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    // onUpdate: (self) => {
                    //     currentCameraHeight = camera.position.y;
                    //     console.log(currentCameraHeight)
                    // }
                }
            })
        })
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

    return { group, update };
}
