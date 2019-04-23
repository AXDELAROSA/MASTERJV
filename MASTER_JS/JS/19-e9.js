'use strict'

//Funciónote
//una función es una agrupación reutilizble de un conjunto de instrucciones

//Forma 1
//Definir la función
function calculadora(){
      //conjunto de instrucciones a ejecutar.
      return "Hola soy la calculadora!!";
}

//invocación o llamado a la función
console.log(calculadora(),calculadora(),calculadora());

//Forma 2
function calculadora2(){
      console.log("Hola soy la calculadora!!");

      return "Si soy yo!!";
}

var resultado = calculadora2();
console.log(resultado);
