const classInsatance = new (class {
  get prop() {
    return 5;
  }
})();

//Cual es el resultado de ejecutar las siguientes sentencias y porque?
classInsatance.prop = 10;
console.log(classInsatance.prop);

//Da 5 porque en la parte de classInstance.prop = 10 lo que se está haciendo es pasar como parametro en el método prop() el valor de 10, no se está procesando ese valor y retorna 5.
