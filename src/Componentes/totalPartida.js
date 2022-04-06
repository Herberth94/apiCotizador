import  {useState} from 'react';

import {obtenPartidasUnicas} from "../Componentes/OperacionesAM";



export let dataPartida = [];
export let dataCategoria = [];
export let dolar =  [];
export let dataIndirectos =  [];
export let dataFinanciamiento =  [];
export let dol = 0;



export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ([]);
    const [totalesCategorias1,setotalesCategorias1] = useState ([]);
    const [porcentajesPartidas, setPorcentajesPartidas] = useState([]);
    const [porcentajesCategorias, setPorcentajesCategorias] = useState([]);
    const [divisaProy, setDivisaProy] = useState([]);
    const [porcentajesCI,setPorcentajesCI] = useState ([]);
    const [dFinanciamiento, setdFinanciamiento] = useState([]);


    const getPorcentajesPar = (pPar) => {
        
        setPorcentajesPartidas(pPar);     
        console.log('AM partidas',porcentajesPartidas);
    };
    const getPorcentajesCats = (pCats) => {
        
        setPorcentajesCategorias(pCats);
         console.log('AM categorias',porcentajesCategorias);
        };
   
      /*========================   Valor Dolar ======================== */
    const getDivisaProy = (pDiv) => {
        setDivisaProy(pDiv); 
   
      
        dolar = pDiv;
        obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos ) ;

      // console.log("dollar , " , dolar)
    };


    const getPorcentajesCI = (pCI) =>{
        setPorcentajesCI(pCI);
        dataIndirectos = pCI;

        obtenPartidasUnicas(dataPartida, dataCategoria, dolar , dataIndirectos ) ;

      
      /*   console.log('Cotos indirectos:',   dataIndirectos); */
        };

    const getFinanciamieno = (dF) =>{
        setdFinanciamiento(dF); 
         dataFinanciamiento  = dF;
         obtenPartidasUnicas(dataPartida, dataCategoria, dolar , dataIndirectos ) ;

         console.log(' Datos financiamineto   ',dF);


         
        }

        const getTotalPar = (tP) =>{
            setotalesPartidas1(tP);
    
             dataPartida = tP ;
        
            
             obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos  );
    
            };
        const getTotalCats = (tC) => {
            setotalesCategorias1(tC);
    
            dataCategoria= tC;
    
            obtenPartidasUnicas(dataPartida,dataCategoria, dolar ,  dataIndirectos  );
            
    
            };

  
 return {
     getTotalCats,
     getTotalPar,
     getPorcentajesPar,
     getPorcentajesCats,
     getPorcentajesCI,
     getDivisaProy,
     getFinanciamieno,
     divisaProy,
     porcentajesPartidas,
     porcentajesCategorias,
     porcentajesCI,
     dFinanciamiento,
     totalesPartidas1,
     totalesCategorias1
   }
};