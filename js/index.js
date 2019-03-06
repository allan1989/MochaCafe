(function(){

  // Display Menu

  var menuButton = document.querySelector('.js-menu__responsive__tile');
  var menu = document.querySelector('.js-menu__links');

  function displayMenu(){
    menu.classList.toggle('js-hidden')
  }

  menuButton.addEventListener('click', displayMenu);



  // Hide add at the top of the page

  var closeAdButton = document.querySelector('.js-login__button');
  var ad = document.querySelector('.js-login__ad');

  function hideAd(){
    ad.style.display = "none";
  }

  closeAdButton.addEventListener('click', hideAd);

})()