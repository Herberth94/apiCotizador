import React ,{useState} from "react";
import "./css/Usuarios.css";
import Table from 'react-bootstrap/Table'
import axios from 'axios';

/*const listaUsuarios = [
    {id: 1, rol: 'Rol', correo: 'Correo' , contrasena: 'Contraseña'},
    {id: 2, rol: 'Administrador', correo: 'oscar@delfos369.com' , contrasena: '12345'},
    {id: 3, rol: 'Preventa', correo: 'usuario@delfos369.com' , contrasena: '12345'}
  ];*/

function Usuarios(prop) {

    const [listaUsuarios,setlistaUsarios ] = useState([]);
    const borrarUsuario = async(dato)=>{
        const confirmacion =window.confirm("¿Seguro que quieres borrar este registro?");
        if(confirmacion){
          console.log(dato);
          const respuesta = await axios.get(`http://localhost:4001/api/cotizador/delete/${dato}`);
          console.log(respuesta.data);
          llamadoUsuario();
        }else{
            llamadoUsuario();
        }
    };

    const llamadoUsuario = async() => {
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        setlistaUsarios (respuesta.data.reSql);
    }
    
    
    
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
        <tr key={listaUsuarios[key].id_usuario} >
            <td>{listaUsuarios[key].id_usuario}</td>
            <td>{listaUsuarios[key].rol}</td>
            <td>{listaUsuarios[key].email}</td>
            <td>{listaUsuarios[key].password}</td>
            <td><button  onClick={() =>borrarUsuario(listaUsuarios[key].id_usuario)}> borrar</button></td>
       
        </tr>
       
       ))
      }
     
     </tbody>
       
            
                </Table>
            </div>
            <div><button onClick={llamadoUsuario}>actulizar</button></div>
          
         
        </div>
        
    );
}

export default Usuarios;