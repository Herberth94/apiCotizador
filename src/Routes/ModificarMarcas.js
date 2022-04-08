
import axios from 'axios';
import {url2} from "../Componentes/Ocultar";

export const EditMarcas = () => {
   
    const actualizacion = (data,newData)=>{
        Send(data,data.marca_id, newData)        
    }

    const  Send = async (data,id,newData)=> {
        const dataActualizacion ={
            marca_nombre: data.marca_nombre
        };

        const prueba = Object.keys(newData);
        for(let keys of prueba){
            if(newData[keys]!==''){
                dataActualizacion[keys]=newData[keys]   
            }    
        } 

        try {
            await axios.post(url2 + `/api/cotizador/marca/edit/${id}`,dataActualizacion);
            alert('Marca actualizada');
            } catch (error) {
                console.log(error); 
                alert('Error al actualizar la Marca');  
            }
    }
    return {
        actualizacion   
    }
};