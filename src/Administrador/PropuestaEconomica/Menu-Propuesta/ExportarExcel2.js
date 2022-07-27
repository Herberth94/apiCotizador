import React,{useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import {
   datosPTN
  } from "../../../Ventas/Operaciones/OperacionesAM";

  import {dataPartida} from "../../../Ventas/Operaciones/totalPartida";

  console.log("----------------------------------------");
  console.log("Datakkkkkk",dataPartida);
  
const ExportExcel2 = () => {

   
const dataToEconomic =()=>{
    const prueba=[]
    let deleteToString 
    for (let i=0;i<   datosPTN.length-1;i++){
        if(   datosPTN[i].includes('$')){
            deleteToString  =    datosPTN[i]
            deleteToString = deleteToString.trim();
            deleteToString=deleteToString.slice(1);
            datosPTN[i]=deleteToString;
           /*  console.log(deleteToString); */

        }
         
        prueba[i]={
            Partida:datosPTN[i].partida_nombre,
            Descripcion_Partida:datosPTN[i].partida_descripcion,
            Moneda: datosPTN[i].moneda_nombre,
            Cantidad:datosPTN[i].sp_cantidad,
            Precio_Lista:datosPTN[i].precio_lista,
            Descuento:datosPTN[i].precio_descuento,
            
            }
    }
    deleteToString=[]
    
    return prueba
}


const [sheetData, setsheetData] = useState([]);
useEffect(() => {
    const data = dataToEconomic();
    setsheetData(data);
    
   
},[])

const createToExcel = ()=>{
    const new_workbook = XLSX.utils.book_new();
    //const worksheet = XLSX.utils.aoa_to_sheet([Cantidad],{c:1, r:4});
    const convertToJson = XLSX.utils.json_to_sheet(sheetData);
    
    XLSX.utils.book_append_sheet(new_workbook,convertToJson);
    XLSX.writeFile(new_workbook,"prueba.xlsx");
    


}
   
  return (
    <div>
        <button className="btn btn-success " onClick={createToExcel}> Excel </button>

    </div>
  )
}

export default ExportExcel2