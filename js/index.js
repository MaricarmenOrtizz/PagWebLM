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

function setContainerStyle(region, backgroundColor, display){
  region.style.fill = backgroundColor;
  sedeContainer.style.display = display;
}

regionLimaMetropolitana.addEventListener("mouseover", () => {
  setContainerStyle(regionLimaMetropolitana,"#3cb37283", "block");
  setContainerStyle(regionLimaProvincia,"#3cb37283", "block");
  showSedeInfo('Lima');
});

regionLimaMetropolitana.addEventListener("mouseleave", () => {
  setContainerStyle(regionLimaMetropolitana,"#dbdbdb88", "none");
  setContainerStyle(regionLimaProvincia,"#dbdbdb88", "none");
});

regionLimaProvincia.addEventListener("mouseover", () => {
  setContainerStyle(regionLimaMetropolitana,"#3cb37283", "block");
  setContainerStyle(regionLimaProvincia,"#3cb37283", "block");
  showSedeInfo('Lima');
});

regionLimaProvincia.addEventListener("mouseleave", () => {
  setContainerStyle(regionLimaMetropolitana,"#dbdbdb88", "none");
  setContainerStyle(regionLimaProvincia,"#dbdbdb88", "none");
});

/*---ICA---*/
regionIca.addEventListener("mouseover", () => {
  setContainerStyle(regionIca,"#3cb37283", "block");
  showSedeInfo('Ica');
});

regionIca.addEventListener("mouseleave", () => {
  setContainerStyle(regionIca,"#dbdbdb88", "none");
});

/*---TRUJILLO---*/
regionLaLibertad.addEventListener("mouseover", () => {
  setContainerStyle(regionLaLibertad,"#3cb37283", "block");
  showSedeInfo('Trujillo');
});

regionLaLibertad.addEventListener("mouseleave", () => {
  setContainerStyle(regionLaLibertad,"#dbdbdb88", "none");
});

/*---CHICLAYO---*/
regionLambayeque.addEventListener("mouseover", () => {
  setContainerStyle(regionLambayeque,"#3cb37283", "block");
  showSedeInfo('Chiclayo');
});

regionLambayeque.addEventListener("mouseleave", () => {
  setContainerStyle(regionLambayeque,"#dbdbdb88", "none");
});

/*---PIN---*/

pinLima.addEventListener("mouseover", () => {
  setContainerStyle(regionLimaMetropolitana,"#3cb37283", "block");
  setContainerStyle(regionLimaProvincia,"#3cb37283", "block");
  showSedeInfo('Lima');
});

pinLima.addEventListener("mouseleave", () => {
  setContainerStyle(regionLimaMetropolitana,"#dbdbdb88", "none");
  setContainerStyle(regionLimaProvincia,"#dbdbdb88", "none");
});

/*---ICA---*/
pinIca.addEventListener("mouseover", () => {
  setContainerStyle(regionIca,"#3cb37283", "block");
  showSedeInfo('Ica');
});

pinIca.addEventListener("mouseleave", () => {
  setContainerStyle(regionIca,"#dbdbdb88", "none");
});

/*---TRUJILLO---*/
pinTrujillo.addEventListener("mouseover", () => {
  setContainerStyle(regionLaLibertad,"#3cb37283", "block");
  showSedeInfo('Trujillo');
});

pinTrujillo.addEventListener("mouseleave", () => {
  setContainerStyle(regionLaLibertad,"#dbdbdb88", "none");
});

/*---CHICLAYO---*/
pinChiclayo.addEventListener("mouseover", () => {
  setContainerStyle(regionLambayeque,"#3cb37283", "block");
  showSedeInfo('Chiclayo');
});

pinChiclayo.addEventListener("mouseleave", () => {
  setContainerStyle(regionLambayeque,"#dbdbdb88", "none");
});
