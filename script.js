let hamburguerMenu = document.querySelector('.burguer');

let desktopMenu = document.querySelector('.menu-list');

let menuListItems = document.querySelectorAll('.menu-list > li >a');

let closeDisplay = document.querySelector('.fa-solid');

let backGContainer = document.querySelectorAll('.overlay'); //esta parte aun no logro que ande

let closingLine = document.querySelector('.closing-line');

function hideBurguer () {
  hamburguerMenu.classList.add("mobile-menu-display-none");
}
hamburguerMenu.addEventListener('click',hideBurguer)


function displayListMenu () {
  desktopMenu.classList.add("mobile-menu-display-content");
  
  desktopMenu.classList.add("list-menu-position");

  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add("list-menu-items-font"); 
  }
 
}
  hamburguerMenu.addEventListener('click',displayListMenu)