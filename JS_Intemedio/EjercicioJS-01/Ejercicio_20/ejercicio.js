function foo() {
  var a = "hello";
  function bar() {
    var b = "world";
    console.log("1 " + a);
    console.log("2 " + b);
  }
  bar();
  console.log("3 " + a);
  console.log("4 " + b);
}

foo();
console.log("5 " + a);
console.log("6 " + b);
