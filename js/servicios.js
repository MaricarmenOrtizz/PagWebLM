import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slideNav = document.getElementsByClassName("slide-nav");

let slideIndex = 0;
let slideTimer = null;

function showSlideAnimation(slide){
  $(".slider__warpper")
      .find(".flex__container[data-slide=" + slide + "]")
      .addClass("flex--preStart");
    $(".flex--active").addClass("animate--end");

    setTimeout(function () {
      $(".flex--preStart")
        .removeClass("animate--start flex--preStart")
        .addClass("flex--active");
      $(".animate--end")
        .addClass("animate--start")
        .removeClass("animate--end flex--active");
    }, 1000);
}

function autoPlayHeroSection(i) {
  $(".slide-nav").removeClass("active");

  if (i < slideNav.length) {
    const bullet = slideNav[i];
    bullet.classList.add("active");
    const slide = bullet.getAttribute("data-slide");

    showSlideAnimation(slide);

    slideTimer = setTimeout(() => {
      slideIndex++;
      autoPlayHeroSection(slideIndex);
    }, 5000);
  }else{
    slideIndex = 0;
    clearTimeout(slideTimer);
    autoPlayHeroSection(slideIndex);
  }
}

autoPlayHeroSection(slideIndex);

$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  var current = $(".flex--active").data("slide"),
    next = $(this).data("slide");
  
  slideIndex = next - 1;

  $(".slide-nav").removeClass("active");
  $(this).addClass("active");

  if (current === next) {
    return false;
  } else {
    clearTimeout(slideTimer);
    autoPlayHeroSection(slideIndex);
  }
});

const claroSection = document.getElementById("main-clients");
const niubizSection = document.getElementById("main-clients");
const prosegurSection = document.getElementById("main-clients");

function scrollIntoViewWithOffset(selector) {
  window.scrollTo({
    behavior: "smooth",
    top: selector.getBoundingClientRect().top + window.pageYOffset - 100,
  });
}

function loadView(){
  const redirectToClaro = Boolean(sessionStorage.getItem('redirectToClaro'));
  const redirectToNiubiz = Boolean(sessionStorage.getItem('redirectToNiubiz'));
  const redirectToProsegur = Boolean(sessionStorage.getItem('redirectToProsegur'));
  
  if(redirectToClaro){
    sessionStorage.setItem("redirectToClaro", '');
    scrollIntoViewWithOffset(claroSection);
  }

  if(redirectToNiubiz){
    sessionStorage.setItem("redirectToNiubiz", '');
    scrollIntoViewWithOffset(niubizSection);
  }

  if(redirectToProsegur){
    sessionStorage.setItem("redirectToProsegur", '');
    scrollIntoViewWithOffset(prosegurSection);
  }
}

loadView();

/*----CLIENTS CAROUSEL----*/

let carouselNiubiz = new Swiper(".swiper-niubiz", {
  slidesPerView: 3,
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

let carouselClaro = new Swiper(".swiper-claro", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
