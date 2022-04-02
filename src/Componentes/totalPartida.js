import  {useState} from 'react';

export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ({});
    const getTotal_Cat=(tP)=>{
        setotalesPartidas1(tP);
        console.log("prueba")
    }
    const prueba =()=>{
       
    }
 return {
     getTotal_Cat,
     totalesPartidas1
   }
};