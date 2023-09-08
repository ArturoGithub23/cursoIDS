let people = [
  { id: 1, name: "bob" },
  { id: 2, name: "John" },
  { id: 3, name: "Alex" },
  { id: 4, name: "John" },
  { id: 5, name: "John" },
  { id: 6, name: "bob" },
  { id: 7, name: "Arturo" },
  { id: 8, name: "Pedro" },
];
function contar() {
  let contador = [];
  for (i = 0; i < people.length; i++) {
    if (contador.some((objeto) => objeto.name === people[i].name)) {
      let indice = contador.findIndex(
        (objeto) => objeto.name === people[i].name
      );
      contador[indice].cuenta += 1;
    } else {
      contador.push({
        name: people[i].name,
        cuenta: 1,
      });
    }
  }
  console.log(contador);
}
