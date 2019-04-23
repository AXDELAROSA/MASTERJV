'use strict'
//alert("hola")

//condicionales IF
// si a = b entonces haz

/*
var edad1 = 30;
var edad2 = 42;

//si pasa esto
if (edad1 > edad2){
    //ejecuta esto
    console.log("Edad1 es mayor a edad2");
}else{
    console.log("La edad1 es inferior a edad2");
}

//opeeradores relacionaes
      Mayor: >
      Menor: <
      Mayor o igual: >=
      Menor o igual: <=
      Igual: ==
      Distinto: !=


var edad = 19;
var nombre = "David";

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
      console.log("Todavía eres millenial");
    }else if(edad >= 70){
        //console.log("Ya no eres millenial");
        console.log("Eres anciano");
      }else{
        console.log("Ya no eres millenial");
  }
  }else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}
*/

//OPERADORES LOGICOS
// and(Y)&&, or (O)||, negación (!)

var year = 2028;
//Negacion
if (year != 2019) {
    console.log("El año no es 2019");
}
//AND
if (year >= 2000 && year <= 2020) {
      console.log("Estamos en la era actual");
    }else{
      console.log("Estamos en la era postmoderna");
}
//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
      console.log("El año acaba en 8");
    }else {
        console.log("Año no registrado");
}
