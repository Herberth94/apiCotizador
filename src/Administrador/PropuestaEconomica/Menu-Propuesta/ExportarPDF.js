import   React            from "react";
import { jsPDF }          from "jspdf";
import { imagen }         from "./IMG";
import { numeroALetras }  from "./calculo";
import { datos }          from "./Formulario";
import { infPartida }     from "./ModalPartida";
import {
  Cantidad,
  clave_p,
  descripcionGeneral,
  partidasUnicas2,
  TOTALSTRING,
  totD,
  totalMenIva,
  comprobacionFinanciamieno,
  tMensual,
  tMensualIVA,
  totDIVA,
  tMensualSUMA,
  TOTALSTRINGMENSUAL,
  totalsnIVA,
}                         from "../../../Ventas/Operaciones/OperacionesAM";
import "jspdf-autotable";
import "../css/Exportar.css";

export let name_encargado = " ";
export let atent          = "Atentamente";
export let cargo          = "";
export let nombreP        = "";
export let clavepro       = clave_p;
const tiempoTranscurrido  = Date.now();
const hoy                 = new Date(tiempoTranscurrido);
export let fecha          = hoy.toLocaleDateString();
let dataPartida           = [];


class ExportarPDF extends React.Component {
  constructor() {
    super();

    if (comprobacionFinanciamieno === true) {
      this.state = {
 
        datosTotales: [
          {
            subtotal: "ANTES DE IVA",
            iva     : "$ "          + tMensual,
            total   : "$ "          + totD,
          },
          { subtotal: "IVA", iva: "$ " + tMensualIVA, total: "$ " + totDIVA },
          {
            subtotal: "TOTAL",
            iva     : "$ "   + tMensualSUMA,
            total   : "$ "   + totalMenIva,
          },
        ],
      };
    } else if (comprobacionFinanciamieno === false) {
      this.state = {
        datosTotales: [
          { subtotal: "ANTES DE IVA", total: "$ " + totD       },
          { subtotal: "IVA"         , total: "$ " + totDIVA    },
          { subtotal: "TOTAL"       , total: "$ " + totalsnIVA },
        ],
      };
    }
  }


  exportPDF = () => {
    const unit        = "pt";
    const size        = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft  = 40;
    const doc         = new jsPDF(orientation, unit, size);
    //Tamaño de la fuente del documento
    doc.setFontSize(7);
    // numeros a letras , sustituir en la funcion numeroALetras (x) donde es x es un numero cualquiera para transformarlo al importe

    let   num            = parseFloat(totD);
    const letra          = numeroALetras(num);
    let   dataPartida2   = Object.values(infPartida);

    //Datos Proyectos
    let claveProyecto    = datos.nombre_proyecto;
    let organizacion     = datos.nombre_cliente;
    let nombreContacto   = datos.nombre_cliente;
    let nombre           = datos.nombreP;
    let nombreEncargado  = datos.firma;
    let nombreCargo      = datos.cargo;
    const titulo         = "PROPUESTA ECONÓMICA";
    const fech           = "Ciudad de México a " + datos.fec;
    const proyecto       = claveProyecto + " " + organizacion;
    const namePresente   = nombre;
    const presente       = "Presente: ";
    /*    Nombre de Proyecto */
    const atencion       = "No de Proyecto: " + " " + nombreContacto;
    const cuota          = "ANTES DE IVA";
    const importe        = letra + " " + cuota;

    /*     console.log( "Tot   a ",TOTALSTRING);
    
       
     */

    if (comprobacionFinanciamieno === true) {
      let a = 0;
      let b = 0;
      let c = 0;
      let d = 0;
      let e = 0;
      let f = 0;

      if (dataPartida2 == "") {
        dataPartida = descripcionGeneral;
      } else {
        dataPartida = dataPartida2;
      }

      const headers = [
        [
          "#",
          "Partida",
          "Descripción General",
          "Cantidad",
          "Precio Unitario Mensual",
          "Precio Total Mensual",
          "Precio total 12 meses",
        ],
      ];
      const data = partidasUnicas2.map((elt) => [
        [a + 1],
        [partidasUnicas2[a++]],
        dataPartida[b++],
        Cantidad[c++],
        TOTALSTRING[d++],
        TOTALSTRINGMENSUAL[e++],
        TOTALSTRING[f++],
      ]);

      let content = {
        startY: 180,
        head: headers,
        body: data,
        headStyles: {
          fontSize: 7,
          fillColor: [0, 0, 0],
        },
        bodyStyles: {
          fontSize: 7,
          lineWidth: 1,
          lineColor: [0, 0, 0],
        },

        columnStyles: {
          0: { cellWidth: 30 }, // #
          1: { cellWidth: 50 }, // partida
          2: { cellWidth: 150 }, //descripcion general
          3: { cellWidth: 50 }, // cantidad
          4: { cellWidth: 80 }, //precio unitario Mensual
          5: { cellWidth: 80 }, //precio total mensual
          5: { cellWidth: 80 }, // precio total 12 meses
          // etc
        },
      };


      const headers3 = [["     ", "TOTAL MENSUAL", "TOTAL"]];
      const data3 = this.state.datosTotales.map((elt) => [
        elt.subtotal,
        elt.iva,
        elt.total,
      ]);

      // logo la imagen debe de estar en base64 si no, no la lee

      /*    let image = new Image();
      image.src = imagen;
      doc.addImage(image, 'PNG', 0, 0, 600, 800);
 */
      /*  doc.text(title, 230, 120 ); */
      doc.text(fech, 425, 80);
      /*     Nombre de Proyecto */
      doc.text(proyecto, marginLeft, 100);
      doc.text(namePresente, marginLeft, 110);
      doc.text(presente, marginLeft, 120);
      let width = doc.internal.pageSize.getWidth();
      /* TITULO PROPUESTA ECONOMICA */
      doc.text(titulo, 235, 140);
      doc.text(atencion, marginLeft, 160);
      /*  FIRMA  */
      doc.text(atent, width / 2, 660,           { align: "center" });
      doc.text(nombreEncargado, width / 2, 700, { align: "center" });
      doc.text(nombreCargo, width / 2, 710,     { align: "center" });
      /*     doc.text(comentarios, marginLeft, 190 ); */
      //doc.text(condiciones, marginLeft, 620);
      doc.autoTable(content);
      console.log(doc.lastAutoTable.finalY);
      /*     console.log(datos) */
      let content2 = {
        startY: doc.lastAutoTable.finalY + 20,
        margin: { left: 280 },
        head  : headers3,
        body  : data3,

        headStyles: {
          fontSize: 7,
        },
        bodyStyles: {
        fontSize  : 7,
        lineWidth : 1,
        },

        columnStyles: {
          1: { cellWidth: 100 }, // Total mensual
          2: { cellWidth: 100 }, //Total
        },

        tableWidth: "wrap",
        // fillColor: Color
      };

      doc.autoTable(content2);
      const p = doc.lastAutoTable.finalY;
      doc.text(importe, marginLeft, p + 15);
      doc.text(datos.condiciones, marginLeft, doc.lastAutoTable.finalY + 90);
      doc.save("PropuestaEconómica.pdf");

      /*  sin financiamiento */
    } else if (comprobacionFinanciamieno === false) {
      let a = 0;
      let b = 0;
      let c = 0;
      let d = 0;
      let e = 0;

      if (dataPartida2 == "") {
        dataPartida = descripcionGeneral;
      } else {
        dataPartida = dataPartida2;
      }

      const headers = [
        [
          "#",
          "Partida",
          "Descripción General",
          "Cantidad",
          "Precio Unitario",
          "Subtotal",
        ],
      ];
      const data = partidasUnicas2.map((elt) => [
        [a + 1],
        [partidasUnicas2[a++]],
        dataPartida[b++],
        Cantidad[c++],
        TOTALSTRING[d++],
        TOTALSTRING[e++],
      ]);

      let content = {
        startY: 180,
        head: headers,
        body: data,
        headStyles: {
          fontSize: 7,
          fillColor: [0, 0, 0],
        },
        bodyStyles: {
          fontSize: 7,
          lineWidth: 1,
          lineColor: [0, 0, 0],
        },

        columnStyles: {
          0: { cellWidth: 30 },
          1: { cellWidth: 80 },
          2: { cellWidth: 150 },
          3: { cellWidth: 80 },
          4: { cellWidth: 80 },
          5: { cellWidth: 80 },
          // etc
        },
      };

      const headers3 = [["      ", "            "]];
      const data3 = this.state.datosTotales.map((elt) => [
        elt.subtotal,
        elt.total,
      ]);
      // logo la imagen debe de estar en base64 si no no la lee
      let image = new Image();
      image.src = imagen;

      doc.addImage(image, "PNG", 0, 0, 600, 800);

      /*  doc.text(title, 230, 120 ); */

      doc.text(fech, 425, 80);

      /*     Nombre de Proyecto */
      doc.text(proyecto, marginLeft, 100);
      doc.text(namePresente, marginLeft, 110);
      doc.text(presente, marginLeft, 120);
      let width = doc.internal.pageSize.getWidth();

      /* TITULO PROPUESTA ECONOMICA */
      doc.text(titulo, 235, 140);
      doc.text(atencion, marginLeft, 160);
      /*  FIRMA  */
      doc.text(atent, width / 2, 660, { align: "center" });
      doc.text(nombreEncargado, width / 2, 700, { align: "center" });
      doc.text(nombreCargo, width / 2, 710, { align: "center" });
      /*     doc.text(comentarios, marginLeft, 190 ); */
      //doc.text(condiciones, marginLeft, 620);

      doc.autoTable(content);
      console.log(doc.lastAutoTable.finalY);
      /*     console.log(datos) */
      let content2 = {
        startY: doc.lastAutoTable.finalY,
        margin: { left: 380 },
        /* head: headers3, */
        body: data3,
        headStyles: {},
        bodyStyles: {
          fontSize: 7,
          lineWidth: 1,
          lineColor: [0, 9, 227],
        },

        columnStyles: {
          0: { cellWidth: 80 },
          1: { cellWidth: 80 },

          // etc
        },
        tableWidth: "wrap",

        // fillColor: Color
      };

      doc.autoTable(content2);
      const p = doc.lastAutoTable.finalY;
      doc.text(importe, marginLeft, p + 15);
      doc.text(datos.condiciones, marginLeft, doc.lastAutoTable.finalY + 90);
      doc.save("PropuestaEconómica.pdf");
    }
  };

  render() {
    return (
      <div className="exportar">
        <button className="btn btn-success " onClick={() => this.exportPDF()}>
          Generar PDF
        </button>
      </div>
    );
  }
}

export default ExportarPDF;
