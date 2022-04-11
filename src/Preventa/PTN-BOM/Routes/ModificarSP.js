import axios from 'axios';
import {url2} from "../../../Componentes/Ocultar";

export const EditSP = () => {
    
    const actualizacionSP = (nombreProv, dataProv, nombreMarca, dataMarca, data,newData)=>{

        // var listaProv = [{}]
        // listaProv = dataProv;
        const proveedorId = {proveedor_id:''}
        let i = Object.keys(dataProv);
        for (let c = 0; c < i.length; c++) {
            if (nombreProv === dataProv[c].proveedor_nombre){
                proveedorId.proveedor_id = dataProv[c].proveedor_id;
            }
        }
       

        // var listaMarca = [{}]
        // listaMarca = dataMarca;
        const marcaId = {marca_id:''}
        let m = Object.keys(dataMarca);
        for (let c = 0; c < m.length; c++) {
            if (nombreMarca === dataMarca[c].marca_nombre){
                marcaId.marca_id= dataMarca[c].marca_id;
            }
        }
        
        //console.log(proveedorId.proveedor_id);
        SendEditProy(proveedorId.proveedor_id, marcaId.marca_id,data,newData,data.sp_id) 
   }
   
    // Función que realiza la inserción del proyecto
    async function SendEditProy (proveedor_id, marca_id, dataSP,newDataSP,sp_id){
        const dataActualizacion ={
                sp_no_parte:dataSP.sp_no_parte,
                sp_descripcion:dataSP.sp_descripcion,
                sp_meses:dataSP.sp_meses,
                sp_semanas:dataSP.sp_semanas,
                sp_id_categoria:dataSP.sp_id_categoria,
                sp_comentarios:dataSP.sp_comentarios
        }
        //console.log(dataSP.proveedor_id);
        const k = Object.keys(newDataSP);
        for(let keys of k){
            if(newDataSP[keys] !== ''){
                dataActualizacion[keys] = newDataSP[keys];
            }
        }
        try{
            //console.log(dataActualizacion);
            console.log(proveedor_id);
            console.log(marca_id);
            if(proveedor_id !== dataSP.proveedor_id && proveedor_id !== '' && marca_id !== dataSP.marca_id && marca_id !== ''){
                // console.log(proveedor_id);
                // console.log(marca_id);
                await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${proveedor_id}/${marca_id}`, dataActualizacion);
            }else if(proveedor_id === dataSP.proveedor_id && marca_id !== dataSP.marca_id && marca_id !== ''){
                // console.log(dataSP.proveedor_id);
                // console.log(marca_id);
                await axios.post(url2 +`/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${marca_id}`, dataActualizacion);
            }else if (proveedor_id === '' && marca_id === ''){
                // console.log(dataSP.proveedor_id);
                // console.log(dataSP.marca_id);
                await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${dataSP.marca_id}`, dataActualizacion);
            }else if (proveedor_id === dataSP.proveedor_id && marca_id === dataSP.marca_id){
                // console.log(dataSP.proveedor_id);
                // console.log(dataSP.marca_id);
                await axios.post(url2 + `/api/cotizador/sp/edit/${sp_id}/${dataSP.proveedor_id}/${dataSP.marca_id}`, dataActualizacion);
            }
            alert('Servicio/Producto editado exitosamente')

        }catch (error){
            console.log(error);
            alert('Edición del servivio/producto invalido')
        }
    }

    /*===========================================================================================================*/
    return {
        actualizacionSP
    }
};