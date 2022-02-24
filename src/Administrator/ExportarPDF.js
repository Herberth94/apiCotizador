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

    doc.setFontSize(15);

    const title = "PROPUESTA ECONÓMICA";
    const headers = [["NO.PARTIDA", "SERVICIO", "DESCRIPCIÓN",  "DISPOSITIVOS" ,  "SUBTOTAL"]];

    const data = this.state.datos.map(elt=> [elt.partida, elt.servicio, , elt.descripcion , elt.dispositivos, elt.subtotal]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
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