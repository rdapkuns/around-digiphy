// navigation.js
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Define camera Y positions for each floor
const floorHeights = {
    floor1: 4,
    floor2: 18.5,
    floor3: 33,
    floor4: 47.5,
    floor5: 62
};

export function initNavigation(camera) {
    const section = document.querySelector('.three-section');
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = sectionHeight - viewportHeight;

    // Camera animation range (from your main.js: y: 4 to y: 74)
    const startCameraY = 4;
    const endCameraY = 74;

    console.log('Floor navigation initialized:', {
        floors: Object.keys(floorHeights).length,
        scrollRange: `0 - ${maxScroll}px`,
        cameraRange: `${startCameraY} - ${endCameraY}`
    });

    function navigateToFloor(floorName) {
        const targetCameraY = floorHeights[floorName];

        if (targetCameraY === undefined) {
            console.error(`Floor ${floorName} not found`);
            return;
        }

        // Calculate scroll position needed for this camera height
        const cameraProgress = (targetCameraY - startCameraY) / (endCameraY - startCameraY);
        const targetScroll = maxScroll * cameraProgress;

        console.log(`Navigating to ${floorName}:`, {
            targetCameraY,
            targetScroll: Math.round(targetScroll),
            currentCameraY: camera.position.y.toFixed(1)
        });

        // Animate scroll and update camera
        const startScroll = document.body.scrollTop;
        const distance = targetScroll - startScroll;

        gsap.to({ val: 0 }, {
            val: 1,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function () {
                const progress = this.targets()[0].val;
                document.body.scrollTop = startScroll + (distance * progress);
                ScrollTrigger.update(); // Force camera to update
            },
            onComplete: () => {
                ScrollTrigger.update();
                console.log(`Arrived at ${floorName} - Camera Y: ${camera.position.y.toFixed(1)}`);
            }
        });
    }

    // Attach click handlers to navigation buttons
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const floor = button.dataset.floor;
            navigateToFloor(floor);
        });
    });

    console.log('Navigation buttons ready');
}