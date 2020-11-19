/* Require es para consumir modulos de otro lado 
    var sumar = require('./sumar');
*/

const sumar = require('./sumar'); 
const multiplicar = require('./multiplicar');

//import sumar2 from './sumar';

console.log(sumar.sumar());

console.log(sumar.suma(6,9));

console.log(multiplicar.multiplica(5,6));



