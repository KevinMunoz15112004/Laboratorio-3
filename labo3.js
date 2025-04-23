// TAREA DESAFIO LABORATORIO 3
// Integrantes: Dany Mejia, Joshua Morocho, Kevin Muñoz

// VARIABLES PRIMITIVAS
// Información extraída del producto de sandalias en Temu

let precioSandalias = 7.49 // float
let descuento1 = 74 // int (porcentaje de descuento)
let precioOriginal = 29.77 // float
let colorElegido = "Verde" // string
let tallaUS = "10.5-11" // string
let envioGratis = true // booleano
let articuloMasVendido = true // booleano
let rating = 4.8 // float (valoración promedio)
let numeroResenias = 388 // int (cantidad de reseñas)
let nombreProducto = "Sandalias de PVC cómodas y de moda" // string
const codigoProducto = 10254879 // int (ID ficticio para simular un código de producto)
let disponibleColores = ["Blanco", "Negro", "Azul", "Verde"] // array de strings
let disponibleTallas = ["6.5-7", "7.5-8", "9.5-10", "10.5-11", "11.5-12"] // array de strings
let tienda = "Temu" // string
let ventas = 80000 // int (80K+ ventas aproximadas)

// Información extraída del producto de Pack de 2 Linternas LED recargables con USB y modos de luz
let precioLinterna = 4.68 // float
let precioOriginaldos = 14.60 // float
let descuentoLinterna = 67 // int (porcentaje)
let colorLinterna = "Negro" // string
let cantidad1 = 2 // int (número de linternas incluidas)
let valoracionPromedio = 4.9 // float
let numeroResenas = 172 // int
let numeroVentas = 2100 // int (ventas estimadas: 2.1K+)
let modosLuz = 6 // int (modos de iluminación)
let incluyeUSB = true // booleano
let nombreProductodos = "Linterna recargable LED multifuncional" // string
const idProducto = 8754321 // int (ID ficticio)
let disponibilidad = "En almacén local" // string
let envioGratisDisponible = true // booleano
let tiempoEntregaDias = 3 // int
let etiquetas = ["Emergencia", "Alta luminosidad", "Portátil", "COB", "USB-C"] // array de strings
let tipoOferta = "Compra 1 Lleva 1 Gratis" // string

// OBJETOS
// Se tomo 5 productos al azar de la categoria Instrumentos Musicales y se coloca cierta informacion

let detalleProductos ={
    categoria:"Instrumentos Musicales",
    instrumentos:[
        "Guitarra clasica de 38 pulgadas",
        "Cubiertas de microfono",
        "Cañas de saxofon",
        "Ganchos para guitarras",
        "Tambores de goma plegables"],
    rangoValoracion:[3.5,4.8],
    cantidad : 4,
    rangoPersonasValoracion:[85,250]
}
// Se tomo 2 productos de la categoria Belleza y Salud

let precios ={
    categoria: "Belleza y salud",
    productos:["Afeitadora electrica","Toalla de baño"],
    precios:[13.40,6.65],
    valorDescuento: 0.15
}

// STRINGS
// Producto 1
let nombreProducto1 = "estuche celular"
let precioProducto1 = 14.81
let estadoProducto1 = true
let color = "Azul"
console.log(`El producto ${nombreProducto.toUpperCase()} tiene un precio de $${precioProducto} y se encuentra ${estadoProducto} en color ${color}`)

// Producto 2
let nombreProducto2 = "guantes portero"
let precioProducto2 = 12.61
let estadoProducto2 = true
let color2 = ["Negro", " Verde", " Amarillo"]
console.log(`El segundo producto ${nombreProducto2.toUpperCase()} está ${estadoProducto2} con un precio de $${precioProducto2} en colores ${color2}`)

// Producto 3
let nombreProducto3 = "zapatos deportivos"
let precioProducto3 = 21.86
let estadoProducto3 = true
let color3 = "Blanco"
console.log(`El tercer producto ${nombreProducto3.toUpperCase()} se encuentra en estado ${estadoProducto3} a precio de $${precioProducto3} en colo ${color3}`)
// NUMEROS

let descuento = 0.15
let precioToalla = 6.65
let precioFinal=precioToalla -(precioToalla*descuento)

console.log(`Toalla de baño precio final: ${precioFinal} dolares.`) //Salida: 5.65

console.log(typeof(precioFinal))

let precioAfeitadora = 13.40;
let cantidad = 4;
let total = precioAfeitadora * cantidad;

console.log(`Total por ${cantidad} Afeitadoras electricas: ${total.toFixed(2)} dólares.`);

// BOOLEANOS
let boolean1 = precioProducto === precioProducto2
console.log(boolean1)

let boolean2 = estadoProducto2 === estadoProducto3
console.log(boolean2)

let boolean3 = nombreProducto.length === nombreProducto3.length
console.log(boolean3)

// COMPARACION ESTRICTA
let descuentoLinterna_comparacion = 67
let descuentoTexto = "67"
console.log(descuentoLinterna_comparacion == descuentoTexto) // TRUE - compara solo valor
console.log(descuentoLinterna_comparacion === descuentoTexto) // FALSE - número vs string

let colorSeleccionadoGorra = "Negro"
let colorDesdeFormulario = "negro"
console.log(colorSeleccionadoGorra == colorDesdeFormulario) // FALSE - mayúsculas importan
console.log(colorSeleccionadoGorra === colorDesdeFormulario) // FALSE - diferente valor y tipo (por mayúsculas)

// CONDICIONALES
// Producto 1
let mensaje1 = estadoProducto === true ? "El producto está disponible" : "El producto ya no está disponible"
console.log(mensaje1)

// Producto 2
let mensaje2 = color2.length === 1 ? "El producto cuenta con un solo color" : "El producto cuenta con varios colores"
console.log(mensaje2)

// Producto 3
let mensaje3 = precioProducto3 < 20 ? "El producto cuenta con descuento" : "El producto no tiene descuento"
console.log(mensaje3)
