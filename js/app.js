document.addEventListener("DOMContentLoaded", function(){

  const menuWraper = document.getElementsByClassName("menu-wrapper");
  const hamburger = document.querySelector(".hamburger-menu");

  // console.log(hamburger);
  function toggleMenu() {
    hamburger.classList.toggle("animate");
  };
  menuWraper[0].addEventListener("click", toggleMenu);



});
