import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { supabase } from './supabase';

import { smallQR, tasks, checkTasks, showTasks, setupTasks } from './floors/floor4.js';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

let stopFlashingFn = null;

export function setupBuck(scene) {
    return new Promise((resolve) => {
        const loader = new GLTFLoader()
        const group = new THREE.Group();
        scene.add(group);
        let box;
        let dashboards = []
        const objects = {};

        let modelDigiphy



        let accessoriesTimeline;
        let accessories = [];
        const accessoryGroups = {
            dashboard: { variants: [], defaultVariantIndex: 0 },
            console: { variants: [], defaultVariantIndex: 0 },
            frameLeft: { variants: [], defaultVariantIndex: 0 },
            frameRight: { variants: [], defaultVariantIndex: 0 },
            tablet: { variants: [], defaultVariantIndex: 0 },
        };
        const accessoryOffsets = {
            "accessory-console-1": { x: -10, y: 0, z: 0 },
            "accessory-console-2": { x: -10, y: 0, z: 0 },
            "accessory-dashboard-1": { x: 0, y: 5, z: 0 },
            "accessory-dashboard-2": { x: 0, y: 5, z: 0 },
            "accessory-frameLeft-1": { x: 0, y: 0, z: -10 },
            "accessory-frameRight-1": { x: 0, y: 0, z: 10 },
            "accessory-tablet-1": { x: 0, y: 8, z: 0 },
            "accessory-tablet-2": { x: 0, y: 8, z: 0 },

        };




        // --- build floor
        function createGeometry() {


            loader.load('models/accessories-w-t.glb', (gltf) => {
                modelDigiphy = gltf.scene
                modelDigiphy.position.set(0, 2, 0)
                scene.add(modelDigiphy)

                modelDigiphy.traverse(child => {
                    if (
                        child.name &&
                        child.name.toLowerCase().includes("dashboard")
                    ) {
                        child.defaultPos = child.position.clone();

                        child.traverse(part => {
                            if (part.isMesh) {
                                if (Array.isArray(part.material)) {
                                    part.material = part.material.map(mat => mat.clone());
                                } else if (part.material) {
                                    part.material = part.material.clone();
                                }
                            }
                        });

                        dashboards.push(child);


                    } else if (child.name && child.name.toLowerCase().includes("shadow")) {

                        const initialMaterial = child.material;

                        child.material = new THREE.MeshBasicMaterial({
                            map: initialMaterial.map || null,
                            transparent: initialMaterial.transparent,
                            opacity: initialMaterial.opacity,
                            alphaMap: initialMaterial.alphaMap || null,
                            color: initialMaterial.color,
                        });
                    }
                    child.castShadow = true;
                    child.receiveShadow = true;
                });

                // objects.push(dashboards);
                objects[`dashboard`] = dashboards;



                modelDigiphy.traverse(child => {
                    const isAccessoryGroup = child.type === 'Group' && child.name.startsWith("accessory-");
                    const isAccessoryMesh = child.isMesh && child.name.startsWith("accessory-");

                    if (!isAccessoryGroup && !isAccessoryMesh) return;

                    const match = child.name.match(/^accessory-([a-zA-Z]+)-\d+/);
                    if (!match) return;

                    const groupName = match[1];
                    if (!accessoryGroups[groupName]) {
                        accessoryGroups[groupName] = { variants: [], defaultVariantIndex: 0 };
                    }

                    const allMaterials = [];

                    if (isAccessoryGroup) {
                        child.traverse(sub => {
                            if (sub.isMesh) {
                                const mat = sub.material.clone();
                                mat.transparent = true;
                                mat.opacity = 0;
                                sub.material = mat;
                                allMaterials.push(mat);
                            }
                        });
                    } else {
                        const mat = child.material.clone();
                        mat.transparent = true;
                        mat.opacity = 0;
                        child.material = mat;
                        allMaterials.push(mat);
                    }

                    child.materials = allMaterials;
                    child.visible = false;

                    child.defaultPos = child.position.clone();
                    accessoryGroups[groupName].variants.push(child);
                });




                resolve({ group, update, accessoryGroups, setAccessoryVariant, animateSelected, objects });
                createAccessoriesTimeline();



                for (let i = 1; i <= 4; i++) {
                    const chair = modelDigiphy.getObjectByName(`chair-${i}`);
                    if (!chair) continue;

                    objects[`chair-${i}`] = chair;

                    chair.defaultPos = chair.position.clone();

                    chair.traverse(child => {
                        if (child.isMesh) {
                            if (Array.isArray(child.material)) {
                                child.material = child.material.map(mat => mat.clone());
                            } else if (child.material) {
                                child.material = child.material.clone();
                            }
                        }
                    });
                }

                // --- configuration
                const holdY = 15;                       // Y where camera stops to "hold"
                const moveUpAmount = 63;                // how far up the camera moves overall
                const ratio = { first: 1, hold: 6, last: 4.2 };

                const startY = 2;
                const finalY = startY + moveUpAmount;

                const modelTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.three-section',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: true,
                    },
                });

                // Phase 1: move from startY to holdY
                modelTl.to(modelDigiphy.position, {
                    y: holdY,
                    ease: 'linear',
                    duration: ratio.first
                });


                modelTl.addLabel("phase2Start")
                    .to(modelDigiphy.position, {
                        y: holdY,
                        duration: ratio.hold,
                        ease: "none"
                    })
                    .addLabel("phase2End");

                // Phase 3: continue to finalY
                modelTl.to(modelDigiphy.position, {
                    y: finalY,
                    ease: 'linear',
                    duration: ratio.last
                });


                modelTl.add(accessoriesTimeline, "phase2Start+=0.5");
                accessoriesTimeline.duration(ratio.hold * 0.5);


                gsap.to(modelDigiphy.rotation, {
                    ease: "linear",
                    y: modelDigiphy.rotation.y + 5,
                    scrollTrigger: {
                        trigger: '.three-section',
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    }
                })


            })


            loader.load('models/platform.glb', (gltf) => {
                const model = gltf.scene
                model.rotation.set(0, 2.5, 0)
                model.position.set(0, 0, 0)

                scene.add(model)

                model.traverse(child => {
                    child.castShadow = true;
                    child.receiveShadow = true;
                });


                // --- configuration
                const holdY = 13;                       // 26 because camera starts at 6 and this at 0
                const moveUpAmount = 63;                // how far up the camera moves overall
                const ratio = { first: 1, hold: 6, last: 4.2 };
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
            if (accessoriesTimeline) accessoriesTimeline.kill();
            accessoriesTimeline = gsap.timeline();

            Object.values(accessoryGroups).forEach(group => {
                group.variants.forEach((mesh, i) => {


                    const offset = accessoryOffsets[mesh.name] || { x: 0, y: 0, z: 0 };

                    mesh.visible = false;
                    if (mesh.materials) {
                        mesh.materials.forEach(mat => mat.opacity = 0);
                    }

                    accessoriesTimeline.set(mesh, { visible: false });

                    accessoriesTimeline.fromTo(
                        mesh.position,
                        {
                            x: mesh.position.x + offset.x,
                            y: mesh.position.y + offset.y,
                            z: mesh.position.z + offset.z
                        },
                        {
                            x: mesh.position.x,
                            y: mesh.position.y,
                            z: mesh.position.z,
                            duration: 1,
                            ease: "power3.out",
                            onStart: () => {
                                if (i === group.defaultVariantIndex) {
                                    mesh.visible = true;
                                }
                            }
                        },
                        "<"
                    );

                    if (i === group.defaultVariantIndex) {
                        if (mesh.materials) {
                            mesh.materials.forEach((mat, matIndex) => {
                                accessoriesTimeline.fromTo(
                                    mat,
                                    { opacity: 0 },
                                    { opacity: 1, duration: 1, ease: "power2.out" },
                                    "<"
                                );
                            });
                        }
                    }
                });
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

        let selectedObj = null

        function moveObject(objOrArray, axis, direction) {
            const objects = Array.isArray(objOrArray) ? objOrArray : [objOrArray];

            objects.forEach(obj => {
                gsap.to(obj.position, {
                    [axis]: obj.defaultPos[axis] + direction * 1,
                    duration: 0.3,
                    ease: "power2.out",
                });

                // console.log("name: ", obj.name, "position: ", obj.position, "direction: ", direction,)

                if (obj !== selectedObj) {
                    animateSelected(objOrArray);
                }
            });
        }

        function animateSelected(objOrArray) {
            if (selectedObj) {
                const objs = Array.isArray(selectedObj) ? selectedObj : [selectedObj];

                objs.forEach(o => {
                    o.traverse(child => {
                        if (!child.isMesh) return;

                        const mats = Array.isArray(child.material) ? child.material : [child.material];
                        mats.forEach(mat => {
                            const original = mat.userData.originalColor;
                            if (!original) return;

                            gsap.killTweensOf(mat.color);

                            gsap.to(mat.color, {
                                r: original.r,
                                g: original.g,
                                b: original.b,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        });
                    });
                });
            }

            if (!objOrArray) {
                selectedObj = null;
                return;
            }

            const objects = Array.isArray(objOrArray) ? objOrArray : [objOrArray];

            objects.forEach(obj => {
                obj.traverse(child => {
                    if (!child.isMesh) return;

                    const materials = Array.isArray(child.material) ? child.material : [child.material];

                    materials.forEach(mat => {
                        if (!mat) return;

                        if (!mat.userData.originalColor) {
                            mat.userData.originalColor = mat.color.clone();
                        }
                        const original = mat.userData.originalColor;

                        gsap.killTweensOf(mat.color);

                        const tl = gsap.timeline({ repeat: -1 });
                        tl.to(mat.color, {
                            r: 1, g: 1, b: 1,
                            duration: 1
                        })
                            .to(mat.color, {
                                r: original.r,
                                g: original.g,
                                b: original.b,
                                duration: 1,
                                ease: "power2.out"
                            });
                    });
                });
            });

            selectedObj = objOrArray;
        }


        const channel = supabase.channel('room1', {
            config: {
                broadcast: {
                    self: true,
                    ack: true
                }
            }
        });



        let lastSignalTime = Date.now();
        let taskCheckTimer = null;

        // Call this whenever a signal is received
        function updateLastSignalTime() {
            lastSignalTime = Date.now();

            // Reset timer
            if (taskCheckTimer) clearTimeout(taskCheckTimer);

            // Set a new timer to run checkTasks after 1 second of no signals
            taskCheckTimer = setTimeout(() => {
                console.log("No signal for 1 second → running task check...");
                checkTasks(objects);
            }, 1000);
        }

        channel.on('broadcast', { event: 'command' }, ({ payload }) => {
            console.log("Received command:", payload);

            // Update idle-timer because we received a signal
            updateLastSignalTime();

            switch (payload.object) {

                case "dashboard":
                    moveObject(objects[payload.object], payload.direction, payload.amount);
                    break;

                case "chair-1":
                case "chair-2":
                case "chair-3":
                case "chair-4":
                    moveObject(objects[payload.object], payload.direction, payload.amount);
                    break;

                case "connected":
                    smallQR();
                    showTasks();
                    break;

                case "start":
                    setupTasks();
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

        function setAccessoryVariant(groupName, variantIndex) {
            const group = accessoryGroups[groupName];
            if (!group) return;

            const newMesh = group.variants[variantIndex];
            const oldMesh = group.variants[group.defaultVariantIndex];

            if (oldMesh === newMesh) return

            if (oldMesh) {
                gsap.to(oldMesh.scale, {
                    x: 0.5,
                    y: 0.5,
                    z: 0.5,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {

                        oldMesh.visible = false;
                        oldMesh.materials.forEach(mat => mat.opacity = 0);
                    }

                });
            }

            if (newMesh) {
                gsap.fromTo(
                    newMesh.scale,
                    {
                        x: 0.5,
                        y: 0.5,
                        z: 0.5,
                    },
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.35,
                        ease: "power2.out",
                        onStart: () => {
                            newMesh.visible = true;
                            newMesh.materials.forEach(mat => mat.opacity = 1);

                        }
                    });

            }

            group.defaultVariantIndex = variantIndex;
        }

        document.querySelector('.uni-button').addEventListener('click', () => {
            checkTasks(objects)
        });



        document.querySelector('.qr-wrapper-close').addEventListener('click', () => {
            setupTasks()
            checkTasks(objects)

            setTimeout(() => {
                
                showTasks()
            }, 1000);
        });

        stopFlashingFn = animateSelected;
        return { group, update, animateSelected };
    })
}

export function stopFlashingAccessory() {
    if (stopFlashingFn) {
        stopFlashingFn(null);
    }
}



