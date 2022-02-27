import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

import './css/Exportar.css';

class ExportarPDF extends React.Component {

  constructor() {
    super();
    this.state = {
      datos: [
        { partida: "1", servicio: "Enero" , descripcion: "descripcion",dispositivos: "1" , subtotal: "100"  },
        { partida: "2", servicio: "Feberero",descripcion: "descripcion",dispositivos: "1" , subtotal: "200"},
        { partida: "3", servicio: "Marzo" ,  descripcion: "descripcion", dispositivos: "1" , subtotal: "300" },
        { partida: "4", servicio: "Abril",   descripcion: "descripcion" , dispositivos: "1",subtotal: "400" },
      ]
    }
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

  
    doc.setFontSize(12);
    doc.setTextColor(0,85,136);
    doc.setFont("Arial");
  

//Datos Fechas
let dia = "01";
let mes = "septiembre"
let año = "2022";
//Datos Proyectos
let claveProyecto = "2303";
let organizacion = "Delfos369";
let nombreProyecto = "Titulo Proyecto";
//Atención 

let nombreContacto = "Compras OIEGSA";


    const title = "PROPUESTA ECONÓMICA";
    const fecha = "Ciudad de México a "  + dia + " " + " de " + mes + " " + " de " + " " + año;
    const proyecto = claveProyecto + " " + organizacion + " " + nombreProyecto;
    const atencion = "Atención "  + nombreContacto;


    const importe = "Compras OIEGSA";
    const condiciones = "Compras OIEGSA";


    
    const headers = [["NO.PARTIDA", "SERVICIO", "DESCRIPCIÓN",  "DISPOSITIVOS" ,  "SUBTOTAL"]];

    const data = this.state.datos.map(elt=> [elt.partida, elt.servicio, , elt.descripcion , elt.dispositivos, elt.subtotal]);

    let content = {
      startY: 150,
      head: headers,
      body: data
    };





    doc.text(title, marginLeft, 30);
    doc.text(fecha, marginLeft, 50 );
    doc.text(proyecto, marginLeft, 70 );
    doc.text(atencion, marginLeft, 90 );
    doc.text(importe, marginLeft, 110 );
    doc.text(condiciones, marginLeft, 130 );


    
    doc.autoTable(content);
    doc.save("PropuestaEconómica.pdf")
  }

  render() {
    return (
      <div className="exportar">

          <div className=  "contenido-usuarios">

          <button className="btn btn-success " onClick={() => this.exportPDF()}>Generar PDF</button>

          </div>
          
       
      </div>
    );
  }
}

export default ExportarPDF;