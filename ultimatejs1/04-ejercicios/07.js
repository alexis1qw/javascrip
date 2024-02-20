function precioCompleto(precio, impuestos) {
return precio + precio * impuestos;
}

let resultado = precioCompleto(19.90, 0.15)
console.log(resultado)