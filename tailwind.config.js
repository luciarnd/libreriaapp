/* Load Desy tailwindcss config */
const defaultConfig = require('./node_modules/desy-html/config/tailwind.config.js');

module.exports = {
  /* Use the Desy default config */
  ...defaultConfig,
  /* Change PurgeCSS files to add DESY AND this project's files */
  purge: {
    enabled: true,
    mode: 'layers',
    layers: [ 'base', 'components', 'utilities' ],
    content:[
      './node_modules/desy-angular/**/*.js',
      './src/**/*.html',
      './src/**/*.ts'
    ],
    options: {
      safelist: [
        'dev'
      ],
    }
  }
};