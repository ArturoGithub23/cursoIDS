function alCargar() {
  var elem = document.querySelector("#page");
  var elemento = document.querySelector(".main .info");
  var elementosInfo = document.querySelectorAll(".info");
  var elementosNickname = document.querySelectorAll('[name="nickname"]');
  var elementosTagName = document.querySelectorAll("div");

  console.log(elem);
  console.log(elemento);
  console.log(elementosInfo);
  console.log(elementosNickname);
  console.log(elementosTagName);
}
function mostrarElementos() {
  //Ejemplo
  var element = document.getElementById("page");
  console.log(element);
  console.log(element.nodeName);
  console.log(element.textContent);
  console.log(element.innerHTML);
  console.log(element.outerHTML);

  //#############################
  var pBody, pNodeName, pTextContent, pInnerHtml, pOuterHtml;

  var tbody, tNodeName, tTextContent, tInnerHtml, tOuterHtml;

  pBody = document.getElementById("body");
  tbody = document.createTextNode(element);
  pBody.appendChild(tbody);
  pNodeName = document.getElementById("nodeName");
  tNodeName = document.createTextNode(element.nodeName);
  pNodeName.appendChild(tNodeName);
  pTextContent = document.getElementById("textContent");
  tTextContent = document.createTextNode(element.textContent);
  pTextContent.appendChild(tTextContent);
  pInnerHtml = document.getElementById("innerHtml");
  tInnerHtml = document.createTextNode(element.innerHTML);
  pInnerHtml.appendChild(tInnerHtml);
  pOuterHtml = document.getElementById("outerHtml");
  pOuterHtml = document.createTextNode(element.outerHTML);
  pOuterHtml.appendChild(pOuterHtml);
}
function modificarContenido() {
  var div = document.querySelector(".info");

  console.log(div);
  div.textContent = "Esto es un texto agregado con textContent desde JS";

  div.innerHTML = "<p>Parrafo insertado con innerHTML con JS</p>";
  div.innerHTML =
    "<strong>Esto es un elemento insertado con innerHTML con JS</strong>";
}
function creacionElementos() {
  var main = document.getElementById("main");
  var div = document.createElement("div");
  var span = document.createElement("span");
  var img = document.createElement("img");
  var c = document.createComment("Comentario");
  var tNode = document.createTextNode("Hola");
  //Errores comunes ######################
  var div1 = document.createElement("div");
  div.textContent = "Elemento 1";
  var div2 = div1; //NO se está haciendo una copia
  div2.textContent = "Elemento 2";
  console.log(div.textContent); //Elemento 2
  //Forma correcta #####################
  var div3 = document.createElement("div");
  div.textContent = "Elemento 1";
  var div4 = div3.cloneNode(); // Ahora si estamos clonando
  div4.textContent = "Elemento 2";
  //Atributos
  div.id = "page";
  div.className = "data";
  div.style = "color:red";

  //Agregando div a main con background azul
  main.appendChild(div);
}
function insertAdjacent() {
  var div = document.createElement("div");
  div.textContent = "ejemplo";

  var app = document.querySelector(".main");

  //Opcion #1 antes del elemento
  //app.insertAdjacentElement("beforebegin", div);

  //Opción 2 antes del primer hijo
  //app.insertAdjacentElement("afterbegin", div);

  //Opción 3 después del último hijo
  //app.insertAdjacentElement("beforeend", div);

  //Opción 4 después del elemento
  app.insertAdjacentElement("afterend", div);
}
function eliminarElementos() {
  var parrafos = document.getElementsByTagName("p");

  var parrafo = parrafos[0];
  console.log(parrafo.textContent);
  parrafo.remove();
}
function elementosRelacionados() {
  console.log(document.body.children.length);
  console.log(document.body.children);
  console.log(document.body.parentElement);

  var header = document.querySelector("#header");
  console.log(header);
  console.log(header.children);
  console.log(header.firstElementChild);
  console.log(header.lastElementChild);

  var a = header.querySelector("a");
  console.log(a.previousElementSibling);
  console.log(a.nextElementSibling);

  //trabajando con nodos
  console.log(header.childNodes);
  console.log(header.firstChild.remove());
  console.log(header.firstChild.textContent);
  console.log(header.lastChild.remove());
  console.log(header.lastChild.textContent);
}
