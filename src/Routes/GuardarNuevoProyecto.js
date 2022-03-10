import  {useState} from 'react';
import axios from 'axios';

export const GuardarNuevoProyecto = () => {
    const [datos, setDatos] = useState ({
        proyecto_clave:'',
        proyecto_descripcion:'',
        proyecto_id_cliente:''

    });

    const [ListaC, setListaC] = useState ([]);

    const C = {
        nombre_cliente: ''
    }

    const handleInputChange = (event) =>{
      /*   console.log("este es el event.target.value", event.target.value) */
        setDatos ({
            ...datos,[event.target.name] : event.target.value ,
        })
        listaClientes();
    }

    const listaClientes = async () => {
        try {
          const respuesta = await axios.get("http://localhost:4001/api/cotizador/clientes/view");
          await setListaC(respuesta.data.reSql);
          //console.log(ListaC[0].nombre_cliente);
          //console.log(ListaC);
          let i = await Object.keys(ListaC);
          //console.log(i);
          for (let c = 0; c < i.length; c++) {
            if (datos.proyecto_id_cliente == ListaC[c].cliente_id) {
              //ListaC[c].nombre_cliente;
              C.nombre_cliente = ListaC[c].nombre_cliente;
              console.log(C.nombre_cliente);
            }        
          }
          //console.log(C.cliente_nombre);
          // ListaC.map ((cliente) =>{
          //   if(cliente.cliente_id == datoid.proyecto_id_cliente){
          //     setListaC.nombre_cliente(cliente.nombre_cliente);
          //   }
          // })
          // console.log(ListaC.nombre_cliente);
          //setListaC(respuesta.data.reSql)
        } catch (error) {
          
        }
      };
    async function Send (){

        const data = {
            proyecto_clave: datos.proyecto_clave,
            proyecto_descripcion: datos.proyecto_descripcion,
            proyecto_id_cliente: datos.proyecto_id_cliente
        };

        try{
            
            const respuesta = await axios.post(`http://localhost:4001/api/cotizador/proyecto/agregar/${data.proyecto_id_cliente}`, data);
            const send2 = respuesta.data;
            
            alert('Registro exitoso')
            }
            catch (error){
            
            }
    }
    const enviarDatos = (event) =>{
        Send();
        event.preventDefault()
        event.target.reset();
       
    }

    return{
        handleInputChange,
        enviarDatos,
        C
    }


};