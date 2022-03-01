import React, { useEffect } from "react";
import { useState } from "react";
import "./css/PTN_BOM.css";
import { operaciones } from "../Routes/Operaciones";
import Table from "react-bootstrap/Table";
import Animaciones from "../Componentes/Animaciones";


import Check from "./NuevoProyecto";


function PTN_BOM() {
  {
    /*========================== Mostrar Ocultar Tabla ==========================*/
  }
  const [show, setShow] = useState(true);
  {
    /*========================== Mostrar Ocultar Botón ==========================*/
  }
  const [show2, setShow2] = useState(true);
  {
    /*========================== Mostrar Ocultar Datos Adicionales ==========================*/
  }
  const [show3, setShow3] = useState(true);

  /*======================  Operaciones ==============================*/
  const { total, precio_u, descuento_1, total_1 } = operaciones();
  const [datos, setDatos] = useState({
    clave: "",
    descripcion_proyecto: "",
    cliente: "",
    valor_dolar: "",
    Partida: "",
    precio_lista: "",
    precio_unitario: "",
    descuento: "",
    cantidad: "",
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    console.log(datos.clave);
    event.preventDefault();
  };

  useEffect(() => {
    if (
      datos.precio_lista.length > 0 &&
      datos.cantidad.length > 0 &&
      datos.descuento.length > 0 &&
      datos.precio_unitario === ""
    ) {
      console.log("total:  ");
      const Total = total(datos.precio_lista, datos.cantidad, datos.descuento);
      console.log(Total);
      console.log("Precio unitario :");
      console.log(precio_u(Total, datos.cantidad));
    }
    if (
      datos.precio_lista.length > 0 &&
      datos.cantidad.length > 0 &&
      datos.precio_unitario.length > 0 &&
      datos.descuento === ""
    ) {
      console.log("Descuento: ");
      const desc_1 = descuento_1(datos.precio_unitario, datos.precio_lista);
      console.log(desc_1.toFixed(2));
      console.log("total_1: ");
      console.log(total_1(datos.cantidad, datos.precio_unitario));
    }
  }, [
    datos.cantidad,
    datos.descuento,
    datos.precio_lista,
    datos.precio_unitario,
    descuento_1,
    precio_u,
    total,
    total_1,
  ]);


const a = false;
const b = false;
const c = false;
  function check (){

    if(a === false){
      console.log("Imprime Nuevvo Proyecto");
    }

  }
  return (
    <div className="contenido-usuarios">

      {/*======================= Titulo Animación =======================*/}

      <Animaciones mytext="PTN BOM " />


      <Table responsive id="nombreDiv">
        <thead>
          <tr className="titulo-tabla-usuarios">
            <th>Nuevo Proyecto</th>
            <th>Continuar Proyecto</th>
            <th> Resumen </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>

              <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Añadir' : 'Ocultar Proyecto'}    </button>
              {show ? (
        <div >


        </div>
      ) : (
        <div className="arregla">   
          <Check/>
         </div>
      )}
         </td>

                <td>

         
                
                </td>

                <td>

            
   
                
                </td>

             
              </tr>
        </tbody>
      </Table>


    
    </div>



  );
}

export default PTN_BOM;
