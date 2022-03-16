/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Categorias from "./Categorias";
// import { GuardarPartida } from '../../Routes/GuardarPartida';
// import { GuardarDatosServicioProducto } from '../../Routes/GuardarDatosServicioProducto';
// import { GuardarDatosPrecio } from '../../Routes/GuardarDatosPrecio';
// import { GuardarDatosMarca } from '../../Routes/GuardarDatosMarca';
import axios from 'axios';

/*============== Operacions PTN BOM ==============*/
import { precioUnitario, calcularDescuento, Total, Hola } from "./Operaciones";


function DatosPTN() {
  const [total, setTotal] = useState(10);


  /*  console.log("---- Precio Unitario ----- ") */
  /*PARAMETROS   precioUnitario(precioLista, Descuento) */
  /*   console.log( precioUnitario( 100 , 10 ))
    console.log(" ------------- ") */

  /*   console.log("---- Calcular Descuento ----- ") */
  /*  /*PARAMETROS  calcularDescuento(precioLista, precioUnitario ) */
  /*   console.log( calcularDescuento( 100 , 10 )) */
  /*   console.log(" ------------- ") */

  /*   console.log("---- Calcular Total ----- ") */

  /*PARAMETROS  calcularDescuento(Cantidad , Precio Unitario); */
  /*  console.log( Total( 1 , 90 )) */
  /*   console.log(" ------------- ")
  
   */

  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);
  /*======== Inserción de datos en la tabla partida ==============*/
  var ListaProyectos = {
    proyecto_id:'',
    proyecto_clave:'',
    proyecto_descripcion:'',
    proyecto_id_cliente:'',
    proyecto_id_cat_c_a_sptn_ma:'',
    proyecto_fecha_creacion:'',
    proyecto_fecha_modificacion:''
  };

  var proyectoId = {
    proyecto_id:''
  }


  const[datosPartida, setDatosPartida] = useState({
    partida_nombre: '',
    partida_descripcion: ''
  });

  const handleInputChangePartida = (event) =>{
      setDatosPartida({
          ...datosPartida,[event.target.name] : event.target.value ,
      })
  }

  async function SendPartida (){
      
    const data = {
        partida_nombre: datosPartida.partida_nombre,
        partida_descripcion: datosPartida.partida_descripcion
    };

    try{
        /*======== Obtención del id del último proyecto insertado ==============*/
        const resGetProyectos = await axios.get("http://localhost:4001/api/cotizador/proyecto/view");
        ListaProyectos = resGetProyectos.data.data.pop();
        proyectoId.proyecto_id = ListaProyectos.proyecto_id;

        const respuesta = await axios.post(`http://localhost:4001/api/cotizador/partida/${proyectoId.proyecto_id}`, data);
        // // ${proyectoId.proyecto_id}`, data);
        //const getPartidaId = respuesta.data;
        // console.log("hola soy send2 de las partidas", send2);
        alert('Registro exitoso')
    }
    catch (error){
        console.log(error.toJSON());
    }
  }
  const enviarDatosPartida = (event) =>{
      SendPartida();
      event.preventDefault()
      //event.target.reset();
  }

  /*======== Inserción de datos en la tabla precio ==============*/
  /*   OPERACIONES  DATOS*/
  const [datos, setDatos] = useState({
    precio_lista: '',
    precio_unitario: '',
    precio_descuento: '',
    sp_cantidad: '',
    precio_total: '',
    precio_id_moneda:''
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,[event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    let total = '';
    let precio_u = '';
    if (datos.precio_unitario !== '' && datos.sp_cantidad !== '') {
      const total = Total(datos.precio_unitario, datos.sp_cantidad)
      setDatos({ ...datos, precio_total: total })
      if (datos.precio_lista !== '') {
        const desc = calcularDescuento(datos.precio_lista, datos.precio_unitario);
        setDatos({ ...datos, precio_descuento: desc });

      }
    }
    if (datos.precio_unitario === '' && datos.sp_cantidad ==='') {
      setDatos({ ...datos, precio_total: total })
    }
    if (datos.precio_lista !== '' && datos.precio_descuento !== '') {
      precio_u = precioUnitario(datos.precio_lista, datos.precio_descuento);
      const total = Total(precio_u, datos.sp_cantidad);
      setDatos({ ...datos, precio_unitario: precio_u, precio_total: total });
    }
  }, [datos.precio_unitario, datos.precio_lista, datos.precio_descuento, datos.sp_cantidad])

  /*======== Inserción de datos en la tabla marca ==============*/
  const [datosMarca, setDatosMarca] = useState({
    marca_nombre: ''
  });

  const handleInputChangeMarca = (event) => {
      setDatosMarca({
          ...datosMarca,[event.target.name] : event.target.value 
      })
  }

  /*======== Inserción de datos en la tabla proveedor ==============*/
  const[datosProv, setDatosProv] = useState  ({
    proveedor_nombre: '',
  });

  const handleInputChangeProv = (event) =>{
    setDatosProv({
        ...datosProv, [event.target.name] : event.target.value
    })
  }
  /*======== Inserción de datos en la tabla categoria ==============*/
  const[datosCategoria, setDatosCategoria] = useState  ({
    categoria_id: '',
  });

  const handleInputChangeCategoria = (event) =>{
    setDatosCategoria({
        ...datosCategoria, [event.target.name] : event.target.value
    })
  }
  /*======== Inserción de datos en la tabla servicio_producto ==============*/
  const[datosSP, setDatosSP] = useState  ({
        sp_no_parte: '',
        sp_descripcion: '',
        sp_meses: '',
        sp_semanas: '',
        sp_cantidad: '',
        sp_comentarios: ''
  });

  const handleInputChangeSP = (event) =>{
      setDatosSP({
          ...datosSP, [event.target.name] : event.target.value
      })
  }

  var ListaPartida = {
    partida_id:'',
    partida_nombre:'',
    partida_descripcion:''
  };

  var partidaId = {
    partida_id:''
  }
  
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
        const resPrecio = await axios.post('http://localhost:4001/api/cotizador/precio/agregar', dataPrecio);
        //console.log(resPrecio.data.data.insertId);
        dataSP.sp_id_precio = resPrecio.data.data.insertId;
        const resProv = await axios.post('http://localhost:4001/api/cotizador/proveedor/agregar', dataProveedor);
        const proveedor_id = resProv.data.data.insertId
        dataSP.sp_id_proveedor = proveedor_id;
        await axios.post(`http://localhost:4001/api/cotizador/marca/agregar/${proveedor_id}`, dataMarca);
        /*======== Obtención del id de la última partida insertada ==============*/
        const resGetPartida = await axios.get("http://localhost:4001/api/cotizador/partida/view");
        ListaPartida = resGetPartida.data.data.pop();
        partidaId.partida_id = ListaPartida.partida_id;
        //console.log(dataSP.sp_id_precio);
        const resSP = await axios.post(`http://localhost:4001/api/cotizador/sp/agregar/${partidaId.partida_id}`, dataSP);
        //console.log(resSP.data);
        alert('Registro exitoso')
        }
        catch (error){
        console.log("este es el error", error.toJSON());
    }

  }
  const enviarDatosSP = (event) =>{
      SendSP();
      event.preventDefault()
      //event.target.reset();
  }

  /*useEffect(()=>{
    const total = Total(datos.precio_unitario,datos.cantidad);
      setDatos({...datos,total:total});
  },[datos.cantidad])*/

  /*useEffect(()=>{
    const precio_u= precioUnitario(datos.precio_lista,datos.descuento);
    setDatos({...datos,precio_unitario:precio_u});
  },[datos.precio_lista,datos.descuento])*/

  /*useEffect(()=>{
    const desc = calcularDescuento(datos.precio_lista,datos.precio_unitario);
    setDatos({...datos,descuento:desc});
  },[datos.precio_lista,datos.precio_unitario])*/
  return (
    <div className="contenido-usuarios">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
        <Animaciones mytext="Datos PTN" />{" "}


      </div>

      {/*========================== Datos Partida ==========================*/}

      <div className="partidax">
        {/*========================== Nombre Partida ==========================*/}
        <br />
        <form action="" method="post">
          <input
            className="agregar"
            type="text"
            name="partida_nombre"
            onChange={handleInputChangePartida}
            placeholder="Ingrese Nombre Partida"
          />

          <br />
          <br />

          {/*========================== Descripción Partida ==========================*/}
          <input
            className="agregar"
            type="text"
            name="partida_descripcion"
            onChange={handleInputChangePartida}
            placeholder="ingrese Descripción Partida"
          />

          <br />
          <br />
          {/*========================== Botón Agregar Partidas ==========================*/}
          <button className="btn btn-success" onClick={enviarDatosPartida}>Agregar Datos Partida</button>
        </form>
        <br />
        <br />
      </div>
      <br />

      {/*========================== Tabla Datos PTN ==========================*/}
      <form action="" method="post">
        <Table responsive id="nombreDiv">
          {/*========================== Titulos Tabla ==========================*/}
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>No. De Parte</th>
              <th>Descripción</th>
              <th> Duración Meses </th>
              <th> Entrega </th>
              <th> Moneda </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              {/*========================== Número de Parte ==========================*/}
              <td>
                <input
                  className="agregar"
                  type="number"
                  name="sp_no_parte"
                  onChange={handleInputChangeSP}
                  placeholder="No. Parte"
                />
              </td>
              {/*========================Descripcion Producto ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="sp_descripcion"
                  onChange={handleInputChangeSP}
                  placeholder="Descripción"
                />
              </td>
              {/*========================Meses ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  name="sp_meses"
                  min="0"
                  onChange={handleInputChangeSP}
                  placeholder="Meses"
                />
              </td>
              {/*======================== Semanas ==========================*/}
              <td>
                <input
                  className="agregar"
                  type="number"
                  name="sp_semanas"
                  min="0"
                  onChange={handleInputChangeSP}
                  placeholder="Entrega semanas"
                />
              </td>
              {/*======================== Moneda ==========================*/}
              <td>
                <select id="moneda" name="precio_id_moneda" onChange={handleInputChange}>
                  <option value={0}></option>
                  <option value={1}>MXN</option>
                  <option value={2}>USD</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>

        {/*======================== Tabla Números ==========================*/}

        <Table responsive id="nombreDiv">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Cantidad</th>
              <th>Precio Lista</th>
              <th>Precio Unitario</th>
              <th> Descuento (%)</th>
              <th> Total </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              {/*======================== Cantidad ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  name="sp_cantidad"
                  value={datos.sp_cantidad}
                  onChange={handleInputChange}
                  placeholder="Cantidad "
                  min="0"
                  step="any"
                />
              </td>
              {/*======================== Precio Lista ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  name="precio_lista"
                  onChange={handleInputChange}
                  placeholder="Precio Lista"
                  min="0"
                  step="any"
                />
              </td>

              {/*======================== Precio Unitario ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  value={datos.precio_unitario}
                  name="precio_unitario"
                  onChange={handleInputChange}
                  placeholder="Precio unitario"
                  step="any"
                />
              </td>
              {/*======================== Descuento==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  value={datos.precio_descuento}
                  name="precio_descuento"
                  onChange={handleInputChange}
                  placeholder="Descuento"
                  min="0"
                  step="any"
                />
              </td>
              {/*======================== Total ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="precio_total"
                  value={datos.precio_total}
                  readOnly
                  placeholder="Total"
                  step="any"
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/*========================== Datos PTN ==========================*/}
        <Table responsive id="nombreDiv">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Marca</th>
              <th>Proveedor</th>
              <th>Comentarios </th>
              <th>Categoría </th>
              <th> - </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              {/*======================== Marca ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="marca_nombre"
                  onChange={handleInputChangeMarca}
                  placeholder="Marca"
                />
              </td>

              {/*======================== Proveedor ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="proveedor_nombre"
                  onChange={handleInputChangeProv}
                  placeholder="Proveedor"
                />
              </td>

              {/*======================== Comentarios ==========================*/}
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="sp_comentarios"
                  onChange={handleInputChangeSP}
                  placeholder="Comentarios"
                />
              </td>
              {/*======================== Categorias ==========================*/}
              <td>
                {" "}
                <select id="lista-opciones" name="categoria_id" onChange={handleInputChangeCategoria}>
                  <option value={0}></option>
                  <option value={1}>Tecnología Principal</option>
                  <option value={2}>Sub-tecnología</option>
                  <option value={3}>Equipamiento</option>
                  <option value={4}>Licencia</option>
                  <option value={5}>Soporte</option>
                  <option value={6}>Implementación</option>
                </select>
              </td>
              {/*======================== Agregra Datos  ==========================*/}
              <td>
                <button className="btn btn-primary" onClick={enviarDatosSP}> Agregar</button>
                {/* <button className="btn btn-primary" onClick={() => { enviarDatosDP(); enviarDatosSP(); enviarDatosM(); }}> Agregar</button> */}
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
      {/*========================== Añadir Categorias ==========================
  Solo cuando se termine el proyecto 
  */}

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
  );
}

export default DatosPTN;
