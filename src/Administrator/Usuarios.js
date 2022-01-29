import React from "react";
import "./css/Usuarios.css";
import Table from 'react-bootstrap/Table'


const hola = ()=>{
    console.log("hola");

}

function Usuarios(prop) {
    return (
        <div className="contenido-usuarios">
               <div className="table-responsive">
               <h2>Lista Usuarios</h2>
                <Table responsive>
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>#</th>
                            <th>Rol</th>
                            <th>Correo</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr className="verde">
                            <td>1</td>
                            <td>Administrador</td>
                            <td>name@dominio.com</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="blanco">
                            <td>2</td>
                            <td>Pre-venta</td>
                            <td>name@domino.com</td>
                            <td className ="icono">
                               
                             
                               <a
                                  className="btn btn-danger boton">
                                    <i className="bi bi-trash"></i>
                                </a>
                            </td>
                            <td className ="icono">
                               
                             
                               <a
                                  className="btn btn-primary boton">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                        </tr>
                        <tr className="verde">
                            <td>3</td>
                            <td>Venta</td>
                            <td>name@domino.com</td>
                            <td> <a onClick = {hola}
                                className="btn btn-danger boton">                         
                                <i className="bi bi-trash"></i>
                            </a></td>

                            <td className ="icono">
                                                         
                               <a
                                  className="btn btn-primary boton">
                                    <i className="fas fa-edit"></i>
                                </a>
                            </td>
                            
                        </tr>
                        </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Usuarios;