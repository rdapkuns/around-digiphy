import gsap from 'gsap'

const introContainer = document.querySelector(".intro-container")
const videoA = document.getElementById("videoA");
const videoB = document.getElementById("videoB");
const btn = document.getElementById("intro-start");

const ambientSound = document.getElementById("ambientSound");

videoA.src = "./video/intro-loop.mp4";
videoB.src = "./video/intro-enter1.mp4";

videoA.play();
gsap.set(videoA, { opacity: 1 });

videoB.load();

function showButton() {
    btn.classList.remove("visually-hidden")
    gsap.from(btn, {
        y: 300,
        duration: 1,
        ease: "power4.out",
        delay: 4,
    })
}

showButton()

btn.addEventListener("click", () => {

    gsap.to(btn, {
        scaleY: 0,
        duration: 0.3,
        ease: "power4.out",
    })

    if (!videoB.paused) return;

    videoB.currentTime = 0;
    videoB.play();

    const fadeTl = gsap.timeline()
    fadeTl.to(videoA, {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
    });

    fadeTl.to(videoB, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    });

    videoB.onended = () => {

        const tl = gsap.timeline({
            onComplete: () => {
                introContainer.classList.add("visually-hidden");

                videoB.pause();
                videoB.currentTime = 0;
            }
        });

        tl.to(videoB, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        tl.to(introContainer, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    };

    ambientSound.currentTime = 0;
    ambientSound.play();
    ambientSound.volume = 0.3;
});

export function initIntro() {
    console.log("init intro")
}