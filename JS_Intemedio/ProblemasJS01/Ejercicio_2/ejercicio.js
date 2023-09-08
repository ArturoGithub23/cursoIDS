var numbers = [5, 32, 43, 4];
var resultado = numbers.filter(function (n) {
  return n % 2 !== 0;
});
//EL filter retorna los valores que no son divisibles entre 2
console.log(resultado);
