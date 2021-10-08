// function bienvenido() {
//   return "Bienvenido";
// }

// var mensaje = bienvenido();

// console.log(mensaje);

//==============================================
//Partes de una Funcion
// Entradas(Argumento), Codigo, return Salida

// function cuadradoNumero(numero) {
//   var resultado = numero * numero;
//   return resultado;
// }

// var num = 3;
// var valor = cuadradoNumero(num);
// console.log(valor);

//==============================================
//Funcion Fahrenheit a Celcius
// function converteFaC(gradosF) {
//   var celcius = (gradosF - 32) * (5 / 9);
//   return celcius;
// }

// var totalCelcius = converteFaC(32);
// console.log(totalCelcius);
// var totalCelcius = converteFaC(68);
// console.log(totalCelcius);

//==============================================
//Funciones con Expresiones

// var prueba = function (nombre) {
//   return "Hola " + nombre;
// };

// console.log(prueba("Luis"));

//==============================================
//Argumentos por default
// var sumar = function (a, b, c = 3) {
//   return a + b + c;
// };
// console.log(sumar(4, 4));

// var sumar2 = function (a, b, c = 3) {
//   return a + b + c;
// };
// console.log(sumar2(4, 4, 4));

// //null no lo toma, o si como cero
// var sumar3 = function (a = 3, b = 3, c = 3) {
//   return a + b + c;
// };
// console.log(sumar3(4, null, 4));

//==============================================
//Plantillas de Cadena
var nombre = "Luis";
console.log(`El nombre es ${nombre}`);

var a = 5;
var b = 4;
console.log(`La suma es ${a + b}`);
