import React ,{useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import {Modal , Button} from "react-bootstrap";
import axios from 'axios';
import {url2} from "../Componentes/Ocultar";
   
import ResumenAM from '../Administrator/AM/ResumenAM';

const ModalPtnDatos = (props) => {
   console.log(props.proyecto_id);
 
         
   return (
    <>
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Datos de Partidas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive  striped bordered hover size="sm">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th> N° parte</th>
              <th> Descripción</th>
              <th>Cantidad</th>
              <th>Categoria</th>
              <th>Total</th>
              <th>Moneda</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(props.proyecto_id).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={props.proyecto_id[key].proyecto_id} >
                                <td>{props.proyecto_id[key].sp_no_parte}</td>
                                <td>{props.proyecto_id[key].sp_descripcion}</td>
                                <td>{props.proyecto_id[key].sp_cantidad}</td>
                                <td>{props.proyecto_id[key].sp_id_categoria}</td> 
                                <td>{props.proyecto_id[key].precio_total}</td> 
                                <td>{props.proyecto_id[key].moneda}</td>    
                                
                            </tr>
                                   
                        ))}
         
          </tbody>            
        </Table>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ModalPtnDatos