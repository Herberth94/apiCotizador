import  {useState} from 'react';
import axios from 'axios';



import {url2} from "../Componentes/Ocultar";





export const EditPartida = () => {

//     const [datos,setDatos] = useState ({
//           partida_nombre: '', 
//           partida_descripcion:''
//     });

//    const handleInputChangePartida = (event) => {
//           setDatos ({
//             ...datos,[event.target.name] : event.target.value ,
//         })
//     }

    const actualizacionPar = (data,newdata)=>{
        SendUpdatePartida(data,data.partida_id,newdata)      
    }

    async function SendUpdatePartida (data,id,newdata){
        //console.log(datos);
        const dataActualizacion = {
            partida_nombre:data.partida_nombre, 
            partida_descripcion:data.partida_descripcion
        };
        
        const k = Object.keys(newdata);
        for(let keys of k){
            if(newdata[keys]!==''){
                dataActualizacion[keys] = newdata[keys]
            }    
        } 
        
        try {
            //console.log(dataActualizacion);
            await axios.put(url2 + `/api/cotizador/partida/update/${id}`,dataActualizacion);
            alert('Partida editada exitosamente');
                
            } catch (error) {
                alert('Edición de Partida invalido');
                console.log(error);
            }
    }
    return {
        actualizacionPar
    }
};


    