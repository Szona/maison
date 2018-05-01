document.addEventListener("DOMContentLoaded", function(){

//navigation
  const menuWraper = document.getElementsByClassName("menu-wrapper");
  const hamburger = document.querySelector(".hamburger-menu");

  function toggleMenu() {
    hamburger.classList.toggle("animate");
  };

  menuWraper[0].addEventListener("click", toggleMenu);



});
