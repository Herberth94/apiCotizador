import  {useState} from 'react';

export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ({});
    const [totalesCategorias1,setotalesCategorias1] = useState ({});
    const [porcentajesCI,setPorcentajesCI] = useState ({});

    const getTotalPar=(tP)=>{
        setotalesPartidas1(tP);
        //console.log("prueba")
    }
    const getTotalCats =(tC)=>{
        setotalesCategorias1(tC);
    }

    const getPorcentajesCI = (pCI) =>{
        setPorcentajesCI(pCI);
    }
    
 return {
     getTotalPar,
     getTotalCats,
     getPorcentajesCI,
     totalesPartidas1,
     totalesCategorias1,
     porcentajesCI
   }
};