import React from "react";
import "./css/Usuarios.css";
import Table from 'react-bootstrap/Table'


const hola = ()=>{
    console.log("hola");

}

function AdministrarClientes(prop) {
    return (

        
        <div className="contenido-usuarios">
               <div className="table-responsive">

                   
               <div className="titulo-proyectos">
                <h2>Lista de Clientes </h2>
            </div>
  {/*********Lista Clientes ********/}

                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>#</th>
                            <th>Nombre Cliente</th>
                            <th>Razon Social</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                        <tr className="verde">
                            <td>1</td>
                            <td>Delfos</td>
                            <td>Delfos 369 S.A. de C.V.</td>
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
                        <tr className="blanco">
                            <td>2</td>
                            <td>Palo Tinto Networks</td>
                            <td>S.A. de C.V.</td>
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
                       
                        </tbody>
                </Table>
            </div>
        </div>
    );
}

export default AdministrarClientes;