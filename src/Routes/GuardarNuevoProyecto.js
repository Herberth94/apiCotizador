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
            console.log("soy data",data)
            
            const respuesta = await axios.post('http://localhost:4001/api/cotizador/proyecto/agregar/1', data);
            const send2 = respuesta.data;
            console.log("hola soy send2", send2); 
            alert('Registro exitoso')
            }
            catch (error){
            console.log("este es el error", error);
            }
    }
    const enviarDatos = (event) =>{
        console.log("estos son los datos", datos) 
        Send();
        console.log("este es el send", Send) 
        event.preventDefault()
        event.target.reset();
       
    }

    return{
        handleInputChange,
        enviarDatos
    }


};