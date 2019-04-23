'use strict'

/*
Programa que pida dos números y que nos diga cual es el mayour y el menor y si son iguales.
PLUS: Si lo números no son un numero o son menores a 0 no los vuelva a pedir
*/

console.log(n1,n2);
var n1 = parseInt(prompt("Ingresa el primer número",0));
var n2 = parseInt(prompt("Ingresa el segundo número",0));

while (n1 <= 0 || n2 <= 0 || isNAN(n1) || isNAN(n2)) {
  n1 = parseInt(prompt("Ingresa el primer número",0));
  n2 = parseInt(prompt("Ingresa el segundo número",0));
  debugger;
}

if (n1 == n2) {
  alert("los número son iguales");
}else if (n1 > n2) {
  alert("El número mayor es: " + n1);
  alert("El número menor es: " + n2);
}else if (n2 > n1) {
  alert("El número mayor es: " + n2);
  alert("El número menor es: " + n1);
}else {
  alert("Introduce Números correctos")
}
