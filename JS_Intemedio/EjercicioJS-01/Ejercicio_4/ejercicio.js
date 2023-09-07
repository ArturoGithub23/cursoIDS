//Genera una función e imprime en consola el resultado.
function imprimir(a = 0) {
  var a = a;
  var str = "not a";
  var b = "";
  b = a === 0 ? ((a = 1), (str += " test")) : (a = 2);
  console.log(a);
  console.log(b);
  console.log(str);
}

imprimir(1);
