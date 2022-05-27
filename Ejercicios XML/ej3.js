// 1. Título del primer libro

document.getElementsByTagName("book")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;

// 2. Todos los títulos

titulos = "";
t = document.getElementsByTagName("title").length;
for(i = 0; i < t; i++) {
    titulos += document.getElementsByTagName("title")[i].childNodes[0].nodeValue + " <br> ";
}
    
// 3. Número de atributos del cuarto libro

document.getElementsByTagName("book")[3].attributes.length;

// 4. Valor de los atributos del cuarto libro

l = document.getElementsByTagName("book")[3].attributes.length;
t = document.getElementsByTagName("book")[3].attributes;
for(i = 0; i < l; i++)
    console.log(t[i].nodeValue);

// 5. Número de autores del tercer libro

document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

// 6. Autores del tercer libro

autores = "";
a = document.getElementsByTagName("book")[2].getElementsByTagName("author").length;
for(i = 0; i < a; i++) {
    autores += document.getElementsByTagName("author")[i].childNodes[0].nodeValue + " <br> ";
}

// 7. Muestra una tabla que muestre el título, primer autor, precio y año

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "../xml/books.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("book");
  let table="<tr><th>Title</th><th>Author</th><th>Price</th><th>Year</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>" +
     x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

// 8. Título del primer libro AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const xmlDoc = this.responseXML;
    const txt = xmlDoc.getElementsByTagName("book")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();

// 9. Todos los títulos AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("title");
  	let txt = "";
	for(i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();

// 10. Número de atributos del cuarto libro AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const txt = xmlDoc.getElementsByTagName("book")[3].attributes.length;
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();

// 11. Valor de los atributos del cuarto libro AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  l = xmlDoc.getElementsByTagName("book")[3].attributes.length;
  t = xmlDoc.getElementsByTagName("book")[3].attributes;
  	let txt = "";
	for(i = 0; i < l; i++) {
    txt = txt + t[i].nodeValue + "<br>";
    }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();

// 12. Número de autores del tercer libro AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const xmlDoc = this.responseXML;
    const txt = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author").length;
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();

// 13. Autores del tercer libro AJAX

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("book")[2].getElementsByTagName("author");
  	let txt = "";
	for(i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../xml/books.xml");
xhttp.send();
