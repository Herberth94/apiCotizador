import { useState } from 'react';
import axios from 'axios';

export const GuardarDatosMarca = () => {
    const [datos, setDatos] = useState({
        marca_nombre: ''
    });

    const handleChange = (event) => {
        setDatos({
            ...datos,[event.target.name] : event.target.value 
        })
    }
    async function Send() {
        const data = {
            marca_nombre: datos.marca_nombre,

        };

        try {
            const respuesta = await axios.post('http://localhost:4001/api/cotizador/marca/agregar', data);
            const send2 = respuesta.data;

            alert('Registro exitoso')
            }
            catch (error) {

            }

    }
    const enviarDatosMarca = (event) => {
        Send();
        

    }
    return {
        handleChange,
        enviarDatosMarca
    }
}