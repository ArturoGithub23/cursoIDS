//Elementos básicos
var x = 5;
var y = "Hola";
var Manz = "me";

//constantes
const CONSTANTE = "Valor";

//Typeof() devuelve el tipo de dato de la variable

var s = "hola";
var n = 42;
var b = true;
var u;

console.log(typeof s); // "string"
console.log(typeof n); // "number"
console.log(typeof b); // "boolean"
console.log(typeof u); // "undefined"
console.log("\n");
//definición de funciones
function saludar() {
  console.log("Hola, soy una función");
}
//Ejecución de la función
saludar();
console.log("\n");
//Parametros o argumentos
function tablaMultiplicar(tabla, hasta) {
  for (i = 0; i <= hasta; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
  }
}
//Ejecución
tablaMultiplicar(1, 10); //tabla del 1
console.log("\n");
tablaMultiplicar(5, 10); //tabla del 5
console.log("\n");
//Parametros con valores por default
function tablaMultiplicar(tabla, hasta = 10) {
  for (i = 0; i <= hasta; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
  }
}
console.log("\n");
//Ejecución
tablaMultiplicar(2); //esta tabla llegará hasta el número 10

tablaMultiplicar(2, 15); //esta tabla llegará hasta el numero 15
console.log("\n");
//Devolución de valores
function sumar(a, b) {
  console.log("Ya he realizado la suma de a " + a + " y b " + b);
  return a + b; //Devolvemos la suma de a y b al exterior de la función
}

//Ejecución
var resultado = sumar(10, 10);
console.log("igual a " + resultado);

//Estructuras de control
function errores() {
  try {
    function_que_no_existe();
  } catch (ex) {
    console.log("Error detectado: " + ex.description);
  }
  console.log("Continua con la función despuès del error");
}
console.log("\n");
//Ejecución
errores();

console.log("\n");
//Ámbitos de variables y scopes
//Método 1: Declaración de variables de forma independiente
var a = 3;
var b = 2;
var c = 1;

//Método 2: Declaración masiva de variables con el mismo var
var a = 3,
  b = 2,
  c = 1;

console.log(a); //Aquí accedemos a la "a" global, que vale 1

function xx() {
  console.log(a); //En esta línea el valo de "a es undefined"
  var a = 5; //Aquí creamos una variable "a" a nivel de función

  console.log(a); //Aquí el valo de "a" es 5 (a nivel de función)
  //console.log(window.a); //Aquí el valor de "a" es 1 (ámbito global)
}

xx(); //Aquí se ejecuta el código de la función x()
console.log(a); //En esta línea el valor de "a" es 1

console.log("\n");

//Ámbito local y global con let
//Opción 1: Bucle con let
console.log("Antes: ", p);
for (let p = 0; p < 3; p++) {
  console.log("- ", p);
}
console.log("Después: ", p);

//Opción 2: bucle con var
console.log("Antes; ", p);
for (var p = 0; p < 3; p++) {
  console.log("- ", p);
}
console.log("Después: ", p);

console.log("\n");

//function foo
function foo() {
  if (true) {
    let j = 1;
  }
  //console.log(j); //ReferenceError: i is not defined
}
foo();

console.log("\n");

//No podemos compararlo literalmente con NaN
var num = NaN;
//La siguiente operación, contra toda lógica, es falsa
num == NaN;

//Se debe usar Number.isNaN() para comprobar si el valor es NaN
Number.isNaN(num);

//Si comprobamos el tipo de dato de NaN, nos dirà que es númeri
typeof num;

console.log("\n");

//Definición de objetos
var objeto = new Object(); // Esto es un objeto <<generico>> vacío

//Se prefiere utilizar las literales para crear objetos
var objeto2 = {};

//Declaración: Variables dentro de los objetos se suelen denominar propiedades.
var player = {
  name: "texto",
  life: 99,
  strength: 10,
};

//Notación con puntos
console.log(player.name);
console.log(player.life);

//Notación con corchetes
console.log(player["name"]);
console.log(player["life"]);

//Añadir propiedades con notación con puntos
player.name = "otro nombre";
player.life = 100;
player.strength = 20;

//Añadir propiedades con notación con corchetes
player["name"] = "cambio de nombre";
player["life"] = 50;
player["strength"] = 100;

console.log("\n");
//Herencia de mètodos y propiedades. Object
var o = {};
o.toString(); //Devuelve '[object Object] (Un objeto de tipo Objero)

var s = "hola";
s.toString(); //Devuelve 'hola'
console.log("\n");

//Objeto string
//Literales
var texto1 = "Hola a todos";
var tyexto2 = "Otro mensaje de texto";

//Objeto
var texto3 = new String("hola a todos");
var texto4 = new String("Otro mensaje de texto");

console.log(texto4);
console.log("CharAr posición 1 " + texto4.charAt(1));

console.log("\n");
console.log(texto3.concat(" ", texto4));
console.log(texto4.indexOf("mensaje"));
console.log(texto4.startsWith("de", 13));
console.log(texto4.search("tex"));
console.log(texto4.substring(1, 10));
console.log("\n");

//Objeto Array
//Forma tradicional
var array = new Array("a", "b", "c");

//Mediante literales (preferida)
var array = ["a", "b", "c"]; // Array con 3 elementos
var empty = []; //Array vacío (0 elementos)
var mixto = ["a", 5, true]; // Array mixto (string, number, boolean)
console.log("\n");

var aa = new Array(3); // Se crea un arreglo con 3 espacios undefined
for (item of aa) {
  console.log(item);
}
console.log(aa);
var bb = [2];
console.log(bb);

console.log("\n");

var arrayEjemplo = ["a", "b", "c"];
array[0]; //'a'
array[2]; //'c'
array[5]; //undefined

console.log("\n");

var arreglo1 = ["a", "b", "c"];
console.log(arreglo1);
arreglo1.push("d");
console.log(arreglo1);
console.log(arreglo1.pop());

arreglo1.unshift("z");
console.log(arreglo1);
arreglo1.shift();
console.log(arreglo1);

var arreglo2 = [1, 2, 3];
console.log(arreglo2);
arreglo2.push(4, 5, 6);
console.log(arreglo2);
arreglo2.push([7, 8, 9]);
console.log(arreglo2);

var arreglo3 = [1, 2, 3];
arreglo3 = arreglo3.concat(4, 5, 6);
arreglo3 = arreglo3.concat(7, 8, 9);
console.log(arreglo3);

console.log("\n");
//mas métodos de array
var array4 = ["a", "b", "c", "d", "e"];

//slice() no modifica el array
console.log(array4.slice(2, 4));
console.log(array4);

//splice() si modifica el array
//console.log(array4.splice(2, 2));
console.log(array4);
array.splice(0, 1, "z", "x");
console.log(array4);
console.log(Array.isArray(array4));
console.log(array4.includes("b"));

console.log("\n");

array = [1, 8, 2, 32, 9, 7, 4];
array.sort();
console.log(array);

//Funcion de conparación para ordenación natural
var fc = function (a, b) {
  return a - b;
};
console.log(array.sort(fc));

console.log("\n");
var arr = [2, 3, 9, 54, 6, 1];
var f = function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};
console.log(arr);
console.log(arr.sort(f));
