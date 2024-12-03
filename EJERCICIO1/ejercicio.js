// 1. Escribe una función sumar que reciba dos números y un callback. El callback debe
// ser ejecutado con el resultado de la suma.

const suma = (a, b) => a + b;

function sumar(a, b, callback){
    return callback(a, b);
}

let resultado = sumar(4, 5, suma);
console.log("El resultado de la suma es: ", resultado);