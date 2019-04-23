'use strict'

//Parametros REST Y SPREAD

function listadoFrutas(f1,f2,...resto_frutas){
  console.log("Fruta 1: "+f1);
  console.log("Fruta 2: "+f2);
  console.log(resto_frutas);
}

listadoFrutas("Naranja","Manzana", "Sandía", "Pera","Melón","Coco");

var frutas = ["Naranja","Manzana"]
listadoFrutas(...frutas, "Sandía", "Pera","Melón","Coco" );
