import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import QRCode from "qrcode";

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);




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

        //   
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


    initAnimations();


    // document.querySelector('.uni-button').addEventListener('click', animateAccessoriesIn);


    return { group, update };
}

const qrContainer = document.querySelector(".qr-wrapper")
const qr = document.getElementById("qrcode")
document.querySelector('.qr-wrapper-close').addEventListener('click', smallQR);


qr.addEventListener("click", bigQR)
let qrBig = true
export function smallQR () {
    if(qrBig){
        qrBig = false
        qrContainer.classList.add("qr-small")
        console.log(qrBig)
    }
}

export function bigQR() {
    if (qrBig) {
        return
    }
    qrBig = true
    qrContainer.classList.remove("qr-small")
    console.log(qrBig)
}


document.querySelector('.uni-button').addEventListener('click', smallQR);
function uni() {
   
}