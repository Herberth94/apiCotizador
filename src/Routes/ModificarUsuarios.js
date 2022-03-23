import axios from 'axios';
import {url2} from "../Componentes/Ocultar";


export const useRegistro = () => {
  
  const actualizacion = (data,datos)=>{
         //console.log(data);
         //console.log(datos);
         Send(data,data.id_usuario,datos);
         //console.log(data.id_usuario);
 }

 async function Send (data,id,datos){
     const dataActulizacion = {
         rol:data.rol,
         email:data.email,
         //password:data.password
        //  estado_login: 1 

     };
     console.log(data);
     console.log(dataActulizacion);
     const prueba = Object.keys(datos);
     console.log(prueba)
     for(let keys of prueba){
         if(datos[keys]!==''){
             //console.log("prueba");
             console.log(datos[keys]);
             dataActulizacion[keys]=datos[keys]
             console.log(dataActulizacion);

         }    
     } 
    try {
     /*    const respuesta = await axios.put(`http://localhost:4001/api/cotizador/edit/${id}`,dataActulizacion);
 */
        const respuesta = await axios.post(url2 +`/api/cotizador/edit/${id}`,dataActulizacion);
        const send2= respuesta.data;
        console.log(send2);
        //alert('Dato Actualizado');
           
        } catch (error) {
           console.log(error);
            
        }
        
 }
    return {
        actualizacion,
        
    }
};