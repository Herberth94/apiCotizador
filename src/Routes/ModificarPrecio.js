import  {useState} from 'react';
import axios from 'axios';



import {url2} from "../Componentes/Ocultar";

export const EditPrecio = () => {

    const actualizacionPrecio = (newcant,data,newdata)=>{
        
        SendUpdatePrecio(newcant,data,data.precio_id,newdata)      
    }

    async function SendUpdatePrecio (newcant,data,id,newdata){
        //console.log(datos);
        const dataActualizacion = {
            precio_lista: data.precio_lista, 
            precio_unitario:data.precio_unitario,
            precio_descuento:data.precio_descuento,
            precio_total:data.precio_total,
            precio_id_moneda:data.precio_id_moneda
        };
        
        const k = Object.keys(newdata);
        for(let keys of k){
            if(newdata[keys]!==''){
                dataActualizacion[keys]=newdata[keys]
            }    
        } 
        
        try {
            console.log(dataActualizacion);
            //await axios.put(url2 + `/api/cotizador/partida/update/${id}`,dataActualizacion);
            //alert('Precio editado exitosamente');
                
            } catch (error) {
            console.log(error);
                
            }
    }
    return {
        actualizacionPrecio
    }
};


    