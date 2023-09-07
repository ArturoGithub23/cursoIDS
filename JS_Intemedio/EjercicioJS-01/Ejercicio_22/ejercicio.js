function arreglos() {
  var a = [1, 2, 3, 8, 9, 10];
  console.log(a);
  console.log(a.slice(0, 3).concat([4, 5, 6, 7], a.slice(3, 6)));

  var b = [1, 2, 3, 8, 9, 10];
  console.log(b);
  b.splice(3, 0, ...[4, 5, 6, 7]);
  console.log(b);
}
arreglos();
