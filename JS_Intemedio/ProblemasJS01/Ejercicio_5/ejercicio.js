var myArray = [21, 1, 3, 2, 4, 10];

function menorMayor(arreglo = []) {
  var menor = arreglo[0];
  var mayor = arreglo[0];

  for (i = 1; i < arreglo.length; i++) {
    if (mayor > arreglo[i]) {
      if (menor > arreglo[i]) {
        menor = arreglo[i];
      }
    } else {
      mayor = arreglo[i];
    }
  }

  console.log("El número menor es: " + menor);
  console.log("El número mayor es: " + mayor);
}

menorMayor(myArray);
