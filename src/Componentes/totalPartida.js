import  {useState} from 'react';

export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ({});
    const [totalesCategorias1,setotalesCategorias1] = useState ({});

    const getTotalPar=(tP)=>{
        setotalesPartidas1(tP);
        //console.log("prueba")
    }
    const getTotalCats =(tC)=>{
        setotalesCategorias1(tC);
    }
 return {
     getTotalPar,
     getTotalCats,
     totalesPartidas1,
     totalesCategorias1
   }
};