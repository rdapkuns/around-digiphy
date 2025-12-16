import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import QRCode from "qrcode";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const taskCompleteSound = new Audio("./audio/task-complete.mp3");
const allTasksCompleteSound = new Audio("./audio/task-complete-all.mp3");

let interactionStarted = false
let completeTasks = 0

const taskTexts = [
    "Hey, some people came in to test out your designed car! Lets make some adjustments to the model. It feels a bit cramped here in the driver seat, could you move it back a bit?",
    "The driver seat is way better now! But I think there's not enough leg-room for the backseat now. Lets change that!",
    "Alright, that's way better. But I would like to have the dashboard a bit higher. Can you raise it a little? Not too much though.",
    "Well done! People love your car! If you want to continue adjusting DigiPHY, feel free to do so."
]

export const tasks = [
    { brief: "Move the driver seat back", status: "open", condition: `objects["chair-1"].position.x < 3` },
    { brief: "Move the left-side backseat back", status: "locked", condition: `objects["chair-3"].position.x < 3` },
    { brief: "Raise the dashboard a little bit", status: "locked", condition: "objects['dashboard'][0].position.y > 0.3 && objects['dashboard'][0].position.y < 0.8" }
];

export const atFloor4 = {
    flag: false
};

export function createFloor(scene) {
    const loader = new GLTFLoader()
    const group = new THREE.Group();
    scene.add(group);

    const mobileUrl = `${window.location.origin}/around-digiphy/mobile.html`;
    QRCode.toCanvas(document.getElementById("qrcode"), mobileUrl, function (error) {
        if (error) console.error(error)
    });

    function createGeometry() {
        const texture = new THREE.TextureLoader().load("baked/floor-4-a.jpg")
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture })

        loader.load("floors/floor-4-a.glb", (gltf) => {
            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            model.traverse(child => {
                if (child.isMesh) {
                    child.material = material
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            const glass = model.getObjectByName("glass009");
            if (glass) {
                glass.material = glass.material.clone();
                glass.material.transparent = true;
                glass.material.opacity = 0.6;
                glass.material.color.setHex(0xf2f9ff);
            }

            scene.add(model);
        });


        loader.load("floors/floor-4-c.glb", (gltf) => {

            const model = gltf.scene;

            model.position.set(0, 0, 0);
            model.rotateY(Math.PI);

            scene.add(model);

        });
    }

    createGeometry();

    const $qrWrapper = document.querySelector(".qr-wrapper")

    function showQR() {

        $qrWrapper.classList.remove("visually-hidden");
        gsap.fromTo($qrWrapper,
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    $qrWrapper.classList.remove("visually-hidden");
                }
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


    return { group, showQR, hideQR };
}

const qrContainer = document.querySelector(".qr-wrapper")
const qr = document.getElementById("qrcode")
document.querySelector('#qr-wrapper-close').addEventListener('click', smallQR);
const qrContents = document.querySelectorAll(".qr-wrapper div")
const qrSVG = document.querySelector(".qr-wrapper > svg")

let qrBig = true
export function smallQR() {
    if (qrBig) {
        qrBig = false
        let tl = gsap.timeline();
        tl.to(qrContents, {
            opacity: 0,
            duration: 0.2,
        },
            0)
            .to(qrContainer, {
                top: "unset",
                bottom: "-0.6rem",
                left: "9.7rem",
                width: "3rem",
                height: "3rem",
                padding: "0rem",
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
    qrContainer.classList.remove("qr-small")

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
            bottom: "0%",
            left: "50%",
            width: "45rem",
            height: "20rem",
            color: "black",
            padding: "4rem",
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

export function setupTasks() {
    tasks.forEach((task, i) => {
        const taskBrief = document.querySelector(`#ui-task-${i}`)
        taskBrief.textContent = task.brief
    })

    interactionStarted = true
}

let allCompleteSoundPlayed = false

export function checkTasks(objects) {

    if (!interactionStarted) return
    let allComplete = true;
    tasks.forEach((task, i) => {
        try {
            if (task.status === "locked") {
                allComplete = false;
                return;
            }
            const fn = new Function("objects", "return " + task.condition);
            const conditionMet = fn(objects);

            const currentTask = document.querySelector(`#ui-task-${i}`)
            if (task.status === "open") {
                currentTask.classList.remove("visually-hidden")
                currentTask.classList.add("ui-task-open")


                if (conditionMet) {
                    task.status = "complete";
                    currentTask.classList.remove("ui-task-open")
                    currentTask.classList.add("ui-task-complete")
                    completeTasks += 1

                    gsap.to(`#ui-task-${i}`, {
                        scale: 1.06,
                        duration: 0.2,
                        ease: "power2.out",
                        backgroundColor: "#74b6efff",
                    })

                    gsap.to(`#ui-task-${i}`, {
                        scale: 1,
                        duration: 0.5,
                        delay: 0.2,
                        ease: "back.out(1.7)",
                        backgroundColor: "#4f4f4f54",
                    })

                    taskCompleteSound.currentTime = 0;
                    taskCompleteSound.play();

                    if (tasks[i + 1] && tasks[i + 1].status === "locked") {
                        tasks[i + 1].status = "open";

                        gsap.from(`#ui-task-${i + 1}`, {
                            opacity: 0,
                            x: 100,
                            duration: 0.5,
                            ease: "power3.out",
                        })
                    }
                } else {
                    allComplete = false;
                }



            } else if (task.status === "complete") {

            }

            document.querySelector(".task-counter").textContent = completeTasks
            document.querySelector(".task-header > .ui-swaptext").textContent = taskTexts[completeTasks]

        } catch (e) {
            console.error("Task condition error:", task.condition, e);
            allComplete = false;
        }
    });

    if (allComplete) {
        const allTasks = document.querySelectorAll(".ui-task")

        if (allCompleteSoundPlayed) return

        allCompleteSoundPlayed = true
        setTimeout(() => {
            gsap.to(allTasks, {
                scale: 1.06,
                duration: 0.2,
                ease: "power2.out",
                stagger: 0.2,
                backgroundColor: "#74b6efff",
                onStart: () => {

                }
            })

            gsap.to(allTasks, {
                scale: 1,
                duration: 0.5,
                delay: 0.2,
                ease: "back.out(1.7)",
                stagger: 0.2,
                backgroundColor: "#4f4f4f54",
            })

            allTasksCompleteSound.currentTime = 0;
            allTasksCompleteSound.play();

        }, 1000);

    }

}


export function showTasks() {
    if (!interactionStarted || atFloor4.flag === false) return

    const el = document.querySelector(".floor4-ui-container");

    el.classList.remove('visually-hidden');

    gsap.fromTo(el,
        {
            opacity: 0,
            scale: 0.8,
            y: 20,
        },
        {
            opacity: 1,
            duration: 0.5,
            scale: 1,
            y: 0,
            ease: "power2.out",
            onComplete: () => {
                el.classList.remove('visually-hidden');

            }
        }
    );
}


export function hideTasks() {
    const el = document.querySelector(".floor4-ui-container");

    gsap.to(el,

        {
            opacity: 0,
            duration: 0.5,
            scale: 0.8,
            y: 20,
            ease: "power2.out",
            onComplete() {
                el.classList.add('visually-hidden');
            }
        }
    );
}
