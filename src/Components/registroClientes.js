import  {useState} from 'react';
import axios from 'axios';

export const useRegistro = () => {
     const [datos,setDatos] = useState ({
          nombre_cliente: '', 
          razon_social:''
           
   });

   const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos ({
        ...datos,[event.target.name] : event.target.value ,
    })
}

async function Send (){

    const data= {
        nombre_cliente: datos.nombre_cliente,
        razon_social: datos.razon_social
    };

   
    try {

        const respuesta = await axios.post('http://localhost:4001/api/cotizador/clientes/agregar',data);
        const send2= respuesta.data;
        console.log(send2);
        alert('Registro exitoso');
            
        }
    catch (error) {
            console.log(error);
            
        }
   
}
    const enviarDatos = (event) => {  
        Send();
        event.preventDefault();
        //guardado de datos
        event.target.reset();
    }


    return {

        handleInputChange,
        enviarDatos
    }
};