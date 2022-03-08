import  {useState} from 'react';
import axios from 'axios';

export const GuardarPartida = () => {
    const[datos, setDatos] = useState({
        partida_nombre: '',
        partida_descripcion: ''

    });

    const handleInputChange = (event) =>{
        setDatos({
            ...datos,[event.target.name] : event.target.value ,
        })
    }

    async function Send (){

        const data = {
            partida_nombre: datos.partida_nombre,
            partida_descripcion: datos.partida_descripcion
        };

        try{
            console.log("soy la data de la partida", data)

            const respuesta = await axios.post('http://localhost:4001/api/cotizador/partida/1', data);
            const send2 = respuesta.data;
            console.log("hola soy send2 de las partidas", send2);
            alert('Registro exitoso')
        }
        catch (error){
            console.log("este es el error de las partidas", error);
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