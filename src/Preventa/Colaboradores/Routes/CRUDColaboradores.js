import axios from 'axios';
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { url2 } from '../../../Componentes/Ocultar';

export const CrudColaboradores = (props) => {

    const deleteColab = async (cId) => {
        const confirmacion = window.confirm("¿Seguro que quieres borrar este Colaborador?" );
        if (confirmacion) {
            try {
                if(props.estado){
                    await axios.delete(url2 + `/api/cotizador/delete/${cId}`);
                    alert('Colaborador eliminado exitosamente');
                }else{
                    await axios.delete(url2 + `/api/cotizador/colaboradores/delete/${cId}`);
                    alert('Colaborador eliminado exitosamente');
                }
            } catch (error) {
                alert('Error al eliminar Colaborador');
            }
        }else {
        }
    };
    

    return (
        <div>

            <div className=''>

      {/*        <Animaciones   mytext= "Administrar Colaboradores" />
 */}
            </div>
            {/*===================     Tabla Proveedores   ========================*/}
            <Table>
                <Thead>
                    {/*=================== Titulos Tabla Proveedores ===================*/}
                        

                    <Tr >
                        <Th>ID</Th>
                        <Th>{props.estado ? "Colaboradores Ventas" : "Colaboradores Preventa"}</Th>
                        <Th>Eliminar</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/*=================== Tabla de los colaboradores de un Proyecto =================*/}
                    {Object.keys(props.colabs).map((key) => (
                    <Tr key={props.estado ? props.colabs[parseInt(key)].id_usuario : props.colabs[parseInt(key)].colab_id }>
                        <Td>{props.colabs[parseInt(key)].id_usuario}</Td>
                        {/*=================== Nombre/Email del Colaborador =================*/}
                        <Td>{props.colabs[parseInt(key)].email}</Td>
                        {/*=================== Botón Eliminar =================*/}
                        <Td>
                            {" "}
                            <button
                                className="sn-boton  eliminar"
                                type="button"
                                onClick={() => {
                                    props.estado ? deleteColab(props.colabs[parseInt(key)].up_id):deleteColab(props.colabs[parseInt(key)].colab_id)
                                }}
                            >
                           <i className="bi bi-trash-fill"></i> 
                              
                            </button>
                        </Td>
                    </Tr>  
                    ))}
                </Tbody>
            </Table>
        </div>
    )
}