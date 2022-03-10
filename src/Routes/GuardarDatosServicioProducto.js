import  {useState} from 'react';
import axios from 'axios';

export const GuardarDatosServicioProducto = () => {
    const[datos, setDatos] = useState  (
        {
            sp_no_parte: '',
            sp_descripcion: '',
            sp_meses: '',
            sp_semanas: '',
            sp_cantidad: '',
            sp_comentarios: ''
        });

    const handleChange = (event) =>{
        setDatos({
            ...datos, [event.target.name] : event.target.value
        })
    }
    
    async function Send (){
        const data = {
            sp_no_parte: datos.sp_no_parte,
            sp_descripcion: datos.sp_descripcion,
            sp_meses: datos.sp_meses,
            sp_semanas: datos.sp_semanas,
            sp_cantidad: datos.sp_cantidad,
            sp_comentarios: datos.sp_comentarios
        };

        try{
            console.log("hola, soy guardar data servicio producto", data)

            const respuesta = await axios.post('http://localhost:4001/api/cotizador/sp/agregar', data);
            const send2 = respuesta.data;
            console.log("hola soy send2", send2); 
            alert('Registro exitoso')
            }
            catch (error){
            console.log("este es el error", error);
        }

    }
    const enviarDatosServicioProducto = (event) =>{
        console.log("estos son los datos", datos) 
        Send();
        console.log("este es el send", Send) 
        // event.preventDefault()
        // event.target.reset();
    }
    return{
        handleChange,
        enviarDatosServicioProducto
    }

};