import  {useState} from 'react';
import axios from 'axios';

export const GuardarNuevoProyecto = () => {
    const [datos, setDatos] = useState ({
        proyecto_clave:'',
        proyecto_descripcion:'',
        // proyecto_id_cliente: '1'

    });

    const handleInputChange = (event) =>{
      /*   console.log("este es el event.target.value", event.target.value) */
        setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
    }
    async function Send (){

        const data = {
            proyecto_clave: datos.proyecto_clave,
            proyecto_descripcion: datos.proyecto_descripcion,
            // proyecto_id_cliente: datos.proyecto_id_cliente
        };

        try{
            
            const respuesta = await axios.post('http://localhost:4001/api/cotizador/proyecto/agregar/1', data);
            const send2 = respuesta.data;
            
            alert('Registro exitoso')
            }
            catch (error){
            
            }
    }
    const enviarDatos = (event) =>{
        
        Send();
         
        event.preventDefault()
        event.target.reset();
       
    }

    return{
        handleInputChange,
        enviarDatos
    }


};