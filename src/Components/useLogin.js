import  {useState} from 'react';
import axios from 'axios';

export const useLogin = () => {

     const [datos,setDatos] = useState ({
           
          email  :'',
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
        email : datos.email,
        password : datos.password
       
    };
    // el URL se tiene que cambiar por la ruta donde ira a lojado la aplicación
    const respuesta = await axios.post('http://localhost:4000/api/cotizador',data);
    const send2= respuesta.data;
    console.log(send2);
    alert('Información enviada');


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