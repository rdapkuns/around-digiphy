import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { setAccessoryVariant } from "../buck.js";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let floorGroup = new THREE.Group();

    // --- build floor
    function createGeometry() {
        loader.load("floors/floor-2.glb", (gltf) => {
            const model = gltf.scene;
            floorGroup.add(model);
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
            scene.add(floorGroup);
        });
    }

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

    createGeometry();

    return { group, rotateFloor };
}

export function createAccessoryMenu(containerSelector, accessoryGroups, setAccessoryVariant, primaryMaterialState, secondaryMaterialState) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';

    // --- Accessory Variant Buttons ---
    Object.entries(accessoryGroups).forEach(([groupName, group]) => {
        if (group.variants.length > 1) {
            const title = document.createElement("h3");
            title.textContent = groupName;
            container.appendChild(title);

            const btn = document.createElement("button");
            btn.textContent = "None";
            btn.classList.add("accessory-variant-button");
            btn.classList.add("accessory-variant-button-none");

            btn.addEventListener("click", () => {
                setAccessoryVariant(groupName, -1);
            });

            container.appendChild(btn);

            group.variants.forEach((mesh, index) => {
                const btn = document.createElement("button");
                btn.textContent = index + 1;
                btn.classList.add("accessory-variant-button");

                btn.addEventListener("click", () => {
                    setAccessoryVariant(groupName, index);

                    // Apply both primary and secondary materials to the new active variant
                    applyMaterial(mesh, primaryMaterialState, "accessory-primary");
                    applyMaterial(mesh, secondaryMaterialState, "accessory-secondary");
                });

                container.appendChild(btn);
            });
        }
    });

    // --- Primary Color Section ---
    const primaryTitle = document.createElement("h3");
    primaryTitle.textContent = "Primary Color";
    container.appendChild(primaryTitle);

    const primaryColors = [
        { name: "Carbon", value: 0x17181a, roughness: 0.1, metalness: 0.9 },
        { name: "Pearl", value: 0xf7edf4, roughness: 0.3, metalness: 0.2 },
        { name: "Matte grey", value: 0x595959, roughness: 0.8, metalness: 0.3 }
    ];

    primaryColors.forEach(colorObj => {
        const btn = document.createElement("button");
        btn.textContent = colorObj.name;
        btn.classList.add("primary-color-button");

        btn.addEventListener("click", () => {
            Object.assign(primaryMaterialState, colorObj);

            // Apply to all active variants
            Object.values(accessoryGroups).forEach(group => {
                const activeMesh = group.variants[group.defaultVariantIndex];
                if (!activeMesh) return;
                applyMaterial(activeMesh, primaryMaterialState, "accessory-primary");
            });
        });

        container.appendChild(btn);
    });

    // --- Secondary Color Section ---
    const secondaryTitle = document.createElement("h3");
    secondaryTitle.textContent = "Secondary Color";
    container.appendChild(secondaryTitle);

    const secondaryColors = [
        { name: "Charcoal", value: 0x696b6e, roughness: 0.3, metalness: 0.9 },
        { name: "Pink", value: 0xd9bfd1, roughness: 0.7, metalness: 0.3 },
        { name: "Light grey", value: 0xc1c5c7, roughness: 0.1, metalness: 0.7 }
    ];

    secondaryColors.forEach(colorObj => {
        const btn = document.createElement("button");
        btn.textContent = colorObj.name;
        btn.classList.add("secondary-color-button");

        btn.addEventListener("click", () => {
            Object.assign(secondaryMaterialState, colorObj);

            // Apply to all active variants
            Object.values(accessoryGroups).forEach(group => {
                const activeMesh = group.variants[group.defaultVariantIndex];
                if (!activeMesh) return;
                applyMaterial(activeMesh, secondaryMaterialState, "accessory-secondary");
            });
        });

        container.appendChild(btn);
    });

    // Helper function to apply a material state
    function applyMaterial(mesh, state, materialPrefix) {
        mesh.traverse(child => {
            if (!child.isMesh) return;
            const mats = Array.isArray(child.material) ? child.material : [child.material];

            mats.forEach(mat => {
                if (mat.name && mat.name.startsWith(materialPrefix)) {
                    mat.color.set(state.value);
                    mat.roughness = state.roughness;
                    mat.metalness = state.metalness;
                }
            });
        });
    }
}




const $accessoryMenu = document.getElementById("accessory-menu")
export function toggleAccessoryMenu() {
    $accessoryMenu.classList.toggle("visually-hidden")
}