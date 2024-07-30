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

regionLimaMetropolitana.addEventListener("mouseover", () => {
  regionLimaMetropolitana.style.fill = "#3cb37283";
  regionLimaProvincia.style.fill = "#3cb37283";
  sedeContainer.style.display = "block";

  showSedeInfo('Lima');
});

regionLimaMetropolitana.addEventListener("mouseleave", () => {
  regionLimaMetropolitana.style.fill = "#dbdbdb88";
  regionLimaProvincia.style.fill = "#dbdbdb88";
  sedeContainer.style.display = "none";
});

regionLimaProvincia.addEventListener("mouseover", () => {
  regionLimaMetropolitana.style.fill = "#3cb37283";
  regionLimaProvincia.style.fill = "#3cb37283";
  sedeContainer.style.display = "block";

  showSedeInfo('Lima');
});

regionLimaProvincia.addEventListener("mouseleave", () => {
  regionLimaMetropolitana.style.fill = "#dbdbdb88";
  regionLimaProvincia.style.fill = "#dbdbdb88";
  sedeContainer.style.display = "none";
});

/*---ICA---*/
regionIca.addEventListener("mouseover", () => {
  regionIca.style.fill = "#3cb37283";
  sedeContainer.style.display = "block";

  showSedeInfo('Ica');
});

regionIca.addEventListener("mouseleave", () => {
  regionIca.style.fill = "#dbdbdb88";
  sedeContainer.style.display = "none";
});

/*---TRUJILLO---*/
regionLaLibertad.addEventListener("mouseover", () => {
  regionLaLibertad.style.fill = "#3cb37283";
  sedeContainer.style.display = "block";

  showSedeInfo('Trujillo');
});

regionLaLibertad.addEventListener("mouseleave", () => {
  regionLaLibertad.style.fill = "#dbdbdb88";
  sedeContainer.style.display = "none";
});

/*---CHICLAYO---*/
regionLambayeque.addEventListener("mouseover", () => {
  regionLambayeque.style.fill = "#3cb37283";
  sedeContainer.style.display = "block";

  showSedeInfo('Chiclayo');
});

regionLambayeque.addEventListener("mouseleave", () => {
  regionLambayeque.style.fill = "#dbdbdb88";
  sedeContainer.style.display = "none";
});
