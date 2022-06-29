import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { url, url2 } from '../../../Componentes/Ocultar';
import Cookies from 'universal-cookie';

import CreateIcon from "@material-ui/icons/Create";

import { Table } from 'react-super-responsive-table';
import {
	Box, Button, Snackbar,
TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { ArrowUpward } from '@material-ui/icons';



import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InsertDatosCats } from '../Routes/GuardarDatosCategorias';
/*============== Operacions PTN BOM ==============*/
import { precioUnitario, calcularDescuento, Total}  from '../Operaciones/Operaciones';
import { listaProv } from '../../../Ventas/Operaciones/OperacionesAM';
import { idPartidaInsertada } from '../Routes/GuardarPartida';
import { pEstatus1 } from './ContinuarProyecto';

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
		minWidth: 100,
	},
	snackbar: {
		bottom: "140px",
	},

});






function DatosSp2(props) {

	// Defining a state named rows
	// which we can update by calling on setRows function
	const [rows, setRows] = useState([
		{
		  id: 0,
		  n_parte: "",
		  descripcion: "",
		  meses: "" ,
		  semanas: "" ,
		  cantidad:0,
		  precio_lista: 0,
		  precio_unitario: 0,
		  precio_descuento: 0, 
		  total:0 ,
		  moneda:"", 
		  categoria:"", 
		  proveedor:"",
		  marca:"",
		  comentarios: ""		
		},
	]);

	//Key 
	const [k, setK] = useState(0);

	// ================================= Buscadores ================================= //
		// =========== No de partes =========== //
		// Almacenamiento de los No. de parte existentes para el buscador
		const [listaNP, setListaNP] = useState ([]);

		// Almacenamiento de los No. de parte semejantes al texto introducido en el input
		const [suggestionsNP, setSuggestionsNP] = useState ([]);
	
		// Función que realiza la consulta a la tabla sp_no_parte
		async function obtenerNP(){
            try {
				const resNp = await axios.get(url + '/api/cotizador/sp/viewSpnp');
                setListaNP(resNp.data.data); 
            } catch (error) {console.log(error);}
		}

		const onSuggestHandlerNP = (np) => {
            const actualizar = [...rows];
			actualizar[k]['n_parte'] = np;
			setRows(actualizar);
            setSuggestionsNP([]);
        }
		// ==================================== //

		// =========== Descripciones =========== //
		// Almacenamiento de los No. de parte existentes para el buscador
		const [listaDesc, setListaDesc] = useState ([]);

		// Almacenamiento de los No. de parte semejantes al texto introducido en el input
		const [suggestionsDesc, setSuggestionsDesc] = useState ([]);
	
		// Función que realiza la consulta a la tabla sp_no_parte
		async function obtenerDesc(){
			try {
				const resDes = await axios.get(url + '/api/cotizador/sp/viewSpd');
				setListaDesc(resDes.data.data);
			} catch (error) {console.log(error);}
		}

		const onSuggestHandlerDesc = (d) => {
            const actualizar = [...rows];
			actualizar[k]['descripcion'] = d;
			setRows(actualizar);
            setSuggestionsDesc([]);
        }
		// ==================================== //

		// =========== Marcas =========== //
		// Almacenamiento de las marcas existentes para el buscador
		const [listaMarca, setListaMarca] = useState ([]);

		// Almacenamiento de las marcas semejantes al texto introducido en el input
		const [suggestionsMarca, setSuggestionsMarca] = useState ([]);
	
		// Función que realiza la consulta a la tablas proveedores
		async function obtenerMarcas(proveedor){
			let i = Object.keys(listaProv);
			let proveedorId = {
				proveedor_id:''
			}
            for (let c = 0; c < i.length; c++) {
            if (proveedor === listaProv[c].proveedor_nombre) {
                proveedorId.proveedor_id = listaProv[c].proveedor_id;
                //console.log('proveedor id:',proveedorId);
                }
            }
            try {
                if(proveedorId.proveedor_id !== ''){
                    const respuesta = await axios.get(url2 + `/api/cotizador/provmarcas/view/${proveedorId.proveedor_id}`);
                    setListaMarca(respuesta.data.data);
                }
            } catch (error) {console.log(error);}
		}

		const onSuggestHandlerMarca = (nM) => {
            const actualizar = [...rows];
			actualizar[k]['marca'] = nM;
			setRows(actualizar);
            setSuggestionsMarca([]);
        }
	// ============================== // 
	// =========== Proveedores =========== //
	// Almacenamiento de los proveedores existentes para el buscador
	const [listaProv, setListaProv] = useState ([]);

	// Almacenamiento de los proveedores semejantes al texto introducido en el input
	const [suggestionsProv, setSuggestionsProv] = useState ([]);

	// Función que realiza la consulta a la tabla proveedores
	async function obtenerProveedores(){
		try{
			const respuesta = await axios.get(url + '/api/cotizador/proveedor/view');
			setListaProv(respuesta.data.data);
		}catch(error){
			console.log(error);
		}
	}

	
	// === Conteo de filas agregadas para condicionar la selección de elementos en los buscadores === //
	const [enable, setEnable] = useState([]);

	useEffect(()=>{
		//console.log(rows);
		const i = rows.length;
		const newArr = [];
		setEnable(Array(i).fill(true));
		for(let c = 0 ; c < i ; c++){
			if(parseInt(c) === parseInt(k)){
				newArr[c] = false;
			}else if(parseInt(c) !== parseInt(k)){
				newArr[c] = true;
			}
		}
		setEnable(newArr);
		//console.log('Arreglo enable:',enable)
		//console.log('rows:',rows);
	},[rows])
	
	// ============================================================================================= //

	// Función que obtiene el nombre del cliente seleccionado
	const onSuggestHandlerProv = (nP) => {
		const actualizar = [...rows];
		actualizar[k]['proveedor'] = nP;
		setRows(actualizar);
		//console.log(listaMarca);
		setSuggestionsProv([]);
		obtenerMarcas(nP);
	}
	// =================================== //
	// ============================================================================== // 

	useEffect(()=>{
		obtenerProveedores();
		obtenerNP();
		obtenerDesc();
	},[])

    function checa(){
        validaOperacion = !validaOperacion;
        setBdesc(!Bdesc);
        setBdesc2(!Bdesc2);   
    }

		
		if( validaOperacion === false){
          define = "Descuento";
		}else{
			define = "Precio Unitario	";
		}
	const [eKey,seteKey] = useState(false);
		///CALCULAR DESCUENTO
		/*================================================================================*/

		useEffect(()=>{
			if(rows[k].precio_lista != '' && rows[k].precio_unitario != ''  && validaOperacion == false){
				const desc = calcularDescuento(rows[k].precio_lista, rows[k].precio_unitario);
				const total = Total(rows[k].precio_unitario,rows[k].cantidad);
				const actualizar = [...rows];
				actualizar[k]['precio_descuento'] = desc;
				actualizar[k]['total'] = total;
				setRows(actualizar);
				//console.log('Variable actualiza (Calcular Descuento):',actualizar);
			}
			
			if(rows[k].precio_lista === '' || rows[k].precio_unitario === ''){
				//setDatos({ ...rows[k],  precio_descuento:''});
				// const actualizar = [...rows];
				// actualizar[k]['descuento'] = 0;
				// setRows(actualizar);
				//rows[k].descuento = 0;
				// setRows({
				// 	...rows[k], descuento:''
				// });
			}
		// },[rows])
		},[rows[k].cantidad,rows[k].precio_lista,rows[k].precio_unitario])
	
	
	///CALCULAR PRECIO UNITARIO
		  /*===================================================================================================================*/
		  useEffect(()=>{
			let precio_u='';
			if (rows[k].precio_lista !== '' &&  rows[k].precio_descuento !== ''  &&  validaOperacion ===true) {
			  precio_u = precioUnitario(rows[k].precio_lista, rows[k].precio_descuento);
			  const total = Total(precio_u, rows[k].cantidad);
			  if( rows[k].precio_descuento < 0 || rows[k].precio_descuento > 100 ){
			  // alert("Advertencia Porcentaje Invalido")
			  }
			  //setDatos({ ...rows[k], precio_total:total,precio_unitario:precio_u});
			  const actualizar = [...rows];
				actualizar[k]['precio_unitario'] = precio_u;
				actualizar[k]['total'] = total;
				setRows(actualizar);
				//console.log('Variable actualizar (Calcular Precio Unitario):',actualizar);
			}
		// },[rows])
		},[rows[k].precio_descuento,rows[k].precio_lista,rows[k].cantidad]) 
	
		  //OBTENER TOTALES
	
	//checar
			   /*===================================================================================================================*/
			   
		/*===================================================================================================================*/
		/*=============================================================================================================*/
		const {enviarDatos,handleInputChange2,finalizarProy} = InsertDatosCats();
		const [modalShow, setModalShow] = useState(false);
		const [DatosCat, SetDatosCat] = useState([])
		const[ Bdesc, setBdesc]= useState(true);
		const[ Bdesc2, setBdesc2]= useState(false);
		const lista = async (clave) =>{
			try {
				const respuesta = await axios.get(url2+`/api/cotizador/catd/view/modal/${clave}`);
				SetDatosCat(respuesta.data.data)
				
			} catch (error) {
				console.log(error);            
			}
			
		}
	   
	   function confirFinalizar(){
		const confirmacion = window.confirm(
			"¿Seguro que quieres Finalizar este Proyecto?"
		  );
		  if(confirmacion){
			finalizarProy()
		  }else{
	
		  }
		
	   }
		
	// Creating style object
	const classes = useStyles();

	

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
		id: rows.length + 1   , n_parte: "", descripcion: "", meses: "" , semanas: "" , 
		cantidad:1, precio_lista: 0, precio_unitario: 0, precio_descuento:0, total:0 ,
        moneda:"", categoria:"", proveedor:"", marca:"", comentarios: ""
	 
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

	const guardarListaSP = async () =>{
		
		// if (pEstatus1 === 'En revision') {
		// 	alert('No se puede continuar el Proyecto porque se encuentra En revision')
		//   } else if (pEstatus1 === 'Aceptado') {
		// 	alert('No se puede continuar el Proyecto porque ha sido Aceptado')
		//   } else {
			try {
				const respuesta = await axios.post(url2+`/api/cotizador/sp/insercionMultiple/${idPartidaInsertada}`,rows);
				//alert(respuesta.data.msg);
			} catch (error) {
				console.log(error);            
			}
		  
		
		
	}

	// Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("Guardado: ", rows);
		setDisable(true);
		setOpen(true);
		guardarListaSP();
	};

	// The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		//console.log('Index:',index);
		setK(index);
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];

		if(name == 'n_parte'){
			let coincidencias = [];
			if(value.length>0){
				coincidencias = listaNP.filter(np => {
					const regex = new RegExp(`${value}`, "gi");
					return np.spnp_np.match(regex)
				})
			}
			setSuggestionsNP(coincidencias);
			//console.log('suggestionsNP:',suggestionsNP);
		}

		if(name == 'descripcion'){
			let coincidencias1 = [];
			if(value.length>0){
				coincidencias1 = listaDesc.filter(desc => {
					const regex = new RegExp(`${value}`, "gi");
					return desc.spd_des.match(regex)
				})
			}
			setSuggestionsDesc(coincidencias1);
			//console.log('suggestionsDesc:', suggestionsDesc);
		}

		if(name == 'proveedor'){
			// console.log(name);
			// console.log(value);
			let coincidencias2 = [];
			if(value.length>0){
				coincidencias2 = listaProv.filter(proveedor => {
					const regex = new RegExp(`${value}`, "gi");
					return proveedor.proveedor_nombre.match(regex)
				})
			}
			setSuggestionsProv(coincidencias2);
			//console.log('suggestionsProv:',suggestionsProv);
		}

		if(name == 'marca'){
			let coincidencias3 = [];
            if(value.length>0){
            coincidencias3 = listaMarca.filter(marca => {
                const regex = new RegExp(`${value}`, "gi");
                return marca.marca_nombre.match(regex)
                })
            }
            setSuggestionsMarca(coincidencias3);
			//console.log('suggestionsMarca:',suggestionsMarca);
			
		}
		//console.log('Variable list:',list);
		list[index][name] = value;
		setRows(list);
		//console.log('list:',list)
		//console.log('Rows:',rows);
	};

	// Showing delete confirmation to users
	const handleConfirm = (i) => {
		setShowConfirm(true);
		//console.log('index:',i)
	};

	// Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		//console.log(typeof(i));
		let i1 = parseInt(i);
		console.log('Fila ',i);
		let i2;
		if(i1 === 0){
			i2 = i1 + 1;
		}else{
			i2 = i1-1;
		}
		setK(i2);
		console.log('Key antes de eliminar una fila:',k);
		const list = [...rows];
		const eliminacion = list.splice(i1, 1);
		console.log('Variable eliminación:',eliminacion);
		setRows(list);
		setShowConfirm(false);
		//setK(k-1);
		console.log('Key despues de eliminar una fila:',k);
		console.log('Rows despues de eliminar una fila:', rows);
	};

	// Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

return (

<div className=''>
	

	<TableBody>
	<Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		className={classes.snackbar}
	>
		<Alert onClose={handleClose} severity="success">
	Guardado
		</Alert>
	</Snackbar>
	<Box margin={10} >
		<div style={{ display: "flex", justifyContent: "space-between" }}>
		<div>
			{isEdit ? (
			<div>
				<Button onClick={handleAdd}>
				<AddBoxIcon onClick={handleAdd} />
		            	Agregar
				</Button>
				{rows.length !== 0 && (
				<>
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


					
               <Button align="right"   onClick={checa}>
				<AutorenewIcon />
		     	<span> = Calcular  {define}    </span>
				 </Button>
				</>


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


				<Button align="right"   onClick={checa}>
				<AutorenewIcon />
		     	<span> Calcular  {define}    </span>	
				</Button>


				<Button align="right"         >
				< ArrowUpward />
		     	<span> Subir Datos    </span>	
				</Button>




			</div>
			)}
		</div>
		</div>
	
		<Table
		className={classes.table}
		size="small"
		aria-label="a dense table"
		>
		<TableHead>
			<TableRow>
			<TableCell  align="center">N° Parte</TableCell>
			<TableCell  align="center">Descripción</TableCell>
			<TableCell  align="center">Meses</TableCell>
			<TableCell  align="center">Semanas</TableCell>
			<TableCell  align="center">Cantidad</TableCell>
			<TableCell  align="center">Precio Lista Unitario</TableCell>
			<TableCell  align="center">Precio Unitario</TableCell>
			<TableCell  align="center">Descuento</TableCell>
			<TableCell  align="center">Total</TableCell>
			<TableCell  align="center">Moneda</TableCell>
			<TableCell  align="center">Categoria</TableCell>
			<TableCell  align="center">Proveedor</TableCell>
			<TableCell  align="center">Marca</TableCell>
			<TableCell  align="center">Comentarios</TableCell>
			<TableCell  align="center">X</TableCell>



		{/* 	id: rows.length + 1, n_parte: "", descripcion: "", meses: "" , semanas: "" , 
		cantidad:0, precio_lista: 0, precio_unitario: 0, descuento:0, total:0 ,
        moneda:"", proveedor:"", marca: "", comentarios: "",
 */}
			</TableRow>
		</TableHead>
		
			{Object.keys(rows).map((i) => {
			return (
				<TableBody key={i}>
				<>
				<TableRow  >
					{isEdit ? (
					<>
						<TableCell padding="none">
					{/* 	<input
						    className="agregar"
							value={row.n_parte}
							name="n_parte"
							onChange={(e) => handleInputChange(e, i)}
						/> */}

                        <input
                        className="agregar"
                        type="text"
                        name="n_parte"
						onChange={(e) => handleInputChange(e, i)}
                        placeholder="No. Parte"
						value={rows[i].n_parte}
                        />
						{Object.keys(suggestionsNP).map((i)=>
							{if(k == i){
								return(
								<></>
								)
							}else{
								return(
									<div 
									key={i} 
									className="selectCliente" 
									onClick={() => onSuggestHandlerNP(suggestionsNP[i].spnp_np)}
									>
										{suggestionsNP[i].spnp_np}
									</div>
								)
							}}
						)}
						</TableCell>

						<TableCell padding="none">
						<input
                        className="agregar"
                        type="text"
						name="descripcion"
						onChange={(e) => handleInputChange(e, i)}
                        placeholder="Descripción"
						value={rows[i].descripcion}
                        />
						{Object.keys(suggestionsDesc).map((i)=>
							{if(k == i){
								return(
								<></>
								)
							}else{
								return(
									<div 
									key={i} 
									className="selectCliente" 
									onClick={() => onSuggestHandlerDesc(suggestionsDesc[i].spd_des)}
									>
										{suggestionsDesc[i].spd_des}
									</div>
								)
							}}
						)}
						</TableCell>

						<TableCell padding="none">

						<input
                        className="agregar"
                        type="number"
						name="meses"
                        min="0"
						onChange={(e) => handleInputChange(e, i)}
                        placeholder="Meses"
						value={rows[i].meses}
                        />
					{/* 	<input
						    className="agregar"
							value={row.meses}
							name="meses"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						<TableCell padding="none">
						<input
                        className="agregar"
                        type="number"
                        name="semanas"
                        min="0"
						onChange={(e) => handleInputChange(e, i)}
                        placeholder="Semanas"
							value={rows[i].semanas}
                        />
					{/* 	<input
					        className="agregar"
							value={row.semanas}
							name="semanas"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>

						<TableCell padding="none">
						<input
                        className="agregar"
                        type="number"
                        name="cantidad"
                    	value={rows[i].cantidad}
						onChange={(e) => handleInputChange(e, i)}
               
                        placeholder="Cantidad "
                        
                        />
					{/* 	<input
						    className="agregar"
							value={rows[i].cantidad}
							name="camtidad"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						<TableCell padding="none">

						<input
                        className="agregar"
                        type="number"
                        name="precio_lista"
                        value={rows[i].precio_lista}
						onChange={(e) => handleInputChange(e, i)}
                    
                        placeholder="Precio Lista"
                        
                        />
					{/* 	<input
					        className="agregar"
							value={rows[i].precio_lista}
							name="precio_lista"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>

						<TableCell padding="none">
						<input
                        className="agregar"
                        type="number"
                        value={rows[i].precio_unitario}
                        name="precio_unitario"
						onChange={(e) => handleInputChange(e, i)}
                        
                        placeholder="Precio unitario"
                        step="any"
                        disabled={Bdesc2}
                        />
					{/* 	<input
						    className="agregar"
							value={rows[i].precio_unitario}
							name="precio_unitario"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						<TableCell padding="none">

						<input
                        className="agregar"
                        type="number"
                        value={rows[i].precio_descuento}
                        name="precio_descuento"
						onChange={(e) => handleInputChange(e, i)}
                        
                        placeholder="Descuento"
                        min="0"
                        step="any"
                        disabled ={Bdesc}
                        />
						{/* <input
					        className="agregar"
							value={rows[i][i].descuento}
							name="descuento"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>


						<TableCell padding="none">

						<input
                        className="agregar"
                        type="text"
                        name="total"
                        value={rows[i].total}
                        readOnly
                        placeholder="Total"
                        step="any"
                        />
						{/* <input
						    className="agregar"
							value={rows[i].total}
							name="total"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						<TableCell padding="none">
						<select id="combo-box" 
							value={rows[i].moneda}
							name="moneda"
					        onChange={(e) => handleInputChange(e, i)}
                        >
                            <option value={0}></option>
                            <option value={1}>MXN</option>
                            <option value={2}>USD</option>
                        </select>
					{/* 	<input
					        className="agregar"
							value={row.moneda}
							name="moneda"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>

						<TableCell padding="none">
						<select
					    style={{ width: "170px" }}
						 id="combo-box"
						  name="categoria" 
						  value={rows[i].categoria}
						  	onChange={(e) => handleInputChange(e, i)}>
                            <option value={0}></option>
                            <option value={1}>Tecnología principal</option>
                            <option value={2}>Subtecnología</option>
                            <option value={3}>Equipamiento</option>
                            <option value={4}>Licencia</option>
							<option value={4}>Soporte</option>
							<option value={4}>Implemetación</option>                       
                        </select>
					{/* 	<input
						    className="agregar"
							value={row.proveedor}
							name="proveedor"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						
						<TableCell padding="none">
					        	<input
                                className="agregar"
                                type="text"
                                name="proveedor"
                            	onChange={(e) => {handleInputChange(e, i)}}
                                placeholder="Proveedor"
								value={rows[i].proveedor}
                                />
								{Object.keys(suggestionsProv).map((i)=>
                                    {if(k == i){
                                        return(
                                        <></>
                                        )
                                    }else{
                                        return(
                                            <div 
                                            key={i} 
                                            className="selectCliente" 
                                            onClick={() => onSuggestHandlerProv(suggestionsProv[i].proveedor_nombre,i)}
                                            >
                                                {suggestionsProv[i].proveedor_nombre}
                                            </div>
                                        )
                                    }}
                                    )}
						</TableCell>

					    <TableCell padding="none">
					        	<input
                                className="agregar"
                                type="text"
                                name="marca"
                            	onChange={(e) => handleInputChange(e, i)}
                                placeholder="Marca"
								value={rows[i].marca}
                                />
								{Object.keys(suggestionsMarca).map((i)=>
                                    {if(k == i){
                                        return(
                                            <></>
                                        )
                                    }else{
                                        return(
                                            <div 
                                            key={i} 
                                            className="selectCliente" 
                                            onClick={() => onSuggestHandlerMarca(suggestionsMarca[i].marca_nombre)}
                                            >
                                                {suggestionsMarca[i].marca_nombre}
                                            </div>
                                        )
                                    }}
                                    
                                    )}
						</TableCell>

						<TableCell padding="none">

					        	<input
                                className="agregar"
                                type="text"
                                name="comentarios"
                            	onChange={(e) => handleInputChange(e, i)}
                                placeholder="Comentarios"
								value={rows[i].comentarios}
                                />
                            
					{/* 	<input
						    className="agregar"
							value={row.comentarios}
							name="comentarios"
							onChange={(e) => handleInputChange(e, i)}
						/> */}
						</TableCell>
						{/* <TableCell padding="none">
						<input
					        className="agregar"
							value={row.descripcion}
							name="descripcion"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</TableCell> */}





						
					{/* 	<TableCell padding="none">
						<select
							style={{ width: "100px" }}
							name="meses"
							value={row.city}
							onChange={(e) => handleInputChange(e, i)}
						>
							<option value=""></option>
							<option value="Karanja">Delfos</option>
							<option value="Hingoli">Hingoli</option>
							<option value="Bhandara">Bhandara</option>
							<option value="Amaravati">Amaravati</option>
							<option value="Pulgaon">Pulgaon</option> 
						</select>
						</TableCell> */}



					</>
					) : (
					<>
						<TableCell component="th" scope="row" align="center">
						{rows[i].n_parte}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].descripcion}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].meses}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].semanas}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].cantidad}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].precio_lista}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].precio_unitario}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].precio_descuento}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].total}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].moneda}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].categoria}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].proveedor}
						</TableCell>
						<TableCell component="th" scope="row"  align="center">
						{rows[i].marca}
						</TableCell>
						<TableCell component="th" scope="row" align="center">
						{rows[i].comentarios}
						</TableCell>
					</>
					)}
					{isEdit ? (
					<Button className="mr10" onClick={() => {handleConfirm(i); setK(i)}}>
						<ClearIcon />
					</Button>

					


					) : (
					<Button className="mr10" onClick={() => {handleConfirm(i); setK(i)}}>
						<DeleteOutlineIcon />
					</Button>


					)}


					{showConfirm && (
					<>
						<Dialog
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<DialogTitle id="alert-dialog-title">
							{"Confirmar Eliminación"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
							Estas Seguro de Eliminar está Fila de Datos?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
							onClick={() => handleRemoveClick(k)}
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
					</>
					)}
				</TableRow>
				</>
				</TableBody>
			);
			})}
	
		</Table>
	</Box>
	</TableBody>




	</div>
 

  
);


}

export default DatosSp2;