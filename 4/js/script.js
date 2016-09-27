var button = document.querySelector('.page-header__menu');
var menu = document.querySelector('.main-menu');

var headerNav = document.querySelector('.page-header__nav');
var container = document.querySelector('.container');

button.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('main-menu--open');
  button.classList.toggle('page-header__menu--open');

  if (menu.classList.contains('main-menu--open')) {
    headerNav.classList.add('page-header__nav--menu-open');
    container.classList.add('container--main');
  } else {
    headerNav.classList.remove('page-header__nav--menu-open');
    container.classList.remove('container--main');
  }

})
