'use strict'

function porConsola(n1,n2){
  console.log("Suma: "+(n1+n2));
  console.log("Resta: "+(n1-n2));
  console.log("Multiplicación: "+(n1*n2));
  console.log("División: "+(n1/n2));
  console.log("--================================");
}

function porPantalla(n1,n2){
  document.write("Suma: "+(n1+n2)+"<br/>");
  document.write("Resta: "+(n1-n2)+"<br/>");
  document.write("Multiplicación: "+(n1*n2)+"<br/>");
  document.write("División: "+(n1/n2)+"<br/>");
  document.write("--================================"+"<br/>");
}

function calculadora(n1,n2, mostrar = false){
      if (mostrar == false) {
      porConsola(n1,n2);
      }else {
        porPantalla(n1,n2);
      }
      return true;
}
//invocación o llamado a la función
calculadora(1,4);
calculadora(2,5,true);
