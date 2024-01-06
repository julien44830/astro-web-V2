//ce code fonctionne

// const switchTheme = document.querySelector("#hide-checkbox");
// const body2Elements = document.getElementsByClassName("pointerEvent");

// // Fonction pour changer le thème
// function setTheme(isLightTheme) {
//   if (isLightTheme) {
//     for (const element of body2Elements) {
//       element.classList.remove('body2');
//     }
//   } else {
//     for (const element of body2Elements) {
//       element.classList.add('body2');
//     }
//   }
// }

// // Fonction pour basculer le thème et enregistrer l'état dans le localStorage
// function toggleTheme() {
//   if (switchTheme.checked) {
//     setTheme(true);
//     localStorage.setItem('theme', 'light'); // Enregistrez le thème dans le localStorage
//   } else {
//     setTheme(false);
//     localStorage.setItem('theme', 'dark'); // Enregistrez le thème dans le localStorage
//   }
// }

// // Ajoutez un gestionnaire d'événement pour le changement de thème
// switchTheme.addEventListener('change', toggleTheme);

// // Récupérez le thème enregistré dans le localStorage
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   if (savedTheme === 'light') {
//     switchTheme.checked = true;
//     setTheme(true);
//   } else {
//     switchTheme.checked = false;
//     setTheme(false);
//   }
// }



/*******************code qui suis ne fontionne pas****************/
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

// Fonction pour basculer le thème et enregistrer l'état dans le localStorage et dans l'URL
function toggleTheme(isLightTheme) {
  setTheme(isLightTheme);
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark'); // Enregistrez le thème dans le localStorage

  const newTheme = isLightTheme ? 'light' : 'dark';
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('theme', newTheme);
  window.history.replaceState({}, '', currentUrl);
}

// Fonction pour déterminer si le thème doit être clair ou foncé en fonction de l'heure
function isLightThemeNow() {
  const currentHour = new Date().getHours();
  return currentHour >= 10 && currentHour < 19;
}

// Fonction pour lire le thème à partir des paramètres d'URL
function getThemeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('theme');
}

// Initialise le thème en fonction du local storage, des paramètres d'URL ou de l'heure actuelle
const savedTheme = localStorage.getItem('theme');
const urlTheme = getThemeFromUrl();
const isLightNow = isLightThemeNow();

console.log('Saved Theme:', savedTheme);
console.log('URL Theme:', urlTheme);
console.log('Is Light Now:', isLightNow);

if (urlTheme === 'light' || urlTheme === 'dark') {
  toggleTheme(urlTheme === 'light');
} else if (savedTheme) {
  toggleTheme(savedTheme === 'light');
} else {
  toggleTheme(isLightNow);
}

// Ajoute un gestionnaire d'événement pour le changement de thème
switchTheme.addEventListener('change', function () {
  toggleTheme(switchTheme.checked);
});

// Mise à jour automatique du thème en fonction de l'heure
setInterval(function () {
  const isLightNow = isLightThemeNow();
  console.log('Is Light Now:', isLightNow);
  if (switchTheme.checked !== isLightNow) {
    switchTheme.checked = isLightNow;
    toggleTheme(isLightNow);
  }
}, 1000 * 60 * 60); // Met à jour toutes les heures (3600000 millisecondes)
