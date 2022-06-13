<<<<<<< HEAD
import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";
import "./App.css";

const { ExportCSVButton } = CSVExport;
const pricesData = [
  { id: "1", fruit: "banana", price: "10" },
  { id: "2", fruit: "apple", price: "20" },
  { id: "3", fruit: "orange", price: "15" }
];

class CargaDatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...pricesData]
    };
    this.prices = this.prices.bind(this);
  }

  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.fruit = " ";
          newRow.price = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {
    return (
      <div className="App">
        <RenderExpenseTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class RenderExpenseTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }
    const columns = [
      {
        dataField: "id",
        text: "Id"
      },
      {
        dataField: "fruit",
        text: "Fruit Name"
      },
      {
        dataField: "price",
        text: "Fruit Price"
      },
      {
        dataField: "databasePkey",
        text: "",
        editable: false,
        formatter: (cell, row) => {
          if (row)
            return (
              <button
                className="btn btn-danger btn-xs border-secondary rounded"
                onClick={() => {
                  this.setState(this.state.data, () => {
                    this.props.prices({
                      actionType: "deleteRow",
                      row: row.id,
                      fruit: row.fruit
                    });
                  });
                }}
              >
                Delete Row
              </button>
            );
          return null;
        }
      }
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={tableData}
          columns={columns}
          exportCSV
        >
          {props => (
            <div>
              <div className="d-flex justify-content-around p-2">
                <ExportCSVButton
                  className="text-light btn bg-success border-secondary rounded"
                  {...props.csvProps}
                >
                  <span>Export CSV</span>
                </ExportCSVButton>

                <button
                  className="btn bg-success text-light rounded"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                  Add Row
                </button>
              </div>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
=======
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {url2} from '../../Componentes/Ocultar';
import Cookies from 'universal-cookie';




import CreateIcon from "@material-ui/icons/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FunctionsIcon from '@material-ui/icons/Functions';
import AutorenewIcon from '@material-ui/icons/Autorenew';



import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InsertDatosCats } from '../../Preventa/PTN-BOM/Routes/GuardarDatosCategorias';
/*============== Operacions PTN BOM ==============*/
import { precioUnitario, calcularDescuento, Total}  from '../../Preventa/PTN-BOM/Operaciones/Operaciones';



const cookies = new Cookies();
let validatorid = cookies.get('id_usuario');
let validaOperacion = false;


var define = "";




// Creating styles
const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 650,
  },
  snackbar: {
    bottom: "104px",
  },
});


let lon = [1,2,3,4,5];

const Array = [];

function CargaDatos() {
  // Creating style object
  const classes = useStyles();

  // Defining a state named rows  Proveedor	Marca	Comentarios	Categoria	Añadir
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([
    {
       n_parte: 1, descripcion: "PRUEBA", meses: 1, semanas: 4,
      moneda: "USD", calcular: "", cantidad: 1, precio_lista: 1,
      precio_unitario: 1, descuento: 0, total: 0, proveedor: "",
      marca: "", comentarios: "", categoria: "", boton: ""
    },
  ]);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        n_parte: null, descripcion: "", meses: "", semanas: "",
        moneda: "", calcular: "", cantidad: 0, precio_lista: 0,
        precio_unitario: 0, descuento: 0, total: 0, proveedor: "",
        marca: "", comentarios: "", categoria: "", boton: ""
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("Guardado : ", rows);
    setDisable(true);
    setOpen(true);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

  return (


    <div className="contenido-usuarios">
      <TableBody>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={classes.snackbar}
        >
          <Alert onClose={handleClose} severity="success">
            Datos Guardados
          </Alert>
        </Snackbar>
        <Box margin={1}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {isEdit ? (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    Añadir
                  </Button>
                  {lon.length !== 0 && (
                    <div>
                      {disable ? (
                        <Button disabled align="right" onClick={handleSave}>
                          <DoneIcon />
                          Guardar
                        </Button>
                      ) : (
                        <Button align="right" onClick={handleSave}>
                          <DoneIcon />
                          Guardar
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    Añadir
                  </Button>
                  <Button align="right" onClick={handleEdit}>
                    <CreateIcon />
                    Editar
                  </Button>
                </div>
              )}
            </div>
          </div>
          <TableRow align="center"></TableRow>

          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Nº Parte</TableCell>
                <TableCell align="center">Descripciòn</TableCell>
                <TableCell align="center">Meses</TableCell>
                <TableCell align="center">Semanas</TableCell>
                <TableCell align="center">Moneda</TableCell>
                <TableCell align="center">Calcular</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Precio Lista</TableCell>
                <TableCell align="center">Precio Unitario</TableCell>
                <TableCell align="center">Descuento</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Proveedor</TableCell>
                <TableCell align="center">Marca</TableCell>
                <TableCell align="center">Comentarios</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Añadir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>




<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>
<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 
<td>
<input className="fase2"/>
</td>

<td>
<input className="fase2"/>
</td> 














              {rows.map((row, i) => {
                return (
                  <div>
                    <TableRow>
                      {isEdit ? (
                        <div>
                          <TableCell padding="none">
                    

                          </TableCell>
                          <TableCell padding="none">
                            <select
                              style={{ width: "100px" }}
                              name="meses"
                              value={row.meses}
                              onChange={(e) => handleInputChange(e, i)}
                            >
                              <option value="Delfos"></option>
                              <option value="KD">Karanja</option>
                            
                            </select>
                          </TableCell>


                        </div>
                      ) : (
                        <div>


                          <TableCell component="td" scope="row">
                            {row.n_parte}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.descripcion}
                          </TableCell>
                          <TableCell component="th" scope="row" align="center">
                            {row.meses}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                          ></TableCell>



                        </div>
                      )}
                      {isEdit ? (
                        <Button className="mr10" onClick={handleConfirm}>
                          <ClearIcon />
                        </Button>
                      ) : (
                        <Button className="mr10" onClick={handleConfirm}>
                          <DeleteOutlineIcon />
                        </Button>
                      )}
                      {showConfirm && (
                        <div>
                          <Dialog
                            open={showConfirm}
                            onClose={handleNo}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle n_parte="alert-dialog-title">
                              {"Confirmar Eliminaciòn"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                 Estas seguro que quieres Eliminar?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={() => handleRemoveClick(i)}
                                color="primary"
                                autoFocus
                              >
                              Si
                              </Button>
                              <Button
                                onClick={handleNo}
                                color="primary"
                                autoFocus
                              >
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      )}
                    </TableRow>
                  </div>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableBody>



    </div>
  );


>>>>>>> 4d2c3b0cb95ce23caa0da8168bd64ce1ae22c88d
}

export default CargaDatos;