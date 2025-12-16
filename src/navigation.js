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

    function navigateToFloor(floorName) {
        const targetCameraY = floorHeights[floorName];

        if (targetCameraY === undefined) return;

        const cameraProgress = (targetCameraY - startCameraY) / (endCameraY - startCameraY);
        const targetScroll = maxScroll * cameraProgress;

        const startScroll = document.body.scrollTop;
        const distance = targetScroll - startScroll;

        gsap.to({ val: 0 }, {
            val: 1,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function () {
                const progress = this.targets()[0].val;
                document.body.scrollTop = startScroll + (distance * progress);
                ScrollTrigger.update();
            },
            onComplete: () => {
                ScrollTrigger.update();
            }
        });
    }

    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            const floor = button.dataset.floor;
            navigateToFloor(floor);
        });
    });


    const btn = document.getElementById("intro-start").addEventListener('click', () => {
        navigateToFloor("floor1");
    })

    return (navigateToFloor)

}