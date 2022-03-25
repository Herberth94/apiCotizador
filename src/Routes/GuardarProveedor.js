import axios from "axios";
import { useState } from "react";
import {url} from "../Componentes/Ocultar";
import {url2} from "../Componentes/Ocultar";




export const InsertDatosProvedor = () => {
    /*=================================== Inserción de datos en la tabla proveedor ===================================*/

    // Almacenamiento de los datos
    const[datosProv, setDatosProv] = useState({
        proveedor_nombre:'',
        proveedor_telefono:'',
        proveedor_email:''
    });

    // Función que obtiene los datos introducidos en los inputs 
    const handleInputChange = (event) =>{
        setDatosProv({
            ...datosProv,[event.target.name] : event.target.value ,
        })
    }

    // Función que realiza la inserción de los datos a la tabla proveedor en la bd 
    async function SendProveedor (){
        const data = {
            proveedor_nombre:datosProv.proveedor_nombre,
            proveedor_telefono:datosProv.proveedor_telefono,
            proveedor_email:datosProv.proveedor_email
        };
        //console.log(id);
        try{
           
            await axios.post( url +'/api/cotizador/proveedor/agregar', data); 
            // }
            alert('Registro exitoso')
        }
        catch (error){
            console.log(error);
        }
    }

    const enviarDatosProv = (event) =>{
        SendProveedor();
        event.preventDefault()
        event.target.reset();
    }

    
    
    /*==============================================================================================================*/
    return{
        handleInputChange,
        enviarDatosProv
    }
};
