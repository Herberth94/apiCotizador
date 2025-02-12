import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { EditPrecio } from "../Routes/ModificarPrecio";
import Animaciones from "./Animaciones";
import { CrudPrecios } from "./CRUDPrecios";

//Componentes
import { url, url2 } from "./Ocultar";

export const CrudCategorias = (props) => {
  //console.log('Datos de categorías:',props.dcats);
  const [activar, setActivar] = useState([]);
  const [textBModificar, setTextBModificar] = useState([]);
  const [textBVer, setTextBVer] = useState([]);
  const [show, setShow] = useState([]);
  const [show2, setShow2] = useState(true);

  /*================================================== Categorias ==================================================*/
  /*========================= Editar =========================*/

  const [data, setData] = useState({
    cd_id_cats: "",
    cd_no_parte: "",
    cd_descripcion: "",
    cd_meses: "",
    cd_semanas: "",
    cd_comentarios: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  //console.log(props.usuarios);
  const [enable, setenable] = useState([]);
  const [datos, Setdatos] = useState([]);

  useEffect(() => {
    Setdatos(props.dcats);
  }, [props.dcats]);

  useEffect(() => {
    let i = Object.keys(props.dcats);
    i = i.length;
    setenable(Array(i).fill(true));
    setActivar(Array(i).fill(true));
    setShow(Array(i).fill(true));
    setTextBModificar(Array(i).fill("bi bi-pencil-square"));
    setTextBVer(Array(i).fill("bi bi-eye"));
  }, [props.dcats]);

  const habilitar = (key) => {
    key = parseInt(key);
    const newArr = [];
    const newArr2 = [];
    const newArr3 = [];
    let c = Object.keys(props.dcats);
    c = c.length;
    for (let i = 0; i < c; i++) {
      if (i === key) {
        newArr[i] = !enable[i];
        if (enable[i] === false) {
          newArr2[i] = "bi bi-pencil-square";
          setData({
            ...data,
            cd_id_cats: "",
            cd_no_parte: "",
            cd_descripcion: "",
            cd_meses: "",
            cd_semanas: "",
            cd_comentarios: "",
          });
        } else {
          newArr2[i] = "bi bi-check-lg";
        }
        newArr3[i] = !activar[i];
      }
      if (i !== key) {
        newArr[i] = true;
        newArr2[i] = "bi bi-pencil-square";
        newArr3[i] = true;
      }
    }
    setenable(newArr);
    setTextBModificar(newArr2);
    setActivar(newArr3);
  };

  const habilitar2 = (key) => {
    key = parseInt(key);
    const newArr = [];
    const newArr2 = [];
    let c = Object.keys(props.dcats);
    c = c.length;
    setShow(Array(c).fill(true));
    setTextBVer(Array(c).fill("bi bi-eye"));
    for (let i = 0; i < c; i++) {
      if (i === key) {
        newArr[i] = !show[i];
        setShow2(newArr[i]);
        if (show[i] === false) {
          newArr2[i] = "bi bi-eye";
        } else {
          newArr2[i] = "bi bi-eye-slash-fill";
        }
      }
      if (i !== key) {
        newArr[i] = true;
        newArr2[i] = "bi bi-eye";
      }
    }
    setShow(newArr);
    setTextBVer(newArr2);
  };
  /*==========================================================*/
  /*==============================================================================================================*/

  /*================================================== Precios ==================================================*/
  /*========================= Resumen deL precio de un servicio/producto =========================*/
  // Almacenamiento del precio
  const [listaPrecios, setListaPrecios] = useState([]);

  // Función que realiza la consulta a la tabla precios
  async function getDatosPrecios(cd_id) {
    try {
      const resPrecSP = await axios.get(
        url2 + `/api/cotizador/precio/viewCatsDP/${cd_id}`
      );
      setListaPrecios(resPrecSP.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  /*==============================================================================================*/

  /*========================= Envío de nuevos datos =========================*/
  const [first, setfirst] = useState(false);

  const { actualizacionPrecio } = EditPrecio();

  const envioDataPrecio = (estado, data, key, newdata) => {
    if (first) {
      actualizacionPrecio(estado, data[key], newdata);
    }
  };
  /*=========================================================================*/
  /*=============================================================================================================*/

  return (
    <div className="">
      <br />
      <br />
      <br />
      {/* <form> */}
      {/****************************Lista de los Proyectos Creados ****************************************/}
      {/*============= Titulo Animación =============*/}
      <Animaciones mytext="Categorias " />

      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Categoria</Th>
            <Th># Parte</Th>
            <Th>Descripción</Th>
            <Th>Duración Meses</Th>
            <Th>Entrega Semanas</Th>
            <Th>Comentarios</Th>
            <Th>Precios</Th>
            <Th>Modificar</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {Object.keys(props.dcats).map((key) => (
            <Tr key={key}>
              <Td>{props.dcats[key].cd_id}</Td>
              <Td>
                {" "}
                <select
                  id="lista-opciones"
                  name="cd_id_cats"
                  defaultValue={props.dcats[key].cd_id_cats}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                >
                  <option value={0}></option>
                  <option value={1}>Capacitación</option>
                  <option value={2}>Accesorios</option>
                  <option value={3}>Servicios PTN</option>
                  <option value={4}>Mesa de Ayuda</option>
                </select>
              </Td>
              <Td>
                <input
                  className="input-name"
                  defaultValue={props.dcats[key].cd_no_parte}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cd_no_parte"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  defaultValue={props.dcats[key].cd_descripcion}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cd_descripcion"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  defaultValue={props.dcats[key].cd_meses}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cd_meses"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  defaultValue={props.dcats[key].cd_semanas}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cd_semanas"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  defaultValue={props.dcats[key].cd_comentarios}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cd_comentarios"
                ></input>
              </Td>

              <Td>
                <button
                  className="sn-boton ver"
                  onClick={() => {
                    getDatosPrecios(props.dcats[key].cd_id);
                    habilitar2(key);
                  }}
                >
                  <i className={textBVer[key]}></i>
                </button>
              </Td>

              {enable[key] ? (
                <Td>
                  <button
                    className="sn-boton"
                    type="button"
                    onClick={() => {
                      //    props.envioData(datos,key,data);
                      habilitar(key);
                      props.setfirst(activar[key]);
                    }}
                  >
                    <i className={textBModificar[key]}></i>
                  </button>
                </Td>
              ) : (
                <>
                  <Td>
                    <button
                      className="sn-boton"
                      type="button"
                      onClick={() => {
                        props.envioData(datos, key, data);
                        habilitar(key);
                        props.setfirst(activar[key]);
                      }}
                    >
                      <i className={textBModificar[key]}></i>
                    </button>
                  </Td>

                  <Td>
                    <button
                      className="sn-boton cancelar"
                      type="button"
                      onClick={() => {
                        /*   props.envioData(datos,key,data);  */
                        habilitar(key);
                        //props.setfirst(activar[key]);
                      }}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {show2 ? (
        <div></div>
      ) : (
        <div>
          {/*=================== Botón Mostrar Lista DIV =====================*/}
          <br />
          <CrudPrecios
            precios={listaPrecios}
            setfirst={setfirst}
            envioDataPrecio={envioDataPrecio}
            estado={false}
          />
        </div>
      )}

      <br />
      <br />
      {/* </form> */}
    </div>
  );
};
