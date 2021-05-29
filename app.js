const {crearTabla} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors')


console.clear();

crearTabla(argv.b, argv.l, argv.h)
    .then (nombreTabla => console.log(colors.green(nombreTabla, 'creado \n')))
    .catch(err => console.log(err.red));






