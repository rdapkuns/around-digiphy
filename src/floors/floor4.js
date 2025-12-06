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




    const mobileUrl = `${window.location.origin}/around-digiphy/mobile.html`;
    QRCode.toCanvas(document.getElementById("qrcode"), mobileUrl, function (error) {
        if (error) console.error(error)
    });



    // --- build floor
    function createGeometry() {
        loader.load("floors/floor-4.glb", (gltf) => {
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

    const $qrWrapper = document.querySelector(".qr-wrapper")
    
    function showQR() {
        $qrWrapper.classList.remove("visually-hidden");
        gsap.fromTo($qrWrapper,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }
        );
    }

    function hideQR() {
        gsap.to($qrWrapper, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.3,
            stagger: 0.06,
            ease: "power2.in",
            onComplete: () => {
                $qrWrapper.classList.add("visually-hidden");
            }
        });
    }


    return { group, update, showQR, hideQR };
}

const qrContainer = document.querySelector(".qr-wrapper")
const qr = document.getElementById("qrcode")
document.querySelector('.qr-wrapper-close').addEventListener('click', smallQR);
const qrContents = document.querySelectorAll(".qr-wrapper div")
const qrSVG = document.querySelector(".qr-wrapper > svg")

let qrBig = true
export function smallQR() {
    if (qrBig) {
        qrBig = false

        console.log(qrBig)
        let tl = gsap.timeline();
        tl.to(qrContents, {
            opacity: 0,
            duration: 0.2,
        },
            0)
            .to(qrContainer, {
                top: "5rem",
                left: "3rem",
                width: "3rem",
                height: "3rem",
                padding: "0.2rem",
                duration: 1,
                ease: "power3.out",
            },
                '<80%')
            .to(qrContainer, {
                duration: 0.1,
                onComplete: () => {
                    qrContainer.classList.add("qr-small")
                    qrContents.forEach((el) => {
                        el.classList.add("visually-hidden")
                    })
                    qrSVG.classList.remove("visually-hidden")

                }
            },
                '<')
            .to(qrSVG, {
                opacity: 1,
                duration: 0.4,
                onComplete: () => {
                    qrContainer.addEventListener("click", bigQR)


                }
            })

    }
}

export function bigQR() {
    if (qrBig) {
        return
    }
    qrBig = true
    console.log("dassddasndakondasopndaspd")
    qrContainer.classList.remove("qr-small")
    console.log(qrBig)



    let tl = gsap.timeline();
    tl.to(qrSVG, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            qrSVG.classList.add("visually-hidden")

        }
    },
        0)
        .to(qrContainer, {
            top: "50%",
            left: "50%",
            width: "40rem",
            height: "20rem",
            color: "black",
            padding: "2rem",
            duration: 1,
            ease: "power3.out",
            onComplete: () => {
                qrContents.forEach((el) => {
                    el.classList.remove("visually-hidden")
                })

            }
        },
            "-=0")
        .to(qrContents, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                qrContainer.removeEventListener("click", bigQR)
            }
        })



}
