
function mobileMenu (){
 
    hamburguerMenu.classList.add("mobile-menu-display-none"); //desaparece la hamburguesa//
  
    desktopMenu.classList.remove("mobile-hide"); //aparece el menu luego de hacer click en la burguer
  
    desktopMenu.classList.add("list-menu-position"); //posicionamiento del menu
  
    for(let i = 0; i < menuListItems.length; i++){ 
    menuListItems[i].classList.add("list-menu-items-font"); //loop para darle estilo a los items de la lista
    }
  
    closeDisplay.classList.add("mobile-menu-display-content"); // boton X de cierre
  
    closingLine.classList.add("mobile-menu-display-content"); //la raya del final
  
    click.preventDefault()
  }
  hamburguerMenu.addEventListener('click', mobileMenu);
  
  
  function closeMenu () {
    hamburguerMenu.classList.remove("mobile-menu-display-none");
  
    desktopMenu.classList.add("mobile-hid");
  
    desktopMenu.classList.remove("list-menu-position");
  
    for(let i = 0; i < menuListItems.length; i++){ 
      menuListItems[i].classList.remove("list-menu-items-font"); 
      }
    
    closeDisplay.classList.remove("mobile-menu-display-content");
  
    closingLine.classList.remove("mobile-menu-display-content");
  
    click.stopPropagation();
  }
  closeDisplay.addEventListener('click', closeMenu); 