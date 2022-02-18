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
        actualizacion,
        handleInputChange,
                   
        } = useRegistro();
  
    const [keyRegistro , SetKeyregistro] = useState('');
    const [listaUsuarios,setlistaUsarios ] = useState([]);
    const [validar , setvalidar] = useState([]);
    const borrarUsuario = async(dato)=>{
        const confirmacion =window.confirm("¿Seguro que quieres borrar este registro?");
        if(confirmacion){
          console.log(dato);
          const respuesta = await axios.get(`http://localhost:4001/api/cotizador/delete/${dato}`);
          console.log(respuesta.data);
          llamado();
        }else{
            llamado();
        }
    };
    
    const enable=(key)=>{
       const newARR =[]
       //console.log(validar);
       let i =  Object.keys(listaUsuarios);
       for(let x = 0 ; x < i.length ; x++){
           
                newARR[x] = validar[0][x];
            }
            //console.log(newARR);    
        for(let y =0 ; y <i.length;y++){
            if(y == key){
                //newARR[y]=!validar[0][y];
                newARR[y]=!validar[0][y];
            }
            if(y != key){
                newARR[y]=true

            }
        }   

        setvalidar([newARR])
        SetKeyregistro(key)
        //console.log(newARR)
            
    }
      
    const llamado = async()=>{
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        setlistaUsarios (respuesta.data.reSql);          
    }
    
    const llamadoUsuario = async() => {
        const newValidar =[];       
        const respuesta = await axios.get('http://localhost:4001/api/cotizador/registro');
        let i = Object.keys(respuesta.data.reSql);
        for(let x =0 ; x < i.length ; x++){
          
            newValidar[x]=true;
           
        }
        setvalidar([...validar , newValidar])
        setlistaUsarios (respuesta.data.reSql);
        
      
    }
    const envioData= (datos,key)=>{
        //console.log(key);
        actualizacion(datos[key]); 
        //window.location.reload();
        actulizarPage(key);
                       
    }
    const actulizarPage =(key)=>{
       enable(key);
       
    }


    return (
        
        <div className="contenido-usuarios">
               <div className="table-responsive">
               <div className="titulo-proyectos">
                <h2>Lista de Usuarios </h2>
                
            </div>
            <div>
            <button    className= "btn btn-primary actualizar" onClick={llamadoUsuario}>Mostrar lista</button>
            <br/>
            <br/>
            <button    className= "btn btn-primary actualizar" onClick={()=>envioData(listaUsuarios,keyRegistro)} >Aceptar cambios</button>
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
            <td><input  className="input-name" defaultValue={listaUsuarios[key].rol} onChange={handleInputChange} disabled={validar[0][key]} name="rol"      id={listaUsuarios[key].id_usuario}></input></td>
            <td><input  className="input-name" defaultValue={listaUsuarios[key].email} onChange={handleInputChange} disabled={validar[0][key]} name="email"></input> </td>                     
            <td><input  className="input-name" defaultValue={listaUsuarios[key].password} onChange={handleInputChange} disabled={validar[0][key]} name="password"></input> </td> 
            <td><button className="btn btn-primary eliminar" onClick={()=>borrarUsuario(listaUsuarios[key].id_usuario)}> borrar</button></td>
            <td><button   className="btn btn-primary modificar" onClick={()=>enable(key)} >Actualizar</button></td> 
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