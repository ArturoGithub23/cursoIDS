var age = 20,
  height = 6,
  estatus = "",
  hasInvitation = true;
var isLegal = age >= 18;
var tall = height >= 5.11;
var suitable = isLegal && tall;
var isRoyalty = estatus === "rayalty";
var specialCase = isRoyalty && hasInvitation;
var canEnterOurBar = suitable || specialCase;

console.log(
  isLegal + "\n" + "\n",
  tall + "\n" + "\n",
  suitable + "\n" + "\n",
  isRoyalty + "\n" + "\n",
  specialCase + "\n" + "\n",
  canEnterOurBar
);
