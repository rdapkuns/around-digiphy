import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const floorHeights = {
    floor1: 6,
    floor2: 15,
    floor3: 52.5,
    floor4: 59,
    floor5: 65,
    floor6: 71
};

export function initNavigation(camera) {
    const section = document.querySelector('.three-section');
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = sectionHeight - viewportHeight;

    const startCameraY = 6;
    const endCameraY = 71;

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

        const cameraProgress = (targetCameraY - startCameraY) / (endCameraY - startCameraY);
        const targetScroll = maxScroll * cameraProgress;

        console.log(`Navigating to ${floorName}:`, {
            targetCameraY,
            targetScroll: Math.round(targetScroll),
            currentCameraY: camera.position.y.toFixed(1)
        });

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

    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const floor = button.dataset.floor;
            navigateToFloor(floor);
        });
    });

    console.log('Navigation buttons ready');
}