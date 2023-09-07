function busquedaArreglo() {
  var array = [5, 10, 15, 20, 25];

  console.log("Arreglo " + array);

  console.log("array es un arreglo? " + Array.isArray(array));
  console.log("Se encuentra el número 10 en el arreglo? " + array.includes(10));
  console.log(
    "Se encuentra el número 10 después del índice 2? " + array.includes(10, 2)
  );
  console.log(
    "Indice en el que se encuentra el número 25 " + array.indexOf(25)
  );
  console.log(array.lastIndexOf(10, 0));
}

busquedaArreglo();
