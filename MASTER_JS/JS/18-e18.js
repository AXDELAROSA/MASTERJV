'use strict'

/*
Calculadora:
-Que pida dos números.
-Si metemos un número mal que nos lo vuelva a pedir.
-En el cuerpo de la página, en una alerta y por la consola el resultado de
suma, restar, multiplicar y dividir esas dos cifras.
*/

var n1 = parseInt(prompt('Ingresa el primer número: ',0));
var n2 = parseInt(prompt('Ingresa el segundo número: ',0));

while (n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)) {
    n1 = parseInt(prompt('Ingresa el primer número: ',0));
    n2 = parseInt(prompt('Ingresa el segundo número: ',0));
}

var resultado = "La suma es: "+(n1+n2)+"<br/>"+
                "La resta es: "+(n1-n2)+"<br/>"+
                "La multiplicación es: "+(n1*n2)+"<br/>"+
                "La división es: "+(n1/n2)+"<br/>";

var resultadoCMD = "La suma es: "+(n1+n2)+"\n"+
                "La resta es: "+(n1-n2)+"\n"+
                "La multiplicación es: "+(n1*n2)+"\n"+
                "La división es: "+(n1/n2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
