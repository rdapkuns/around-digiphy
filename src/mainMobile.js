
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





function setupControls() {
    // Handle chairs
    for (let i = 1; i <= 4; i++) {

        const chair = `chair-${i}`;
        if (!chair) continue;


        const chairSlider = document.getElementById(`chair-slider-${i}`);
        chairSlider.addEventListener('input', (e) => {
            let value = parseFloat(e.target.value) // 0 to 1
            sendMessage(chair, "x", value * .7)
        })
    }
    // alert("setting up controls")
}





const dashboardSlider = document.getElementById('dashboard-slider')

// Listen for slider changes
dashboardSlider.addEventListener('input', (e) => {
    let value = parseFloat(e.target.value) // 0 to 1
    sendMessage("dashboard", "y", value * 1)
})

setupControls()
