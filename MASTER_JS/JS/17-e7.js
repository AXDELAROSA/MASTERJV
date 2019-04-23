'use strict'

//Tabla de multiplicar de un número introducido por la pantalla.
/*
var numero = parseInt(prompt('¿De qué número quieres la tabla de multiplicar?: ',1))

document.write("<h1>Tabla del "+numero+"</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}
*/

//Todas las tablas de multiplicar

document.write("<h1>Tablas de multiplicar</h1>");
for (var z = 1; z < 10; z++) {
  document.write("<h1>Tabla del "+z+"</h1>");
  for (var i = 1; i <= 10; i++) {
    document.write(i+" x "+z+" = "+(i*z)+"<br/>");
  }
}
