// 4. Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente.

const nombres = ["Maria", "Camila", "Juan"];

const convertirYOrdenar = (array) => array.map(nombre => nombre.toUpperCase()).sort();

function convertirArreglo(array, callback) {
    return callback(array);
}

let resultado = convertirArreglo(nombres, convertirYOrdenar);
console.log("El arreglo convertido y ordenado es: ", resultado);

