//Examinando el DOM

// console.dir(document);
// console.log(document.URL);
// document.title = "Prueba";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms[0]);

//getElementById
// //console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// //console.log(header);
// headerTitle.textContent = "Hola";
// headerTitle.innerText = "Adios";
// headerTitle.innerHTML = "<h3>Prueba</h3>";

//getElementsByClassName
// var items = document.getElementsByClassName("list-group-item");
// console.log(items[3]);
// items[0].textContent = "Encabezado de Items";

//getElementsByTagName
// var items = document.getElementsByTagName("li");
// items[2].textContent = "Item index 02";

//===========================================================
//querySelector
var header = document.querySelector("#main-header");
header.style.border = "solid 4px #000";
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hola Mundo";

var submit = document.querySelector('input[type="submit"]');
submit.value = "Enviar";

var item = document.querySelector(".list-group-item");
item.style.color = "red";
