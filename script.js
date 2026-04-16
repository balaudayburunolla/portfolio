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