// 11. Escribe una función que use map y reduce para calcular el total de ventas en un
// array de objetos.
// const ventas = [ { producto: "A", cantidad: 10, precio: 2 }, { producto:
// "B", cantidad: 5, precio: 3 } ];

const ventas = [
    { producto: "A", cantidad: 10, precio: 2 },
    { producto: "B", cantidad: 5, precio: 3 }
];

function calcularTotalVentas(array) {
    return array.map(venta => venta.cantidad * venta.precio).reduce((total, venta) => total + venta, 0); 
}

let total = calcularTotalVentas(ventas);
console.log("El total de ventas es: ", total);
