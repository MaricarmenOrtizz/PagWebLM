import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slideNav = document.getElementsByClassName("slide-nav");

let slideIndex = 0;

function autoPlayHeroSection(i) {
  console.log("in");
  $(".slide-nav").removeClass("active");

  if (i < slideNav.length) {
    const bullet = slideNav[i];
    bullet.classList.add("active");
    const slide = bullet.getAttribute("data-slide");
    console.log(slideIndex);

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

    setTimeout(() => {
      slideIndex++;
      autoPlayHeroSection(slideIndex);
    }, 5000);
  }else{
    slideIndex = 0;
    autoPlayHeroSection(slideIndex);
  }
}

autoPlayHeroSection(slideIndex);

$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  // get current slide
  var current = $(".flex--active").data("slide"),
    // get button data-slide
    next = $(this).data("slide");
  
  slideIndex = next - 1; 

  $(".slide-nav").removeClass("active");
  $(this).addClass("active");

  if (current === next) {
    return false;
  } else {
    $(".slider__warpper")
      .find(".flex__container[data-slide=" + next + "]")
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
});

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
