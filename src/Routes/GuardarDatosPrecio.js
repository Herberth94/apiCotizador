import  {useState} from 'react';
import axios from 'axios';

export const GuardarDatosPrecio = () => {
    const [datos, setDatos] = useState ({
        precio_lista: '',
        precio_unitario: '',
        precio_descuento: '',   
    });

    const handleChange = (event) => {
        setDatos({
            ...datos,[event.target.name] : event.target.value ,
        })
    }
    

    async function Send (){
        const data = {
            precio_lista: datos.precio_lista,
            precio_unitario: datos.precio_unitario,
            precio_descuento: datos.precio_descuento
        };
        console.log("este es el send de guardar datos precio", Send) 

        try{
            const respuesta = await axios.post('http://localhost:4001/api/cotizador/precio/agregar', data);
            const send2 = respuesta.data;
            
            alert('Registro exitoso')
            }
            catch (error){
            console.log("este es el error", error);
            }
    }
    const enviarDatosPrecio = (event) =>{
        console.log("estos son los datos", datos) 
        Send();
        
        // event.preventDefault()
        // event.target.reset();
    }
    return{
        handleChange,
        enviarDatosPrecio
    }
    
}