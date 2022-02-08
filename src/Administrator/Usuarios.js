import React from "react";
import "./css/Usuarios.css";
import Table from 'react-bootstrap/Table'



const listaUsuarios = [
    {id: 1, rol: 'Rol', correo: 'Correo' , contrasena: 'Contraseña'},
    {id: 2, rol: 'Administrador', correo: 'oscar@delfos369.com' , contrasena: '12345'},
    {id: 3, rol: 'Preventa', correo: 'usuario@delfos369.com' , contrasena: '12345'}
  ];


function Usuarios(prop) {
    return (
        <div className="contenido-usuarios">
               <div className="table-responsive">
               <div className="titulo-proyectos">
                <h2>Lista de Usuarios </h2>
            </div>
                <Table responsive  striped bordered hover size="sm">
                    <thead>
                   
                    </thead>
                                       
         <tbody>
      {Object.keys(listaUsuarios).map((key) => (

          //checar aqui va los titulos
        <tr key={listaUsuarios[key].id} >    

        
        <td>{listaUsuarios[key].rol}</td>
        <td>{listaUsuarios[key].correo}</td>
        <td>{listaUsuarios[key].contrasena}</td>
        </tr>
     
       ))
      }
    </tbody>
                        
                </Table>
            </div>
        </div>
    );
}

export default Usuarios;