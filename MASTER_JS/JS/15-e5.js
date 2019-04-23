'use strict'

/*
mostrar todos los números divisores de un numero intrducido en un prompt
*/

var n1 = parseInt(prompt("ingresa el número: ",1));

for (var i = 1; i <= n1; i++) {

  if (n1%i == 0) {
      console.log("Divisor: " + i);
  }
}
