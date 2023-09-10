class Person {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }
  get firstname() {
    return this._firstname;
  }
  get lastname() {
    return this._lastname;
  }
  set firstname(value) {
    this._firstname = value;
  }
  set lastname(value) {
    this._lastname = value;
  }
}

let person = new Person("John", "Doe");
console.log(person.firstname, person.lastname);

person.firstname = "Foo";
person.lastname = "Bar";
console.log(person.firstname, person.lastname);
