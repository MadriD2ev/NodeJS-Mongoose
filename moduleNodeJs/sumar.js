/* Creando nuestro primer modulo en NodeJs, exportar el modulo para que pueda ser
    utilizado en otros modulos */

var sumarDosMasDos = function(){
    return 2+2;
}

/* Es lo mismo uno o el otro
    exports.sumarDosMasDos = sumarDosMasDos;
    exports.sumar = sumarDosMasDos;
*/

exports.sumar = sumarDosMasDos;

//export const sumar = sumarDosMasDos;

/* SE APLICA DIRECTAMENTE A LA EXPORTACION*/

exports.suma = function(numero1, numero2){
    return numero = numero1 + numero2;
}