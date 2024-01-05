const dark = "#02023d";
const light = "#fff";

const btn_page = document.querySelectorAll("a");
const img_transition = document.querySelector(".transition");

window.onload 
  if (switchTheme.checked) {
    setTheme(true);
    img_transition.style.backgroundColor = light;
  } else {
    setTheme(false);
    img_transition.style.backgroundColor = dark;
  }

  for (const btn of btn_page) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Empêche le lien de rediriger immédiatement
      const destinationURL = btn.getAttribute('href');
  
      // Supprimez temporairement l'attribut href pour désactiver le lien
      btn.removeAttribute('href');
  
      // Avant de déclencher l'animation, ajoutez la classe transitioning
      img_transition.classList.add('transitioning');
  
      // Définissez la couleur de fond en fonction du thème
      img_transition.style.backgroundColor = switchTheme.checked ? light : dark;
  
      // Déclenchez l'animation de transition de l'image
      img_transition.addEventListener('animationend', function() {
        // Retirez la classe transitioning
        img_transition.classList.remove('transitioning');
  
        // Rétablissez l'attribut href pour réactiver le lien
        btn.setAttribute('href', destinationURL);
  
        // Activez la redirection vers la nouvelle page
        window.location.href = destinationURL;
      });
    });
  }
  




// for (const btn of btn_page) {
//   btn.addEventListener('click', function (event) {
//     event.preventDefault(); // Empêche le lien de rediriger immédiatement
//     const destinationURL = btn.getAttribute('href');

//     // Supprimez temporairement l'attribut href pour désactiver le lien
//     btn.removeAttribute('href');

//     // Définissez la couleur de l'arrière-plan
//     if (switchTheme.checked) {
//       setTheme(true);
//       img_transition.style.backgroundColor = light; // Remplacez 'votre_couleur' par la couleur souhaitée
//     } else {
//       setTheme(false);
//       img_transition.style.backgroundColor = dark; // Remplacez 'votre_couleur' par la couleur souhaitée
//     }

//     // Déclenchez l'animation de transition de l'image
//     img_transition.style.animation = 'transition2 1.5s ease-in-out forwards';

//     // Attendez la fin de l'animation pour rétablir l'attribut href et activer le lien
//     img_transition.addEventListener('animationend', function() {
//       // Rétablissez l'attribut href pour réactiver le lien
//       btn.setAttribute('href', destinationURL);

//       // Réinitialisez la couleur de l'arrière-plan
//       img_transition.style.backgroundColor = ''; // Réinitialisez la couleur
//       // Activez la redirection vers la nouvelle page
//       window.location.href = destinationURL;
//     });
//   });
// }
