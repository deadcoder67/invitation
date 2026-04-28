// DOM Elements
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const nameInput = document.getElementById('nameInput');
const enterBtn = document.getElementById('enterBtn');
const animatedName = document.getElementById('animatedName');
const messageBox = document.getElementById('messageBox');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const bgMusic = document.getElementById('bgMusic');

let userName = '';

// ===== EVENT LISTENERS =====

// Initialize page states
window.addEventListener('load', () => {
    page2.classList.add('hidden');
    page2.classList.remove('active');
    nameInput.focus();
});

// Enter button click and name input enter key
enterBtn.addEventListener('click', handleEnter);
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleEnter();
    }
});

// Message box click to open popup
messageBox.addEventListener('click', openPopup);

// Close popup
closeBtn.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// ===== FUNCTIONS =====

function handleEnter() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        nameInput.style.borderColor = '#ff6b6b';
        nameInput.focus();
        return;
    }
    
    userName = name;
    transitionToPage2();
}

function transitionToPage2() {
    // Transition pages
    page1.classList.remove('active');
    page1.classList.add('hidden');
    page2.classList.add('active');
    page2.classList.remove('hidden');
    
    // Start music
    bgMusic.play().catch(() => {
        console.log('Audio autoplay might be blocked. User interaction required.');
    });
    
    // Start animation after a short delay
    setTimeout(() => {
        animateNameAndText();
    }, 300);
}

function animateNameAndText() {
    const nameCharacters = userName.split('');
    let index = 0;
    
    function typeNextCharacter() {
        if (index < nameCharacters.length) {
            animatedName.textContent += nameCharacters[index];
            index++;
            setTimeout(typeNextCharacter, 1000); // 1 second per letter
        }
        // Animation complete - message box will stay visible for user to click
    }
    
    typeNextCharacter();
}

function openPopup() {
    popup.classList.add('active');
    bgMusic.pause();
}

function closePopup() {
    popup.classList.remove('active');
    bgMusic.play().catch(() => {
        console.log('Audio playback resumed.');
    });
}

// ===== ADDITIONAL FEATURES =====

// Prevent default form behavior
nameInput.addEventListener('input', (e) => {
    if (e.target.value !== '') {
        nameInput.style.borderColor = '#fff';
    }
});

// Allow ESC key to close popup
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        closePopup();
    }
});

// Pause music when page is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        bgMusic.pause();
    } else if (page2.classList.contains('active') && !popup.classList.contains('active')) {
        bgMusic.play().catch(() => {
            console.log('Audio playback failed.');
        });
    }
});

// Log to console for debugging
console.log('Birthday Invitation Page Loaded Successfully!');
