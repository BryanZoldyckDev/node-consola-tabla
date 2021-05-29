const colors = require('colors')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: colors.green('Es la base de la tabla de multiplicar'),
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: colors.green('Muestra la tabla en consola'),
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: colors.green('Establece el número hasta el que se establecerá la tabla'),
    })
    .check((argv, options) => {
        if ( isNaN(argv.b)){
            throw colors.red('La base tiene que ser un número')
        }else if (isNaN(argv.h)){
            throw colors.red('El limite de la tabla debe ser un número')
        };
        return true;
    })
    .argv;

module.exports = argv;