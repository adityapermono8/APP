document.addEventListener("DOMContentLoaded", () => {
    const menuElement = document.querySelector('.menu');
    const linksElement = document.querySelector('.links');
    const searchIcon = document.querySelector('.links img[alt="search"]');
    const searchInput = document.querySelector('.search');
    
    // Toggle navigation menu
    menuElement.addEventListener('click', () => {
        linksElement.classList.toggle('show');
        if (linksElement.classList.contains('show')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    });

    // Toggle search input visibility
    searchIcon.addEventListener('click', (event) => {
        event.preventDefault();
        searchInput.classList.toggle('visible');
        if (searchInput.classList.contains('visible')) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }
    });

    // Hide navigation menu and search input on outside click
    document.addEventListener('click', (event) => {
        if (!menuElement.contains(event.target) && !linksElement.contains(event.target) && linksElement.classList.contains('show')) {
            linksElement.classList.remove('show');
            document.body.style.overflowY = 'auto';
        }
        if (!searchIcon.contains(event.target) && !searchInput.contains(event.target) && searchInput.classList.contains('visible')) {
            searchInput.classList.remove('visible');
        }
    });

    // Prevent event bubbling for menu and search elements
    menuElement.addEventListener('click', (event) => event.stopPropagation());
    searchIcon.addEventListener('click', (event) => event.stopPropagation());
    searchInput.addEventListener('click', (event) => event.stopPropagation());
});
