// 8. Usa every para verificar si todos los números en un array son positivos.
const numeros = [1,2,3,4,5,6,7,8,9];

const todosPositivos = numeros.every((num) => num > 0);
console.log("Verificación de positivos: ", todosPositivos);

//Ejercicio extra
const todosImpares = numeros.every((num) => num % 2 !== 0);
console.log("Verificación de impares: ", todosImpares);