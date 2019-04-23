'use strict'
/*
mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

var n1 = parseInt(prompt("ingresa el número inicial: ",0));
var n2 = parseInt(prompt("ingresa el número final: ",0));

while (n1 < n2) {
  n1++;

  if (n1%2 !=0) {
        console.log("El número: "+n1+" es impar.");
  }
}
