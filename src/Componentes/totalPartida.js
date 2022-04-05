import  {useState} from 'react';

import {obtenPartidasUnicas} from "../Componentes/OperacionesAM";



export let dataPartida = [];
export let dataCategoria = [];



export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ([]);
    const [totalesCategorias1,setotalesCategorias1] = useState ([]);
    const [porcentajesPartidas, setPorcentajesPartidas] = useState([]);
    const [porcentajesCategorias, setPorcentajesCategorias] = useState([]);
    const [divisaProy, setDivisaProy] = useState([]);
    const [porcentajesCI,setPorcentajesCI] = useState ([]);
    const [dFinanciamiento, setdFinanciamiento] = useState([]);

    const getTotalPar = (tP) =>{
        setotalesPartidas1(tP);
         console.log('',totalesPartidas1);
         dataPartida = tP ;
         
        
         obtenPartidasUnicas(dataPartida,dataCategoria);

        };
    const getTotalCats = (tC) => {
        setotalesCategorias1(tC);

        dataCategoria= tC;

        obtenPartidasUnicas(dataPartida,dataCategoria);
        

        };
    const getPorcentajesPar = (pPar) => {setPorcentajesPartidas(pPar); console.log('AM partidas',porcentajesPartidas);};
    const getPorcentajesCats = (pCats) => {setPorcentajesCategorias(pCats); console.log('AM categorias',porcentajesCategorias);};
    const getDivisaProy = (pDiv) => {
        setDivisaProy(pDiv); 
        console.log('Divisa x:',divisaProy);
    
    };
    const getPorcentajesCI = (pCI) =>{setPorcentajesCI(pCI); console.log('Cotos indirectos:',porcentajesCI);};
    const getFinanciamieno = (dF) =>{setdFinanciamiento(dF); console.log('Datos financiamineto',dFinanciamiento);}


  
 return {
     getTotalCats,
     getTotalPar,
     getPorcentajesPar,
     getPorcentajesCats,
     getPorcentajesCI,
     getDivisaProy,
     getFinanciamieno,
     totalesPartidas1,
     totalesCategorias1,
     porcentajesPartidas,
     porcentajesCategorias,
     porcentajesCI,
     dFinanciamiento
   }
};