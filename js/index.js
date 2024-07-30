import { sedesInfo } from "./data.js";

/*---MAPA---*/
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
const regionContent = sedeContainer.getElementsByClassName("sede-content");

/*---LIMA---*/

function showSedeInfo(regionName) {
  let regionInfo = sedesInfo.find((s) => s.name === regionName);

  imgSede.setAttribute('src', regionInfo.img);

  regionContent[0].innerHTML = `
    <h3>${regionInfo.name}</h3>
    <p>
      ${regionInfo.text}
    </p>
  `;
}

function setRegionStyle(region, display){
  if(region.classList.contains('active')) region.classList.remove('active');
  else region.classList.add('active');
  
  sedeContainer.style.display = display;
}

regionLimaMetropolitana.addEventListener("mouseover", () => {
  setRegionStyle(regionLimaMetropolitana, 'block');
  setRegionStyle(regionLimaProvincia, 'block');

  showSedeInfo('Lima');
});

regionLimaMetropolitana.addEventListener("mouseleave", () => {
  setRegionStyle(regionLimaMetropolitana, 'none');
  setRegionStyle(regionLimaProvincia, 'none');
});

regionLimaProvincia.addEventListener("mouseover", () => {
  setRegionStyle(regionLimaMetropolitana, 'block');
  setRegionStyle(regionLimaProvincia, 'block');

  showSedeInfo('Lima');
});

regionLimaProvincia.addEventListener("mouseleave", () => {
  setRegionStyle(regionLimaMetropolitana, 'none');
  setRegionStyle(regionLimaProvincia, 'none');
});

/*---ICA---*/
regionIca.addEventListener("mouseover", () => {
  setRegionStyle(regionIca, 'block');

  showSedeInfo('Ica');
});

regionIca.addEventListener("mouseleave", () => {
  setRegionStyle(regionIca, 'none');
});

/*---TRUJILLO---*/
regionLaLibertad.addEventListener("mouseover", () => {
  setRegionStyle(regionLaLibertad, 'block');

  showSedeInfo('Trujillo');
});

regionLaLibertad.addEventListener("mouseleave", () => {
  setRegionStyle(regionLaLibertad, 'none');
});

/*---CHICLAYO---*/
regionLambayeque.addEventListener("mouseover", () => {
  setRegionStyle(regionLambayeque, 'block');

  showSedeInfo('Chiclayo');
});

regionLambayeque.addEventListener("mouseleave", () => {
  setRegionStyle(regionLambayeque, 'none');
});

/*---PIN---*/

pinLima.addEventListener("mouseover", () => {
  setRegionStyle(regionLimaMetropolitana, 'block');
  setRegionStyle(regionLimaProvincia, 'block');

  showSedeInfo('Lima');
});

pinLima.addEventListener("mouseleave", () => {
  setRegionStyle(regionLimaMetropolitana, 'none');
  setRegionStyle(regionLimaProvincia, 'none');
});

/*---ICA---*/
pinIca.addEventListener("mouseover", () => {
  setRegionStyle(regionIca, 'block');

  showSedeInfo('Ica');
});

pinIca.addEventListener("mouseleave", () => {
  setRegionStyle(regionIca, 'none');
});

/*---TRUJILLO---*/
pinTrujillo.addEventListener("mouseover", () => {
  setRegionStyle(regionLaLibertad, 'block');
  showSedeInfo('Trujillo');
});

pinTrujillo.addEventListener("mouseleave", () => {
  setRegionStyle(regionLaLibertad, 'none');
});

/*---CHICLAYO---*/
pinChiclayo.addEventListener("mouseover", () => {
  setRegionStyle(regionLambayeque, 'block');
  showSedeInfo('Chiclayo');
});

pinChiclayo.addEventListener("mouseleave", () => {
  setRegionStyle(regionLambayeque, 'none');
});
