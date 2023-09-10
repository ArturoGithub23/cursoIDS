function cronometro() {
  var s = 0,
    m = 0,
    h = 0;
  var ss, mm, mm;
  let div = document.getElementById("ejecutar");
  div.innerHTML = "00 h : 00 min : 00 seg";
  function ejecutar() {
    s++;
    if (s < 10) {
      ss = "0" + s;
    } else {
      ss = s;
    }
    if (m < 10) {
      mm = "0" + m;
    } else {
      mm = m;
    }
    if (h < 10) {
      hh = "0" + h;
    } else {
      hh = h;
    }
    if (s > 58) {
      s = 0;
      m++;
    }
    if (m > 58) {
      m = 0;
      h++;
    }
    if (h > 23) {
      h = 0;
    }
    div.innerHTML = hh + " h " + ": " + mm + " min : " + ss + " seg";
  }
  setInterval(ejecutar, 1000);
}

cronometro();
