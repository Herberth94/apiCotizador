import React from 'react'
import "./css/Proyectos.css";
import Table from 'react-bootstrap/Table'

function Proyectos() {
    return (
        <div className="contenido-usuarios">

            <div className="table-responsive">
                <div className="titulo-proyectos">
                    <h1>Lista de Proyectos </h1>
                </div>
                <br />
                <br />

                <Table responsive id="nombreDiv">
                    <thead>                     
                        <tr className="titulo-tabla-usuarios">
                            <th># Proyecto</th>
                            <th>Clave</th>
                            <th>Cliente</th>
                            <th>Descripción</th>
                            <th>Status</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>


            {/*   RECORRER ARREGLO CON MAP
            
            {items.map((d) => (
            <tr key={d.Id}>

              <td> {d.Id} </td>
              <td>{d.producto} </td>
              <td>{d.precio} </td>
              <td>{d.comentario}</td>
            </tr>

          ))} */}
                        <tr className="blanco">
                            <td>1</td>
                            <td>PT1-001</td>
                            <td>Palo Tinto Networks </td>
                            <td>Prueba 1</td>
                            <td>Aprobado</td>                        
                            <td>  
                              <button className="btn btn-primary"> ver </button>    
                            </td>

                        </tr>



                        <tr className="verde">
                            <td>2</td>
                            <td>PT1-002</td>
                            <td>Palo Tinto Networks </td>
                            <td>Prueba 2</td>
                            <td>Aprobado</td>
                            <td>                
                             <button className="btn btn-primary"> ver </button>    
                            </td>

                        </tr>


                        <tr className="blanco">
                            <td>3</td>
                            <td>PT1-003</td>
                            <td>Palo Tinto Networks </td>
                            <td>Prueba 3</td>
                            <td>Rechazado</td>
                            <td>             
                              <button className="btn btn-primary"> ver </button>    
                            </td>

                        </tr>

                      
                        <tr className="verde">
                            <td>4</td>
                            <td>PT1-004</td>
                            <td>Palo Tinto Networks </td>
                            <td>Prueba 4</td>
                            <td>Rechazado</td>
                            <td>               
                               <button className="btn btn-primary"> ver </button>   
                           </td>
                        </tr>

                    </tbody>
                </Table>



                <div className="titulo-proyectos">
                    <h2>RESUMEN BOM </h2>

                </div>
             <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="titulo-tabla">
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

                
                <div className="boton-cotizador"  >
                    
                    <button className="btn btn-success">Imprimir</button> 

                    
                </div>

            </div>
        </div>
      );
    }
export default Proyectos