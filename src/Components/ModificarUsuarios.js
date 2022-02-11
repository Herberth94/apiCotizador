import  {useState} from 'react';
import axios from 'axios';

export const useRegistro = () => {
     const [datos,setDatos] = useState ({
          rol: '', 
          email  :'',
          password:''
           
   });

   const handleInputChange = (event) => {
          setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
   
    //console.log(event.target.value)
   
}

const actulizacion = (e)=>{

    console.log(e);

}

async function Send (){

    const data= {
        rol: datos.rol,
        email : datos.email,
        password : datos.password
       
    };

    if(datos.email === datos.remail)
    {
        try {

        const respuesta = await axios.post('http://localhost:4001/api/cotizador/registro',data);
        const send2= respuesta.data;
        console.log(send2);
        alert('Registro exitoso');
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    else {
        alert('Los correos ingresados NO son iguales');
    }
 

}
    const enviarDatos = (event) => {  
        Send();
        event.preventDefault();
        //guardado de datos
        event.target.reset();
    }


    return {
        actulizacion,
        handleInputChange,
        enviarDatos
    }
};