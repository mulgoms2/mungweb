const toogle = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const link = document.querySelector('.navbar__links');

toogle.addEventListener('click', () => {
    menu.classList.toggle('active');
    link.classList.toggle('active');
});

const morebtn = document.querySelector('.infoAndupnext .info .metadata .morebtn');
const title = document.querySelector('.infoAndupnext .info .metadata .title');

morebtn.addEventListener('click', () => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});