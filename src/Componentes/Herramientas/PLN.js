//Separar Datos por Partida

import {dataPartidas} from "./excel";
import React from 'react';




export let NombrePartida = [];



function limpiarData(){
  NombrePartida = [];
}




function PLN() {



  limpiarData();

  if(dataPartidas.length >0){
    for (let index = 0; index < dataPartidas.length; index++) {
      NombrePartida.push(dataPartidas[index].Partida);
    }
  }
  
  
    console.log("FUNCIONANDO");
    console.log(NombrePartida);
    console.log("--------");
  


  return (
    <div>Datos Cargados  Correctamente</div>
  )
}

export default PLN