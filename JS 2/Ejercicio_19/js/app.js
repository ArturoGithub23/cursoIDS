function contarVocales() {
  let contador = 0;
  let vocales = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let palabra = document.formulario.palabra.value;
  if (palabra.length > 0) {
    for (letra of palabra) {
      for (i = 0; i < vocales.length; i++) {
        if (letra === vocales[i]) {
          contador++;
        }
      }
    }
  }
  document.formulario.resultadoVocales.value =
    "La palabra -" + palabra + "- tiene " + contador + " vocales";
}

function contarPalabras() {
  let palabras = [];
  let cadena = new String();
  cadena = document.formulario.palabra.value;
  if (cadena.length > 0) {
    palabras = cadena.split(" ");
    document.formulario.resultadoPalabras.value =
      "La cadena tiene un total de " + palabras.length + " palabras";
  }
}
