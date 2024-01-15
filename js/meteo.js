let div = document.getElementById('meteo');
let country;

function getCityFromIP() {
  // Faites une requête à l'API ipinfo.io pour obtenir les informations de l'adresse IP
  fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      // Extrayez la ville à partir des données
      country = data.city;

      // Utilisez la variable country comme vous le souhaitez
      console.log('Ville basée sur l\'adresse IP :', country);

      // Créez l'objet JSON avec vos propriétés
      let jsonObj = {
        t: 'v',
        v: '1.2',
        lang: 'fr',
        locs: [7],
        ssot: 'c',
        sics: 'ds',
        cbkg: '#9E9E9E',
        cfnt: '#FFFFFF',
        cprb: '#616161',
        cprf: '#FFFFFF',
        slmw: 226,
        slbr: 4,
        slfs: 20,
        sfnt: 'a'
      };

      // Convertissez l'objet JSON en chaîne JSON valide
      let jsonString = JSON.stringify(jsonObj);

      // Encodez les caractères spéciaux pour HTML (y compris les guillemets)
      let htmlEncodedString = jsonString.replace(/"/g, "&quot;");

      // Créez le nouveau contenu avec la variable country et la chaîne JSON encodée pour HTML
      let href = `<div id="idc100a5bd966" a='${htmlEncodedString}'>Source des données météo: <a href="https://meteolabs.fr/meteo_${country}/demain/">météo pour demain ${country}</a></div><script async src="https://static1.meteolabs.fr/widgetjs/?id=idc100a5bd966"></script>`;

      // Mettez à jour le contenu de la div
      div.innerHTML += href;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de la ville :', error);
    });
}

// Appelez la fonction pour obtenir la ville basée sur l'adresse IP
getCityFromIP();

// a="{&quot;t&quot;:&quot;v&quot;,&quot;v&quot;:&quot;1.2&quot;,&quot;lang&quot;:&quot;fr&quot;,&quot;locs&quot;:[7],&quot;ssot&quot;:&quot;c&quot;,&quot;sics&quot;:&quot;ds&quot;,&quot;cbkg&quot;:&quot;#9E9E9E&quot;,&quot;cfnt&quot;:&quot;#FFFFFF&quot;,&quot;cprb&quot;:&quot;#616161&quot;,&quot;cprf&quot;:&quot;#FFFFFF&quot;,&quot;slmw&quot;:226,&quot;slbr&quot;:4,&quot;slfs&quot;:20,&quot;sfnt&quot;:&quot;a&quot;}"