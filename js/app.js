document.addEventListener("DOMContentLoaded", function(){



//navigation
  const menuWraper = document.getElementsByClassName("menu-wrapper");
  const hamburger = document.querySelector(".hamburger-menu");
  const menu = document.querySelector(".menu");

  function animateHamburger() {
    hamburger.classList.toggle("animate");
  };
  function openMenu() {
    animateHamburger();
    menu.classList.toggle("open");
  }

  menuWraper[0].addEventListener("click", openMenu);



//slider

//dots
  const sliderCircles = Array.prototype.slice.call( document.querySelectorAll(".circle"));
  const sliderLen = sliderCircles.length;
  let activeCircleIndex = 0;

  //find index of active circle with .visible class in sliderCircles array and and move it to the next element;
  function switchActiveCircle() {
    let activeCircle = document.querySelector(".circle.visible");

    if( sliderCircles.indexOf(activeCircle) == sliderLen-1 ) {
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

//number count
  let activeSlide = document.querySelector(".number").innerText;
  let number = parseInt(activeSlide, 10);

  function nextNumber() {
    if ( number === sliderLen ) {
      number = 1;
    } else {
      number++;
    }
    document.querySelector(".number").innerText = number;
  }

//img slideshow
  const slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  console.log(slides);
  const sliderLength = slides.length;
  let indexOfActiveSlide = 0;

  function switchActiveSlide() {
    let activeSlide = document.querySelector(".slide.display");

    if( slides.indexOf(activeSlide) == sliderLength-1 ) {
      indexOfActiveSlide = 0;
    } else {
      indexOfActiveSlide++;
    }
  }
    function toggleActiveSlide() {
      let activeSlide = document.querySelector(".slide.display");

      switchActiveSlide();

      activeSlide.classList.remove("display");
      document.querySelectorAll(".slide")[indexOfActiveSlide].classList.add("display");
    };

  setInterval( toggleActiveCircle, 2000 );
  setInterval( nextNumber, 2000 );
  setInterval( toggleActiveSlide, 2000 );

  // hover on product image to show favicon
  const product = document.querySelectorAll(".product-img");
  const favIcon = document.querySelectorAll(".product-img-fav");
  const productNum = product.length;
  const favIconNum = favIcon.length;

  if ( productNum === favIconNum ) {
    for (let i = 0; i < productNum; i++) {
      for (let j = 0; j< productNum; j++) {
        if (i === j) {
          function onMouseOver() {
            favIcon[j].classList.add("visible");
          }
          function onMouseOut() {
            favIcon[j].classList.remove("visible");
          }
          product[i].addEventListener("mouseover", onMouseOver);
          product[i].addEventListener("mouseout", onMouseOut);
        }
      }
    }
  }
//hover on product thumbnail to show add to cart in place of price
  const productThumbnail = document.querySelectorAll(".product-thumbnail");
  const productPrice = document.querySelectorAll(".product-price");
  const productThumbnailNum = productThumbnail.length;
  const productPriceNum = productPrice.length;

  const addToCart = document.createElement("div");
  addToCart.setAttribute("class", "add-to-cart");

  const addTextToCart = document.createElement("div");
  addTextToCart.setAttribute("href", "#");
  addTextToCart.textContent = "Add to cart";

  const cartIcon = document.createElement("span");
  cartIcon.setAttribute("class", "cart icon ion-bag");

  addToCart.append(cartIcon);
  addToCart.append(addTextToCart);

  if ( productThumbnailNum === productPriceNum ) {
    for (let i = 0; i < productThumbnailNum; i++) {
      for (let j = 0; j < productPriceNum; j++) {
        if (i === j) {
          function onMouseOver() {
            productThumbnail[j].replaceChild(addToCart, productPrice[i]);
          }
          function onMouseOut() {
            productThumbnail[j].replaceChild(productPrice[i], addToCart);
          }
          productThumbnail[i].addEventListener("mouseover", onMouseOver);
          productThumbnail[i].addEventListener("mouseout", onMouseOut);
        }
      }
    }
  }




});
