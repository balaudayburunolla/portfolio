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
const audio = document.getElementById('bgm');


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
const btn = document.getElementById("dropdownBtn");
const content = document.getElementById("dropdownContent");

// Toggle the menu on click
btn.addEventListener("click", (event) => {
  content.classList.toggle("show");
  // Prevent click from bubbling up to the window
  event.stopPropagation();
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", () => {
  if (content.classList.contains('show')) {
    content.classList.remove('show');
  }
});
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.gta-header') && !event.target.closest('#navLinks')) {
        const dropdown = document.getElementById("navLinks");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
} 
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.menu-trigger');
    
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active-icon');

    // Lock the main page scroll so ONLY the menu scrolls
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.menu-trigger');
    
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active-icon');

    // Lock the main page scroll so ONLY the menu scrolls
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
    
    // If menu is open, stop background scroll
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const trigger = document.querySelector('.menu-trigger');
    const body = document.body;

    // Toggle the classes
    nav.classList.toggle('active');
    trigger.classList.toggle('active-icon');
    body.classList.toggle('menu-active');

    // Debugging: If you see this in F12 console, the button works!
    
    console.log("Menu status: " + nav.classList.contains('active'));
}
