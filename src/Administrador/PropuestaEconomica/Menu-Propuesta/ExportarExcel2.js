import React,{useState, useEffect} from 'react';
import * as XLSX from 'xlsx';
import {
   dataExcel
  } from "../../../Ventas/Operaciones/OperacionesAM";

 var  nombreArchivo = "excel.xlsx";
 var extension =".xlsx";

const ExportExcel2 = () => {

    console.log("----------------------------------------");
    console.log("Datos Excel",dataExcel);
    console.log("----------------------------------------");

 
const dataToEconomic =()=>{

   
    if(dataExcel.length > 0){
       nombreArchivo = dataExcel[dataExcel.length-1].proyecto_clave + extension;
    }else{
        nombreArchivo = "excel.xlsx";
    }


    const prueba=[]

    let deleteToString 


    for (let i= 0;i<  dataExcel.length ;i++){
       
           

       /*     console.log("size ", dataExcel.length);
         console.log("name " ,dataExcel[i].partida_nombre)
 */
      
        prueba[i]={
            Partida: dataExcel[i].partida_nombre,
            Descripcion_Partida: dataExcel[i].partida_descripcion,
            Categoria:dataExcel[i].categoria_nombre,
            Proveedor:dataExcel[i].proveedor_nombre,
            Marca:dataExcel[i].marca_nombre,
            No_Parte:dataExcel[i].spnp_np,
            Descripcion:dataExcel[i].spd_des,
            Duracion_Meses:dataExcel[i].sp_meses,
            Entrega_Semanas:dataExcel[i].sp_semanas,
            Moneda:  dataExcel[i].moneda_nombre,
            Cantidad: dataExcel[i].sp_cantidad,
            Precio_Lista: dataExcel[i].precio_lista,
            Descuento: dataExcel[i].precio_descuento,
            Comentarios: dataExcel[i].sp_comentarios,
            
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
    XLSX.writeFile(new_workbook, nombreArchivo );
    


}
   
  return (
    <div>
        <button className="btn btn-success " onClick={createToExcel}> Excel </button>

    </div>
  )
}

export default ExportExcel2