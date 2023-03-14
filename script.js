let hamburguerMenu = document.querySelector('.fa');

let desktopMenu = document.querySelector('#menu-list');

let menuListItems = document.querySelectorAll('#menu-list > li');

let closeDisplay = document.querySelector('.fa-solid');

let backGContainer = document.querySelectorAll('.overlay'); //esta parte aun no logro que ande

let closingLine = document.querySelector('.closing-line');

function mobileMenu (){
 

  hamburguerMenu.classList.add("mobile-menu-display-none");

  click.stopPropagation()

}
hamburguerMenu.addEventListener('click', mobileMenu);
