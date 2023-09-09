var elementos = document.querySelectorAll("li");

elementos.forEach((elemento) => {
  function mensaje(event) {
    alert(
      "Elemento seleccionado:\nID elemento " +
        elemento.id +
        "\nISO ID: " +
        elemento.dataset.id +
        "\nDial Code: " +
        elemento.dataset.dialCode
    );
  }
  elemento.addEventListener("click", mensaje);
});
