import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const customTableChildren = [];
let customTableVisible = true;

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);
    let floorGroup = new THREE.Group();

    function createGeometry() {
        loader.load("floors/floor-2.glb", (gltf) => {
            const model = gltf.scene;
            floorGroup.add(model);
            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            scene.add(floorGroup);

            const customTable = model.getObjectByName("custom_table");

            if (customTable) {
                customTableChildren.push(customTable);
                customTable.traverse(obj => {
                    customTableChildren.push(obj);
                });

            }
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

    const title = document.createElement("h2");
    title.textContent = "Accessories";
    container.appendChild(title);

    Object.entries(accessoryGroups).forEach(([groupName, group]) => {
        if (group.variants.length > 1) {
            const title = document.createElement("h3");
            title.textContent = groupName;
            container.appendChild(title);

            const btn = document.createElement("button");
            btn.classList.add("accessory-variant-button");
            btn.classList.add("accessory-variant-button-none");
            btn.classList.add(`${groupName}-button`);


            btn.addEventListener("click", () => {
                setAccessoryVariant(groupName, -1);

                document.querySelectorAll(`.${groupName}-button`)
                    .forEach(b => b.classList.remove("primary-active"));
                btn.classList.add("primary-active");
            });

            container.appendChild(btn);

            group.variants.forEach((mesh, index) => {
                const btn = document.createElement("button");
                btn.classList.add("accessory-variant-button");
                btn.classList.add(`${groupName}-button`);


                const thumbnail = document.createElement("img");
                thumbnail.src = `${import.meta.env.BASE_URL}img/accessory-${groupName}-${index}.png`
                btn.appendChild(thumbnail);


                btn.addEventListener("click", () => {
                    setAccessoryVariant(groupName, index);

                    document.querySelectorAll(`.${groupName}-button`)
                        .forEach(b => b.classList.remove("primary-active"));
                    btn.classList.add("primary-active");

                    applyMaterial(mesh, primaryMaterialState, "accessory-primary");
                    applyMaterial(mesh, secondaryMaterialState, "accessory-secondary");
                });

                container.appendChild(btn);
            });
        }
    });

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("primary-header");
    container.appendChild(sectionHeader);

    const primaryTitle = document.createElement("h3");
    primaryTitle.textContent = "Primary Color:";
    sectionHeader.appendChild(primaryTitle);

    const primarySelected = document.createElement("span");
    primarySelected.classList.add("primary-selected");
    sectionHeader.appendChild(primarySelected);

    const primaryColors = [
        { name: "Carbon", value: 0x17181a, roughness: 0.1, metalness: 0.9 },
        { name: "Pearl", value: 0xf7edf4, roughness: 0.3, metalness: 0.2 },
        { name: "Matte grey", value: 0x595959, roughness: 0.8, metalness: 0.3 },
        { name: "Sage", value: 0xA9B689, roughness: 0.7, metalness: 0.9 },
        { name: "Desert", value: 0xBFA48F, roughness: 0.9, metalness: 0.2 },
        { name: "Ultramarine", value: 0x9AADF6, roughness: 0.01, metalness: 0.99 }
    ];

    primaryColors.forEach((colorObj, index) => {
        const btn = document.createElement("button");
        // btn.textContent = colorObj.name;
        btn.classList.add("color-button");
        btn.classList.add("primary-color-button");
        btn.classList.add(`primary-${index}`);

        btn.addEventListener("click", () => {
            document.querySelectorAll(".primary-color-button")
                .forEach(b => b.classList.remove("primary-active"));
            btn.classList.add("primary-active");

            document.querySelector(".primary-selected").textContent = colorObj.name

            Object.assign(primaryMaterialState, colorObj);

            Object.values(accessoryGroups).forEach(group => {
                const activeMesh = group.variants[group.defaultVariantIndex];
                if (!activeMesh) return;
                applyMaterial(activeMesh, primaryMaterialState, "accessory-primary");
            });
        });

        container.appendChild(btn);
    });

    const sectionHeaderSecondary = document.createElement("div");
    sectionHeaderSecondary.classList.add("primary-header");
    container.appendChild(sectionHeaderSecondary);

    const secondaryTitle = document.createElement("h3");
    secondaryTitle.textContent = "Secondary Color:";
    sectionHeaderSecondary.appendChild(secondaryTitle);

    const secondarySelected = document.createElement("span");
    secondarySelected.classList.add("secondary-selected");
    sectionHeaderSecondary.appendChild(secondarySelected);

    const secondaryColors = [
        { name: "Charcoal", value: 0x696b6e, roughness: 0.3, metalness: 0.9 },
        { name: "Pink", value: 0xd9bfd1, roughness: 0.7, metalness: 0.3 },
        { name: "Light grey", value: 0xc1c5c7, roughness: 0.1, metalness: 0.7 },
        { name: "Teal", value: 0xB0D4D2, roughness: 0.8, metalness: 0.9 },
        { name: "Coral", value: 0xFF6E5A, roughness: 0.7, metalness: 0.3 },
        { name: "Alpine", value: 0x576856, roughness: 0.1, metalness: 0.7 }
    ];

    secondaryColors.forEach((colorObj, index) => {
        const btn = document.createElement("button");
        // btn.textContent = colorObj.name;
        btn.classList.add("color-button");
        btn.classList.add("secondary-color-button");
        btn.classList.add(`secondary-${index}`);


        btn.addEventListener("click", () => {
            document.querySelectorAll(".secondary-color-button")
                .forEach(b => b.classList.remove("primary-active"));
            btn.classList.add("primary-active");

            document.querySelector(".secondary-selected").textContent = colorObj.name

            Object.assign(secondaryMaterialState, colorObj);

            Object.values(accessoryGroups).forEach(group => {
                const activeMesh = group.variants[group.defaultVariantIndex];
                if (!activeMesh) return;
                applyMaterial(activeMesh, secondaryMaterialState, "accessory-secondary");
            });
        });

        container.appendChild(btn);
    });

    function applyMaterial(mesh, state, materialPrefix) {
        mesh.traverse(child => {
            if (!child.isMesh) return;
            const mats = Array.isArray(child.material) ? child.material : [child.material];

            mats.forEach(mat => {
                if (mat.name && mat.name.startsWith(materialPrefix)) {

                    const targetColor = new THREE.Color(state.value);

                    gsap.to(mat.color, {
                        r: targetColor.r,
                        g: targetColor.g,
                        b: targetColor.b,
                        duration: 0.5,
                        ease: "power2.out",
                    });

                    gsap.to(mat, {
                        roughness: state.roughness,
                        metalness: state.metalness,
                        duration: 0.5,
                        ease: "power2.out"
                    });

                }
            });
        });
    }
}


let uiHidden = true

const $accessoryUI = document.querySelectorAll(".ui-accessories")

const $accessoryMenu = document.getElementById("accessory-menu")
const floor2Tip = document.querySelector(".floor2-ui-container > .ui-tip")
export function toggleAccessoryMenu() {
    if (uiHidden) {
        uiHidden = false

        $accessoryUI.forEach((ui) => {
            ui.classList.remove("visually-hidden");
        })

        gsap.fromTo($accessoryUI,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.06,
                ease: "power2.out"
            }
        );

        console.log("ui hidden: ", uiHidden)
    } else {
        uiHidden = true

        gsap.to($accessoryUI, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                $accessoryUI.forEach((ui) => {
                    ui.classList.add("visually-hidden");
                })
            }
        });
        console.log("ui hidden: ", uiHidden)
    }
    // $accessoryMenu.classList.toggle("visually-hidden")
}


const $floor2Text = document.getElementById("ui-panel-2-1")
let textHidden = true
export function toggleTextPanel() {
    if (textHidden) {
        textHidden = false
        $floor2Text.classList.remove("visually-hidden");

        gsap.fromTo($floor2Text,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }
        );
    } else {
        textHidden = true

        gsap.to($floor2Text, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                $floor2Text.classList.add("visually-hidden");
            }
        });
    }
    // $floor2Text.classList.toggle("visually-hidden")
}

export function toggleFloor2Desk() {
    customTableVisible = !customTableVisible;
    const targetOpacity = customTableVisible ? 1 : 0;

    customTableChildren.forEach(obj => {
        if (!obj.isMesh) return;

        const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];

        obj.visible = true

        materials.forEach(mat => {
            // Ensure the material supports transparency
            mat.transparent = true;

            gsap.to(mat, {
                opacity: targetOpacity,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    if (targetOpacity === 0) {
                        obj.visible = false
                    }
                }
            });
        });
    });
}


