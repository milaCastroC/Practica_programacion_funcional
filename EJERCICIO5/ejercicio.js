// 5. Usa map para duplicar los números de un array y luego filter para obtener solo los
// mayores de 10.

const numeros = [1,2,3,4,5,6,7,8,9];

const ordenarYFiltrar = (array) => array.map(num => num * 2).filter(elemento => elemento > 10);

function obtenerMayores10(array, callback) {
    return callback(array);
}

let resultado = obtenerMayores10(numeros, ordenarYFiltrar);
console.log("El resultado es: ", resultado);