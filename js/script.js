const hideMenuButton = document.querySelector('.app-header__btn')
const showMenuButton = document.querySelector('.app-right-panel__btn')
const menu = document.querySelector('.app-header');

hideMenuButton.addEventListener('click', () => {
    menu.classList.add('app-header--hide')
});

showMenuButton.addEventListener('click', () => {
    menu.classList.remove('app-header--hide')
});