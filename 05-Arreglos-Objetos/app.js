//==============================================
//Arreglos

// var nombre = ["Luis", "Enrique", "Arturo", "Laura"];
// var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

// console.log(nombre[2]);
// console.log(vegetales[1]);

// console.log(nombre.length);

//==============================================
//Operaciones con Arreglos

// var frutas = ["pera", "manzana", "uva", "sandia"];
// console.log(frutas);

// for (var i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// frutas.forEach(function (elemento, indice, array) {
//   console.log(elemento, indice);
// });

// frutas.push("naranja");
// console.log(frutas);
// frutas.unshift("fresa");
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// var pos = frutas.indexOf("uva");
// console.log(pos);

// frutas.splice(1, 1);
// console.log(frutas);

//==============================================
//Arreglos con elementos de diferentes tipos

// var persona = ["Luis", "Gomez", 37, "99.99", 1.7];
// console.log(persona);

//==============================================
//Objetos Literales

// var persona = {
//   nombre: "Luis",
//   apellidoPat: "Gomez",
//   gustos: ["cine", "fotografia", "viajes"],
//   trabajo: "Desarrollador",
//   esCasado: true,
// };
// console.log(persona);
// console.log(persona.apellidoPat);
// console.log(persona["trabajo"]);

// persona.trabajo = "Dev";
// console.log(persona.trabajo);

//==============================================
//Objetos Object

// var persona = new Object();
// persona.nombre = "Luis";
// persona.apellido = "Gomez";
// persona["trabajo"] = "Developer";

// console.log(persona);

//==============================================
//Objetos y Metodos

var persona = {
  //propiedades
  nombre: "Luis",
  apellidoPat: "Gomez",
  gustos: ["cine", "fotografia", "viajes"],
  trabajo: "Desarrollador",
  esCasado: true,
  yearNacimiento: 1984,
  //metodos
  calcularEdad: function () {
    this.edad = 2021 - this.yearNacimiento;
  },
};

persona.calcularEdad();
console.log(persona);
