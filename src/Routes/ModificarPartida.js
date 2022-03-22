import  {useState} from 'react';
import axios from 'axios';



import {url2} from "../Componentes/Ocultar";





export const EditPartida = () => {

    const [datos,setDatos] = useState ({
          partida_nombre: '', 
          partida_descripcion:''
    });

   const handleInputChangePartida = (event) => {
          setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
    }

    const actualizacionPar = (data)=>{
        const data_1 ={
            partida_nombre:data.partida_nombre, 
            partida_descripcion:data.partida_descripcion
         };
        SendUpdatePartida(data_1,data.partida_id)      
    }

    async function SendUpdatePartida (data,id){
        console.log(datos);
        const dataActualizacion = {
            partida_nombre:data.partida_nombre, 
            partida_descripcion:data.partida_descripcion
        };
        
        const k = Object.keys(datos);
        for(let keys of k){
            if(datos[keys]!==''){
                dataActualizacion[keys]=datos[keys]
            }    
        } 
        
        try {
            
            await axios.put(url2 + `/api/cotizador/partida/update/${id}`,dataActualizacion);
            alert('Partida editada exitosamente');
                
            } catch (error) {
            console.log(error);
                
            }
    }
    return {
        actualizacionPar,
        handleInputChangePartida
    }
};


    