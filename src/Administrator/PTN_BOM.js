<<<<<<< HEAD
import React, { useEffect } from 'react'
import  {useState} from 'react';
import './css/PTN_BOM.css';
import {total} from '../Components/Operaciones'
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
const [datos,setDatos] = useState ({
  clave:"",
  descripcion_proyecto: "",
  cliente: "",
  valor_dolar: "",
  Partida:"",
  precio_lista:"",
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
  
  console.log (datos.precio_unitario)
  console.log (datos.cantidad)
  console.log (datos.descuento)
 total(datos.precio_unitario,datos.cantidad,datos.descuento);
 
});
   


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
                <th> Cantidad </th>
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
                
                <td> <input className="agregar"
                  type="number"
                  name="cantidad"
                  onChange={handleInputChange}
                  min="0"
                  placeholder="Cantidad" />
                </td>
              </tr>

            </tbody>
          </Table>



          <Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>Precio Lista</th>
                <th>Precio Unitario</th>
                <th>Descuento (%) </th>
                <th> Moneda</th>
                <th> Total </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>  <input className="agregar"
                  type="number"
                  name="precio_lista"
                  onChange={handleInputChange}
                  placeholder="Precio Lista" 
                  min="0"
                  step="any"             
                  />
                </td>
                <td>   <input className="agregar"
                  type="number"
                  name="precio_unitario"
                  //onClick={}
                  onChange={handleInputChange}
                  placeholder="Precio Unitario"
                  min="0"
                  step="any"
                   />
                </td>
                <td> <input className="agregar"
                  type="number"
                  name="total"
                  onChange={handleInputChange}
                  placeholder="Total" 
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
                <td>
                  <select id="moneda" name="moneda" onChange={handleInputChange}>
                    <option value="lista 1">MXN</option>
                    <option value="lista 2">USD</option>
                  </select>
                </td>


                <td>   <input className="agregar"
                  type="number"
                  name="total"
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

=======
import React from 'react'
import  {useState} from 'react';
import './css/PTN_BOM.css'

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
const [datos,setDatos] = useState ({
  clave:"",
  descripcion_proyecto: "",
  cliente: "",
  valor_dolar: "",
  Partida:""

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
         
          <Table responsive id="nombreDiv" striped bordered hover >
            <thead>

              <tr className="titulo-tabla-usuarios">
                <th>Clave</th>
                <th>Descripción</th>
                <th> Cliente </th>
              
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
             
              </tr>

              <tr className="boton-agregar-proyecto">
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
            <button className="btn btn-primary"> Partida </button>  
                
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
                <th>Precio Unitario </th>
                <th> Descuneto (%)</th>
                <th> Total </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>  <input className="agregar"
                  type="number"
                  name="cantidad"
                  onChange={handleInputChange}
                  placeholder="Cantidad" 
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
                  placeholder="Precio Unitario" 
                  min="0"
                  step="any"
                  
                  />
                </td>


                <td>   <input className="agregar"
                  type="number"
                  name="descuento"
                  placeholder="Descuento %" 
                  min="0"
                  step="any"
                  
                  />
                </td>

                <td>
                <input className="agregar"
                  type="number"
                  name="total"
                  onChange={handleInputChange}
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

>>>>>>> 80d8e5c29496664027b27f2c7034f1b3d0a6747f
export default PTN_BOM