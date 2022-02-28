import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { useRegistro } from '../Routes/ModificarUsuarios';


function AdministrarClientesP(prop) {

    const {
        handleInputChange,
        enviarDatos
    } = useRegistro();

    const [listaUsuarios, setlistaUsarios] = useState([]);
    const [activado, setactivado] = useState(true);
    const enable = (valor) => {
        if (valor) { return true }
        else { return false };

    }

    const borrarUsuario = async (dato) => {
        const confirmacion = window.confirm("¿Seguro que quieres borrar este registro?");
        if (confirmacion) {
            console.log(dato);
            const respuesta = await axios.get(`http://localhost:4001/api/cotizador/delete/${dato}`);
            console.log(respuesta.data);
            llamadoUsuario();
        } else {
            llamadoUsuario();
        }
    };

    const llamadoUsuario = async () => {
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        setlistaUsarios(respuesta.data.reSql);
    }

    return (


        <div className="contenido-usuarios">
            <div className="table-responsive">


                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Lista de Clientes<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>

                    </div>
                </div>

                {/*********Lista Clientes ********/}

                <div>
                    <button className="btn btn-primary actualizar" onClick={llamadoUsuario}>Actualizar Datos</button>
                    <br />
                    <br />
                </div>


                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Nombre Cliente</th>
                            <th>Razón Social</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(listaUsuarios).map((key) => (

                            //checar aqui va los titulos
                            <tr key={listaUsuarios[key].id_usuario} >
                                <td>{listaUsuarios[key].id_usuario}</td>
                                <td><input className="input-name" defaultValue={listaUsuarios[key].rol} onChange={handleInputChange} disabled={activado} name="rol"></input></td>
                                <td><input className="input-name" defaultValue={listaUsuarios[key].email} onChange={handleInputChange} disabled={activado} name="email"></input> </td>
                                <td><button className="btn btn-primary eliminar" onClick={() => borrarUsuario(listaUsuarios[key].id_usuario)}> borrar</button></td>
                                <td><button className="btn btn-primary modificar" onClick={() => setactivado(!activado)}>Actualizar</button></td>

                            </tr>
                        ))
                        }

                    </tbody>

                </Table>
            </div>
        </div>
    );
}

export default AdministrarClientesP;