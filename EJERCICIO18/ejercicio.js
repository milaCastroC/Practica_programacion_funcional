// 18. Usa reduce para agrupar un arreglo de números en un objeto con las claves pares e
// impares, donde cada clave contiene un arreglo con los números correspondientes.
// Ejemplo: { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }

function agrupar(numeros) {
    return numeros.reduce(function(acumulador, numero) {
        if (numero % 2 === 0) {
            acumulador.pares.push(numero);
        } else {
            acumulador.impares.push(numero);
        }
        return acumulador;
    }, { pares: [], impares: [] }); 
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(agrupar(numeros)); 