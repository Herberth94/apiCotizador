import   axios  from "axios";
import { url2 } from "../../../Componentes/Ocultar";

export const useRegistroUpdate= () => {
  const actualizacion = (data, datos) => {
    Send(data, datos);
  };
  
  async function Send( id, datos) {
    let rolID = '';
    if(datos.rol_nombre=='administrador'){ rolID ='1' }
    if(datos.rol_nombre=='preventa'){ rolID ='2' }
    if(datos.rol_nombre=='venta'){ rolID ='3' }
    if(datos.rol_nombre=='direccion'){ rolID ='4' }
    const newData = Object.assign({}, datos, { usuario_id_rol: rolID, estado_login:'0' });
    console.log(id ,'datos', newData)

    //console.log(dataActulizacion);
    try {
      const respuesta = await axios.post(
       url2 + `/api/cotizador/edit/${id}`,newData
        
      );
      const send2 = respuesta.data.msg;
      //console.log(send2);
      alert(send2);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    actualizacion,
  };
};
