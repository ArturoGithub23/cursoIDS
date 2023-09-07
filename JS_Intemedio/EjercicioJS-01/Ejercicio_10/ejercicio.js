function john() {
  return "John";
}
function jacob() {
  return "Jacob";
}
function prueba(opcion) {
  let name;
  if (opcion === "1") {
    name = john();
  }
  if (opcion === "2") {
    name = "Jane";
  }
  if (opcion === "3") {
    name = john() + " " + jacob() + " Jingleheimer Shmidt";
  }
  switch (name) {
    case john():
      console.log('I will run if name === "John');
      document.formulario.resultado.value = 'I will run if name === "John';
      break;
    case "Ja" + "ne":
      console.log('I will run if name === "Jane"');
      document.formulario.resultado.value = 'I will run if name === "Jane"';
      break;
    case john() + " " + jacob() + " Jingleheimer Shmidt":
      console.log("His name is equl to name too!");
      document.formulario.resultado.value = "His name is equl to name too!";
      break;
  }
}
