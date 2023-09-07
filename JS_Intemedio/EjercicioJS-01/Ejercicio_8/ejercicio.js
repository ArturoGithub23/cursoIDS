function fswitch(valor = 1) {
  var value = valor;
  switch (value) {
    case 1:
      console.log("I will always run");
      break;
    case 2:
      console.log("I will never run");
      break;
  }
}

fswitch(2);
