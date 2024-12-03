// 9. Usa reduce para combinar las palabras de un array en una sola oración.
const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];

function combinar (array){
    return array.reduce((acumulador, palabra) => {
        return acumulador + " " + palabra;
    });
}

function combinarPalabras(array, callback){
    return callback(array)
}

let resultado = combinarPalabras(palabras, combinar);
console.log(resultado);