document.addEventListener('DOMContentLoaded', () => {
    /* 1. INITIAL SESSION FLASH */
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: white; z-index: 9999; opacity: 0; pointer-events: none;
    `;
    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.transition = 'none';
        flash.style.opacity = '0.7';
        setTimeout(() => {
            flash.style.transition = 'opacity 1s ease-out';
            flash.style.opacity = '0';
        }, 100);
    }, 300);

    /* 2. STAT BAR ANIMATIONS */
    const fills = document.querySelectorAll('.fill');
    fills.forEach(fill => {
        // Reads the width from your HTML (e.g., style="width: 80%")
        const targetWidth = fill.parentElement.dataset.width || fill.style.width;
        fill.style.width = '0%'; 
        setTimeout(() => {
            fill.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
            fill.style.width = targetWidth;
        }, 1200);
    });

    /* 3. MENU TOGGLE LOGIC */
    const overlay = document.getElementById('navLinks');
    const trigger = document.querySelector('.menu-trigger');

    window.toggleMenu = () => {
        overlay.classList.toggle('active');
        trigger.classList.toggle('active-icon');
    };

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
            trigger.classList.remove('active-icon');
        });
    });

    /* 4. MISSION SOUND MOCKUP */
    document.body.addEventListener('click', () => {
        console.log("Mission sound sequence initialized.");
    }, { once: true });
});