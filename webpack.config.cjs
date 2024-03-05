const path = require('path');

module.exports = {
  mode: 'development', // Définir le mode de construction
  entry: './app.js', // Point d'entrée de votre application
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'bundle.js' // Nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Appliquer ce loader aux fichiers .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Utiliser babel pour transpiler le code
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      // Vous pouvez ajouter d'autres loaders pour gérer les CSS, les images, etc.
    ]
  }
};
