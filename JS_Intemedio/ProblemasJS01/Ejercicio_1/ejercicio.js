window.onload = function () {};

//Tiene dos arreglos de String, ‘clientes’ y ‘empleados’, y deseas combinarlas para crear una arreglo de contactos. ¿Qué método sería el más adecuado para esta tarea? Prueba todas las opciones y describe el resultado.

var clientes = [
  {
    nombre: "Pablo",
    celular: "555555555",
  },
  {
    nombre: "Irma",
    celular: "555555555",
  },
  {
    nombre: "Paola",
    celular: "555555555",
  },
  {
    nombre: "Alfredo",
    celular: "555555555",
  },
  {
    nombre: "Manuel",
    celular: "555555555",
  },
];
var empleados = [
  {
    nombre: "Fernando",
    celular: "555555555",
  },
  {
    nombre: "Estela",
    celular: "555555555",
  },
  {
    nombre: "Nancy",
    celular: "555555555",
  },
  {
    nombre: "Lorena",
    celular: "555555555",
  },
  {
    nombre: "Alberto",
    celular: "555555555",
  },
];

//Regresa un array concatenando los arreglos clientes y empreados
var contactos = clientes.concat(empleados);
console.log(contactos);

//Join separa los elementos con el signo que se le pase a la función
var join = clientes.join("/");
console.log(join);

//Push añade al final del array un elemento

//splice modifica el array
