//Separar Datos por Partida

import {dataPartidas} from "./excel";
import React from 'react';
import { useState } from "react";




//export let NombrePartida = [];



// function limpiarData(){
//   NombrePartida = [];
// }




function PLN() {
  

  const [partida, setPartida] = useState([{}]);
  const [sp, setSP] = useState([{}]);
  
  //limpiarData();

  if(dataPartidas.length >0){
    for (let index = 0; index < dataPartidas.length; index++) {
      //NombrePartida.push(dataPartidas[index].Partida);
      
    }
  }
  //cargarDatos(dataPartidas);
  
  async function cargarDatos(){
    //await axios.post(url2 + `/api/cotizador/sp/insert`, dataPartidas)
  }
  


  return (
      cargarDatos
  )
}

export default PLN