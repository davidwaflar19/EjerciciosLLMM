function muestra() {
    f = document.getElementById("tbf").value;
    c = toCelsius(f)
    document.getElementById("tbc").value = c;
}

function muestraa() {
    c = document.getElementById("tbc2").value;
    f = toFahr(c);
    document.getElementById("tbf2").value = f;
  }
 
function toCelsius(f) {
  return (5/9) * (f-32);
}

function toFahr(c) {
    return c * 1.8 + 32;
  };