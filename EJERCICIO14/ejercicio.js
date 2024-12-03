// 14. Crea una función que reciba un array de números y aplique diferentes operaciones
// (multiplicar, dividir, sumar) según condiciones definidas en un callback.
const numeros = [1, 2, 3, 4, 5];

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function aplicarOperacion(numeros, operacion, base) {
    return numeros.map(numero => operacion(numero, base));
}

console.log(aplicarOperacion(numeros, sumar, 10));
console.log(aplicarOperacion(numeros, restar, 1));
console.log(aplicarOperacion(numeros, multiplicar, 2));
console.log(aplicarOperacion(numeros, dividir, 2));