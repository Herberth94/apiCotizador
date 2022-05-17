import React from 'react';
import {jsPDF} from "jspdf";
import "jspdf-autotable";
import '../css/Exportar.css';
import {imagen} from './IMG';
import {numeroALetras} from './calculo';



import {Cantidad , name_cliente  , clave_p , descripcionGeneral , partidasUnicas2 , 
  TOTALSTRING , totD , totD2, totMensual, mesesMensual, totalMen,  totalMenIva,
  totalMensual}from "../../../Ventas/Operaciones/OperacionesAM";


/*   export var totMensual =  "" ;
export var mesesMensual = "";
export var totalMen = "";
 */

import { fecha , datos, datos2} from './Formulario';
import {infPartida} from './ModalPartida'
 let dataPartida2 = (Object.values(infPartida));
 let dataPartida = [];
class ExportarPDF extends React.Component {

  constructor() {
    super();
    this.state = {
 
      datos2: [
        {descripcion: "descripcion", periodo: "mensual",   costoUnitario: totMensual , dispositivos: mesesMensual ,subtotal: totalMen}
      ],
      datosTotales: [
        {subtotal: totD , iva: "16 %", total: totD2}
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
    doc.setFontSize(12);
    doc.setFont("Arial");
 // numeros a letras , sustituir en la funcion numeroALetras (x) donde es x es un numero cualquiera para transformarlo al importe
 
 const letra = numeroALetras(25962.50);
 const divisa = 'USD'
 //console.log(letra + divisa)
 //console.log(infPartida)
 let dataPartida2 = (Object.values(infPartida));
//console.log(dataPartida2);

//Datos Proyectos
let claveProyecto = clave_p;
let organizacion =  name_cliente;
let nombreProyecto = datos.nombre;
//Atención 
//let nombreContacto = "Marco Banda, Compras OIEGSA";
let nombreContacto = datos.servicios


    const title = "PROPUESTA ECONÓMICA";
    const fech = "Ciudad de México a "  + fecha
    const proyecto = claveProyecto + " " + organizacion + " " + nombreProyecto;
    const atencion = "Atención "  + nombreContacto;
    const comentarios = "Propuesta económica correspondiente al servicio de TV de paga.";
    const importe = "IMPORTE: SETENTA Y CUATRO MIL DOSCIENTOS OCHENTA 24/100 ANTES DE IVA";
    const cuota = "CUOTA MENSUAL";
    const importeMensual = "IMPORTE MENSUAL UN DISPOSITIVO: SEIS MIL CIENTO NOVENTA PESOS 02/100 ANTES DE IVA"
    const condiciones = "CONDICIONES COMERCIALES"
    const vigencia= "La vigencia de la presente propuesta es de 10 días naturales."
    const propuesta="La propuesta contempla el servicio para 9 Pantallas mensual"
    const formaPago= "La forma de pago será en mensualidades de " +   datos2.costoUnitario + "antes de IVA  por Servicio";
    const duracion= "Esta propuesta contempla los servicios de ENERO 2021 al mes de DICIEMBRE 2021."
    const moneda= "Los precios están expresados en moneda nacional."
    const interes="Los retrasos en pagos generarán un interés moratorio del 0.2% por cada día de atraso en el pago."
    const iva= "El cargo por refacturación es de 200.m.n. + IVA"

    const encargada="ESMERALDA RODRÍGUEZ MEDELLÍN"
    const cargo ="EJECUTIVA DE CUENTA"
    const empresa="PALO TINTO NETWORKS SA DE CV"

    console.log( "Tot   a ",TOTALSTRING);
   

    const headers = [["NO.PARTIDA", "SERVICIO", "DESCRIPCIÓN",  "DISPOSITIVOS" ,  "SUBTOTAL"  ]];
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    if (dataPartida2 == ''){
      dataPartida=descripcionGeneral

    }
    else{
      dataPartida= dataPartida2
    }
    const data = partidasUnicas2.map(elt=> [ [a +1 ],[partidasUnicas2[a++]] , dataPartida[b++]  ,Cantidad[c++]    , TOTALSTRING[d++] ]      );
    let content = {
      startY: 200,
      head: headers,
      body: data,
     
    };

  
    const headers2 = [["DESCRIPCIÓN", "PERIODO", "COSTO MENSUAL", "MESES", "SUBTOTAL" ]]
    const data2 = this.state.datos2.map(elt=> [elt.descripcion , elt.periodo,  elt.costoUnitario, elt.dispositivos, elt.subtotal]);
    
    const headers3 = [["SUBTOTAL", "IVA", "TOTAL"]]
    const data3 = this.state.datosTotales.map(elt=> [elt.subtotal , elt.iva,  elt.total]);
          
    const data4 = this.state.datosTotales2.map(elt=> [elt.subtotal , elt.iva,  elt.total]);
    
      // logo la imagen debe de estar en base64 si no no la lee
    let image = new Image();
    image.src = imagen;
    doc.addImage(image,'PNG', 50, 30, 130, 70);
    doc.text(title, 230, 120);
    doc.text(fech, 400, 100 );
    doc.text(proyecto, marginLeft, 140 );
    doc.text(atencion, marginLeft, 160 );
    doc.text(comentarios, marginLeft, 190 );
    //doc.text(condiciones, marginLeft, 620);
    
    doc.autoTable(content);
    console.log(doc.lastAutoTable.finalY)
    console.log(datos)
    let content2 = {
      startY: doc.lastAutoTable.finalY,
      margin:{left:410},
      head: headers3,
      body: data3,
      tableWidth:'wrap',
      // fillColor: Color 
    }

    doc.autoTable(content2);
    const p =   doc.lastAutoTable.finalY;
    
    doc.text(importe, marginLeft, p+15 );
    doc.text(cuota, marginLeft, p+ 28 );

    let content3 = {
      startY: (doc.lastAutoTable.finalY) + 35,
      head: headers2,
      body: data2,
     
    }
    doc.autoTable(content3);
    let content4 = {
      startY: (doc.lastAutoTable.finalY) + 5,
      margin: {left:420},
      head: headers3,
      body: data4,
      tableWidth:'wrap',
     
    }
    doc.autoTable(content4);
    doc.text(importeMensual, marginLeft, doc.lastAutoTable.finalY + 15);
    doc.text(datos.condiciones, marginLeft, doc.lastAutoTable.finalY + 30);
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