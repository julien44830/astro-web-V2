// Heure actuelle
function actualiser() {
    let date = new Date();

    var annee   = date.getFullYear();
    var mois    = date.getMonth() + 1;
    var jour    = date.getDate();
    var heure   = date.getHours();
    var minute  = date.getMinutes();
    var seconde = date.getSeconds();
    
    if (mois <= 9) {
        mois = "0" + mois;
    }    
    
    if (jour <= 9) {
        jour = "0" + jour ;
    }

    if (seconde <= 9) {
        seconde = "0" + seconde;
    }

    if (minute <= 9) {
        minute = "0" + minute;
    }

    if (heure <= 9) {
        heure = "0" + heure;
    }

    const toDay = "nous sommes le " + jour + "/" + mois + "/" + annee + " et il est : " + heure + ":" + minute + ":" + seconde;

    const divToDay = document.getElementsByClassName('date')[0]; // Sélectionnez le premier élément avec la classe "date"

    // Vérifiez si la div contient déjà un paragraphe, si oui, mettez à jour son contenu
    const existingParagraph = divToDay.querySelector('p');
    if (existingParagraph) {
        existingParagraph.textContent = toDay;
    } else {
        // Sinon, créez un nouveau paragraphe et ajoutez-le à la div
        const p = document.createElement("p");
        const node = document.createTextNode(toDay);

        p.appendChild(node);
        console.log(p);
        console.log(date.toString());

        divToDay.appendChild(p);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    actualiser();
    setInterval(actualiser, 1000);
});
