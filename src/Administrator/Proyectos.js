import React from 'react'
import "./css/Proyectos.css";
import Table from 'react-bootstrap/Table'

const listaProyectos = [
    {id: 1, clave: 'PTN-BOM-01', descripcion: 'Prueba 1' , status: 'Aprobado'},
    {id: 2, clave: 'PTN-BOM-02', descripcion: 'Prueba 2' , status: 'Rechazado'},
    {id: 3, clave: 'PTN-BOM-03', descripcion: 'Prueba 3' ,status: 'Rechazado'}
  ];

function Proyectos() {
    return (
        <div className="contenido-usuarios">
            <div className="table-responsive">
             
                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Buscar Proyectos<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>

                    </div>
                </div>


                {/*********Búsqueda de Lista de Proyectos por Nombre Proyecto, Clave, Cliente, Fecha ********/}
                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="titulo-tabla-usuarios">
                                <th>Búsqueda por Atributo</th>
                                <th>Clave</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <select id="lista-opciones">
                                        <option value="lista 3">Nombre Proyecto</option>
                                        <option value="lista 1">Clave</option>
                                        <option value="lista 2">Cliente</option>
                                        <option value="lista 3">Fecha</option>
                                    </select>
                                </td>
                                <td>
                                    <input className="agregar"
                                        type="text"
                                        name="Ingrese Parametro"
                                        placeholder="busqueda" />
                                </td>
                                <td>
                                    <button className="btn btn-primary"> Buscar</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                
 {/****************************Lista de los Proyectos Creados ****************************************/}
      {/*============= Titulo Animación =============*/}
      <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Lista de Proyectos<span></span></h1>
                        </div>

                        

                    </div>
                </div>

                <Table responsive  striped bordered hover size="sm">
                    <thead>
                    <tr className="titulo-tabla-usuarios">
                                <th>ID</th>
                                <th>Clave</th>
                                <th>Descripción</th>
                                <th>Status</th>
                                <th>Eliminar</th>
                                <th>Modificar</th>
                                <th>Detalles</th>
                            </tr>
                    </thead>
                                       
         <tbody>
      {Object.keys(listaProyectos).map((key) => (    
          //checar aqui va los titulos
        <tr key={listaProyectos[key].id_usuario} >
            <td>{listaProyectos[key].id_usuario}</td>        
            <td>{listaProyectos[key].clave}</td>  
            <td>{listaProyectos[key].descripcion}</td>  
            <td>{listaProyectos[key].status}</td>  
            <td><button className="btn btn-primary eliminar" > borrar</button></td>
            <td><button className="btn btn-primary modificar" >Actualizar</button></td> 
            <td><button className="btn btn-primary detalles" >Ver más</button></td> 
        </tr>  
       ))
      }
     
     </tbody>
       
            
                </Table>



 {/******************Lista de los Datos Completos del Proyecto****************************************/}
                   {/*============= Titulo Animación =============*/}
                   <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Resumen BOM<span></span></h1>
                        </div>
                    </div>
                </div>
                <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Cantidad</th>
                            <th>Precio Lista</th>
                            <th>Precio Unitario</th>
                            <th>Desc(%)</th>
                            <th>Precio Total</th>
                            <th>Moneda</th>
                            <th>Marca</th>
                            <th>Proveedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tec-principal">
                            <td>1</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>



                        <tr className="subtecnologia">
                            <td>2</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>USD</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>


                        <tr className="equipamiento">
                            <td>3</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>


                        <tr className="licencias">
                            <td>4</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>USD</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>


                        <tr className="soporte">
                            <td>6</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="implementacion">
                            <td>7</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>USD</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="capacitacion">
                            <td>8</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="accesorios">
                            <td>9</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="soporte-ptn">
                            <td>10</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>USD</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="implementacion-ptn">
                            <td>11</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>

                        <tr className="mesa-ayuda-ptn">
                            <td>12</td>
                            <td>Prueba</td>
                            <td>3 </td>
                            <td>6</td>
                            <td>1</td>
                            <td>1</td>
                            <td>3000 </td>
                            <td>0</td>
                            <td>3000 </td>
                            <td>MXN</td>
                            <td>Kingston</td>
                            <td>-------</td>
                        </tr>




                    </tbody>
                </Table>


             

            </div>
        </div>
    );
}
export default Proyectos