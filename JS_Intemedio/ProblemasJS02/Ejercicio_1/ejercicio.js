var personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phonenNo: 123456789,
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phonenNo: 123456789,
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phonenNo: 123456789,
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phonenNo: 123456789,
  },
];
function obtenerLlaves(objeto) {
  if (objeto === undefined) {
    return console.log("Indicar objeto");
  }
  let array = Object.keys(objeto[0]);
  return array;
}
function generarTabla(datos) {
  let encabezados = obtenerLlaves(datos);
  let body, section, tabla, thead, tbody, tfooter, tRow, tDatos, tEncabezado;
  //Body
  body = document.getElementById("body");
  console.log(body);
  //Contenedor tabla
  section = document.createElement("section");
  section.id = "contenedor";
  //Creación de Tabla
  tabla = document.createElement("table");
  tabla.id = "tabla";
  //Creación  de Encabezado
  thead = document.createElement("thead");
  thead.id = "encabezado";
  tabla.appendChild(thead);
  //Creación de th para encabezado
  for (encabezado of encabezados) {
    tEncabezado = document.createElement("th");
    tEncabezado.textContent = encabezado;
    thead.appendChild(tEncabezado);
  }
  //Creación de elementos del Cuerpo
  tbody = document.createElement("tbody");
  tbody.id = "tbody";
  //Datos
  for (element of datos) {
    tRow = document.createElement("tr");
    let objeto = Object.values(element);
    for (dato of objeto) {
      tDatos = document.createElement("td");
      tDatos.textContent = dato;
      tRow.appendChild(tDatos);
    }
    tbody.appendChild(tRow);
    tabla.appendChild(tbody);
  }
  //Footer tabla
  body.appendChild(tabla);
}
