
import './style.css'
import gsap from 'gsap'
import { supabase } from './supabase';



const channel = supabase.channel('room1', {
    config: { broadcast: { ack: true } }
});

// Listen for messages
channel.on('broadcast', { event: 'msg' }, ({ payload }) => {
    console.log('received:', payload);
});

// Subscribe
channel.subscribe((status) => {
    console.log("channel status:", status);
    setupControls()
    sendMessage("connected", "x", 0)
});

// Send message
function sendMessage(object, direction, amount) {

    channel.send({
        type: 'broadcast',
        event: 'command',
        payload: {
            object: object,
            direction: direction,
            amount: amount
        }
    });
}

// Click sends message
// const button = document.querySelector(".mobile-button")
// button.addEventListener("click", () => {
//     sendMessage("dashboard", "y", "2");
// });

const sliderStep = 0.1;

// chairs setup
function setupControls() {
    for (let i = 1; i <= 4; i++) {

        const chair = `chair-${i}`;
        const valueDisplay = document.querySelector(`.chair-${i} span`)
        if (!chair) continue;

        let seatVal = 0;

        const chairSlider = document.getElementById(`chair-slider-${i}`);

        chairSlider.addEventListener('input', (e) => {
            seatVal = parseFloat(e.target.value);
            valueDisplay.textContent = Math.trunc(seatVal * 100);
            sendMessage(chair, "x", seatVal * 0.7);
        });

        const chairMinus = document.getElementById(`minus-${i}`);
        chairMinus.addEventListener("click", () => {
            let newStepValue = seatVal - sliderStep;
            chairSlider.value = newStepValue;
            chairSlider.dispatchEvent(new Event("input"));
        });

        const chairPlus = document.getElementById(`plus-${i}`);
        chairPlus.addEventListener("click", () => {
            let newStepValue = seatVal + sliderStep;
            chairSlider.value = newStepValue;
            chairSlider.dispatchEvent(new Event("input"));
        });

    }
}
let activeSide = 0
let activeForth = 1
let activeSeat = 1

const allChairs = document.querySelectorAll(".chair-slider")


const seatButtons = document.querySelectorAll(".seat-btn")
seatButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        if (btn.dataset.side !== undefined) {
            activeSide = Number(btn.dataset.side);
            updateSeatIndex();
            seatButtons.forEach(btn => {
                btn.classList.remove("side-active")
            })
            btn.classList.add("side-active")
        }

        if (btn.dataset.forth !== undefined) {
            activeForth = Number(btn.dataset.forth);
            updateSeatIndex();
        }

    });
});

function updateSeatIndex() {
    activeSeat = activeSide + activeForth
    console.log("activeseat: ", activeSeat)


    const allSeats = document.querySelectorAll(".controls-chairs")
    allSeats.forEach((chair) => {
        chair.classList.add("visually-hidden")
    })

    const activeChair = document.querySelector(`.chair-${activeSeat}`)
    activeChair.classList.remove("visually-hidden")

    const backSeat = document.querySelector(".seat-back img")
    const frontSeat = document.querySelector(".seat-front img")

    if (activeForth === 1) {
        frontSeat.src = "./img/seat-front-on.png";
        backSeat.src = "./img/seat-back-off.png";
    } else {
        frontSeat.src = "./img/seat-front-off.png";
        backSeat.src = "./img/seat-back-on.png";
    }

    allChairs.forEach(chair => {
        if (chair.id === `chair-slider-${activeSeat}`) {
            chair.dispatchEvent(new Event("input"));
        }
    })
    // seatButtons.forEach(btn => {
    //     btn.classList.remove("side-active")
    // })
}



const dashboardSlider = document.getElementById('dashboard-slider')
let value = 0

dashboardSlider.addEventListener('input', (e) => {
    const valueDisplay = document.querySelector(`.dashboard-group span`)
    value = parseFloat(e.target.value) // 0 to 1
    valueDisplay.textContent = Math.trunc(value * 100)
    sendMessage("dashboard", "y", value * 1)
})

const dashboardMinus = document.getElementById(`minus-5`);
dashboardMinus.addEventListener("click", () => {
    let newStepValue = value - sliderStep;
    dashboardSlider.value = newStepValue;
    dashboardSlider.dispatchEvent(new Event("input"));
});

const dashboardPlus = document.getElementById(`plus-5`);
dashboardPlus.addEventListener("click", () => {
    let newStepValue = value + sliderStep;
    dashboardSlider.value = newStepValue;
    dashboardSlider.dispatchEvent(new Event("input"));
});


setupControls()

const navSeats = document.querySelector(".nav-seats")
const seatControls = document.querySelectorAll(".seat-group")

const navDashboard = document.querySelector(".nav-dashboard")
const dashboardControls = document.querySelectorAll(".dashboard-group")

const navLocked = document.querySelectorAll(".nav-locked")
const featureUnavailable = document.querySelectorAll(".feature-unavailable")

const seatSides = document.querySelector(".seat-sides-container")
const seatForth = document.querySelector(".seat-forth-container")



navSeats.addEventListener("click", () => {

    allChairs.forEach(chair => {
        if (chair.id === `chair-slider-${activeSeat}`) {

            chair.dispatchEvent(new Event("input"));
        }
    })

    dashboardControls.forEach(c => {
        gsap.to(c, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => c.classList.add("visually-hidden")
        });
    });

    featureUnavailable.forEach(c => {
        gsap.to(c, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => c.classList.add("visually-hidden")
        });
    });

    seatControls.forEach(c => {
        gsap.to(c, {
            opacity: 1,
            duration: 0.25,
            onComplete: () => {
                if (c.classList.contains(`chair-${activeSeat}`)) {
                    c.classList.remove("visually-hidden");
                }
            }
        });
    });

    [seatSides, seatForth].forEach(el => {
        gsap.to(el, {
            opacity: 1,
            duration: 0.25,
            onComplete: () => el.classList.remove("visually-hidden")
        });
    });

    navSeats.classList.add("button-active");
    navDashboard.classList.remove("button-active");
});


navDashboard.addEventListener("click", () => {

    seatControls.forEach(c => {
        gsap.to(c, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => c.classList.add("visually-hidden")
        });
    });

    [seatSides, seatForth].forEach(el => {
        gsap.to(el, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => el.classList.add("visually-hidden")
        });
    });

    dashboardControls.forEach(c => {
        gsap.to(c, {
            opacity: 1,
            duration: 0.25,
            onComplete: () => c.classList.remove("visually-hidden")
        });
    });

    featureUnavailable.forEach(c => {
        gsap.to(c, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => c.classList.add("visually-hidden")
        });
    });

    dashboardSlider.dispatchEvent(new Event("input"));

    navSeats.classList.remove("button-active");
    navDashboard.classList.add("button-active");
});





navLocked.forEach(nav => {

    nav.addEventListener("click", () => {

        seatControls.forEach(c => {
            gsap.to(c, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => c.classList.add("visually-hidden")
            });
        });

        [seatSides, seatForth].forEach(el => {
            gsap.to(el, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => el.classList.add("visually-hidden")
            });
        });

        dashboardControls.forEach(c => {
            gsap.to(c, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => c.classList.add("visually-hidden")
            });
        });

        featureUnavailable.forEach(c => {
            // gsap.to(c, {
            //     opacity: 0,
            //     duration: 0.2,
            //     onComplete: () => c.classList.add("visually-hidden")
            // });

            gsap.to(c, {
                opacity: 1,
                duration: 0.25,
                onComplete: () => c.classList.remove("visually-hidden")
            });
        });

        dashboardSlider.dispatchEvent(new Event("input"));
        
        navSeats.classList.remove("button-active");
        navDashboard.classList.remove("button-active");
    });
})



const startButton = document.querySelector(".mobile-start")
const warning = document.getElementById("rotate-warning");

function isPortrait() {
    // 1. Modern API
    if (screen.orientation && screen.orientation.type) {
        return screen.orientation.type.startsWith("portrait");
    }

    // 2. iOS Safari fallback
    if (window.orientation !== undefined) {
        return Math.abs(window.orientation) !== 90;
    }

    // 3. Last-resort geometry fallback
    return window.innerHeight > window.innerWidth;
}

function updateOrientation() {
    if (isPortrait()) {
        warning.style.display = "flex";
    } else {
        warning.style.display = "none";
    }
}

function showControls() {
    const $controlsContainer = document.querySelector(".controls-container")
    $controlsContainer.classList.remove("visually-hidden")
    startButton.classList.add("visually-hidden")
}

function hideControls() {
    const $controlsContainer = document.querySelector(".controls-container")
    $controlsContainer.classList.add("visually-hidden")
    startButton.classList.remove("visually-hidden")
}

window.addEventListener("orientationchange", updateOrientation);
window.addEventListener("resize", updateOrientation);

updateOrientation();

function onFullscreenChange() {
    const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

    if (isFullscreen) {
        showControls()
    } else {
        hideControls()
    }
}



startButton.addEventListener("click", async () => {
    const docEl = document.documentElement;

    try {
        if (docEl.requestFullscreen) {
            await docEl.requestFullscreen();
            showControls()
        } else if (docEl.webkitRequestFullscreen) {
            await docEl.webkitRequestFullscreen();  // iOS Safari
            showControls()
        } else if (docEl.msRequestFullscreen) {
            await docEl.msRequestFullscreen();      // Legacy
            showControls()
        } else {
            alert("Fullscreen API not supported.");
        }

        sendMessage("start", "y", 1)
    } catch (err) {
        alert("Fullscreen request failed:", err);
    }
});

document.addEventListener("fullscreenchange", onFullscreenChange);
document.addEventListener("webkitfullscreenchange", onFullscreenChange);
document.addEventListener("msfullscreenchange", onFullscreenChange);

