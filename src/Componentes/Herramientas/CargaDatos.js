import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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


}

export default CargaDatos;
