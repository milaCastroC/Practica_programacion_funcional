// 12. Usa reduce para agrupar palabras en un objeto según su longitud.
// const palabras = ["hola", "adiós", "sol", "estrella"];
// console.log(agrupado); // {4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"]}

const palabras = ["hola", "adiós", "sol", "estrella"];

function agruparPorLongitud(array){
    return array.reduce((agrupado, palabra) =>{
        const longitud = palabra.length;
        if (!agrupado[longitud]) {
            agrupado[longitud] = [];
        }

        agrupado[longitud].push(palabra);
        return agrupado;
    }, {});
}

let agrupado = agruparPorLongitud(palabras);
console.log(agrupado);