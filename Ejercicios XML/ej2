// 1. Muestra el título de todos los CD's

titulos = "";
n = document.getElementsByTagName("TITLE").length;
for(i = 0; i < n; i++)
    titulos += document.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue + " <br> ";

// 2. Muestra el precio de los CD's

precios = "";
m = document.getElementsByTagName("PRICE").length;
for(i = 0; i < m; i++)
    precios += document.getElementsByTagName("PRICE")[i].childNodes[0].nodeValue + " <br> ";

// 3. Muestra la compañía de los CD's

compañias = "";
c = document.getElementsByTagName("COMPANY").length;
for(i = 0; i < c; i++)
    compañias += document.getElementsByTagName("COMPANY")[i].childNodes[0].nodeValue + " <br> ";

// 4. Mostrar los títulos de los CD's con AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("TITLE");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

// 5. Mostrar los precios de los CD's con AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("PRICE");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

// 6. Mostrar las compañías de los CD's con AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("COMPANY");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();