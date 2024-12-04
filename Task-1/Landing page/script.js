'use strict';



/**
 * navbar toggle
 */

const overlayhead = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlayhead, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// Swiper

var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
});

const largeCarousel = document.querySelector('.large-carousel .carousel-container');
const smallCarousel = document.querySelector('.small-carousel .carousel-container');

function moveCarousel(carousel) {
  const images = carousel.querySelectorAll('img');
  const firstImage = images[0];
  const imageWidth = firstImage.clientWidth;
  carousel.style.transition = 'transform 0.3s ease-in-out';
  carousel.style.transform = `translateX(-${imageWidth}px)`; // Change to negative value
  setTimeout(() => {
    carousel.appendChild(firstImage); // Change to appendChild
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(0)';
  }, 300);
}

function moveSmallCarousel() {
  const images = smallCarousel.querySelectorAll('img');
  const firstImage = images[0];
  const imageWidth = firstImage.clientWidth;
  smallCarousel.style.transition = 'transform 0.5s ease-in-out';
  smallCarousel.style.transform = `translateX(-${imageWidth}px)`; // Change to negative value
  setTimeout(() => {
    smallCarousel.appendChild(firstImage); // Change to appendChild
    smallCarousel.style.transition = 'none';
    smallCarousel.style.transform = 'translateX(0)';
  }, 500);
}

setInterval(() => {
  moveCarousel(largeCarousel);
}, 2000);

setInterval(moveSmallCarousel, 2000);



ScrollReveal({ distance: "50px" });

ScrollReveal().reveal(".category-item", {
  delay: 1200,
  interval: 200,
  origin: "bottom",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal(".heading", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});

ScrollReveal().reveal(".content", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal(".swiper", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});

ScrollReveal().reveal(".container1", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal( ".container2",{
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});

ScrollReveal().reveal(".container", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal(".small-carousel", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal(".action1", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});
ScrollReveal().reveal(".action2", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});

ScrollReveal().reveal(".h2", {
  delay: 1200,
  interval: 200,
  origin: "left",
  easing: "ease-in-out",
  duration: 400,
});




