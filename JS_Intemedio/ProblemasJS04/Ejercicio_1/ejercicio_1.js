var anObject = {
  foo: "bar",
  length: "interesting",
  0: "zero",
  1: "one!",
};

var anArray = ["zero", "one"];

//En el arreglo es el indice y en el objeto es la propiedad
console.log(anArray[0], anObject[0]);

//Lo mismo que en el caso anterior
console.log(anArray[1], anObject[1]);

//Lo mismo que en el caso anterior, nada más que con el arreglo muestra la longitud que tiene con lenght
console.log(anArray.length, anObject.length);

//Sale indefinido en un array porque no tiene la propiedad foo, los arreglos solo se manejan por indices, si contara con una propiedad ya sería un objeto
console.log(anArray.foo, anObject.foo);

//anArray es una instancia de la clase Array por lo que es un objeto porque cuenta con métodos para tratar la colección de datos. anObject es un objeto porque cuenta con propiedades.
console.log(typeof anArray == "object", typeof anObject == "object");

// true true, por lo mismo que comente en el anterior
console.log(anArray instanceof Object, anObject instanceof Object);

//true y false, igual lo comenté anArray es una instancia de la clase Array, anObject no porque no es un arreglo, es un objeto, por lo tanto es una instancia de la clase Object
console.log(anArray instanceof Array, anObject instanceof Array);

//Lo mismo que el anterior, nada más usando un método de la clase Array.
console.log(Array.isArray(anArray), Array.isArray(anObject));
