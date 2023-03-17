const hamburguerMenu = document.querySelector('.burguer');
const blurMenu = document.querySelectorAll('.blur-activation');
const portfolioMenu = document.querySelector('.portfolio');
const aboutMenu = document.querySelector('.about');
const contactMenu = document.querySelector('.contact');
const closeCross = document.querySelectorAll('.close-cross');

function displayBlurMenu(addEventListener) {
  blurMenu.classList.remove('display-none');
}
hamburguerMenu.addEventListener('click', displayBlurMenu);

function close(portfolioMenu) {
  blurMenu.classList.add('display-none');
}
portfolioMenu.addEventListener('click');
aboutMenu.addEventListener('click', close);
contactMenu.addEventListener('click', close);
closeCross.addEventListener('click', close);
