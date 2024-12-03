// 6. Usa map para convertir todas las cadenas en un array a mayúsculas.
// console.log(convertirAMayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]

const convertir = (array) => array.map(palabra => palabra.toUpperCase());

function convertirAMayusculas(array, callback) {
    return callback(array);
}

console.log(convertirAMayusculas(["hola", "mundo"], convertir)); 