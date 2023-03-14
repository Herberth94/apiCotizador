import React, { useMemo,useCallback,  useState } from 'react';
import  {  useEffect } from "react";
import MaterialReactTable from 'material-react-table';

import swal from "sweetalert"

import { mensajeAlerta } from '../../../pages/componentes/Alerta';


import axios from "axios";
import { url, url2 } from '../../../Componentes/Ocultar';
import { Delete, Edit } from '@mui/icons-material';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Tooltip,
  } from '@mui/material';





const TableExample = () => {


    const [listaUsuarios, setlistaUsarios] = useState([]);

    /*=================== Leer todos los usuarios registrados  =================*/
    const llamadoUsuario = async () => {
      const respuesta = await axios.get(url + "/api/cotizador/registro");
      setlistaUsarios(respuesta.data.reSql);
   
    };
  
    useEffect(() => {
      llamadoUsuario();
    }, []);

    
/* 
    console.log("----------------------------------------");
    console.log(listaUsuarios);
    console.log("----------------------------------------");
 */








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
        accessorKey: 'password',
        header: 'Password',
      },


    ],
    [],
  );


  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    listaUsuarios[row.index] = values;
    //send/receive api updates here
    setlistaUsarios([...listaUsuarios]);
    exitEditingMode(); //required to exit editing mode
  };







  const handleDeleteRow = useCallback(


    (row) => {
   
        swal({
            title: "Estas seguro de borrar?",
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
            } else {
              swal("Tus datos no se han borrado");
            }
          });

      if (
       /*  !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`) */
      
      "hola" === "hola" ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      listaUsuarios.splice(row.index, 1);
      setlistaUsarios([...listaUsuarios]);
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
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={() => table.setEditingRow(row)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      
    />
   </div>
  );
};

export default TableExample;


