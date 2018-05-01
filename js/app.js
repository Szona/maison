document.addEventListener("DOMContentLoaded", function(){



//navigation
  const menuWraper = document.getElementsByClassName("menu-wrapper");
  const hamburger = document.querySelector(".hamburger-menu");

  function toggleMenu() {
    hamburger.classList.toggle("animate");
  };

  menuWraper[0].addEventListener("click", toggleMenu);



//slider
  const sliderCircles = Array.prototype.slice.call( document.querySelectorAll(".circle"));
  const circlesLen = sliderCircles.length;
  let activeCircleIndex = 0;

  //find index of active circle with .visible class in sliderCircles array and and move it to the next element;
  function switchActiveCircle() {
    let activeCircle = document.querySelector(".circle.visible");

    if( sliderCircles.indexOf(activeCircle) == circlesLen-1 ) {
      activeCircleIndex = 0;
    } else {
      activeCircleIndex++;
    }
  };
  //find active circle and remove form it the .visible class and give it to the next one
  function toggleActiveCircle() {
    let activeCircle = document.querySelector(".circle.visible");

    switchActiveCircle();

    activeCircle.classList.remove("visible");
    document.querySelectorAll(".circle")[activeCircleIndex].classList.add("visible");
  };

  setInterval( toggleActiveCircle, 2000 );


}, false);
