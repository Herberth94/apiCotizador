import React, { useState, useEffect } from "react";
import { useRegistroUpdate } from "../Routes/ModificarUsuarios";
import axios from "axios";
import { CrudUsuarios } from "../Routes/CrudUsuarios";
import { url, url2 } from "../../../Componentes/Ocultar";
import TableExample from "../Routes/TableExample";

function AdministrarUsuarios() {
  /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  const { actualizacion } = useRegistroUpdate ();
  const [first, setfirst] = useState(false);

  const [listaUsuarios, setlistaUsarios] = useState([]);
  // **********reset contraseña*********

  const resetearContraseña = async (id_usuario, email) => {
    const estado_login = 0;
    let newpassword = email;
    // console.log("este es el email", email)
    // console.log("este es el id usuario", id_usuario)
    const respuesta = await axios.post(
      url2 + `/api/cotizador/edit/pass/${id_usuario}`,
      { password: newpassword, estado_login }
    );
    const respuestaBack = respuesta.data.msg;
    alert(respuestaBack);
  };

  /*=================== Leer todos los usuarios registrados  =================*/
  const llamadoUsuario = async () => {
    const respuesta = await axios.get(url + "/api/cotizador/registro");
    setlistaUsarios(respuesta.data.reSql);
    setShow(!show);
    //setShow(!show)
  };

  useEffect(() => {
    llamadoUsuario();
  }, []);

  const envioData = async (datos, key, data) => {
    if (first) {
      //   console.log(datos[key])
      //   console.log(data)
      actualizacion(datos[key], data);
    }
  };

  return (
    <div className="full">
      <div className="">
        <div>
          {/*======================= Titulo Animación =======================*/}
          {/*           <Animaciones   mytext= "Lista de Usuarios"      />  */}
        </div>

        {/*================= Botón Mostrar/Ocultar Lista ==================*/}
        <div>
          {/* <button className="btn btn-primary modificar" type="button" onClick={()=>llamadoUsuario()} >  {show ? 'Mostrar Lista' : 'Ocultar Lista'} </button> */}
          {show ? (
            <div>
              {/*=================== Ocultar Lista DIV  =====================*/}
            </div>
          ) : (
            <div>
              {/*=================== Botón Mostrar Lista DIV====================*/}
              <br />
              {/*===================     Tabla Usuarios    ====================*/}
              <div>
                <TableExample></TableExample>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AdministrarUsuarios;
