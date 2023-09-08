var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 32,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

var menoresDe = people.filter(function (r) {
  return r.age < 35;
});

console.log(menoresDe);
