import  {useState} from 'react';

import {obtenPartidasUnicas} from "../Componentes/OperacionesAM";



export let dataPartida = [];
export let dataCategoria = [];



export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ({});
    const [totalesCategorias1,setotalesCategorias1] = useState ({});

    const getTotalPar=(tP)=>{
        setotalesPartidas1(tP);
         dataPartida = tP ;
         
        
         obtenPartidasUnicas(dataPartida,dataCategoria);
    }
    const getTotalCats =(tC)=>{
        setotalesCategorias1(tC);
        dataCategoria= tC;

      

    }
 return {
     getTotalPar,
     getTotalCats,
     totalesPartidas1,
     totalesCategorias1
   }
};