// 14. Crea una función que reciba un array de números y aplique diferentes operaciones
// (multiplicar, dividir, sumar) según condiciones definidas en un callback.

function aplicarOperacion(numeros, callback) {
    return numeros.map(function(numero) {
        return callback(numero);
    });
}

function operacionConCondiciones(numero) {
    if (numero % 2 === 0) {
        return numero * 2; 
    } else if (numero % 2 !== 0) {
        return numero / 2;
    } else if (numero >= 3) {
        return numero + 5; 
    }
    return numero; 
}

const numeros = [1, 2, 3, 4, 5];

let resultado = aplicarOperacion(numeros, operacionConCondiciones);
console.log("Resultado con operaciones: ", resultado);

