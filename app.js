

const { crearArchivo } = require('./helpers/multiplicar.js');

const argv = require('./config/yargs');

require('colors');

console.clear();



console.log( argv );


//*const base = 3;

crearArchivo( argv.b, argv.l, argv.h )
    .then( ( nombreArchivo) => console.log(`${nombreArchivo.rainbow}`, 'creado'))
    .catch ( err => console.log(err));


