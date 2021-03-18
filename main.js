const toggle = document.querySelector('.navbar__toogle')
const menu = document.querySelector('.navbar__menu')
const link = document.querySelector('.navbar__links')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});