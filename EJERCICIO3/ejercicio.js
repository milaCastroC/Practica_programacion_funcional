// 3. Escribe una función que use setTimeout con un callback para imprimir un mensaje
// después de 2 segundos.

function imprimirMensaje(mensaje, callback) {
    setTimeout(() => {
        callback(mensaje);
    }, 2000);   
}

let mensaje = (mensaje) => console.log(mensaje);
imprimirMensaje("Hola a todos", mensaje);