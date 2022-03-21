/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../Componentes/Animaciones";


import {url} from "../../Componentes/Ocultar";
import {url2} from "../../Componentes/Ocultar";

//Importar Componente Partida
 import Partida from "./Partida";

 
import axios from 'axios';

/*============== Operacions PTN BOM ==============*/
import { precioUnitario, calcularDescuento, Total } from "./Operaciones";


function DatosPTN() {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  // Función que realiza las inserciones a las tablas y la consulta a la tabla partidas
  async function SendSP (){
      const dataSP = {
          sp_no_parte: datosSP.sp_no_parte,
          sp_descripcion: datosSP.sp_descripcion,
          sp_meses: datosSP.sp_meses,
          sp_semanas: datosSP.sp_semanas,
          sp_cantidad: datos.sp_cantidad,
          sp_id_precio:'',
          sp_id_proveedor:'',
          sp_id_categoria:datosCategoria.categoria_id,
          sp_comentarios: datosSP.sp_comentarios
      };

      const dataPrecio = {
      precio_lista: datos.precio_lista,
      precio_unitario: datos.precio_unitario,
      precio_descuento: datos.precio_descuento,
      precio_total: datos.precio_total,
      precio_id_moneda: datos.precio_id_moneda
      };

      const dataProveedor = {
      proveedor_nombre:datosProv.proveedor_nombre
      };

      const dataMarca = {
      marca_nombre: datosMarca.marca_nombre,
      };

      try{
          // Inserción a la tabla precio
          const resPrecio = await axios.post(url + '/api/cotizador/precio/agregar', dataPrecio);
          // Obtención del precio_id de la inserción realizada
          dataSP.sp_id_precio = resPrecio.data.data.insertId;

          // Inserción a la tabla proveedor
          const resProv = await axios.post(url + '/api/cotizador/proveedor/agregar', dataProveedor);
          // Obtención del id de la inserción reaizada
          const proveedor_id = resProv.data.data.insertId
          dataSP.sp_id_proveedor = proveedor_id;

          // Inserción a las tablas marca y proveedor_marca
          await axios.post(url2 + `/api/cotizador/marca/agregar/${proveedor_id}`, dataMarca);
      
          // Obtención del id de la última partida insertada
          const resGetPartida = await axios.get(url + '/api/cotizador/partida/view');
          ListaPartida = resGetPartida.data.data.pop();
          partidaId.partida_id = ListaPartida.partida_id;

          // Inserción a las tablas sp y psp
          const resSP = await axios.post(url2 + `/api/cotizador/sp/agregar/${partidaId.partida_id}`, dataSP);

          alert('Registro exitoso')
          }
          catch (error){
          console.log("este es el error", error.toJSON());
      }
  }
  const enviarDatosSP = (event) =>{
      SendSP();
      event.preventDefault()
      event.target.reset();
  }
  /*===============================================================================================================================================================*/
  

  return (
    <div className="contenido-usuarios">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
        <Animaciones mytext="Datos PTN" />{" "}
      </div>
      {/*========================== Tabla Datos partida==========================*/}
      <div className="arregla">
        <Partida/>
      {/*========================== Tabla Datos PTN ==========================*/}
      
        <DatosSP/>
        {/*========================== Añadir Categorias ==========================
        Solo cuando se termine el proyecto */}
        <div className="contenido-usuarios">
          <button
          className="btn btn-primary modificar"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
          >
          {" "}
          {show ? "Finalizar" : "Ocultar Categorias"}{" "}
          </button>

          {show ? (
            <div></div>
            ) : (
            <div className="arregla">
              {/*======================== Llamar al componente Categorias ==========================*/}
              <Categorias />
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
}

export default DatosPTN;
