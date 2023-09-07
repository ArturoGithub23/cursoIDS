var a = "hello" || "";
var b = "" || [];
var c = "" || undefined;
var d = 1 || 5;
var e = 0 || {};
var f = 0 || "" || 5;
var g = "" || "yay" || "boo";

console.log(
  "a " + a + "\n",
  "b " + b + "\n",
  "c " + c + "\n",
  "d " + d + "\n",
  "e " + e + "\n",
  "f " + f + "\n",
  "g " + g + "\n"
);
