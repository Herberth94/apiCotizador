// import  {useState} from 'react';
// import axios from 'axios';


// let a = "-------------";

// export function Ok() {
//   return (      
//       /*========= Animación de Titulos========= */
//     <div className="container">
//         <div className="box">
//         {/*========= Titulo Animación========= */}
//             <div className="title">
//                 <span className="block"></span>
//                 <h1> {a} </h1>
//             </div>
//         </div>
//     </div>
//   )
// }

// export const GuardarNuevoProyecto = () => {
//     const [datos, setDatos] = useState ({
//         proyecto_clave:'',
//         proyecto_descripcion:'',
//         proyecto_id_cliente:''
//     });

//     const [ListaC, setListaC] = useState ([]);

//     const C = {
//         nombre_cliente: ''
//     }

//     const handleInputChange = (event) =>{
//       /*   console.log("este es el event.target.value", event.target.value) */
//           setDatos ({
//             ...datos,[event.target.name] : event.target.value ,
//           })
//     }

//    async function listaClientes(){
//         try {
//           const respuesta = await axios.get("http://localhost:4001/api/cotizador/clientes/view");
//           setListaC(respuesta.data.reSql);
//           //console.log(ListaC[0].nombre_cliente);
//           //console.log(ListaC);
//           let i = Object.keys(ListaC);
//           //console.log(i);
//           for (let c = 0; c < i.length; c++) {
//             if (datos.proyecto_id_cliente == ListaC[c].cliente_id) {
//               //ListaC[c].nombre_cliente;
//               C.nombre_cliente = ListaC[c].nombre_cliente;
//               console.log(C.nombre_cliente);
//               a=C.nombre_cliente;
//             }        
//           }
//         } catch (error) {
          
//         }
//       };

//     async function Send (){

//         const data = {
//             proyecto_clave: datos.proyecto_clave,
//             proyecto_descripcion: datos.proyecto_descripcion,
//             proyecto_id_cliente: datos.proyecto_id_cliente
//         };

//         try{
            
//             const respuesta = await axios.post(`http://localhost:4001/api/cotizador/proyecto/agregar/${data.proyecto_id_cliente}`, data);
//             const send2 = respuesta.data;
            
//             alert('Registro exitoso')
//             }
//             catch (error){
            
//             }
//     }
//     const enviarDatos = (event) =>{
//         Send();
//         event.preventDefault()
//         event.target.reset();
       
//     }

//     return{
//         handleInputChange,
//         enviarDatos,
//         listaClientes
//     }

// };