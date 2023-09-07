//Que regresa la siguiente función?
function f(x, y = 2, z = 7) {
  return x + y + z;
}
console.log("Resultado " + f(5, undefined));
