let hamburguerMenu = document.querySelector('.fa');

let desktopMenu = document.querySelector('#menu-list');

function mobileMenu (){
  hamburguerMenu.classList.add("mobile-menu-display-none"); //desaparece la hamburguesa//

  desktopMenu.classList.remove("mobile-hide"); //aparece el menu luego de hacer click en la burguer

}
hamburguerMenu.addEventListener('click', mobileMenu);