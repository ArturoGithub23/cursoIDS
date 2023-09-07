function metodosArray() {
  var array = ["a", "b", "c", "d", "e", "f"];
  console.log(array);

  array.copyWithin(5, 0, 1);
  console.log(array);

  array = ["a", "b", "c", "d", "e", "f"];
  console.log(array);

  array.copyWithin(3, 0, 3);
  console.log(array);

  array = ["a", "b", "c", "d", "e", "f"];
  array.copyWithin(2, 1, 2);
  console.log(array);

  array = ["a", "b", "c", "d", "e", "f"];
  array.copyWithin(2, 0, 2);
  console.log(array);

  array = ["a", "b", "c", "d", "e", "f"];
  array.copyWithin(1, 0, 2);
  console.log(array);
}
//metodosArray();

function ordenarArray() {
  var array = ["Alberto", "Ana", "Mauricio", "Bernardo", "Zoe"];
  console.log(array);

  array.sort();
  console.log(array);

  array.reverse();
  console.log(array);
}

ordenarArray();
