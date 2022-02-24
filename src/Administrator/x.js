import React, { useState } from "react";
import { useRegistro } from '../Components/ModificarUsuarios';
import Table from 'react-bootstrap/Table'
import axios from 'axios';


function Usuarios() {

    {  /*========================== Mostrar Ocultar Tabla ==========================*/  }
    const [show, setShow] = useState(false);
    { /*========================== Mostrar Ocultar Botón ==========================*/}
    const [show2, setShow2] = useState(true);
    const {
        actualizacion,
        handleInputChange,

    } = useRegistro();
    const [keyRegistro, SetKeyregistro] = useState('');
    const [listaUsuarios, setlistaUsarios] = useState([]);
    const [validar, setvalidar] = useState([]);
    const borrarUsuario = async (dato) => {
        const confirmacion = window.confirm("¿Seguro que quieres borrar este registro?");
        if (confirmacion) {
            console.log(dato);
            const respuesta = await axios.get(`http://localhost:4001/api/cotizador/delete/${dato}`);
            console.log(respuesta.data);
            llamado();
        } else {
            llamado();
        }
    };

    const enable = (key) => {
        const newARR = []
        //console.log(validar);
        let i = Object.keys(listaUsuarios);
        for (let x = 0; x < i.length; x++) {

            newARR[x] = validar[0][x];
        }
        //console.log(newARR);    
        for (let y = 0; y < i.length; y++) {
            if (y == key) {
                //newARR[y]=!validar[0][y];
                newARR[y] = !validar[0][y];
            }
            if (y != key) {
                newARR[y] = true
            }
        }
        setvalidar([newARR])
        SetKeyregistro(key)
        //console.log(newARR)
    }

    const llamado = async () => {
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        setlistaUsarios(respuesta.data.reSql);
    }
    const llamadoUsuario = async () => {
        setShow2(!show2);
        const newValidar = [];
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        let i = Object.keys(respuesta.data.reSql);
        for (let x = 0; x < i.length; x++) {
            newValidar[x] = true;
        }
        setvalidar([...validar, newValidar])
        setlistaUsarios(respuesta.data.reSql);
    }
    const envioData = (datos, key) => {
        setShow(!show);
        //console.log(key);
        actualizacion(datos[key]);
        //window.location.reload();
        actulizarPage(key);
    }
    const actulizarPage = (key) => {
        enable(key);
    }
    return (
        <div className="contenido-usuarios">
            <div className="table-responsive">
  {/*======================= Titulo Animación =======================*/}
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Lista de Usuarios<span></span></h1>
                        </div>
                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>
                    </div>
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
 
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Usuarios;