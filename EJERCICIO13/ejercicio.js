// 13. Usa reduce para aplanar un array de arrays en uno solo nivel.
// const arrays = [[1, 2], [3, 4], [5, 6]];
// console.log(plano); // [1, 2, 3, 4, 5, 6]

const arrays = [[1, 2], [3, 4], [5, 6]];

function aplanar(array) {
    return array.reduce(function(acumulador, subArray) {
        for (let i = 0; i < subArray.length; i++) {
            acumulador.push(subArray[i]); 
        }
        return acumulador;
    }, []);
}

var plano = aplanar(arrays);
console.log(plano);