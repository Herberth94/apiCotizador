import React from 'react';
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import '../css/Exportar.css';
import {imagen} from './IMG';
import {numeroALetras} from './calculo';
import {Cantidad , name_cliente  , clave_p , descripcionGeneral , partidasUnicas2 , 
  TOTALSTRING , totD , totD2, totMensual, mesesMensual, totalMen,  totalMenIva,
  totalMensual}from "../../../Ventas/Operaciones/OperacionesAM";
import { fecha , datos} from './Formulario';
import {infPartida} from './ModalPartida';
export let name_encargado = "OCM ";
export let atent = "Atentamente";
export let cargo = "Account Manager";





 let dataPartida2 = (Object.values(infPartida));
 let dataPartida = [];
class ExportarPDF extends React.Component {

  constructor() {
    super();
    this.state = {
 
      /* datos2: [
        {descripcion: "descripcion", periodo: "mensual",   costoUnitario: totMensual , dispositivos: mesesMensual ,subtotal: totalMen}
      ], */
      datosTotales: [
        {subtotal: " $ " + totD , iva: "16 %", total: "$ "+ totD2 }
      ],
      datosTotales2: [
        {subtotal: totalMen, iva: "16 %", total:   totalMenIva}
      ]
    }

  }
/*  { partida: "1", servicio: "Enero" , descripcion: "descripcion",dispositivos: "1" , subtotal: "100"  },
        { partida: "2", servicio: "Enero" , descripcion: "descripcion",dispositivos: "1" , subtotal: "100"  },
        { partida: "3", servicio: "Enero" , descripcion: "descripcion",dispositivos: "1" , subtotal: "100"  },
        { partida: "4", servicio: "Enero" , descripcion: "descripcion",dispositivos: "1" , subtotal: "100"  },
        */ 
       

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(10);
    doc.setFont("Arial");
 // numeros a letras , sustituir en la funcion numeroALetras (x) donde es x es un numero cualquiera para transformarlo al importe
 
 let num = parseFloat(totD);
 const letra = numeroALetras(num);
 const divisa = 'USD'
 //console.log(letra + divisa)
 //console.log(infPartida)
 let dataPartida2 = (Object.values(infPartida));
//console.log(dataPartida2);

//Datos Proyectos
let claveProyecto = clave_p;
let organizacion =  name_cliente;
let nombreProyecto = datos.nombre;
let nombreContacto = datos.servicios;

let nombreEncargado = datos.firma;
let nombreCargo = datos.cargo;





    const titulo= "PROPUESTA ECONÓMICA";
    const fech = "Ciudad de México a "  + fecha


     /*    Datos de Proyecto */
    const proyecto = claveProyecto + " " + organizacion + " " + nombreProyecto;
    const namePresente = "Name";
    const presente = "Presente: ";

 /*    Nombre de Proyecto */
    const atencion = "No de Proyecto: "  +  " "+ nombreContacto;
 /*    const comentarios = "No de ProyectoX:  " + claveProyecto ;
 */
    
 const cuota = "ANTES DE IVA";

    const importe = letra  + " " + cuota;



/*     console.log( "Tot   a ",TOTALSTRING);
   
 */
    const headers = [["#", "Partida", "Descripción General",  "Cantidad" , "Precio Unitario", "Subtotal"  ]];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e= 0;
    if (dataPartida2 == ''){
      dataPartida=descripcionGeneral

    }
    else{
      dataPartida= dataPartida2
    }
    const data = partidasUnicas2.map(elt=> [ [a +1 ],[partidasUnicas2[a++]] , dataPartida[b++]  ,Cantidad[c++]    , TOTALSTRING[d++] ,  TOTALSTRING[e++] ]      );
    let content = {
      startY: 180,
      head: headers,
      body: data,
      headStyles: {
        fillColor: [0,0,0]
      },
      bodyStyles: { 
      lineWidth:1,
      lineColor:[0,0,0],
      },


      columnStyles: {
        0: {cellWidth: 30},
        1: {cellWidth: 80},
        2: {cellWidth: 150},
        3: {cellWidth: 80},
        4: {cellWidth: 80},
        5: {cellWidth: 80},
        // etc
      }
     
    };

  
 /*    const headers2 = [["DESCRIPCIÓN", "PERIODO", "COSTO MENSUAL", "MESES", "SUBTOTAL" ]]
    const data2 = this.state.datos2.map(elt=> [elt.descripcion , elt.periodo,  elt.costoUnitario, elt.dispositivos, elt.subtotal]);
     */

    var width = doc.internal.pageSize.getWidth();
    
    const headers3 = [["SUBTOTAL", "IVA", "TOTAL"]]
    const data3 = this.state.datosTotales.map(elt=> [elt.subtotal , elt.iva,  elt.total]);
          
    const data4 = this.state.datosTotales2.map(elt=> [elt.subtotal , elt.iva,  elt.total]);
    
      // logo la imagen debe de estar en base64 si no no la lee
    let image = new Image();
    image.src = imagen;

    doc.addImage(image,'PNG', 0 , 0 , 600 , 800);

 
   /*  doc.text(title, 230, 120 ); */


    doc.text(fech, 425, 80 );

/*     Nombre de Proyecto */
    doc.text(proyecto, marginLeft, 100 );
    doc.text(namePresente, marginLeft, 110 );
    doc.text(presente, marginLeft, 120 );

    /* TITULO PROPUESTA ECONOMICA */
    doc.text(titulo,  width/2, 130); 
    doc.text(atencion, marginLeft, 160 );
/*  FIRMA  */
    doc.text(atent, width/2, 660 ,  { align: 'center' }); 
    doc.text(nombreEncargado , width/2, 700,  { align: 'center' }); 
    doc.text(nombreCargo, width/2, 710,  { align: 'center' }); 
 

 


   
/*     doc.text(comentarios, marginLeft, 190 ); */
    //doc.text(condiciones, marginLeft, 620);
    
    doc.autoTable(content );
    console.log(doc.lastAutoTable.finalY)
/*     console.log(datos) */
    let content2 = {
      startY: doc.lastAutoTable.finalY,
      margin:{left:360},
      head: headers3,
      body: data3,
      tableWidth:'wrap',
   
      // fillColor: Color 
    }

    doc.autoTable(content2);
    const p =   doc.lastAutoTable.finalY;
    doc.text(importe, marginLeft, p+15 );
 /*    doc.text(cuota, marginLeft, p+ 28 );
 */
/*     let content3 = {
      startY: (doc.lastAutoTable.finalY) + 35,
      head: headers2,
      body: data2,
     
    } 
    doc.autoTable(content3);

    */
/*     let content4 = {
      startY: (doc.lastAutoTable.finalY) + 5,
      margin: {left:380},
      head: headers3,
      body: data4,
      tableWidth:'wrap',
     
    }
    doc.autoTable(content4); */

    doc.text(datos.condiciones, marginLeft, doc.lastAutoTable.finalY + 90);
    doc.save("PropuestaEconómica.pdf")
  }

  render() {

    return (
      <div className="exportar">

          <button className="btn btn-success " onClick={() => this.exportPDF()}>Generar PDF</button>

          
       
      </div>
    );
  }
}

export default ExportarPDF;