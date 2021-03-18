const toogle = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const link = document.querySelector('.navbar__links');

toogle.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});