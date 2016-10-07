var button = document.querySelector('.page-header__menu');
var menu = document.querySelector('.main-menu');

var headerNav = document.querySelector('.page-header__nav');
var container = document.querySelector('.container');
var apps = document.querySelector('.page-header__apps');

function ready() {
  menu.classList.remove('main-menu--open');
  button.classList.remove('page-header__menu--open');
  headerNav.classList.remove('page-header__nav--menu-open');
  container.classList.remove('container--main');
  apps.classList.remove('page-header__apps--menu-open');
}
document.addEventListener('DOMContentLoaded', ready);

button.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('main-menu--open');
  button.classList.toggle('page-header__menu--open');

  if (menu.classList.contains('main-menu--open')) {
    headerNav.classList.add('page-header__nav--menu-open');
    container.classList.add('container--main');
    apps.classList.add('page-header__apps--menu-open');
  } else {
    headerNav.classList.remove('page-header__nav--menu-open');
    container.classList.remove('container--main');
    apps.classList.remove('page-header__apps--menu-open');
  }

})
