// script.js

// Utility function to handle CSS classes
function toggleClass(element, className) {
    if (element && className) {
        element.classList.toggle(className);
        return element.classList.contains(className);
    }
    return false;
}

function addClass(element, className) {
    if (element && className) {
        element.classList.add(className);
        return true;
    }
    return false;
}

function removeClass(element, className) {
    if (element && className) {
        element.classList.remove(className);
        return true;
    }
    return false;
}

// Box animation functions
function setupBoxAnimation() {
    const box = document.getElementById('animatedBox');
    const button = document.getElementById('animateBoxBtn');
    
    if (!box || !button) return;
    
    const animateBox = () => {
        // Remove the class if it exists to reset the animation
        removeClass(box, 'animate');
        
        // Use requestAnimationFrame to ensure the class is removed before re-adding
        requestAnimationFrame(() => {
            // Add the class to trigger the animation
            addClass(box, 'animate');
        });
    };
    
    button.addEventListener('click', animateBox);
    
    // Return the animation function for potential external use
    return animateBox;
}

// Card flip functions
function setupCardFlip() {
    const card = document.getElementById('flipCard');
    const button = document.getElementById('flipCardBtn');
    
    if (!card || !button) return;
    
    const flipCard = () => {
        toggleClass(card, 'flipped');
    };
    
    button.addEventListener('click', flipCard);
    card.addEventListener('click', flipCard);
    
    return flipCard;
}

// Loading animation functions
function setupLoadingAnimation() {
    const loader = document.getElementById('loader');
    const startButton = document.getElementById('startLoaderBtn');
    const stopButton = document.getElementById('stopLoaderBtn');
    
    if (!loader || !startButton || !stopButton) return;
    
    const startLoader = () => {
        addClass(loader, 'animate');
    };
    
    const stopLoader = () => {
        removeClass(loader, 'animate');
    };
    
    startButton.addEventListener('click', startLoader);
    stopButton.addEventListener('click', stopLoader);
    
    return { startLoader, stopLoader };
}

// Modal functions
function setupModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const openButton = document.getElementById('openModalBtn');
    const closeButton = document.getElementById('closeModalBtn');
    
    if (!modalOverlay || !openButton || !closeButton) return;
    
    const openModal = () => {
        addClass(modalOverlay, 'visible');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };
    
    const closeModal = () => {
        removeClass(modalOverlay, 'visible');
        document.body.style.overflow = ''; // Re-enable scrolling
    };
    
    openButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    return { openModal, closeModal };
}

// Initialize all animations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupBoxAnimation();
    setupCardFlip();
    setupLoadingAnimation();
    setupModal();
});