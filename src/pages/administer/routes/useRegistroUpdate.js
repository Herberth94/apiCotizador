import   axios  from "axios";
import { url2 } from "../../../Componentes/Ocultar";

export const useRegistroUpdate= () => {
  const actualizacion = (id_user, datos) => {
    Send(id_user, datos);
  };

  async function Send( id, datos) {
    /* const dataActulizacion = {
      usuario_id_rol: data.usuario_id_rol,
      email: data.email,
    }; */

   /*  const prueba = Object.keys(datos);
    for (let keys of prueba) {
      if (datos[keys] !== "") {
        dataActulizacion[keys] = datos[keys];
      }
    } */

    console.log(id , " " , datos);
    try {
      const respuesta = await axios.post(
        url2 + `/api/cotizador/edit/${id}`,
        datos
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
