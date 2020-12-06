const hideMenuButton = document.querySelector('.app-header__btn')
const openMenuButton = document.querySelector('.app-right-panel__btn')
const menu = document.querySelector('.app-header--hidden');

openMenuButton.addEventListener('click', () => {
  menu.classList.add('app-header--open');
})

menu.addEventListener('click', () => {
  menu.classList.remove('app-header--open');
}) 