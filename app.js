// Importez la bibliothèque Astronomia.js
import { julian, solar, moonposition } from 'astronomia';

// Obtenez la date julienne actuelle
const today = new Date();
const jd = julian.CalendarGregorianToJD(today.getFullYear(), today.getMonth() + 1, today.getDate());

// Calculez la position du soleil et de la lune pour la date actuelle
const sunPos = solar.apparentEquatorial(jd);
const moonPos = moonposition.position(jd);

// Affichez les résultats dans la page HTML
const resultElement = document.getElementById("result");
resultElement.innerHTML = `
<p>${jd}</p>
  <p>Position du Soleil : Ascension droite ${sunPos.ra}°, Déclinaison ${sunPos.dec}°</p>
  <p>Position de la Lune : Ascension droite ${moonPos.ra}°, Déclinaison ${moonPos.dec}°</p>
`;
