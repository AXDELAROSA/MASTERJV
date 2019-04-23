'use strict'

/*
Mostrar todos los número que hay entre dos número introducidos por el usuario enun alert.
*/

var n1 = parseInt(prompt("ingresa el número inicial: ",0));
var n2 = parseInt(prompt("ingresa el número final: ",0));

if (n1 < n2) {

  document.write("<h1>De "+n1+" a "+n2+" estan estos números: </h1>");
  //---contador, condición, incrementador
  for (var i = n1; i < n2; i++) {
    document.write(i+"<br/>");
  }

}else {
  alert("El número inicial debe ser menor al final");
}
