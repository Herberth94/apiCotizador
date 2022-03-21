import  {useState} from 'react';
import axios from 'axios';

export const EditProyecto = () => {
     /*=================================== Edición de los datos de un proyecto ===================================*/
    // Almacenamiento de los nuevos datos de proyecto_clave y proyecto_descripcion
    const [datosProy, setDatosProy] = useState([{
        proyecto_clave:'',
        proyecto_descripcion:''
    }])

    // Almacenamiento del nuevo dato de nombre_cliente
    const [datosProyIdC, setDatosProyIdC] = useState([{
        nombre_cliente:''
    }])
    
    // Obtención de los datos introducidos de proyecto_clave y proyecto_descripcion en los input´s
    const editHandleInputChangeP = (event) =>{
        setDatosProy ({
          ...datosProy,[event.target.name] : event.target.value ,
        })
    }

    // Obtención del dato nombre_cliente introducido en el input
    const editHandleInputChangePIdC = (event) =>{
        setDatosProyIdC ({
          ...datosProyIdC,[event.target.name] : event.target.value ,
        })
    }

    const actualizacionProy = (dataClientes,dataProyecto)=>{
        const dataProyecto_1 ={
            proyecto_clave:dataProyecto.proyecto_clave,
            proyecto_descripcion:dataProyecto.proyecto_descripcion,
            proyecto_id_cliente:dataProyecto.proyecto_id_cliente
        };

        var ListaC = [{}]
        ListaC = dataClientes;
        const clienteId = {proyecto_id:''}
        let i = Object.keys(ListaC);
        if(datosProyIdC.nombre_cliente !== ''){
            for (let c = 0; c < i.length; c++) {
                if (datosProyIdC.nombre_cliente === ListaC[c].nombre_cliente){
                    clienteId.proyecto_id_cliente = ListaC[c].cliente_id;
                }
            }
        }
        SendEditProy(clienteId.proyecto_id_cliente,dataProyecto_1,dataProyecto.proyecto_id) 
   }
   
    // Función que realiza la inserción del proyecto
    async function SendEditProy (cliente_id,dataP,proyecto_id){
        const dataActualizacion ={
            proyecto_clave:dataP.proyecto_clave,
            proyecto_descripcion: dataP.proyecto_descripcion,
            proyecto_id_cliente: dataP.proyecto_id_cliente
        }
        
        const k = Object.keys(datosProy);
        for(let keys of k){
            if(datosProy[keys] !== ''){
                dataActualizacion[keys]=datosProy[keys];
                if(datosProyIdC !== ''){
                    dataActualizacion.proyecto_id_cliente = cliente_id;
                }
            }    
        } 
        
        try{
            await axios.put(`http://localhost:4001/api/cotizador/proyecto/update/${proyecto_id}`, dataActualizacion);
            alert('Proyecto editado exitosamente')

        }catch (error){
            alert('Edición de proyecto invalido')
        }
    }

    /*===========================================================================================================*/
    return {
        actualizacionProy,
        editHandleInputChangeP,
        editHandleInputChangePIdC
    }
};