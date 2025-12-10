import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

let uiVisible = false



export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);

    function createGeometry() {

        const texture = new THREE.TextureLoader().load("baked/floor-6-a.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        loader.load("floors/floor-6-a.glb", (gltf) => {
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

            scene.add(model);
        });


        loader.load("floors/floor-6-c.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
                console.log(child.name)

                if (child.name && child.name.toLowerCase().startsWith("light")) {

                    const mats = Array.isArray(child.material)
                        ? child.material
                        : [child.material];

                    mats.forEach(mat => {
                        if (!mat) return;

                        mat.transparent = true;
                        mat.opacity = 0.1;
                        mat.roughness = 1;

                        // optional: tweak color (warm light tint)
                        mat.color.setHex(0xbb00ff);
                    });
                }
            });

            scene.add(model);
        });

    }
    createGeometry()
}

export function showForm() {
    const $form = document.querySelector(".floor6-ui-container");

    $form.classList.remove("visually-hidden");

    gsap.fromTo($form,
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



export function hideForm() {
    const $form = document.querySelector(".floor6-ui-container");

    if (uiVisible) {



        gsap.to($form, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                $form.classList.add("visually-hidden");
            }
        });

        uiVisible = false;
    }
}