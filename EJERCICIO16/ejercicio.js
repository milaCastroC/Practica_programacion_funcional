// 16. Crea una función que reciba un array de objetos con propiedades precio y cantidad y
// devuelva un nuevo array con los precios totales (precio × cantidad) solo de los
// productos cuya cantidad sea mayor que 10.
// const productos = [ { precio: 5, cantidad: 15 }, { precio: 10, cantidad: 5 }, { precio: 8,
// cantidad: 20 } ];
// console.log(calcularTotales(productos)); // [75, 160]
const productos = [
    { precio: 5, cantidad: 15 },
    { precio: 10, cantidad: 5 },
    { precio: 8, cantidad: 20 }
];

function calcularTotales(productos) {
    return productos.filter(function(producto) {
            return producto.cantidad > 10;  
        }).map(function(producto) {
            return producto.precio * producto.cantidad;
        });
}

console.log(calcularTotales(productos));
