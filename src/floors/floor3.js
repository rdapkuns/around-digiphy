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
    let box;

    // --- build floor
    function createGeometry() {
        // loader.load("/floors/floor-2.glb", (gltf) => {
        //     const model = gltf.scene;

        //     // Common transforms
        //     model.position.set(0, 10, 0);
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
    }

    createGeometry();

    return { group };
}

export function createAccessoryMenu(containerSelector, accessoryGroups, setAccessoryVariant) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = '';
    Object.entries(accessoryGroups).forEach(([groupName, group]) => {
        if (group.variants.length > 1) {

            const title = document.createElement("h3");
            title.textContent = groupName;
            container.appendChild(title);


            group.variants.forEach((mesh, index) => {
                const btn = document.createElement("button");
                btn.textContent = index + 1;
                btn.classList.add("accessory-variant-button")

                btn.addEventListener("click", () => {
                    console.log(groupName, index)
                    setAccessoryVariant(groupName, index);
                });

                container.appendChild(btn);
            });
        }
    });

}
const $accessoryMenu = document.getElementById("accessory-menu")
export function toggleAccessoryMenu() {
    $accessoryMenu.classList.toggle("visually-hidden")
}