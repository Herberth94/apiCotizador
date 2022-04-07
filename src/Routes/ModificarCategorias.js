import  {useState} from 'react';
import axios from 'axios';
import {url2} from "../Componentes/Ocultar";


export const EditCats = () => {
    
    const actualizacionCats = (data,newData)=>{
        Send(data,newData,data.cd_id) 
   }
   
    // Función que realiza la inserción del proyecto
    async function Send (data,newData,cd_id){
        const dataActualizacion ={
                cd_id_cats:data.cd_id_cats,
                cd_no_parte:data.cd_no_parte,
                cd_descripcion:data.cd_descripcion,
                cd_meses:data.cd_meses,
                cd_semanas:data.cd_semanas,
                cd_comentarios:data.cd_comentarios
        }
        //console.log(data.proveedor_id);
        const k = Object.keys(newData);
        for(let keys of k){
            if(newData[keys] !== ''){
                dataActualizacion[keys] = newData[keys];
            }
        }
        try{
            //console.log(dataActualizacion);
            await axios.post(url2 + `/api/cotizador/catd/edit/${cd_id}`, dataActualizacion);
            alert('Datos de una categoria editados exitosamente')

        }catch (error){
            console.log(error);
            alert('Error al editar los datos de una Categoria')
        }
    }

    /*===========================================================================================================*/
    return {
        actualizacionCats
    }
};