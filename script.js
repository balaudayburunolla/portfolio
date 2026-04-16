document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Screen Flash (The "Join Session" effect)
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: white; z-index: 9999; opacity: 0; pointer-events: none;
    `;
    document.body.appendChild(flash);

    // Flash sequence
    setTimeout(() => {
        flash.style.transition = 'none';
        flash.style.opacity = '0.8';
        setTimeout(() => {
            flash.style.transition = 'opacity 1s ease-out';
            flash.style.opacity = '0';
        }, 100);
    }, 300);

    // 2. Animate Stat Bars on load
    const fills = document.querySelectorAll('.fill');
    fills.forEach(fill => {
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = targetWidth;
        }, 1500);
    });

    // 3. Optional: Add a "Sound" trigger (Requires a user click first due to browser rules)
    document.body.addEventListener('click', () => {
        console.log("Mission Passed Sound Playback would trigger here.");
    }, { once: true });
});
function toggleMenu() {
    const overlay = document.getElementById('navLinks');
    const trigger = document.querySelector('.menu-trigger');
    
    // Toggle the "Fall Down" overlay class
    overlay.classList.toggle('active');
    
    // Toggle the animation class for the button
    trigger.classList.toggle('active-icon');
}

// Ensure menu closes and icon resets when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
        document.querySelector('.menu-trigger').classList.remove('active-icon');
    });
});
// Function to toggle the vertical navigation menu
function toggleMenu() {
    const navOverlay = document.getElementById('navLinks');
    const menuTrigger = document.querySelector('.menu-trigger');
    const body = document.body;

    // 1. Toggle the 'active' class on the overlay (Slides it down/in)
    navOverlay.classList.toggle('active');

    // 2. Toggle the 'active-icon' class on the burger (Animates to an 'X')
    menuTrigger.classList.toggle('active-icon');

    // 3. Lock/Unlock scrolling to prevent background movement when menu is open
    if (navOverlay.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
}

// 4. Auto-close menu when a link is clicked (Essential for single-page scrolling)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navOverlay = document.getElementById('navLinks');
        const menuTrigger = document.querySelector('.menu-trigger');
        
        navOverlay.classList.remove('active');
        menuTrigger.classList.remove('active-icon');
        document.body.style.overflow = 'auto';
    });
});
// Your current toggleMenu function will still work:
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
    document.querySelector('.menu-trigger').classList.toggle('active-icon');
}
