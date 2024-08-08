import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const jobOportunitiesCard = document.getElementsByClassName(
  "job-oportunities-card"
);

for (const card of jobOportunitiesCard) {
  console.log(card);
  const imgPost = card.getElementsByClassName("img-post");
  const imgBenefits = card.getElementsByClassName("img-benefits");
  console.log(imgPost);
  imgPost[0].addEventListener("mouseover", () => {
    if(imgBenefits[0].style.height !== '25rem' )
      imgBenefits[0].style.animation = "showCard 1s linear forwards";
  });

  imgBenefits[0].addEventListener("mouseout", (e) => {
    console.log(e.relatedTarget);
    if(imgBenefits[0].style.height !== '0')
      imgBenefits[0].style.animation = "hideCard 1s linear forwards";
  });
}

/*---JOB OPORTUNITIES---*/

let carouselHiring = new Swiper(".swiper-job-oportunities", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
  },
});
