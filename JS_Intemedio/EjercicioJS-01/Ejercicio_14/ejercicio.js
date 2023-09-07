var a = "hello" && " ";
var b = " " && [];
var c = undefined && 0;
var d = 1 && 5;
var e = 0 && {};
var f = "hi" && [] && "done";
var g = "hola" && undefined && "adios";
var h = "palabra" && {};
var i = {} && "palabra";
var j = {} && 0;

console.log(
  "a " + a + "\n",
  "b " + b + " " + typeof b + "\n",
  "c " + c + "\n",
  "d " + d + "\n",
  "e " + e + "\n",
  "f " + f + "\n",
  "g " + g + "\n",
  "h " + h + "\n",
  "i " + i + "\n",
  "j " + j + "\n"
);
