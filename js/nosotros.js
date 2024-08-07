import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let carouselTeams = new Swiper(".swiper-teams", {
  slidesPerView: 1,
  gap: 10,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    901: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  }
});