document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleModeButton = document.getElementById('toggleMode');
    const title = document.querySelector('h1');

    toggleModeButton.addEventListener('click', function () {
        toggleMode();
    });

    title.addEventListener('click', function () {
        createMenu();
    });

    setupDrawing();
});

function toggleMode() {
    const body = document.body;
    const isDarkMode = body.style.getPropertyValue('--is-dark-mode');
    
    if (isDarkMode === '1') {
        body.style.setProperty('--is-dark-mode', '0');
        body.style.setProperty('--text-color-light', '0, 0, 0');
        body.style.setProperty('--background-color-light', '255, 255, 255');
    } else {
        body.style.setProperty('--is-dark-mode', '1');
        body.style.setProperty('--text-color-light', '255, 255, 255');
        body.style.setProperty('--background-color-light', '0, 0, 0');
    }
}

function createMenu() {
    const menuItems = ['Behance Portfolio', 'Resume', 'Portfolio']; // Change 'Education' to 'Behance Portfolio'
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.textContent = item;
        menuItem.classList.add('menu-item');
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuItem.addEventListener('click', function () {
            if (item === 'Behance Portfolio') {
                // Open the Behance portfolio link
                window.open('https://www.behance.net/gallery/141824115/Sergey-Bezhinets-portfolio', '_blank');
            } else if (item === 'Portfolio') {
                // Open the Google Drive link for Portfolio
                window.open('https://drive.google.com/drive/folders/1mywt-UgUOtgeCr351Xurskk1j--njpnl?usp=sharing', '_blank');
            } else if (item === 'Resume') {
                toggleContentVisibility();
            }
            animateMenuItem(menuItem);
        });
        menuContainer.appendChild(menuItem);
    });

    const existingMenuContainer = document.querySelector('.menu-container');
    if (existingMenuContainer) {
        existingMenuContainer.remove();
    }

    document.body.appendChild(menuContainer);
}

function animateMenuItem(item) {
    item.style.animation = 'bounce 0.5s ease';
    setTimeout(() => {
        item.style.animation = '';
    }, 500);
}

function toggleContentVisibility() {
    const content = document.getElementById('content');
    content.classList.toggle('visible');
}
