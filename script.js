// let text = document.querySelector(".text p");
// text.innerHTML = text.innerHTML.split("").map((char, i) =>
//     `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
// ).join("");

// ScrollReveal({
//     distance: "100px",
//     duration: 4000,
//     delay: 400,
// });

// Navbar and Sidebar functionality
// Navbar and Sidebar functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebarBtn = document.getElementById('closeSidebar');

function openSidebar() {
    if (sidebar && sidebarOverlay) {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    if (sidebar && sidebarOverlay) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', openSidebar);
}

// Initialize close button
if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebar);
}

// Initialize overlay click
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// Rotating text functionality
function initializeRotatingText() {
    let text = document.querySelector(".text p");
    if (text) {
        text.innerHTML = text.innerHTML.split("").map((char, i) =>
            `<b style="transform:rotate(${i * 8.2}deg)">${char}</b>`
        ).join("");
    }
}

// Close sidebar when clicking on links in sidebar
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Close sidebar when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSidebar();
    }
});

// Make functions globally available
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeRotatingText();
    
    // Add click event to all hamburger menus
    const allHamburgers = document.querySelectorAll('.hamburger');
    allHamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', openSidebar);
    });
});

// Scroll reveal animation (if ScrollReveal library is included)
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: "100px",
        duration: 4000,
        delay: 400,
    });
}