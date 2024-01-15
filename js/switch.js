// ce code fonctionne et enregistre le thème dans le local storage

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
function toggleTheme(isLightTheme) {
  setTheme(isLightTheme);
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark'); // Enregistrez le thème dans le localStorage
}

// Fonction pour déterminer si le thème doit être clair ou foncé en fonction de l'heure
function isLightThemeNow() {
  const currentHour = new Date().getHours();
  return currentHour >= 8 && currentHour < 19;
}

// Récupérez le thème enregistré dans le localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // Si le thème est enregistré en localStorage, utilisez-le
  switchTheme.checked = savedTheme === 'light';
  setTheme(savedTheme === 'light');
} else {
  // Si aucun thème n'est enregistré en localStorage, utilisez le thème en fonction de l'heure
  const isLightNow = isLightThemeNow();
  switchTheme.checked = isLightNow;
  setTheme(isLightNow);
}

// Ajoutez un gestionnaire d'événement pour le changement de thème
switchTheme.addEventListener('change', function () {
  toggleTheme(switchTheme.checked);
});

// Mise à jour automatique du thème en fonction de l'heure
setInterval(function () {
  if (!savedTheme) {
    const isLightNow = isLightThemeNow();
    if (switchTheme.checked !== isLightNow) {
      switchTheme.checked = isLightNow;
      toggleTheme(isLightNow);
    }
  }
}, 1000 * 60 * 60); // Met à jour toutes les heures (3600000 millisecondes)


