let hamburguerMenu = document.querySelector('.burguer');
let desktopMenu = document.querySelector('.menu-list');
let menuListItems = document.querySelectorAll('.menu-list > li >a');

let portfolioMenu = document.querySelector('.portfolio');
let aboutMenu = document.querySelector('.about');
let contactMenu = document.querySelector('.contact');

let closeDisplay = document.querySelector('.close-icon');

let backGContainer = document.querySelectorAll('.overlay'); //esta parte aun no logro que ande

let closingLine = document.querySelector('.mobile-menu-end-line');


function hideBurguer () {
  hamburguerMenu.classList.add("mobile-menu-display-none");
}
hamburguerMenu.addEventListener('click',hideBurguer)



function displayListMenu () {
  desktopMenu.classList.add('mobile-menu-display-content');

  desktopMenu.classList.add('list-menu-position');

  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('list-menu-items-font'); 
  }

  closeDisplay.classList.add('mobile-menu-display-content');
  closingLine.classList.add("mobile-menu-end-line-shown");// este no anda
}
hamburguerMenu.addEventListener('click',displayListMenu);



function closeMenuPortfolio () {
  hamburguerMenu.classList.add("mobile-menu-display-content");
  desktopMenu.classList.remove('list-menu-position')
  desktopMenu.classList.add('nav-items-list')
  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('hide-menu-list-items'); 
    menuListItems[i].classList.remove('list-menu-items-font'); 
  }
  closeDisplay.classList.add('hide-close-button');
  closingLine.classList.remove("mobile-menu-end-line-shown"); //no anda
}
portfolioMenu.addEventListener('click', closeMenuPortfolio);


function closeMenuAbout () {
  hamburguerMenu.classList.add("mobile-menu-display-content");
  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('hide-menu-list-items'); 
    menuListItems[i].classList.remove('list-menu-items-font');
  }
  closeDisplay.classList.add('hide-close-button');
}
aboutMenu.addEventListener('click', closeMenuAbout);


function closeMenuContact () {
  hamburguerMenu.classList.add("mobile-menu-display-content");
  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('hide-menu-list-items');
    menuListItems[i].classList.remove('list-menu-items-font');
  }
  closeDisplay.classList.add('hide-close-button');
}
contactMenu.addEventListener('click', closeMenuContact);

function closeBtnClose () {
  hamburguerMenu.classList.add("mobile-menu-display-content");
  for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add('hide-menu-list-items');
    menuListItems[i].classList.remove('list-menu-items-font');
  }
  closeDisplay.classList.add('hide-close-button');
  closingLine.classList.add("hide-close-button"); //no anda
}
closeDisplay.addEventListener('click', closeBtnClose);



