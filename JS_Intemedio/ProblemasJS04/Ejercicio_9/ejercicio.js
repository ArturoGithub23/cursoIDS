var deleteBtn = document.querySelectorAll("[data-deletepost]");

function eliminarElemento(event) {
  let opcion = confirm("Eliminar POST?");
  let post = document.querySelector(`#${this.dataset.deletepost}`);
  if (opcion == true) {
    post.remove();
  }
}

deleteBtn.forEach((boton) => {
  boton.addEventListener("click", eliminarElemento);
});
