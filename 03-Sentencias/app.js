// /*============================================
// Sentencias condicionales
// */
// var nombre = "Luis";
// var edad = 60;

// //edad < 12, es un nino
// //edad > 11, es < 18 es un adolescente
// //edad > 17, es < 60 es un adulto
// //edad > 60, es un anciano

// if (edad < 12) {
//   console.log(nombre + "es un nino");
// } else if (edad > 11 && edad < 18) {
//   console.log(nombre + "es un adolescente");
// } else if (edad > 17 && edad < 60) {
//   console.log(nombre + "es un adulto");
// } else {
//   console.log(nombre + "es un anciano");
// }

// /*============================================
// Operador Ternario
// */
// var nombre = "Luis";
// var edad = 19;

// edad >= 18
//   ? console.log(nombre + " es mayor de edad")
//   : console.log(nombre + " NO es mayor de edad");

// /*============================================
// Sentencia Switch
// */

// var mes = 3;
// switch (mes) {
//   case 1:
//     console.log("Enero");
//     break;
//   case 2:
//     console.log("Febrero");
//     break;
//   case 3:
//     console.log("Marzo");
//     break;
//   case 4:
//     console.log("Abril");
//     break;
//   default:
//     console.log("Mes no Considerado");
// }

// /*============================================
// Bucles
// For
// While
// Do..While
// */

// //For;
// for (var i = 0; i < 11; i++) {
//   console.log(i);
// }

// //While
// var i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// //Do..While
// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);

// /*============================================
// Variables con coersion
// */

var edad = "10";
if (edad == 10) {
  console.log("Variable con Coersion");
} else {
  console.log("Variable SIN coersion");
}

var edad = "11";
if (edad === 10) {
  console.log("Variable con Coersion");
} else {
  console.log("Variable SIN coersion");
}
