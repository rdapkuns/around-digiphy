import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'

let uiVisible = false

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