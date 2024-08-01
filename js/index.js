import { sedesInfo } from "./data.js";

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

function setRegionStyle(region, display) {
  for (const sede of sedes) {
    sede.classList.remove("active");
  }

  region.classList.add("active");

  sedeContainer.style.display = display;
}

function autoPlayRegions(i) {
  if (i < 4) {
    switch (i) {
      case 0:
        setRegionStyle(regionLambayeque, "flex");
        showSedeInfo("Chiclayo");
        break;
      case 1:
        setRegionStyle(regionLaLibertad, "flex");
        showSedeInfo("Trujillo");
        break;
      case 2:
        setRegionStyle(regionLimaMetropolitana, "flex");
        setRegionStyle(regionLimaProvincia, "flex");
        showSedeInfo("Lima");
        break;
      case 3:
        setRegionStyle(regionIca, "flex");
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

// autoPlayRegions(regionIndex);

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
