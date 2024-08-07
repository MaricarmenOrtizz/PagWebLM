import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { sedesInfo } from "./data.js";

/*---PARTNERS---*/

let carouselPartners = new Swiper(".swiper-partners", {
  slidesPerView: 1,
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
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
    1301: {
      slidesPerView: 3,
    }
  }
});

/*---MAPA---*/
const sedes = document.getElementsByClassName("sede");

const regionLimaMetropolitana = document.getElementById("PE-LMA");
const regionLimaProvincia = document.getElementById("PE-LIM");
const regionIca = document.getElementById("PE-ICA");
const regionLaLibertad = document.getElementById("PE-LAL");
const regionLambayeque = document.getElementById("PE-LAM");

const pinLima = document.getElementById("P-LIMA");
const pinIca = document.getElementById("P-ICA");
const pinTrujillo = document.getElementById("P-TRUJILLO");
const pinChiclayo = document.getElementById("P-CHICLAYO");

const sedeContainer = document.getElementById("info-sede-container");
const imgSede = document.getElementById("sede-img");
const regionContent = sedeContainer.getElementsByClassName("sede-info-text");

let regionIndex = 0;
let regionTimer = null;

function showSedeInfo(regionName) {
  let regionInfo = sedesInfo.find((s) => s.name === regionName);

  imgSede.setAttribute("src", regionInfo.img);

  regionContent[0].innerHTML = `
    <h3>${regionInfo.name}</h3>
    <p>
      ${regionInfo.text}
    </p>
  `;
}

function setRegionStyle(region, region2, display) {
  for (const sede of sedes) {
    sede.classList.remove("active");
  }
  
  region.classList.add("active");

  if(region2) region2.classList.add("active");

  sedeContainer.style.display = display;
}

function autoPlayRegions(i) {
  if (i < 4) {
    switch (i) {
      case 0:
        setRegionStyle(regionLambayeque, null, "flex");
        showSedeInfo("Chiclayo");
        break;
      case 1:
        setRegionStyle(regionLaLibertad, null, "flex");
        showSedeInfo("Trujillo");
        break;
      case 2:
        setRegionStyle(regionLimaMetropolitana,regionLimaProvincia, "flex");
        showSedeInfo("Lima");
        break;
      case 3:
        setRegionStyle(regionIca, null, "flex");
        showSedeInfo("Ica");
        break;
      default:
        break;
    }

    regionTimer = setTimeout(() => {
      regionIndex++;
      autoPlayRegions(regionIndex);
    }, 2000);
  } else {
    regionIndex = 0;
    clearTimeout(regionTimer);
    autoPlayRegions(regionIndex);
  }
}

autoPlayRegions(regionIndex);

/*---LIMA---*/

regionLimaMetropolitana.addEventListener("mouseover", () => {
  regionIndex = 2;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

regionLimaProvincia.addEventListener("mouseover", () => {
  regionIndex = 2;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---ICA---*/
regionIca.addEventListener("mouseover", () => {
  regionIndex = 3;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---TRUJILLO---*/
regionLaLibertad.addEventListener("mouseover", () => {
  regionIndex = 1;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---CHICLAYO---*/
regionLambayeque.addEventListener("mouseover", () => {
  regionIndex = 0;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---PIN---*/

pinLima.addEventListener("mouseover", () => {
  regionIndex = 2;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---ICA---*/
pinIca.addEventListener("mouseover", () => {
  regionIndex = 3;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---TRUJILLO---*/
pinTrujillo.addEventListener("mouseover", () => {
  regionIndex = 1;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---CHICLAYO---*/
pinChiclayo.addEventListener("mouseover", () => {
  regionIndex = 0;
  clearTimeout(regionTimer);
  autoPlayRegions(regionIndex);
});

/*---REDIRECT BUTTONS---*/

const btnAboutUs = document.getElementById("btn-about-us");
const btnHiring = document.getElementById("btn-hiring");

btnAboutUs.addEventListener("click", () => {
  location.href = "./pages/nosotros.html";
});

btnHiring.addEventListener("click", () => {
  location.href = "./pages/oportunidadLaboral.html";
});

/*---REDIRECT PARTNERS BUTTONS---*/

const urlServicesPage = "./pages/servicios.html";

const btnClaroPartner = document.getElementById("btn-claro-partner");
const btnNiubizPartner = document.getElementById("btn-niubiz-partner");
const btnProsegurPartner = document.getElementById("btn-prosegur-partner");

btnClaroPartner.addEventListener("click", () => {
  sessionStorage.setItem("redirectToClaro", true);
  location.href = urlServicesPage;
});

btnNiubizPartner.addEventListener("click", () => {
  sessionStorage.setItem("redirectToNiubiz", true);
  location.href = urlServicesPage;
});

btnProsegurPartner.addEventListener("click", () => {
  sessionStorage.setItem("redirectToProsegur", true);
  location.href = urlServicesPage;
});
