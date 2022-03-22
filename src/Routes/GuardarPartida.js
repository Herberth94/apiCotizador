import axios from "axios";
import { useState } from "react";
import {url} from "../Componentes/Ocultar";
import {url2} from "../Componentes/Ocultar";




export const InsertDatosPartida = () => {
    /*=================================== Inserción de datos en la tabla partida ===================================*/
    // Almacenamiento del último proyecto insertado
    var listaProyectos = {
        proyecto_id:'',
        proyecto_clave:'',
        proyecto_descripcion:'',
        proyecto_id_cliente:'',
        proyecto_fecha_creacion:'',
        proyecto_id_cat_c_a_sptn_ma:'',
        proyecto_fecha_modificacion:'',
        proyecto_estatus:''
    };

    // Almacenamiento del id del último proyecto insertado
    var proyectoId = {
        proyecto_id:''
    };

    const [pId, setPId] = useState('')

    // Almacenamiento de los datos de una partida a insertar
    const[datosPartida, setDatosPartida] = useState({
        partida_nombre: '',
        partida_descripcion: ''
    });

    // Función que obtiene los datos introducidos en los inputs de los datos de una partida y los guarda en el objeto de datosPartida
    const handleInputChangePartida = (event) =>{
        setDatosPartida({
            ...datosPartida,[event.target.name] : event.target.value ,
        })
    }

    function getIdProyecto(proyecto_id){
        setPId(proyecto_id)
        //console.log(pId);
    }

    // Función que realiza la inserción de los datos a la tabla partida en la bd 
    async function SendPartida (){
        const data = {
            partida_nombre: datosPartida.partida_nombre,
            partida_descripcion: datosPartida.partida_descripcion
        };
        //console.log(id);
        try{
            //console.log(id);
            // Obtención del id del último proyecto insertado 
            const resGetProyectos = await axios.get(url + '/api/cotizador/proyecto/view');
            listaProyectos = resGetProyectos.data.data.pop();
            proyectoId.proyecto_id = listaProyectos.proyecto_id;
            // if(proyecto_id !== proyectoId.proveedor_id){
            // await axios.post(`http://localhost:4001/api/cotizador/partida/${proyecto_id}`, data);
            // }else{
            await axios.post( url2 +`/api/cotizador/partida/${proyectoId.proyecto_id}`, data); 
            // }
            alert('Registro exitoso')
        }
        catch (error){
            console.log(error);
        }
    }

    const enviarDatosPartida = (event) =>{
        //console.log(pId);
        SendPartida(pId);
        event.preventDefault()
        event.target.reset();
    }

    
    
    /*==============================================================================================================*/
    return{
        handleInputChangePartida,
        enviarDatosPartida,
        getIdProyecto
    }
};
