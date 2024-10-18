const sideMenu = document.getElementById('side-menu');
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    sideMenu.style.width = '250px';
});

closeMenu.addEventListener('click', () => {
    sideMenu.style.width = '0';
});
