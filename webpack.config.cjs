const path = require('path');

module.exports = {
  entry: ['./app.js', 'skyview'], // Incluez 'skyview' dans l'entrée
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  experiments: {
    topLevelAwait: true,
  },
};
