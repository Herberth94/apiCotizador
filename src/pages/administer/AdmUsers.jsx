import React, { useMemo, useCallback, useState } from 'react';
import { useEffect } from "react";
import MaterialReactTable from 'material-react-table';

import swal from "sweetalert"

import axios from "axios";
import { url, url2 } from  '../../Componentes/Ocultar';
import { Delete, Edit, LockPerson } from '@mui/icons-material';
import { Box, IconButton, Tooltip,} from '@mui/material';
import { useRegistroUpdate } from './routes/useRegistroUpdate';


const AdmUsers = () => {



  const data = {
    usuario_id_rol: "",
    email: "",
    password: "",
    estado_login: 0,
  }
  const [listaUsuarios, setlistaUsarios] = useState([]);

  /*=================== Leer todos los usuarios registrados  =================*/
  const llamadoUsuario = async () => {
    const respuesta = await axios.get(url + "/api/cotizador/registro");
    setlistaUsarios(respuesta.data.reSql);

  };

  useEffect(() => {
    llamadoUsuario();
  }, []);


  console.log("-------------------")
  console.log(listaUsuarios);
  console.log("-------------------")

/* Resetear contraseña */
  const resetearContraseña = async (id,user) => {
    const estado_login = 0;
    let newpassword = user;
    const respuesta = await axios.post(
      url2 + `/api/cotizador/edit/pass/${id}`,
      { password: newpassword, estado_login }
    );
 /*    const respuestaBack = respuesta.data.msg;
    alert(respuestaBack); */
  };

  

  const { actualizacion } =useRegistroUpdate ();  
 






  const columns = useMemo(
    () => [

      {
        accessorKey: 'id_usuario',
        header: 'ID',
      },
      {
        accessorKey: 'email',

        header: 'Correo',
      },

      {
        accessorKey: 'rol_nombre',
        header: 'Rol',
      },

      {
        accessorKey: 'estado_login',
        header: 'Estado',
      },
      



    ],
    [],
  );


  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.

      console.log(values);

     var id = row.getValue('id_usuario');
  
   
  
     console.log("Tu id es : " , id)
     actualizacion( id,  values );

    exitEditingMode(); //required to exit editing mode
    



  };







  const handleDeleteRow = useCallback(


    (row) => {


      var user = row.getValue('email');
      /*    alert(row.getValue('email')); */
      swal({
        title: "Estas seguro de borrar a " + user + " ?",
        text: "Una vez eliminado no podrás recuperar los datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Eliminación exitosa", {
              icon: "success",
            });


            listaUsuarios.splice(row.index, 1);
            setlistaUsarios([...listaUsuarios]);


          } else {
            swal("Tus datos no se han borrado");
          }
        });

      if (
        /*  !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`) */

        "hola" === "hola") {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      /*     listaUsuarios.splice(row.index, 1);
          setlistaUsarios([...listaUsuarios]); */
    },
    [listaUsuarios],
  );




  const handlePasswordRow = useCallback(


    (row) => {


      var user = row.getValue('email');
      var id = row.getValue('id_usuario');
      /*    alert(row.getValue('email')); */
      swal({
        title: "Estas seguro de resetear la contraseña del usuario " + user + " ?",
        text: "Una vez actualizado no podras revertir los cambios",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willUpdate) => {
          if (willUpdate) {
            swal("Contraseña reseteada, la contraseña es:" + user, {
              icon: "success",
            });
            resetearContraseña(id, user);
          } else {
            swal("Tus datos no se han actualizado");
          }
        });

    },
    [listaUsuarios],
  );




  return (

    <div className='box-table'>
      <MaterialReactTable
        columns={columns}
        data={listaUsuarios}
        editingMode="modal" //default
        enableEditing
        enableClickToCopy={true}
        onEditingRowSave={handleSaveRow}

        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Editar">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Borrar">
              <IconButton onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>

            <Tooltip arrow placement="right" title="Desbloquear">
              <IconButton onClick={() => handlePasswordRow(row)}>
                <LockPerson />
              </IconButton>
            </Tooltip>
          </Box>
        )}


      />
    </div>
  );
};

export default AdmUsers;


