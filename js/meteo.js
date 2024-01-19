let div = document.getElementById('meteo');
let country;

// Remplacez 'VOTRE_CLE_API' par votre clé API ipinfo.io
const apiKey = 'f6d0561c8eeac2';

function getCityFromIP() {
  // Faites une requête à l'API ipinfo.io pour obtenir les informations de l'adresse IP
  fetch(`https://ipinfo.io/json?token=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Extrayez la ville à partir des données
      country = data.city;

      // Utilisez la variable country comme vous le souhaitez
      console.log('Ville basée sur l\'adresse IP :', country);

      // ... (le reste du code reste inchangé)
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de la ville :', error);
    });
}

// Appelez la fonction pour obtenir la ville basée sur l'adresse IP
getCityFromIP();
