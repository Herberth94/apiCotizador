import  {useState} from 'react';
import axios from 'axios';

export const useRegistro = () => {
     const [datos,setDatos] = useState ({
          rol: '', 
          email  :'',
          remail :'',
          password:''
           
   });

   const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos ({
        ...datos,[event.target.name] : event.target.value ,
    })
}

async function Send (){

    const data= {
        rol: datos.rol,
        email : datos.email,
        password : datos.password,
        estado_login:false
       
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

        handleInputChange,
        enviarDatos
    }
};