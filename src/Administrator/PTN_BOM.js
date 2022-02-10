import React, { useEffect } from 'react'
import  {useState} from 'react';
import './css/PTN_BOM.css';
import {operaciones} from '../Components/Operaciones'
import Table from 'react-bootstrap/Table'


function PTN_BOM() {


/* 
names INPUT para PTN_BOM
clave                        VARCHAR
descripcion_proyecto         VARCHAR
cliente {value = 3 opciones} VARCHAR
valor_dolar                  DOUBLE
no_parte                     INT
descripcion                  VARCHAR
meses                        INT
entrega_semanas              INT
cantidad                     INT
precio_lista                 DOUBLE
precio_unitario              DOUBLE
total                        DOUBLE
descuento                    DOUBLE
moneda {value  = 2 opciones} VARCHAR
 */
const { total, precio_u,descuento_1,  total_1   }= operaciones();
const [datos,setDatos] = useState ({
  clave:"",
  descripcion_proyecto: "",
  cliente: "",
  valor_dolar: "",
  Partida: "",
  precio_lista :"",
  precio_unitario:"",
  descuento:"",
  cantidad:""

});
const handleInputChange = (event) => {
  //console.log(event.target.value)
  setDatos ({
      ...datos,[event.target.name] : event.target.value ,
  })
};

const enviarDatos = (event) => {  
  console.log(datos.clave);
  event.preventDefault();
}

useEffect(() =>{
  if(datos.precio_lista.length > 0 && datos.cantidad.length > 0 && datos.descuento.length>0 && datos.precio_unitario ==="")
  {
    console.log("total:  ");
    const Total =total(datos.precio_lista,datos.cantidad,datos.descuento);
    console.log(Total);
    console.log("Precio unitario :");
    console.log(precio_u(Total,datos.cantidad));
  }
  if(datos.precio_lista.length > 0 && datos.cantidad.length > 0 && datos.precio_unitario.length>0 && datos.descuento ===""){
    console.log("Descuento: ");
    const desc_1 = descuento_1(datos.precio_unitario,datos.precio_lista)
    console.log(desc_1.toFixed(2));
    console.log("total_1: ");
    console.log((total_1(datos.cantidad,datos.precio_unitario)));
  }
  
  },[datos.cantidad, datos.descuento, datos.precio_lista, datos.precio_unitario, descuento_1, precio_u, total, total_1]);




  return (

    <div className="contenido-usuarios">

      <div className="table-responsive">

        <h2>PTN BOM  Cotizaciones</h2>

        {/*  Nuevo Proyecto*/}
        <div className="boton-ptn"  >
          <button className="btn btn-success"> + Nuevo Proyecto</button>
        </div>
        <form  >

        <div className="opciones-proyecto">
         
          <Table responsive id="nombreDiv">
            <thead>

              <tr className="titulo-tabla-usuarios">
                <th>Clave</th>
                <th>Descripción</th>
                <th> Cliente </th>
                <th> Valor Dolar </th>
              </tr>

            </thead>

            <tbody>
              <tr className="">
                <td>
                  <input className="agregar"
                    type="text"
                    name="clave"
                    onChange={handleInputChange}
                    placeholder="ingrese Clave" />

                </td>
                <td>
                  <input className="agregar"
                    type="text"
                    name="descripcion_proyecto"
                    onChange={handleInputChange}
                    placeholder="ingrese Descripción" />
                </td>
                <td>     <select id="lista-proyectos" name="cliente" onChange={handleInputChange}>
                  <option value="">Elige una opción</option>
                  <option value="lista 1">Cliente 1</option>
                  <option value="lista 2">Cliente 2</option>
                  <option value="lista 3">Cliente 3</option>
                </select>
                </td>
                <td>
                  <input className="agregar"
                    type="number"
                    name="valor_dolar"
                    onChange={handleInputChange}
                    min="0"
                    step="any"
                    placeholder="ingrese Valor Dolar" />
                </td>
              </tr>

              <tr className="boton-agregar-proyecto">
                <td></td>
                <td></td>
                <td></td>
                <td>   <button className="btn btn-primary"> Añadir </button>    </td>
              </tr>

            </tbody>
          </Table>


          <div className="partida">
          <input className="agregar"
                 type="text"
                 name="Partida"
                 onChange={handleInputChange}
                 placeholder="ingrese Nombre Partida" />
                 <br/>
                 <br/>
            <button className="btn btn-primary">
              agregar Partida </button>       
              <br/>
              <br/>
          </div>


          <Table responsive id="nombreDiv">
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
                <td>
                  <input className="agregar"
                    type="number"
                    name="no_parte"
                    onChange={handleInputChange}
                    placeholder="No. Parte" />
                </td>

                <td>  <input className="agregar"
                  type="text"
                  name="descripcion"
                  onChange={handleInputChange}
                  placeholder="Descripción" />
                </td>

                <td> <input className="agregar"
                  type="number"
                  name="meses"
                  onChange={handleInputChange}
                  min="0"
                  placeholder="Meses" />
                </td>

                <td>
                  <input className="agregar"
                    type="number"
                    name="entrega_semanas"
                    onChange={handleInputChange}
                    min="0"
                    placeholder="Entrega semanas" />
                </td>
                
                <td> 
                   <select id="moneda" name="moneda" onChange={handleInputChange}>
                    <option value="lista 1">MXN</option>
                    <option value="lista 2">USD</option>
                  </select>
                </td>
              </tr>

            </tbody>
          </Table>



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
                <td>  <input className="agregar"
                  type="number"
                  name="cantidad"
                  onChange={handleInputChange}
                  placeholder="Cantidad " 
                  min="0"
                  step="any"             
                  />
                </td>
                <td>   <input className="agregar"
                  type="number"
                  name="precio_lista"
                  onChange={handleInputChange}
                  placeholder="Precio Lista"
                  min="0"
                  step="any"
                   />
                </td>
                <td> <input className="agregar"
                  type="number"
                  name="precio_unitario"
                  onChange={handleInputChange}
                  placeholder="Precio unitario" 
                  min="0"
                  step="any"
                  
                  />
                </td>

                <td> <input className="agregar"
                  type="number"
                  name="descuento"
                  onChange={handleInputChange}
                  placeholder="Descuento" 
                  min="0"
                  step="any"
                  />              
                </td>
              


                <td>   <input className="agregar"
                  type="text"
                  placeholder="Total" 
                  min="0"
                  step="any"
                  
                  />
                </td>
              
              </tr>

            </tbody>
          </Table>



          <Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>Marca</th>
                <th>Proveedor</th>
                <th>Comentarios </th>
                <th>Categoria </th>
                <th> - </th>

              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>  <input className="agregar"
                  type="text"
                  name="marca"
                  onChange={handleInputChange}
                  placeholder="Marca" />
                </td>
                <td>  <input className="agregar"
                  type="text"
                  name="provedor"
                  onChange={handleInputChange}
                  placeholder="Proveedor" />
                </td>
                <td> <input className="agregar"
                  type="text"
                  name="comentarios"
                  onChange={handleInputChange}
                  placeholder="Comentarios" />
                </td>

                <td>     <select id="lista-opciones"  onChange={handleInputChange}>
                  <option value="lista 1">Técnologia Principal</option>
                  <option value="lista 2">Sub-tecnlogía</option>
                  <option value="lista 3">Equipamiento</option>
                  <option value="lista 1">Licencia</option>
                  <option value="lista 2">Soporte</option>
                  <option value="lista 3">Implementación</option>
                  <option value="lista 1">Capacitación</option>
                  <option value="lista 2">Accesorios</option>
                  <option value="lista 3">Soporte PTN</option>
                  <option value="lista 2">Implementación PTN</option>
                  <option value="lista 3">Mesa de Ayuda PTN</option>

                </select>
                </td>


                <td>
                  <button className="btn btn-primary"> agregar</button>
                </td>
              </tr>

            </tbody>
          </Table>
         


        </div>

        {/*  Añadir */}

        {/* <div className="boton-ptn-agregar"  >
          <button className="btn btn-primary"> + Añadir </button>
        </div> */}

        {/* Finalizar */}
        <div className="boton-ptn-finalizar"  >
          <button className="btn btn-danger" onClick={enviarDatos}> Finalizar </button>
        </div>
        </form>


      </div>
    </div>
  )
}

export default PTN_BOM