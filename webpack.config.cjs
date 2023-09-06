const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development', // Ajoutez cette ligne pour spécifier le mode de développement
  experiments: {
    topLevelAwait: true, // Activez cette fonctionnalité pour prendre en charge await en haut niveau
  },
};
