const btn_page = document.querySelectorAll("a");
const img_transition = document.querySelector(".transition");

for (const btn of btn_page) {
  btn.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le lien de rediriger immédiatement
    const destinationURL = btn.getAttribute('href');

    // Supprimez temporairement l'attribut href pour désactiver le lien
    btn.removeAttribute('href');

    // Déclenchez l'animation de transition de l'image
    img_transition.style.animation = 'transition2 1.5s ease-in-out forwards';

    // Attendez la fin de l'animation pour rétablir l'attribut href et activer le lien
    img_transition.addEventListener('animationend', function() {
      // Rétablissez l'attribut href pour réactiver le lien
      btn.setAttribute('href', destinationURL);

      // Activez la redirection vers la nouvelle page
      window.location.href = destinationURL;
    });
  });
}
