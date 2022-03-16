// // import { useState } from 'react';
// // import axios from 'axios';

// // export const GuardarDatosMarca = () => {
// //     const [datosMarca, setDatosMarca] = useState({
// //         marca_nombre: ''
// //     });

// //     const handleInputChangeMarca = (event) => {
// //         setDatosMarca({
// //             ...datosMarca,[event.target.name] : event.target.value 
// //         })
// //     }
// //     async function SendMarca() {
// //         const data = {
// //             marca_nombre: datosMarca.marca_nombre,
// //         };

// //         try {
// //             const respuesta = await axios.post('http://localhost:4001/api/cotizador/marca/agregar', data);
// //             const send2 = respuesta.data;
// //             alert('Registro exitoso')
// //             }
// //             catch (error) {

// //             }

// //     }
// //     const enviarDatosMarca = (event) => {
// //         SendMarca();
// //     }
// //     return {
// //         handleChange,
// //         enviarDatosMarca
// //     }
// // }



// const [show, setShow] = useState(true);

//   /*======== Inserción de datos en la tabla partida ==============*/
//     /*======== Obtención de los proyectos  ==============*/
//     const [ListaProyectos, setListaProyectos] = useState ([{
//       proyecto_id:'',
//       proyecto_clave:'',
//       proyecto_descripcion:'',
//       proyecto_id_cliente:'',
//       proyecto_id_cat_c_a_sptn_ma:'',
//       proyecto_fecha_creacion:'',
//       proyecto_fecha_modificacion:''
//     }]);
//     const [proyectoId, setProyectoId] = useState({
//       proyecto_id:'',
//       proyecto_clave:'',
//       proyecto_descripcion:'',
//       proyecto_id_cliente:'',
//       proyecto_id_cat_c_a_sptn_ma:'',
//       proyecto_fecha_creacion:'',
//       proyecto_fecha_modificacion:''
//     })

//     useEffect (() => {
//       async function getProyectos(){
//         try {
//           const respuesta = await axios.get("http://localhost:4001/api/cotizador/proyecto/view");
//           //console.log(respuesta.data.reSql);
//           setListaProyectos(respuesta.data.reSql);
//         } catch (error) {}
//       }
//       getProyectos();
//       console.log(ListaProyectos);
//       setProyectoId(ListaProyectos.pop());
//       console.log(proyectoId.proyecto_id);
//     },[])

//   const[datosPartida, setDatosPartida] = useState({
//     partida_nombre: '',
//     partida_descripcion: ''

//   });

//   const handleInputChangePartida = (event) =>{
//       setDatosPartida({
//           ...datosPartida,[event.target.name] : event.target.value ,
//       })
//   }

//   async function SendPartida (){
//       /*======== Obtención del id del último proyecto insertado ==============*/
      
//       const data = {
//           partida_nombre: datosPartida.partida_nombre,
//           partida_descripcion: datosPartida.partida_descripcion
//       };

//       try{
//           const respuesta = await axios.post(`http://localhost:4001/api/cotizador/partida/${proyectoId.proyecto_id}`, data);
//           const getPartidaId = respuesta.data;
//           // console.log("hola soy send2 de las partidas", send2);
//           alert('Registro exitoso')
//       }
//       catch (error){
//           console.log("este es el error de las partidas", error);
//       }
//   }
//   const enviarDatosPartida = (event) =>{
//       SendPartida();
//       event.preventDefault()
//       // event.target.reset();
//   }

//   /*======== Inserción de datos en la tabla precio ==============*/
//   /*   OPERACIONES  DATOS*/
//   const [total, setTotal] = useState(10);
//   const [datosPrecio, setdatosPrecio] = useState({
//     // clave: "",
//     // descripcion_proyecto: "",
//     // cliente: "",
//     // valor_dolar: "",
//     // Partida: "",
//     precio_lista: '',
//     precio_unitario: '',
//     precio_descuento: '',
//     sp_cantidad: '',
//     precio_total: '',
//   });

//   const handleInputChange = (event) => {
//     setdatosPrecio({
//       ...datosPrecio,
//       [event.target.name]: event.target.value,
//     });
//   };
//   useEffect(() => {
//     let total = '';
//     let precio_u = '';
//     if (datosPrecio.precio_unitario != '' && datosPrecio.sp_cantidad != '') {
//       const total = Total(datosPrecio.precio_unitario, datosPrecio.sp_cantidad)
//       setdatosPrecio({ ...datosPrecio, precio_total: total })
//       if (datosPrecio.precio_lista != '') {
//         const desc = calcularDescuento(datosPrecio.precio_lista, datosPrecio.precio_unitario);
//         setdatosPrecio({ ...datosPrecio, precio_descuento: desc });

//       }
//     }
//     if (datosPrecio.precio_unitario == '' && datosPrecio.sp_cantidad == '') {
//       setdatosPrecio({ ...datosPrecio, precio_total: total })
//     }
//     if (datosPrecio.precio_lista != '' && datosPrecio.precio_descuento != '') {
//       precio_u = precioUnitario(datosPrecio.precio_lista, datosPrecio.precio_descuento);
//       const total = Total(precio_u, datosPrecio.sp_cantidad);
//       setdatosPrecio({ ...datosPrecio, precio_unitario: precio_u, precio_total: total });
//     }
//   }, [datosPrecio.precio_unitario, datosPrecio.precio_lista, datosPrecio.precio_descuento, datosPrecio.sp_cantidad])

//   async function SendPrecio() {
//     const data = {
//       precio_lista: datosPrecio.precio_lista,
//       precio_unitario: datosPrecio.precio_unitario,
//       precio_descuento: datosPrecio.precio_descuento
//     };
//     //console.log("este es el send de guardar datos precio", SendPrecio) 
//     try{
//       const respuesta = await axios.post('http://localhost:4001/api/cotizador/precio/agregar', data);
//       const send2 = respuesta.data;
//       alert('Registro exitoso')
//     }catch(error){

//     }
    
//   }
//   const enviarDatosPrecio = (event)=>{
//     SendPrecio();
//   }

//   /*======== Inserción de datos en la tabla proveedor ==============*/

//   /*======== Inserción de datos en la tabla marca ==============*/
//   const [datosMarca, setDatosMarca] = useState({
//     marca_nombre: ''
//   });

//   const handleInputChangeMarca = (event) => {
//       setDatosMarca({
//           ...datosMarca,[event.target.name] : event.target.value 
//       })
//   }
//   async function SendMarca() {
//       const data = {
//           marca_nombre: datosMarca.marca_nombre,
//       };

//       try {
//           const respuesta = await axios.post('http://localhost:4001/api/cotizador/marca/agregar', data);
//           const send2 = respuesta.data;
//           alert('Registro exitoso')
//           }
//           catch (error) {

//           }

//   }
//   const enviarDatosMarca = (event) => {
//       SendMarca();
//   }
//   /*======== Inserción de datos en la tabla proveedor_marca ==============*/

//   /*======== Inserción de datos en la tabla categoria ==============*/

//   /*======== Inserción de datos en la tabla servicio_producto ==============*/
//   const[datosSP, setDatosSP] = useState  ({
//         sp_no_parte: '',
//         sp_descripcion: '',
//         sp_meses: '',
//         sp_semanas: '',
//         sp_cantidad: '',
//         sp_comentarios: ''
//     });

//   const handleInputChangeSP = (event) =>{
//       setDatosSP({
//           ...datosSP, [event.target.name] : event.target.value
//       })
//   }

//   async function SendSP (){
//       const data = {
//           sp_no_parte: datosSP.sp_no_parte,
//           sp_descripcion: datosSP.sp_descripcion,
//           sp_meses: datosSP.sp_meses,
//           sp_semanas: datosSP.sp_semanas,
//           sp_cantidad: datosSP.sp_cantidad,
//           sp_comentarios: datosSP.sp_comentarios
//       };

//       try{
//           console.log("hola, soy guardar data servicio producto", data)

//           const respuesta = await axios.post('http://localhost:4001/api/cotizador/sp/agregar', data);
//           const send2 = respuesta.data;
//           console.log("hola soy send2", send2); 
//           alert('Registro exitoso')
//           }
//           catch (error){
//           console.log("este es el error", error);
//       }

//   }
//   const enviarDatosSP = (event) =>{
//       SendSP();
//       // event.preventDefault()
//       // event.target.reset();
//   }

//   /*======== Inserción de datos en la tabla psp ==============*/

 

  


//   /*useEffect(()=>{
//     const total = Total(datos.precio_unitario,datos.cantidad);
//       setDatos({...datos,total:total});
//   },[datos.cantidad])*/

//   /*useEffect(()=>{
//     const precio_u= precioUnitario(datos.precio_lista,datos.descuento);
//     setDatos({...datos,precio_unitario:precio_u});
//   },[datos.precio_lista,datos.descuento])*/

//   /*useEffect(()=>{
//     const desc = calcularDescuento(datos.precio_lista,datos.precio_unitario);
//     setDatos({...datos,descuento:desc});
//   },[datos.precio_lista,datos.precio_unitario])*/

