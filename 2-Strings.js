var nombreCompleto = "Miguel Jiménez";
var ciudadDomicilio = 'Estado de México';
var fechaNacimiento = "06 de octubre de 2000";
var diaIndependenciaPais = "15/09/1810"


// Maneras de concatenar saltos de linea //
var fichaTecnicaModo1 = "Modo 1\n\
Nombre del productor\n\
Código del producto\n\
Valor";

var fichaTecnicaModo2 = "Modo 2\n"+
"Nombre del producto\n"+
"Código del producto\n"+
"Valor";

var fichaTecnicaModo3 = `Modo 3:
Nombre del producto
Codigo del producto
Valor`;


console.log(nombreCompleto.toLowerCase());// Para minusculas
console.log(ciudadDomicilio.toUpperCase());// Para mayusculas
console.log(fechaNacimiento.length); // longitud


// console.log(fichaTecnicaModo1);
// console.log(fichaTecnicaModo2);
// console.log(fichaTecnicaModo3);