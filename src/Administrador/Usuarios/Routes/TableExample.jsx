import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from './makeData';

const TableExample = () => {
  const columns = useMemo(
    () => [
      //column definitions...
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },

      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },

      {
        accessorKey: 'state',
        header: 'State',
      }, //end
    ],
    [],
  );

  const [tableData, setTableData] = useState(() => data);

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
    tableData[row.index] = values;
    //send/receive api updates here
    setTableData([...tableData]);
    exitEditingMode(); //required to exit editing mode
  };

  return (

    <div className='full'>
    <MaterialReactTable
      columns={columns}
      data={tableData}
      editingMode="modal" //default
      enableEditing
      onEditingRowSave={handleSaveRow}
    />
   </div>
  );
};

export default TableExample;


