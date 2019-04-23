'use strict'

/*
Introduciendo dos números, mostrar la suma y a media hasta que se ingrese un número
negativo, y de allí mostrar el resultado.
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce número hast que uno sea negativo",0));

    if (isNaN(numero)) {
        numero = 0;
    }else if (numero >= 0) {
      //suma = suma + numero;
      suma += numero;
      contador++;
    }

    console.log(suma);
    console.log(contador);
} while (numero >= 0);

alert("La suma es: " + suma);
alert("La media es:" + (suma/contador));
