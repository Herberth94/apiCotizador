import { useMemo, useCallback, useState } from 'react';
import { useEffect } from "react";
import MaterialReactTable from 'material-react-table';

import swal from "sweetalert"

import axios from "axios";
import { url, url2 } from  '../../Componentes/Ocultar';
import { Delete, Edit, LockPerson } from '@mui/icons-material';
import { Box, IconButton, Tooltip,} from '@mui/material';
import { useRegistro } from './routes/ModificarCLientes';


const AdmCustomers = () => {


  const [listaClientes, setlistaClientes] = useState([]);
  const [status, setStatus] = useState(0)
  /*=================== Leer todos los usuarios registrados  =================*/



  const  llamadoCliente = async () => {
    const respuesta = await axios.get(url + "/api/cotizador/clientes/view");
    setlistaClientes(respuesta.data.reSql);
  };

  useEffect(() => {
    llamadoCliente();
  }, [status]);

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

  

  const { actualizacion } =useRegistro();  
 






  const columns = useMemo(
    () => [

      {
        accessorKey: 'cliente_id',
        header: 'ID',
      },
      {
        accessorKey: 'nombre_cliente',

        header: 'Cliente',
      },

      {
        accessorKey: 'razon_social',
        header: 'Razón Social',
      },
      {
        accessorKey: 'telefono',
        header: 'Teléfono',
      },
      {
        accessorKey: 'cliente_direccion',
        header: 'Dirección',
      },




    ],
    [],
  );


  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
     console.log(values);
     setStatus(!status);
     var id = row.getValue('cliente_id');
     console.log("Tu id es : " , id)
     actualizacion( id,  values );
     
     exitEditingMode(); //required to exit editing mode
   };

  const handleDeleteRow = useCallback(
    (row) => {
      var user = row.getValue('nombre_cliente');
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


            listaClientes.splice(row.index, 1);
            setlistaClientes([...listaClientes]);


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
    [listaClientes],
  );





  return (

    <div className='box-table'>
      <MaterialReactTable
       initialState={{ density: 'compact' }}
        
        columns={columns}
        data={listaClientes}
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

   {/*          <Tooltip arrow placement="right" title="Desbloquear">
              <IconButton onClick={() => handlePasswordRow(row)}>
                <LockPerson />
              </IconButton>
            </Tooltip> */}
          </Box>
        )}


      />
    </div>
  );
};

export default AdmCustomers;

