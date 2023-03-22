import React, { useMemo, useCallback, useState } from 'react';
import { useEffect } from "react";
import MaterialReactTable from 'material-react-table';

import swal from "sweetalert"

import axios from "axios";
import { url, url2 } from  '../../Componentes/Ocultar';
import { Delete, Edit, LockPerson } from '@mui/icons-material';
import { Box, IconButton, Tooltip,} from '@mui/material';
import { useRegistroUpdate } from './routes/useRegistroUpdate';


const AdmProviders = () => {

  const [listaProv, setListaProv] = useState([]);


  // Función que realiza la consulta a la tabla proyectos 
  const getProvs = async () => {
    try {
      const resProv = await axios.get(url + '/api/cotizador/proveedor/view');
      setListaProv(resProv.data.data);

    } catch (error) {
      console.log(error);
    }
  }

  //const [actualizarProvs,setActualizarProvs] = useState(false);

  useEffect(() => {
    getProvs();
  }, [])





  

  const { actualizacion } =useRegistroUpdate ();  
 






  const columns = useMemo(
    () => [

      {
        accessorKey: 'proveedor_id',
        header: 'ID',
      },
      {
        accessorKey: 'proveedor_nombre',
        header: 'Nombre',
      },

      {
        accessorKey: 'proveedor_telefono',
        header: 'Teléfono',
      },
      {
        accessorKey: 'proveedor_email',
        header: 'Correo',
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


      var user = row.getValue('proveedor_nombre');
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


            listaProv.splice(row.index, 1);
            setListaProv([... listaProv]);


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
    [ listaProv],
  );





  return (

    <div className='box-table'>
      <MaterialReactTable
        initialState={{ density: 'compact' }}     
        columns={columns}
        data={listaProv}
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
              <IconButton onClick={() =>  handleDeleteRow(row)}>
                <LockPerson />
              </IconButton>
            </Tooltip> 
          </Box>
        )}


      />
    </div>
  );
};

export default AdmProviders;

