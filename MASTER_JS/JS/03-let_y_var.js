'use strict'

//let permite definir variables delimitando su uso al bloque donde se eta declarando.
//alert("hola");
var numero = 40;
console.log(numero);

if (true){
    var numero = 50;
    console.log(numero); // valor debe de ser 50
}

console.log(numero); // valor 50

// Prueba con let
var texto = "Curso JS";
console.log(texto);  // Valor es el mismo

if (true){
  let texto = "Curso Alex - LET";
  console.log(texto);
}
console.log(texto);
