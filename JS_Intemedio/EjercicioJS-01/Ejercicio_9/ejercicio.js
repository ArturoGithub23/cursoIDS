function casoAnimal(entrada) {
  /*
  let palabra = new String();
  let primetaLetra, restante, animal;
  palabra = entrada;
  primetaLetra = palabra.charAt(0).toUpperCase();
  restante = palabra.slice(1);
  animal = primetaLetra + restante;
  */
  let animal = entrada;
  console.log(entrada);

  switch (animal) {
    case "Dog":
    case "dog":
      console.log('I will not run since anima !== "Dog"');
      break;
    case "Cat":
    case "cat":
      console.log('I will not run since anumal !== "Cat"');
      break;
    default:
      console.log("I will run since animal does not match any other case");
  }
}

function iniciar() {
  let animal = window.prompt("Introduce un animal");
  casoAnimal(animal);
}
