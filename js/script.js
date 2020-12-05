const hideMenuButton = document.querySelector('.app-header__btn')
const openMenuButton = document.querySelector('.app-right-panel__btn')
const menu = document.querySelector('.app-header--hidden');

// hideMenuButton.addEventListener('click', () => {
//     menu.classList.add('app-header--open')
// });

// showMenuButton.addEventListener('click', () => {
//     menu.classList.remove('app-header--open')
// });

openMenuButton.addEventListener('click', () => {
  menu.classList.add('app-header--open');
})

hideMenuButton.addEventListener('click', () => {
  menu.classList.remove('app-header--open');
})