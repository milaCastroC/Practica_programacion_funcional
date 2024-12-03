// Hacer una función de orden superior que reciba una string y un callback , y retorne la longitud del string pasado

const cantidadString = (palabra) => palabra.length;

function medirLongitud(palabra, callback){
    const longitud = callback(palabra);
    return longitud;
}

let resultado =  medirLongitud("Hola", cantidadString)

console.log("La longitud de la cadena es: ", resultado);