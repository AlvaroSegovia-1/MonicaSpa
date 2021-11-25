/* window.swiper = new Swiper({
  el: ".slider__contenedor",
  slideClass: "slider__slide",
  createElements: true,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  //spaceBetween: 20,
  pagination: true, // poner position: relative en .slider
  navigation: true, // poner position: relative en .slider
});
 */

var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 90,
    shadowScale: 0.84,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  //pagination: true,
  navigation: true,
  createElements: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});
