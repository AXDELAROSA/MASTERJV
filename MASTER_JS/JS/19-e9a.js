'use strict'

//Funciónote
//una función es una agrupación reutilizble de un conjunto de instrucciones

//Definir la función
function calculadora(n1,n2, mostrar = false){
  //conjunto de instrucciones a ejecutar.

      if (mostrar == false) {
        console.log("Suma: "+(n1+n2));
        console.log("Resta: "+(n1-n2));
        console.log("Multiplicación: "+(n1*n2));
        console.log("División: "+(n1/n2));
        console.log("--================================");
      }else {
        document.write("Suma: "+(n1+n2)+"<br/>");
        document.write("Resta: "+(n1-n2)+"<br/>");
        document.write("Multiplicación: "+(n1*n2)+"<br/>");
        document.write("División: "+(n1/n2)+"<br/>");
        document.write("--================================"+"<br/>");
      }
}
//invocación o llamado a la función
calculadora(1,4);
calculadora(2,5,true);


// calculadora(4,2);
// calculadora(3,3);

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
//   calculadora(i,8);
// }
