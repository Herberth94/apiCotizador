import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useRegistro } from "../Routes/ModificarCLientes";
import Animaciones from "../Componentes/Animaciones";




function AdministrarColaboradores() {
  
    /*========================== Mostrar Ocultar Tabla ==========================*/
  
  const [show, setShow] = useState(false);
  
    /*========================== Mostrar Ocultar Botón ==========================*/
  
  const [show2, setShow2] = useState(true);
  const [keyRegistro, SetKeyregistro] = useState('');
  const [listaClientes, setlistaClientes] = useState([]);
  const [validar, setvalidar] = useState([]);
  
  const { actualizacion, handleInputChange  } = useRegistro();
  const enable = (key) => {
    const newARR = [];
    //console.log(validar);
    let i = Object.keys(listaClientes);
    for (let x = 0; x < i.length; x++) {
      newARR[x] = validar[0][x];
    }
    //console.log(newARR);
    for (let y = 0; y < i.length; y++) {
      if (y === key) {
        //newARR[y]=!validar[0][y];
        newARR[y] = !validar[0][y];
      }
      if (y !== key) {
        newARR[y] = true;
      }
    }

    setvalidar([newARR]);
    SetKeyregistro(key);
    //console.log(newARR)
  };
  const borrarCliente = async (dato) => {
    const confirmacion = window.confirm(
      "¿Seguro que quieres borrar este registro?"
    );
    if (confirmacion) {
      //console.log(dato);
      const respuesta = await axios.delete(`http://localhost:4001/api/cotizador/clientes/delete/${dato}` );
      console.log(respuesta.data);
      llamado();
    } else {
      llamado();
    }
  };
  const llamado = async () => {
    const respuesta = await axios.get(
      "http://localhost:4001/api/cotizador/clientes/view"
    );
    setlistaClientes(respuesta.data.reSql);
  };
  
  const llamadoCliente = async () => {
    setShow2(!show2);
    const newValidar = [];
    try {
      const respuesta = await axios.get(
        "http://localhost:4001/api/cotizador/clientes/view"
      );
      //console.log(respuesta.data.reSql);
      let i = await  Object.keys(respuesta.data.reSql);
      for (let x = 0; x < i.length; x++) {
         newValidar[x] = true;
      }
     setvalidar([...validar, newValidar]);
     setlistaClientes(respuesta.data.reSql);
     //console.log(listaClientes);
     //console.log(validar);
      
    } catch (error) {
      
    }
   
    
  };
  const envioData = async(datos, key) => {
    
    //console.log(datos);
    if(key === '')
    {
         setShow(!show);
       
    }
    else{
        setShow(!show);
        //(async ()=> setT(await actualizacion(datos[key])) )() 
       const respuesta = await actualizacion(datos[key]);
       console.log(respuesta);
       //window.location.reload();
       actulizarPage(key);
    }
  };
  const actulizarPage = (key) => {
    enable(key);
  };

  return (
    <div className="contenido-usuarios">
      <div className="table-responsive">
        {/*========================== Titulo Animación =======================*/}
        <div> <Animaciones   mytext= "Lista de Colaboradores"   /> </div>

        {/*================= Botón Mostrar/Ocultar Lista =======================*/}
        <div>
          <button className="btn btn-primary modificar" type="button"
            onClick={() => {
              llamadoCliente();
            }}
          >
            {" "}
            {show2 ? "Mostrar Lista" : "Ocultar Lista"}
          </button>
          {show2 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =========================*/}
            </div>
          ) : (
            <div>
              {/*=================== Botón Mostrar Lista DIV =====================*/}
              <br />
              {/*===================     Tabla Clientes   ========================*/}
              <Table responsive striped bordered hover size="sm"  className="tablas">
                <thead>
                  {/*=================== Titulos Tabla Clientes ===================*/}
                  <tr className="titulo-tabla-usuarios">
                    <th>ID</th>
                    <th>Colaborador</th>
                    <th>Fecha</th>
                    <th>Eliminar</th>
                    <th>Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {/*=================== Contenido Tabla Clientes =================*/}
                  {Object.keys(listaClientes).map((key) => (
                    <tr key={listaClientes[key].cliente_id}>
                      <td>{listaClientes[key].cliente_id}</td>
                      <td>
                        <input
                          className="input-name"
                          defaultValue={listaClientes[key].nombre_cliente}
                          onChange={handleInputChange}
                          disabled={validar[0][key]}
                          name="nombre_cliente"
                        ></input>
                      </td>
{/*================= Razón Social ==================*/}
                      <td>
                        <input
                          className="input-name"
                          defaultValue={listaClientes[key].razon_social}
                          onChange={handleInputChange}
                          disabled={validar[0][key]}
                          name="razon_social"
                        ></input>{" "}
                      </td>
 {/*================= Teléfono ==================*/}
                    

 {/*================= Borrar Cliente ==================*/}
                      <td>
                        <button
                          className="btn btn-primary eliminar"
                          onClick={() =>
                            borrarCliente(listaClientes[key].id_cliente)
                          }
                        >
                          {" "}
                          Eliminar
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary modificar"
                          type="button"
                          onClick={() => {
                            enable(key);
                            envioData(listaClientes, keyRegistro);
                          }}
                        >
                          {" "}
                          {show ? "Aceptar" : "Modificar"}{" "}
                        </button>
                        {show ? (
                          <div>
                            {/*=================== Aceptar Cambios DIV ====================*/}
                          </div>
                        ) : (
                          <div>
                            {/*=================== Modificar Usuario DIV ====================*/}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdministrarColaboradores;