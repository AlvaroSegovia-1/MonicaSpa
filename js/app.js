window.swiper = new Swiper({
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
