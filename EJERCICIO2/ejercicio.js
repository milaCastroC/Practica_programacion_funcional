// 2. Crea una función aplicarOperacion que reciba un número y un callback. La función
// debe ejecutar el callback pasándole el número.

const elevarCuadrado = (a) => a*a;

function aplicarOperacion(numero, callback){
    let transformacion = callback(numero);
    return transformacion;
}

let resultado = aplicarOperacion(5, elevarCuadrado);