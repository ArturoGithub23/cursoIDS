//Programa imperativo: Especificación de lo que se tiene que hacer; como programar tus propios eventos
function intersection1(a, b) {
  var result = [];
  for (vari = 0; i < a.lenght; i++) {
    for (var j = 0; j < b.lenght; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }
  return result.sort();
}

/*
Funcional (declarativo); Javascript admite el paradigma declarativo funcional; es decir, obedece al modelo de càlculo lambda donde una función toma como parámetros otras funciones y retorna funciones como resultado. Cada función opera sobre sus datos y no depende de otra función, por lo cual no hay una secuencia de ejecución.
*/

//Programación funcional (declarativa).
function intersection2(a, b) {
  return a
    .filter(function (value) {
      return b.indexOf(value) > -1;
    })
    .sort();
}

const intersection = (a, b) =>
  a.filter((value) => b.indexOf(value) > -1).sort();

/*
Actualmente JS admite diferentes paradigmas de programación como;
  - Programación funcional
  - Programación oprientada a objetos
  - Programación procedutal o imperativa.

Como paradigma declarativo, la programación funcion delega el control de flujo a funciones.
Más características:
  - Dinámico: var x = ... (El tipo está asociado al valor)
  - Objetual: casi todo está formado por objetos.
  - Protitípico a clases: paso de ser un modelo prototípico al uso de clases para el manejo de herencia.
  - Funcional: las funciones en si mismo son objetos y poseen propiedades y métodos como .call() y .bid().
*/

/*
POO en JavaScript
La programación orientada a objetos, es el paradigma que basa su resolución de problemas en la creación de los llamados objetos; más cercana a como expresaríamos las cosas en la vida real.

Los objetos son abstracciones de cosas de la vida real con todas sus características (atributos) y funcionalidades ó comportamientos (métodos). Cada objeto tiene su propia identidad (lo que lo identifica del resto de objetos).

Conceptos;
- Clase
- Herencia
- Abstracción
- Polimorfismo
- Encapsulamiento
- Modularidad

Abstracción: la capacidad de representar las características específicas de un objeto. Un proceso de interpretación y diseño enfocandose en lo esencial. Modelar ibjetos de la vida real a la programación.

Clase: Define las características del objeto. La clase es el concepto abstracto de un objeto. es un modelo o prototipo; plantilla genérica para un conjunto de objetos de similares características

Objeto: Una instancia de una clase.
Propiedad o atributo: Una característica del objeto, como el color.
Mètodos: Comportamientos, conductas o una capacidad del objeto como caminar.
Constructor: Es un ,étodo llamado en el momento de la creación de unstancias. Se ejecuta automáticamente. Una clase solo puede tener un constructor, y en el caso de que no se especifique un constructor a una clase tendrá uno vació de forma implícita
*/

//Declaración de clase
/*
class Animal {
  //Método que se ejecuta al instanciar un objeto
  constructor() {
    console.warn("Ha nacido un pato.");
  }

  //Métodos estáticos
  static despedirse() {
    return "Adios";
  }

  //Métodos
  hablar() {
    return "Cuak";
  }
}

//Creación de una instancia u objeto
var pato = new Animal();
pato.hablar();

var donald = new Animal();
donald.hablar();
*/
/*
Método estático. no es necesario crear un objeto, sino que se pueden ejecutar directamente sobre la clase genérica. Se suelen utilizar para crear funciones de apoyo que realicen tareas concretas o genéricas.
*/

//Animal.despedirse();

/*
Las clases no se encuentran aisladas, sino que se relacionan entre sí, formando una jerarquía de clasificación. Los objetos heredan las propiedades y el comportamiento de todas las clases a las que pertenecen.

Herencia:
Heredan propiedades y métodos del objeto parent

Extends crea una subclase a partir de clases definidas (herencia)
*/

//Clase padre
class Forma {
  constructor() {
    console.log("Soy una forma geométrica.");
  }

  gritar() {
    console.log("YEP!!");
  }
}

//Clases hijas
class Cuadrado extends Forma {
  constructor() {
    super();
    console.log("Soy un cuadrado");
  }
}
class Circulo extends Forma {
  constructor() {
    super();
    console.log("Soy un círculo.");
  }
}
class Triangulo extends Forma {
  constructor() {
    super();
    console.log("Soy un triangulo");
  }
}

var c1 = new Cuadrado();
c1.gritar();

var t1 = new Triangulo();
t1.gritar();

//Sobrecarga (overloading) vs Sobrescritura (overridding)
class Padre {
  tarea() {
    console.log("Tarea del Padre...");
  }
  tarea(value) {
    console.log("Tarea del padre con valor [sobrecarga]: " + value);
  }
}
new Padre().tarea();

class Hijo extends Padre {
  //Sobreescritura
  tarea() {
    super.tarea();
    console.log("+ Tarea del hijo...");
  }
}

new Hijo().tarea();

/*
Encapsulamiento:
Consiste en ocultar la forma en que se almacena la información que determina el estado del objeto. Esto conlleva la obligación de que toda la interacción con el objeto se haga a través de ciertos métodos implementados con ese propósito (se trata de ocultar información irrelevante para quien utiliza el objeto). Las propiedades de un objeto sólo serán accesibles para consulta o modificación a través de sus métodos. (principio de ocultación)
*/

class Animal {
  constructor(n) {
    this.nombre = n;
  }
  get nombre() {
    return "Sr. " + this._nombre;
  }
  set nombre(n) {
    this._nombre = n.trim();
  }
  hablar() {
    return "Cuak";
  }
  quienSoy() {
    return "Hola, soy " + this.nombre;
  }
}

//Creación de objeto
var pato = new Animal("Donald");
console.log(pato.nombre);
pato.nombre = "Lucas";
console.log(pato.nombre);
console.log(pato.hablar());
console.log(pato.quienSoy());

/*
Modularidad:
Dividir un programa en módulos que puedan compilarse por separado sim embargo tendrá conexiones con otros módulos.
Criterios para valorar un diseño modular:
  - Cohesión: grado de relación entre los elementos de cada módulo
  - Acoplamiento: grado de interrelación entre los distintos módulos.

  ideal:
  Alta cohesión (responsabilidad única);
  Cada clase del sistema se refiere a una única entidad - puede describirse con un único nombre.
  Cada método realiza una única tarea

  Bajo acoplamiento (abierto/cerrado):
  Las clases son lo màs independientes posible entre sí.
  Cada clase tiene una parte pública pequeña y bien definida
*/

/* 
Polimorfismo
Definir clases diferentes que tienen métodos o atributos denominados de forma i´dentica, pero que se ocmportan de manera distinta. (Principio de sustitución).

Esto permite que las subclases tengan métodos con el mismo nombre que los de sus superclases pero con diferentes implementaciones.
*/

class Forma1 {
  dibujar() {
    console.log("dibujando forma...");
  }
  borrar() {
    console.log("borrando forma...");
  }
}
class Circulo1 extends Forma1 {
  dibujar() {
    console.log("Calculando diametro");
    console.log("Dibujando circulo");
    //hacerOtraCosa();
  }
  borrar() {
    console.log("borrando circulo...");
  }
  hacerOtraCosa() {
    console.log("haciendo otras cositas...");
  }
}
class Cuadrado1 extends Forma1 {
  dibujar() {
    console.log("Dibujando lado a..");
    console.log("Dibujando lado b..");
    console.log("Dibujando lado c..");
    console.log("Dibujando lado d..");
  }
  borrar() {
    console.log("borrando cuadrado");
  }
}
class Pantalla {
  mostrarFormas(forma) {
    forma.dibujar();
  }
  limpiarPantalla(forma) {
    forma.borrar();
  }
}

let circulo1 = new Circulo1();
let circulo2 = new Circulo1();
let cuadrado1 = new Cuadrado1();
let myPantalla = new Pantalla();

myPantalla.mostrarFormas(circulo1);
myPantalla.limpiarPantalla(circulo1);

myPantalla.mostrarFormas(circulo2);
myPantalla.limpiarPantalla(circulo2);

myPantalla.mostrarFormas(cuadrado1);
myPantalla.limpiarPantalla(cuadrado1);
