// 15. Usa reduce para contar cuántas veces aparece cada palabra en un array y devolver
// un objeto con las frecuencias.
// const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
// console.log(contarPalabras(palabras)); // { hola: 3, mundo: 2, javascript: 1 }

function contarPalabras(palabras) {
    return palabras.reduce(function(acumulador, palabra) {
        if (acumulador[palabra]) {
            acumulador[palabra]++;
        } else {
            acumulador[palabra] = 1;
        }
        return acumulador;
    }, {});
}

const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
console.log(contarPalabras(palabras)); 
