import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import Table from "react-bootstrap/Table";
import "../css/excel.css"
import axios from "axios";
import {url2} from "../Ocultar";


export let dataPartidas = [];

function Excel() {

   const [items, setItems] = useState([]);


  const readExcel = (file) => {

    const promise = new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: 'buffer' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data);

      };

      fileReader.onerror = (error) => {
        reject(error);
      };

    });

    promise.then((d) => {
   /*    console.log(d); */
      setItems(d)

      dataPartidas = d;

      console.log(dataPartidas);
    });

  };


  const [show2, setShow2] = useState(true)

  async function cargarDatos(){
    if(show2){
      let res = await axios.post(url2 + `/api/cotizador/sp/insertExcel/${113}`, dataPartidas);
      alert(res.data.msg);
    }
  }

  return (
    <div  className='arregla multiple'>
      <input className="btn btn-primary Mod"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

     

<Table responsive  striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col"> Partida</th>
            <th scope="col"> Descripcion_Partida</th>
            <th scope="col"> Categoria</th>
            <th scope="col"> Proveedor</th>
            <th scope="col"> Marca</th>
            <th scope="col"> N° Parte</th>
            <th scope="col"> Descripción</th>
            <th scope="col"> Duracion</th>
            <th scope="col"> Entrega</th>
            <th scope="col"> Moneda</th>
            <th scope="col"> Cantidad</th>
            <th scope="col"> Precio_Lista</th>
            <th scope="col">Descuento</th>
            <th scope="col">Com</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (

              
            <tr key={d.Id}>

              <td> {d.Partida} </td>
              <td>{d.Descripcion_Partida} </td>
              <td>{d.Categoria} </td>
              <td>{d.Proveedor}</td>
              <td> {d.Marca} </td>
              <td>{d.No_Parte} </td>
              <td>{d.Descipcion} </td>
              <td>{d.Duracion}</td>
              <td> {d.Entega} </td>
              <td>{d.Moneda} </td>
              <td>{d.Cantidad} </td>
              <td>{d.Precio_Lista}</td>
              <td>{d.Descuento}</td>
              <td>{d.Comentarios}</td>

            </tr>

          ))}
        </tbody>

        </Table>




     <button
              className="btn btn-primary Mod"
              type="button"
              onClick={() => {
                setShow2(!show2);
                cargarDatos();
              }}
            >
              {" "}
              {show2 ? "Subir Datos" : "Ocultar"}{" "}
            </button>
            
{/* <button  className='btn btn-primary Mod'> Subir Datos</button>
 */}


<br/>
<br/>

    </div>
  );
}

export default Excel