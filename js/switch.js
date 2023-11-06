// 
const switchTheme = document.querySelector("#hide-checkbox");
const body2Elements = document.getElementsByClassName("pointerEvent");

// Fonction pour changer le thème
function setTheme(isLightTheme) {
  if (isLightTheme) {
    for (const element of body2Elements) {
      element.classList.remove('body2');
    }
  } else {
    for (const element of body2Elements) {
      element.classList.add('body2');
    }
  }
}

// Fonction pour basculer le thème et enregistrer l'état dans le localStorage
function toggleTheme() {
  if (switchTheme.checked) {
    setTheme(true);
    localStorage.setItem('theme', 'light'); // Enregistrez le thème dans le localStorage
  } else {
    setTheme(false);
    localStorage.setItem('theme', 'dark'); // Enregistrez le thème dans le localStorage
  }
}

// Ajoutez un gestionnaire d'événement pour le changement de thème
switchTheme.addEventListener('change', toggleTheme);

// Récupérez le thème enregistré dans le localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  if (savedTheme === 'light') {
    switchTheme.checked = true;
    setTheme(true);
  } else {
    switchTheme.checked = false;
    setTheme(false);
  }
}
