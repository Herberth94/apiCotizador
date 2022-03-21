import React, { useState } from "react";
import { useRegistro } from '../Routes/ModificarUsuarios';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Animaciones from "../Componentes/Animaciones";


import {url} from "../Componentes/Ocultar";
import {url2} from "../Componentes/Ocultar";


function AdministrarUsuarios() {

     /*========================== Mostrar Ocultar Tabla ==========================*/  
    const [show, setShow] = useState(false);
    /*========================== Mostrar Ocultar Botón ==========================*/
    const [show2, setShow2] = useState(true);

    const {
        actualizacion,
        handleInputChange,

    } = useRegistro();
    const [keyRegistro, SetKeyregistro] = useState('');
    const [listaUsuarios, setlistaUsarios] = useState([]);
    const [validar, setvalidar] = useState([]);
    const borrarUsuario = async (dato) => {
        const confirmacion = window.confirm("¿Seguro que quieres borrar este registro?" );
        if (confirmacion) {
            console.log(dato);
            const respuesta = await axios.delete(url2 + `/api/cotizador/delete/${dato}`);
            console.log(respuesta.data);
            llamado();
        } else {
            llamado();
        }
    };

    const enable = (key) => {
        const newARR = [];
        //console.log(validar);
        let i = Object.keys(listaUsuarios);
        for (let x = 0; x < i.length; x++) {

            newARR[x] = validar[0][x];
        }
        console.log(newARR);    
        for (let y = 0; y < i.length; y++) {
            if (y === parseInt(key)) {
                //newARR[y]=!validar[0][y];
                newARR[y] = !validar[0][y];
            }
            if (y !== parseInt(key)) {
                newARR[y] = true
            };
        }
        setvalidar([newARR]);
        SetKeyregistro(key);
        console.log("segundo array", newARR)
       
    }
    
    // **********reset contraseña*********
    let estado_login = 0
    const resetearContraseña = async (id_usuario, email) => {
        let newpassword = email
        console.log("este es el email", email)
        console.log("este es el id usuario", id_usuario)
        const respuesta = await axios.put(url2 + `/api/cotizador/edit/pass/${id_usuario}`, {password:newpassword, estado_login});
        alert('Reseteo de la contraseña efectuado exitosamente')
    }

    const llamado = async () => {
        const respuesta = await axios.get(url + '/api/cotizador/registro');
        setlistaUsarios(respuesta.data.reSql);
        
    }
    const llamadoUsuario = async () => {
        setShow2(!show2);
        const newValidar = [];
        const respuesta = await axios.get(url + '/api/cotizador/registro');
        let i = Object.keys(respuesta.data.reSql);
        for (let x = 0; x < i.length; x++) {
            newValidar[x] = true;
        }
        setvalidar([...validar, newValidar])
        setlistaUsarios(respuesta.data.reSql);
        console.log(listaUsuarios)
        console.log(validar);
        
    }
    const envioData = (datos, key) => {
        if(key === '')
        {
            setShow(!show);
            console.log("prueba");
            
        }
        else{
            setShow(!show);
            console.log(key);
            actualizacion(datos[key]);
            //window.location.reload();
            actulizarPage(key);
        }
        
    }
    const actulizarPage = (key) => {
        enable(key);
    }

  
    return (
        
        <div className="contenido-usuarios">
        
          <div className="head">

          </div>
            <div className="table-responsive">
  {/*======================= Titulo Animación =======================*/}
  <div>
       <Animaciones   mytext= "Lista de Usuarios"      /> 
       </div>





  {/*================= Botón Mostrar/Ocultar Lista ==================*/}
                <div>
                    <button className="btn btn-primary modificar" type="button" onClick={() => { llamadoUsuario(); }}>  {show2 ? 'Mostrar Lista' : 'Ocultar Lista'} </button>
                    {show2 ? (
                        <div >
   {/*=================== Ocultar Lista DIV  =====================*/}
                        </div>
                    ) : (
                        <div >
  {/*=================== Botón Mostrar Lista DIV====================*/}
                            <br />
  {/*===================     Tabla Usuarios    ====================*/}
                            <Table responsive striped bordered hover size="sm" className="tablas">
                                <thead>
  {/*=================== Titulos Tabla Usuarios ====================*/}
                                    <tr className="titulo-tabla-usuarios">
                                        <th>ID</th>
                                        <th>Administrador</th>
                                        <th>Correo</th>
                                        <th>Contraseña</th>
                                        <th>Eliminar</th>
                                        <th>Modificar</th>
                                    </tr>
                                </thead>
                                <tbody>
   {/*=================== Contenido Tabla Usuarios =================*/}
                                    {Object.keys(listaUsuarios).map((key) => (
                                        //checar aqui va los titulos
                                        <tr key={listaUsuarios[key].id_usuario} >
                                            
                                            <td>{listaUsuarios[key].id_usuario}</td>
                                            <td><input className="input-name" defaultValue={listaUsuarios[key].rol} onChange={handleInputChange} disabled={validar[0][key]} name="rol" id={listaUsuarios[key].id_usuario}></input></td>
                                            <td><input className="input-name" defaultValue={listaUsuarios[key].email} onChange={handleInputChange} disabled={validar[0][key]} name="email"></input> </td>
                                            <td><button className="btn btn-primary Resetear" onClick={() => resetearContraseña(listaUsuarios[key].id_usuario,listaUsuarios[key].email)}> Resetear </button></td>
                                            <td><button className="btn btn-primary eliminar" onClick={() => borrarUsuario(listaUsuarios[key].id_usuario)}> Eliminar </button></td>
                                            <td><button className="btn btn-primary modificar" type="button" onClick={() => { enable(key); envioData(listaUsuarios, keyRegistro)}}>  {show ? 'Aceptar' : 'Modificar'} </button>
                                                {show ? (
                                                    <div >
   {/*=================== Aceptar Cambios DIV ====================*/}
                                                    </div>
                                                ) : (
                                                    <div >
   {/*=================== Modificar Usuario DIV ====================*/}
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default AdministrarUsuarios;