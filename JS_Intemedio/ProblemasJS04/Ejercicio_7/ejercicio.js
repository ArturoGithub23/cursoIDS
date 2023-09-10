class Queue {
  constructor() {
    const list = [];
    this.enqueue = function (type) {
      list.push(type);
      return type;
    };
    this.dequeue = function () {
      return list.unshift();
    };
  }
}

var q = new Queue();
//Se agregan elementos en list
q.enqueue(9);
q.enqueue(8);
q.enqueue(7);
//Con unshift retorna la longitud de list
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
//Podemos ver el objeto 2 y sus funciones
console.log(q);
//Con Object.keys() podemos ver las propiedades y/o métodos del objeto
console.log(Object.keys(q));
