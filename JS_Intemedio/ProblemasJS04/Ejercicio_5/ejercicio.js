class MyClass {
  constructor() {
    this.names_ = [];
  }
  set name(value) {
    this.names_.push(value);
  }
  get name() {
    return this.names_[this.names_.length - 1];
  }
}

const myClassInstance = new MyClass();
myClassInstance.name = "Joe";
myClassInstance.name = "Bob";

//Cual es el resultado de ejecutar las siguientes sentencias y porque?
console.log(myClassInstance.name); //Aquí regresa el último nombre insertado por el método get
console.log(myClassInstance.names_);
//Aquí regresa muestra el arreglo names_
