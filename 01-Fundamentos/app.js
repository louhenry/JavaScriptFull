// var primerNombre = "Luis";
// console.log(primerNombre);

// var edad = 37;
// console.log(edad);

// var sueldo = 12345.67;
// console.log(sueldo);

// var trabajo = true;
// console.log(trabajo);

// var puestoTrabajo;
// puestoTrabajo = null;
// console.log(puestoTrabajo);

//----------------------------------------------------------

// var primerNombre, edad, sexo, mensaje;

// primerNombre = "Luis";
// edad = 37;

// // mensaje = `Mi nombre es ${primerNombre}`;

// console.log("Mi nombre es: " + primerNombre + ", edad: " + edad);

//----------------------------------------------------------

// var primerNombre, edadPersona1, edadPersona2, suma, resta, soltero;

// primerNombre = "Luis";
// edadPersona1 = 12;
// edadPersona2 = 24;
// soltero = false;

// suma = edadPersona2 + edadPersona1;
// resta = edadPersona2 - edadPersona1;

// console.log(suma);
// console.log(resta);

// console.log(typeof primerNombre);
// console.log(typeof suma);
// console.log(typeof soltero);

// //operadores
// console.log(edadPersona1++);
// console.log(++edadPersona2);

//----------------------------------------------------------

//Se tiene los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Utilizar la siguiente formula para calcular el IMC (Índice de masa corporal) de Luis y de Carlos, 
  IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos 
  es superior al de Luis.*/
//Solucion:
var IMCLuis = pesoLuis / (alturaLuis * alturaLuis);
var IMCCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

var comparacion = IMCCarlos > IMCLuis;

console.log("IMC de Carlos:" + IMCCarlos);
console.log("IMC de Luis:" + IMCLuis);

console.log("¿El IMC de Carlos, es Superior al de Luis?:" + comparacion);
