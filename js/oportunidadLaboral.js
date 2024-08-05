import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

/*---JOB OPORTUNITIES---*/

let carouselHiring = new Swiper(".swiper-job-oportunities", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
