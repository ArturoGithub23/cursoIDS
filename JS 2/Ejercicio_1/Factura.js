class Factura {
  constructor(numero, cliente, divisa, subtotal, IVA) {
    this.numero = numero;
    this.cliente = cliente;
    this.divisa = divisa;
    this.subtotal = subtotal;
    this.IVA = IVA;
  }
  get total() {
    return this.subtotal + this.IVA;
  }
  set nuevaDivisa(valor) {
    this.divisa = valor;
  }
  aplicarDescuento(porcentaje) {
    this.subtotal -= (this.subtotal / 100) * porcentaje;
  }
  static instrucciones() {
    console.log(
      "Indica para cada factura su número, cliente, divisa, subtotal e IVA"
    );
  }
  static calcularDiferencias(factura1, factura2) {
    return factura1.total - factura2.total;
  }
}
Factura.instrucciones();
const factura1 = new Factura(201, "Transportes SA", "eur", 542, 113);
const factura2 = new Factura(202, "Mudanzas SA", "eur", 100, 21);
console.log(
  "La factura " + factura1.numero + " está en divisa " + factura1.divisa
);
console.log(
  "La diferencia entre las facturas es de " +
    Factura.calcularDiferencias(factura1, factura2) +
    " " +
    factura1.divisa
);
console.log(
  "La factura " +
    factura1.numero +
    " tienen un total de " +
    factura1.total +
    " " +
    factura1.divisa
);
factura1.nuevaDivisa = "MXN";
console.log(
  "La factura " +
    factura1.numero +
    " tiene un total de " +
    factura1.total +
    " " +
    factura1.divisa
);

factura1.aplicarDescuento(50);

console.log(
  "La factura " +
    factura1.numero +
    " tiene ahora un total de " +
    factura1.total +
    " " +
    factura1.divisa
);
