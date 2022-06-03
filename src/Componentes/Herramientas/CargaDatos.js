import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Array= [];

function CargaDatos() {



  const [title, setTitle] = useState('')



console.log(title);



const handleInputChange = (event) => {
  setTitle({
    ...title,[event.target.name]: event.target.value,
  });
};


for (let index = 0; index < title; index++) {
Array.push(index)
  
}






  return (
    <div className="contenido-usuarios">



<Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col"> Rows</th>
                    <th scope="col"> Boton</th>
                
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  className="numericos"> 
                    
                    <input  className="formato-input"   onChange={handleInputChange}  />
                    
              
                    </td>


                    <td   className="numericos"><input  className="formato-input"     /> </td>
                  
                  </tr>
                </tbody>
              </Table>


      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col"> Datos</th>
            <th scope="col"> Númericos</th>
            <th scope="col"> Adicionales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col"> No Parte</th>
                    <th scope="col"> Descripción</th>
                    <th scope="col"> Duración Meses</th>
                    <th scope="col"> Entrega Semanas</th>
                    <th scope="col"> Categoria</th>
                  </tr>
                </thead>
                <tbody>

                {Array.map((key) => (
                  <tr>


                    <td className="datos"><input  className="formato-input"     /> </td>
                    <td className="datos" > <input  className="formato-input"     /></td>
                    <td className="datos"> <input  className="formato-input"     /></td>
                    <td className="datos"><input  className="formato-input"     /> </td>
                    <td  className="datos"> <input  className="formato-input"     /></td>
               
               
               
                  </tr>
                ))}

                </tbody>
              </Table>
            </td>

            {/*   Datos Numericos  */}
            <td>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col"> Calcular</th>
                    <th scope="col"> Moneda</th>
                    <th scope="col"> Cantidad</th>
                    <th scope="col"> Precio Lista</th>
                    <th scope="col"> Precio Unitario </th>
                    <th scope="col">Descuento %</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  className="numericos"> <input  className="formato-input"     /></td>
                    <td   className="numericos"><input  className="formato-input"     /> </td>
                    <td   className="numericos"><input  className="formato-input"     /> </td>
                    <td  className="numericos"> <input  className="formato-input"     /></td>
                    <td   className="numericos"> <input  className="formato-input"     /></td>
                    <td  className="numericos"><input  className="formato-input"     /> </td>
                    <td  className="numericos"> <input  className="formato-input"     /></td>
                  </tr>
                </tbody>
              </Table>
            </td>

            {/* Datos Adicionales */}

            <td>
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th scope="col"> Nombre Proveedor</th>
                    <th scope="col"> Marca</th>
                    <th scope="col"> Comentarios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  className="adicionales"><input  className="formato-input"     /> </td>
                    <td  className="adicionales"> <input  className="formato-input"     /></td>
                    <td className="adicionales"> <input  className="formato-input"     /> </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>


      <div>



          
      </div>
    </div>
  );
}

export default CargaDatos;
