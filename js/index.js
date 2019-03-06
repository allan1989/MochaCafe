(function(){

  var menuButton = document.querySelector('.js-menu__responsive__tile');
  var menu = document.querySelector('.js-menu__links');

  function displayMenu(){
    menu.classList.toggle('js-hidden')
  }

  menuButton.addEventListener('click', displayMenu);


})()