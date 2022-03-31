

function botonP1() {
    document.getElementById("parrafo1").style.fontFamily = "Courier New";
}

function botonP2() {
    document.getElementById("parrafo2").style.fontFamily = "Arial Black";
}

function botonP3() {
    document.getElementById("parrafo3").style.fontFamily = "Verdana";
}


function cambiaimg(nombre) {
    document.getElementById('img').src = nombre;   
}

var texto = "Alcachofa"
var numeros = "18548"
var textoNUM = "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim"

function palabra1() {
    document.getElementById("texto").innerHTML = texto;
}

function palabra2() {
    document.getElementById("texto1").innerHTML = numeros;
}

function palabra3() {
    document.getElementById("texto2").innerHTML = textoNUM;
}