// 17. Usa reduce para eliminar duplicados de un array
// const numeros = [1, 2, 2, 3, 4, 4, 5];
const numeros = [1, 2, 2, 3, 4, 4, 5];

function eliminarDuplicados(numeros) {
    return numeros.reduce(function(acumulador, numero) {
        if (!acumulador.includes(numero)) {
            acumulador.push(numero);
        }
        return acumulador;
    }, []);
}


console.log(eliminarDuplicados(numeros));
