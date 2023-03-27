import  {useState} from 'react';
import axios from 'axios';
import {url2} from "../../../Componentes/Ocultar";

export const useRegistro = () => {
   
    const actualizacion = (id,datos)=>{
        Send(id , datos)        
    }

    const  Send = async (id,datos)=> {
        

        try {
            //const respuesta = await axios.put(url2 + `/api/cotizador/clientes/update/${id}`,dataActulizacion);
            //console.log(respuesta.data) ;
            const respuesta = await axios.post(url2 + `/api/cotizador/clientes/update/${id}`,datos);
            const respuestaBack = respuesta.data.msg;
            console.log(respuestaBack);
            alert(respuestaBack);    
            } catch (error) {
            console.log(error);
                
            }
    }
    return {
            actualizacion   
        }
};