'use strict'

/*
Que nos diga si un numero es par o impar.

1. Ventana prompt
2. Si no es válido que nos pida de nuevo el numero
*/

var n1 = parseInt(prompt("ingresa el número: ",0));

while(isNaN(n1)){
      n1 = parseInt(prompt("ingresa el número: ",0));
}

if (n1 % 2 == 0 ) {
          alert("Es par");
    }else{
          alert("Es Impar");
}
