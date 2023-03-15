let hamburguerMenu = document.querySelector('.burguer');
let desktopMenu = document.querySelector('.menu-list');
let menuListItems = document.querySelectorAll('.menu-list > li >a');
let portfolioMenu = document.querySelector('.portfolio');
let aboutMenu = document.querySelector('.about');
let contactMenu = document.querySelector('.contact');
let closeDisplay = document.querySelector('.close-icon');

let backGContainer = document.getElementById('blur-container').innerHTML
document.querySelectorAll('#blur-container'); //esta parte aun no logro que ande


function blur () {
  backGContainer.classList.add('blur');
}
hamburguerMenu.addEventListener('click', blur);

function displayListMenu () {
 
  hamburguerMenu.classList.add("mobile-menu-display-none");
  
  desktopMenu.classList.add('mobile-menu-display-content');
 
  desktopMenu.classList.add('list-menu-position');

  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('list-menu-items-font'); 
  }
  
  closeDisplay.classList.add('mobile-menu-display-content');
}
hamburguerMenu.addEventListener('click',displayListMenu);




function close () {
  hamburguerMenu.classList.add("mobile-menu-display-content");
  desktopMenu.classList.remove('list-menu-position')
  desktopMenu.classList.add('nav-items-list')

  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('hide-menu-list-items'); 
    menuListItems[i].classList.remove('list-menu-items-font'); 
  }

  closeDisplay.classList.add('hide-close-button');
}
portfolioMenu.addEventListener('click', close);
aboutMenu.addEventListener('click', close);
contactMenu.addEventListener('click', close);
closeDisplay.addEventListener('click', close);

