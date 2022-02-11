import React ,{useState} from "react";
import "./css/Usuarios.css";
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {useRegistro} from '../Components/ModificarUsuarios';
/*const listaUsuarios = [
    {id: 1, rol: 'Rol', correo: 'Correo' , contrasena: 'Contraseña'},
    {id: 2, rol: 'Administrador', correo: 'oscar@delfos369.com' , contrasena: '12345'},
    {id: 3, rol: 'Preventa', correo: 'usuario@delfos369.com' , contrasena: '12345'}
  ];*/

function Usuarios(prop) {

    const {  
          handleInputChange,
          enviarDatos
        } = useRegistro();

    const [listaUsuarios,setlistaUsarios ] = useState([]);
    const [activado,setactivado] = useState(true);
    const [validar , setvalidar] = useState({})
    const book ={}


    const enable =(key)=>
    {
        setvalidar({
            [key] : activado,            
        })

        console.log(validar);
    }
        
    
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
        const i = Object.keys(respuesta.data.reSql);
        for(let j=0 ;j < i.length;j++ ){
            
            setvalidar({
                [j] : true,            
            })
            
        }
        console.log()

       setlistaUsarios (respuesta.data.reSql);
        
        
    }
    
    
    
    return (
        
        <div className="contenido-usuarios">
               <div className="table-responsive">
               <div className="titulo-proyectos">
                <h2>Lista de Usuarios </h2>
                
            </div>


            <div>
                <button className= "btn btn-primary actualizar" onClick={llamadoUsuario}>Actualizar Datos</button>
           <br/>
           <br/>
           </div>
          
                <Table responsive  striped bordered hover size="sm">
                    <thead>
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
      {Object.keys(listaUsuarios).map((key) => (
          
         
          //checar aqui va los titulos
        <tr key={listaUsuarios[key].id_usuario} >
            <td>{listaUsuarios[key].id_usuario}</td>        
            <td><input  className="input-name" defaultValue={listaUsuarios[key].rol} onChange={handleInputChange} disabled={validar[key]} name="rol"      id={listaUsuarios[key].id_usuario}></input></td>
            <td><input  className="input-name" defaultValue={listaUsuarios[key].email} onChange={handleInputChange} disabled={validar[key]} name="email"></input> </td>                     
            <td><input  className="input-name" defaultValue={listaUsuarios[key].password} onChange={handleInputChange} disabled={validar[key]} name="password"></input> </td> 
            <td><button className="btn btn-primary eliminar" onClick={()=>borrarUsuario(listaUsuarios[key].id_usuario)}> borrar</button></td>
            <td><button className="btn btn-primary modificar" onClick={()=>enable(key)}>Actualizar</button></td> 
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