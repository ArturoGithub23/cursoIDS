let persona = {
  nombre: "Luis",
  edad: 25,
  hablar: function () {
    console.log(this.nombre);
  },
};
let decirNombre = function (obj) {
  obj.hablar = function () {
    console.log(this.nombre);
  };
};
const BETO = {
  nombre: "Beto",
  edad: 22,
};

const JUAN = {
  nombre: "Juan",
  edad: 25,
};
decirNombre(JUAN);
decirNombre(BETO);
//JUAN.hablar();
//BETO.hablar();

var contadorClick = 0;
function updateCounter(e) {
  console.log(e);
  console.log(e.detail);
  console.log("contador " + contadorClick);
  contadorClick++;
  document.querySelector("#num").textContent = e.detail;
  e.pageY = 100;
}

function muestraMensaje() {
  console.log("Has hecho click con el ratón");
}

//Escucha para el evento
function cargar() {
  //Eventos personalizados
  var event = new Event("build");
  var div;
  div = document.getElementById("div_principal");
  div.addEventListener("click", muestraMensaje, false);
  //Mas de una asociación
  //div.addEvenetListener("click", muestraOtroMensaje, true);

  //Desasociar la función al evento
  //div.removeEventListener("click", muestraMensaje, false);

  //Escucha para el evento
  div.addEventListener("build", function (e) {
    console.log(e);
  });

  //Adición de datos personalizados
  var event = new CustomEvent("build2", {
    detail: "valor-parametro",
    bubbles: true,
  });

  div.addEventListener("build2", function (e) {
    console.log(e);
  });

  //Disparar event
  div.dispatchEvent(event);
}
