function imprimirSerie(salto, hasta) {
  for (i = 0; i < hasta; i += salto) {
    console.log(i);
  }
}
imprimirSerie(2, 100);
