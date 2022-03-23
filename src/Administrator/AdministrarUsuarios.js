import React, { useState } from "react";
import { useRegistro } from '../Routes/ModificarUsuarios';
import axios from 'axios';
import Animaciones from "../Componentes/Animaciones";
import { CrudUsuarios } from "../Componentes/CrudUsuarios";


function AdministrarUsuarios() {

     /*========================== Mostrar Ocultar Tabla ==========================*/  
    const [show, setShow] = useState(false);
    /*========================== Mostrar Ocultar Botón ==========================*/
    const [show2, setShow2] = useState(true);

    const {actualizacion} = useRegistro();
    const [first, setfirst] = useState(false)
    const [listaUsuarios, setlistaUsarios] = useState([]);
    const borrarUsuario = async (dato) => {
        console.log("borrar");
        console.log(dato);
        const confirmacion = window.confirm("¿Seguro que quieres borrar este registro?" );
        if (confirmacion) {
            const respuesta = await axios.delete(`http://localhost:4001/api/cotizador/delete/${dato}`);
            llamado();
        } else {
            llamado();
        }
    };
   
    // **********reset contraseña*********
    
    const resetearContraseña = async (id_usuario, email) => {
        const estado_login = 0
        let newpassword = email
        console.log("este es el email", email)
        console.log("este es el id usuario", id_usuario)
        const respuesta = await axios.put(`http://localhost:4001/api/cotizador/edit/pass/${id_usuario}`, {password:newpassword, estado_login});
        alert('Reseteo de la contraseña efectuado exitosamente')
    }

    const envioData = (datos, key,data) => {
            if(first){
                console.log(datos[key])
                console.log(data)
                actualizacion(datos[key],data);

            }
            
            
            ////window.location.reload();
            //actulizarPage(key);
    }
    
    /*=================== Leer todos los usuarios registrados  =================*/
    const llamadoUsuario = async () =>{
       const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
       setlistaUsarios(respuesta.data.reSql);
       setShow2(!show2)
       setShow(!show)
    }
    /*==========================================================================*/
    const llamado = async () =>{
       const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
       setlistaUsarios(respuesta.data.reSql);
    }
  return (
        
        <div className="contenido-usuarios">
          <div className="head"></div>
          <div className="table-responsive">
          <div>
              {/*======================= Titulo Animación =======================*/}
               <Animaciones   mytext= "Lista de Usuarios"      /> 
         </div>

  {/*================= Botón Mostrar/Ocultar Lista ==================*/}
                <div>
                    <button className="btn btn-primary modificar" type="button" onClick={()=>llamadoUsuario()} >  {show2 ? 'Mostrar Lista' : 'Ocultar Lista'} </button>
                    {show2 ? (
                        <div >
   {/*=================== Ocultar Lista DIV  =====================*/}
                        </div>
                    ) : (
                        <div >
  {/*=================== Botón Mostrar Lista DIV====================*/}
                            <br />
  {/*===================     Tabla Usuarios    ====================*/}
                                <div> 
                                    <CrudUsuarios 
                                        usuarios={listaUsuarios} 
                                        borrar={borrarUsuario} 
                                        setfirst={setfirst}
                                        resetearContraseña={resetearContraseña}
                                        envioData = {envioData}
                                    />
                                </div>
                           
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default AdministrarUsuarios;