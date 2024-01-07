let latitude ;
let longitude ;

navigator.geolocation.getCurrentPosition(
    function(position) {
        // Succès : la position de l'utilisateur est disponible
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        console.log("Latitude :", latitude);
        console.log("Longitude :", longitude);

        // Vous pouvez également exécuter d'autres opérations ici une fois que les coordonnées sont disponibles.
    },
    function(error) {
        console.error("Erreur de géolocalisation :", error.message);
        // Gérer les erreurs si nécessaire
    }
);

