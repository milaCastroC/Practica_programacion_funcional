// 10. Usa map para extraer un campo específico de un array de objetos y convertirlo en
// un nuevo array.
// const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];
// console.log(nombres); // ["Ana", "Juan", "Luisa"]

const usuarios = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luisa" }];

function extraerInfo(array){
    return array.map(usuario => usuario.nombre);
}

let nombres = extraerInfo(usuarios);
console.log(nombres);