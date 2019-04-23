'use strict'
//alert("hola")

//switch
var edad = 40;
var imprimie = "";
switch (edad) {
  case 18:
      imprimie = "Acabas de cumplir la mayoría de edad";
    break;
    case 25:
        imprimie = "Ya eres un adulto";
    break;
    case 40:
        imprimie = "Crisis de los 40";
    break;
    case 75:
        imprimie = "Ya eres un anciano";
    break;
  default:
      imprimie = "Tu edad es neutra";
}

console.log(imprimie);
