import  {useState} from 'react';
import axios from 'axios';


import {precioUnitario, calcularDescuento, Total} from "../Administrator/PTN-BOM/Operaciones";
import {url2} from "../Componentes/Ocultar";

export const EditPrecio = () => {
    // const [newPrecios, setNewPrecios] = useState({
    //     precio_lista: '',
    //     precio_unitario: '',
    //     precio_descuento: '',
    //     sp_cantidad: '',
    //     precio_total: '',
    //     precio_id_moneda:''
    // }); 

    // const [newCantidad, setNewCantidad] = useState({
    //     sp_cantidad:''
    // }); 

    const actualizacionPrecio = (estado,newcant,data,newdata)=>{
        // if(newdata.precio_lista !== data.precio_lista && newdata.precio_lista !== ''&& 
        //     newdata.precio_descuento !== data.precio_descuento && newdata.precio_descuento !== ''&&
        //     newcant.sp_cantidad !== data.sp_cantidad && newcant.sp_cantidad !== ''
        // ){
        //     let precio_u = precioUnitario(newdata.precio_lista,newdata.precio_descuento);
        //     let total = Total(precio_u,newcant.sp_cantidad)
        //     setNewPrecios({...newPrecios, precio_lista:newdata.precio_lista, precio_unitario:precio_u, precio_total:total,
        //      });
        // }else if( newdata.precio_unitario !== data.precio_unitario && newdata.precio_unitario !== ''


        // ){

        // }
        //console.log(newPrecios);
        SendUpdatePrecio(estado,newcant, data,data.precio_id, data.sp_id, newdata)      
    }

    async function SendUpdatePrecio (newcant, data, precio_id, sp_id, newdata){
        //console.log(data.precio_id_moneda);
        // const dataActualizacion = {
        //     precio_lista: newPrecios.precio_lista, 
        //     precio_unitario:newPrecios.precio_unitario,
        //     precio_descuento:newPrecios.precio_descuento,
        //     precio_total:newPrecios.precio_total,
        //     precio_id_moneda:newPrecios.precio_id_moneda
        // };

        const dataActualizacion = {
            precio_lista: data.precio_lista, 
            precio_unitario:data.precio_unitario,
            precio_descuento:data.precio_descuento,
            precio_total:data.precio_total,
            precio_id_moneda:data.precio_id_moneda
        };
        const dataActualizacion1 = {
            sp_cantidad:data.sp_cantidad
        };

        const k = Object.keys(newdata);
        const k1 = Object.keys(newcant);
        for(let keys of k){
            if(newdata[keys] !== ''){
                dataActualizacion[keys] = newdata[keys];
            }
            
        }
        for(let keys of k1){
            if(newcant[keys] !== ''){
                dataActualizacion1[keys] = newcant[keys];
            }
        }
         
        try {
            console.log(dataActualizacion);
            // console.log(dataActualizacion1);
            // console.log(id);
            await axios.post(url2 + `/api/cotizador/precio/edit/${precio_id}`,dataActualizacion);
            await axios.post(url2 + `/api/cotizador/sp/editCant/${sp_id}`,dataActualizacion1);
            alert('Precio editado exitosamente');
            } catch (error) {
            console.log(error);
            alert('Edición de precio invalido');
            }
    }
    return {
        actualizacionPrecio
    }
};


    