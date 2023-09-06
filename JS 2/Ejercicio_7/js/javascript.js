class Figura {
  base;
  altura;
  area;
  perimetro;

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularPerimetro();
    this.calcularArea();
  }

  get alt() {
    return this.altura;
  }

  get bas() {
    return this.base;
  }

  get peri() {
    return this.perimetro;
  }

  get ar() {
    return this.area;
  }

  calcularPerimetro() {
    this.perimetro = this.base * 2 + this.altura * 2;
  }

  calcularArea() {
    this.area = this.base * this.altura;
  }
}
class Triangulo extends Figura {
  ladoA;
  ladoB;
  constructor(base, altura, ladoA, ladoB) {
    super(base, altura);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.calcularPerimetro();
  }

  calcularPerimetro() {
    if (this.ladoB === 0) {
      this.perimetro = this.ladoA * 2 + this.base;
    } else {
      this.perimetro = this.ladoA + this.ladoB + this.base;
    }
  }
  calcularArea() {
    this.area = (this.base * this.altura) / 2;
  }
}
class Cuadrado extends Figura {
  constructor(base) {
    super(base);
    this.altura = base;
  }
  calcularArea() {
    this.area = this.base * this.base;
  }

  calcularPerimetro() {
    this.perimetro = this.base * 4;
  }
}
class Rectangulo extends Figura {
  constructor(base, altura) {
    super(base, altura);
  }
}
function formTriangulo() {
  const form_triangulo = document.getElementById("calc-triangulo");
  const form_cuadrado = document.getElementById("calc-cuadrado");
  const form_rectangulo = document.getElementById("calc-rectangulo");
  if (form_triangulo.classList.contains("oculto")) {
    form_triangulo.classList.remove("oculto");
  } else {
    form_triangulo.classList.add("oculto");
  }

  if (!form_cuadrado.classList.contains("oculto")) {
    form_cuadrado.classList.add("oculto");
  }
  if (!form_rectangulo.classList.contains("oculto")) {
    form_rectangulo.classList.add("oculto");
  }
}
function formCuadrado() {
  const form_triangulo = document.getElementById("calc-triangulo");
  const form_cuadrado = document.getElementById("calc-cuadrado");
  const form_rectangulo = document.getElementById("calc-rectangulo");
  if (form_cuadrado.classList.contains("oculto")) {
    form_cuadrado.classList.remove("oculto");
  } else {
    form_cuadrado.classList.add("oculto");
  }

  if (!form_triangulo.classList.contains("oculto")) {
    form_triangulo.classList.add("oculto");
  }
  if (!form_rectangulo.classList.contains("oculto")) {
    form_rectangulo.classList.add("oculto");
  }
}
function formRectangulo() {
  const form_triangulo = document.getElementById("calc-triangulo");
  const form_cuadrado = document.getElementById("calc-cuadrado");
  const form_rectangulo = document.getElementById("calc-rectangulo");
  if (form_rectangulo.classList.contains("oculto")) {
    form_rectangulo.classList.remove("oculto");
  } else {
    form_rectangulo.classList.add("oculto");
  }

  if (!form_triangulo.classList.contains("oculto")) {
    form_triangulo.classList.add("oculto");
  }
  if (!form_cuadrado.classList.contains("oculto")) {
    form_cuadrado.classList.add("oculto");
  }
}
function calculoTriangulo() {
  let base, altura, ladoA, ladoB;
  base = parseFloat(document.triangulo.base.value);
  altura = parseFloat(document.triangulo.altura.value);
  ladoB = parseFloat(document.triangulo.ladoB.value);
  ladoA = parseFloat(document.triangulo.ladoA.value);

  let triangulo = new Triangulo(base, altura, ladoA, ladoB);
  document.triangulo.resultadoArea.value = triangulo.ar + " de area";
  document.triangulo.resultadoPerimetro.value =
    triangulo.peri + " de perímetro";
}
function calculoCuadrado() {
  let base;
  base = parseFloat(document.cuadrado.base.value);
  let cuadrado = new Cuadrado(base);
  document.cuadrado.resultadoArea.value = cuadrado.ar + " de area";
  document.cuadrado.resultadoPerimetro.value = cuadrado.peri + " de perímetro";
}
function calculoRectangulo() {
  let base, altura;
  base = parseFloat(document.rectangulo.base.value);
  altura = parseFloat(document.rectangulo.altura.value);
  let rectangulo = new Rectangulo(base, altura);
  document.rectangulo.resultadoArea.value = rectangulo.ar + " de area";
  document.rectangulo.resultadoPerimetro.value =
    rectangulo.peri + " de perímetro";
}
