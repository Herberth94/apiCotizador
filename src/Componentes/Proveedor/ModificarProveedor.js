import  {useState} from 'react';
import axios from 'axios';
import {url2} from "../../Componentes/Ocultar";

export const useRegistro2 = () => {
   
    const actualizacion = (data,datos)=>{
        Send(data,data.proveedor_id, datos)        
    }

    const  Send = async (data,id,datos)=> {
        const dataActualizacion ={
            proveedor_nombre:data.proveedor_nombre,
            proveedor_telefono:data.proveedor_telefono,
            proveedor_email:data.proveedor_email
        };
            console.log(data);
            console.log(id);
            console.log(datos);
        const prueba = Object.keys(datos);
            for(let keys of prueba){
                if(datos[keys]!=''){
                    dataActualizacion[keys]=datos[keys]   
                }    
            } 

        try {
            //const respuesta = await axios.put(url2 + `/api/cotizador/clientes/update/${id}`,dataActulizacion);
            //console.log(respuesta.data) ;
            const respuesta = await axios.post(url2 + `/api/cotizador/proveedor/edit/${id}`,dataActualizacion);
            return respuesta.data;
            //console.log(send2);
            //alert('Dato Actualizado');
                
            } catch (error) {
            console.log(error);
                
            }
    }
    return {
            actualizacion   
        }
};