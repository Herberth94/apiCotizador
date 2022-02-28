import  {useState} from 'react';
import axios from 'axios';

export const useRegistro = () => {
    
     const [datos,setDatos] = useState ({
          nombre_cliente: '', 
          razon_social:'',
          telefono:''
           
   });

   const handleInputChange = (event) => {
          setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
   
    console.log(event.target.value)
   
}

    const actualizacion = (data)=>{

         const data_1 ={
             nombre_cliente:data.nombre_cliente,
             razon_social : data.razon_social,
             telefono:data.telefono
             
         };
                 
         console.log(data);
         //console.log(datos);
         //Send(datos,data.id_usuario);
         //console.log(data.cliente_id);
         Send(data_1,data.cliente_id)
        
        
        

         
}

 async function Send (data,id){
     const dataActulizacion = {
         nombre_cliente:data.nombre_cliente,
         razon_social:data.razon_social,
         telefono:data.telefono
        
     };
          
     console.log(data);
     //console.log(id);
     console.log(datos);
     const prueba = Object.keys(datos);
     for(let keys of prueba){
         if(datos[keys]!==''){
             //console.log("prueba");
             //console.log(datos[keys]);
             dataActulizacion[keys]=datos[keys]
             console.log(dataActulizacion);

         }    
     } 
    try {

        const respuesta = await axios.post(`http://localhost:4001/api/cotizador/clientes/update/${id}`,dataActulizacion);
        //const send2= respuesta.data;
        //console.log(send2);
        //alert('Dato Actualizado');
            
        } catch (error) {
           console.log(error);
            
        }
        
 
 }
   return {
        actualizacion,
        handleInputChange,
       
    }
};