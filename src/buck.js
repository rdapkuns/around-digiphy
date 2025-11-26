import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { supabase } from './supabase';

import { smallQR } from './floors/floor4.js';


import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export function setupBuck(scene) {
    return new Promise((resolve) => {
        const loader = new GLTFLoader()
        const group = new THREE.Group();
        scene.add(group);
        let box;
        let dashboards = []
        const objects = {};

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


            loader.load('models/digiphy-accessories.glb', (gltf) => {
                const model = gltf.scene
                model.position.set(0, 2, 0)
                scene.add(model)

                model.traverse(child => {
                    if (
                        child.name &&
                        child.name.toLowerCase().includes("dashboard")
                    ) {
                        // Store base position but DO NOT modify mesh
                        child.defaultPos = child.position.clone();

                        dashboards.push(child);

                        console.log("Found dashboard:", child.name, child);
                    }
                });

                model.traverse(child => {
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




                resolve({ group, update, accessoryGroups, setAccessoryVariant });
                createAccessoriesTimeline();  // build AFTER loading

                // Find and store references to each chair
                for (let i = 1; i <= 4; i++) {
                    const chair = model.getObjectByName(`chair-${i}`);
                    if (chair) objects[`chair-${i}`] = chair;
                    // chair.defaultPos = chair.position
                    chair.defaultPos = chair.position.clone();

                }

                

                // console.log("dashboards: ", dashboards)


                // --- configuration
                const holdY = 28;                       // Y where camera stops to "hold"
                const moveUpAmount = 63;                // how far up the camera moves overall
                const ratio = { first: 3, hold: 4, last: 4.2 };

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

            loader.load('models/platform.glb', (gltf) => {
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
            if (accessoriesTimeline) accessoriesTimeline.kill();
            accessoriesTimeline = gsap.timeline();

            Object.values(accessoryGroups).forEach(group => {
                group.variants.forEach((mesh, i) => {
                   

                    const offset = accessoryOffsets[mesh.name] || { x: 0, y: 0, z: 0 };

                    mesh.visible = false;
                    // Use stored materials reference
                    if (mesh.materials) {
                        mesh.materials.forEach(mat => mat.opacity = 0);
                    }

                    accessoriesTimeline.set(mesh, { visible: false });

                    // Animate position for all variants
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
                                // Only make active variant visible
                                if (i === group.defaultVariantIndex) {
                                    mesh.visible = true;
                                }
                            }
                        },
                        "<"
                    );

                    // Animate opacity only for active variant
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
                    dashboards.forEach((d) => {
                        moveObject(d, payload.direction, payload.amount)
                    })
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
                case "connected":
                    // console.log("remote connected!!!")
                    smallQR()
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

            const oldMesh = group.variants[group.defaultVariantIndex];
            if (oldMesh) {
                oldMesh.visible = false;
                oldMesh.materials.forEach(mat => mat.opacity = 0);
            }

            const newMesh = group.variants[variantIndex];
            if (newMesh) {
                newMesh.visible = true;
                newMesh.materials.forEach(mat => mat.opacity = 1);
            }

            group.defaultVariantIndex = variantIndex;
        }




        return { group, update };
    })
}