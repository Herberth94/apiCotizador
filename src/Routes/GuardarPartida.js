// import  {useState} from 'react';
// import axios from 'axios';

// export const GuardarPartida = () => {
//     /*======== Inserción de datos en la tabla partida ==============*/
//     const[datosPartida, setDatosPartida] = useState({
//         partida_nombre: '',
//         partida_descripcion: ''

//     });
//     const handleInputChangePartida = (event) =>{
//         setDatosPartida({
//             ...datosPartida,[event.target.name] : event.target.value ,
//         })
//     }

//     async function SendPartida (){

//         const data = {
//             partida_nombre: datosPartida.partida_nombre,
//             partida_descripcion: datosPartida.partida_descripcion
//         };

//         try{
//             const respuesta = await axios.post('http://localhost:4001/api/cotizador/partida/1', data);
//             const getPartidaId = respuesta.data;
//             // console.log("hola soy send2 de las partidas", send2);
//             alert('Registro exitoso')
//         }
//         catch (error){
//             console.log("este es el error de las partidas", error);
//         }
//     }
//     const enviarDatosPartida = (event) =>{
//         SendPartida();
//         event.preventDefault()
//         // event.target.reset();
//     }
//     /*======== Inserción de datos en la tabla pp ==============*/

//     /*======== Inserción de datos en la tabla precio ==============*/

//     /*======== Inserción de datos en la tabla proveedor ==============*/

//     /*======== Inserción de datos en la tabla marca ==============*/

//     /*======== Inserción de datos en la tabla proveedor_marca ==============*/

//     /*======== Inserción de datos en la tabla categoria ==============*/

//     /*======== Inserción de datos en la tabla servicio_producto ==============*/

//     /*======== Inserción de datos en la tabla psp ==============*/

    

    
//     return{
//         handleInputChangePartida,
//         enviarDatosPartida
//     }

// };