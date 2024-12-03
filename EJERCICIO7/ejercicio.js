// 7. Escribe una función que reciba un string y use forEach para imprimir cada letra en
// una nueva línea.

function imprimirLetra(palabra){
    let palabraModificada = palabra.split('');
    palabraModificada.forEach(letra => {
        console.log(letra);
    });
}

imprimirLetra("Hola");