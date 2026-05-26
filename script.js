const swiper = new Swiper(".heroSwiper", {

  loop: true,

  speed: 1200,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
