  const hamburguerMenu = document.querySelector('.burguer');
  const blurMenu = document.querySelector('.blur-activation');
  const portfolioMenu = document.querySelector('.portfolio');
  const aboutMenu = document.querySelector('.about');
  const contactMenu = document.querySelector('.contact');
  const closeDisplay = document.querySelector('.close-icon');
  const closeCross = document.querySelector('.close-cross');

  function displayBlurMenu() {
    blurMenu.classList.remove('display-none');
  }
  hamburguerMenu.addEventListener('click', displayBlurMenu);

  function close() {
    blurMenu.classList.add('display-none');
  }
  portfolioMenu.addEventListener('click', close);
  aboutMenu.addEventListener('click', close);
  contactMenu.addEventListener('click', close);
  closeCross.addEventListener('click', close);
