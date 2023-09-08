var object = {
  key1: 10,
  key2: 3,
  key3: 40,
  key4: 20,
};

function arregloOrdenado(object) {
  let array = Object.values(object).sort((a, b) => a - b);
  return array;
}

console.log(arregloOrdenado(object));
