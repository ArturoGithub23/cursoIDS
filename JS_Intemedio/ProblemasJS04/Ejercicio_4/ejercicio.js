let zero = 0;
function multiply(x) {
  return x * 2;
}

function add(a = 1 + zero, b = a, c = b + a, d = multiply(c)) {
  console.log(a + b + c, d);
}

//a = 1, b = 1, c = 2, d = 2 * 2
add(1); // 4 4

//a = 3, b = 3, c = 6, d = 6 * 2
add(3); // 12 12

//a = 2, b = 7, c = 9, d = 9 * 2
add(2, 7); // 18 18

//a = 1, b = 2, c = 5, d = 5 * 2
add(1, 2, 5); // 8 10

//a = 1, b = 2, c = 5, d = 10
add(1, 2, 5, 10); // 8 10
