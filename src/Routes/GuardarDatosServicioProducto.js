// import  {useState} from 'react';
// import axios from 'axios';

// export const GuardarDatosServicioProducto = () => {
//     const[datosSP, setDatosSP] = useState  (
//         {
//             sp_no_parte: '',
//             sp_descripcion: '',
//             sp_meses: '',
//             sp_semanas: '',
//             sp_cantidad: '',
//             sp_comentarios: ''
//         });

//     const handleChangeSP = (event) =>{
//         setDatosSP({
//             ...datosSP, [event.target.name] : event.target.value
//         })
//     }
    
//     async function SendSP (){
//         const data = {
//             sp_no_parte: datosSP.sp_no_parte,
//             sp_descripcion: datosSP.sp_descripcion,
//             sp_meses: datosSP.sp_meses,
//             sp_semanas: datosSP.sp_semanas,
//             sp_cantidad: datosSP.sp_cantidad,
//             sp_comentarios: datosSP.sp_comentarios
//         };

//         try{
//             console.log("hola, soy guardar data servicio producto", data)

//             const respuesta = await axios.post('http://localhost:4001/api/cotizador/sp/agregar', data);
//             const send2 = respuesta.data;
//             console.log("hola soy send2", send2); 
//             alert('Registro exitoso')
//             }
//             catch (error){
//             console.log("este es el error", error);
//         }

//     }
//     const enviarDatosServicioSP = (event) =>{
//         SendSP();
//         // event.preventDefault()
//         // event.target.reset();
//     }
//     return{
//         handleChange,
//         enviarDatosServicioProducto
//     }

// };