
import axios from "axios";
import { useState } from "react";
import { url2 } from "../../Componentes/Ocultar";



export const GetDatosProyecto = () => {
  /*=============================== Función que consulta los datos de un proyeco para el resumen AM ===============================*/
    // Almacenamiento de los totales de las partidas
    const [totalesP,setTotalesP] = useState([]);

    // Almacenamiento de los totales de las categorías
    const [totalesC,setTotalesC] = useState([]);

    async function consultarTotalesP(id){
        //console.log(id)
        try{
            const resProy = await axios.get(url2 + `/api/cotizador/am/viewAM/${id}`);
            setTotalesP(resProy.data.data);

            const resProyCats = await axios.get(url2 + `/api/cotizador/catt/view/${id}`);
            setTotalesC(resProyCats.data.data);
            
        }catch (error){
            console.log(error);
        }
        
    }
    /*===============================================================================================================================*/
    console.log(totalesP);
    console.log(totalesC);
  return{
    consultarTotalesP
  }
}




const datosPTN = [
  {
    nombrePartida: "Switches",
    DesPartida: "P 1",
    Moneda: 2,
    Total: 730.30,
  },
  {
    nombrePartida: "Routers",
    DesPartida: "P 2",
    Moneda: 2,
    Total: 1030.30,
  },

  {
    nombrePartida: "Servidores PTN",
    DesPartida: "P 3",
    Moneda: 2,
    Total: 1050,
  },
  {
    nombrePartida: "Consultoria",
    DesPartida: "P q",
    Moneda: 2,
    Total: 250,
  },

];
/////////////////////////////////////////////////////////////////////////////////
const categoriasPTN = [
  {
    nombreCategoria: "Capacitación",
    Moneda: 2,
    totalC: 1100,
  },
  {
    nombreCategoria: "Accesorios",
    Moneda: 2,
    totalC: 550,
  },
  {
    nombreCategoria: "Servicios PTN",
    Moneda: 2,
    totalC: 252.53,
  },

  {
    nombreCategoria: "Mesa de Ayuda",
    Moneda: 2,
    totalC: 1500,
  },
];



//CONVERTIR A MONEDA PTN BOM  - Pasar Pesos Mexicanos A Dolares
//Obtenemos El valor del Dolar para Hacer las conversiones necesarias

var valorDolar = 20;

///////////////////////////NUEVO//////////////////////////////////////////////////////

var data = [];
var data2 = [];
var dataCategoria = [];
var monedaAM = [];


export var categoriaTotalBom = [];


for (const value of datosPTN) {
  //  console.log(value.nombrePartida);
  /*============= Sumatoria por Partida =================================*/
  data.push(value.nombrePartida);
  data2.push(value.DesPartida);
}


for (const value of categoriasPTN) {
  //  console.log(value.nombrePartida);
  /*============= Sumatoria por Partida =================================*/
  dataCategoria.push(value.nombreCategoria);
  monedaAM.push(value.totalC)
}

/*============= Eliminar Valores Repetidos ===============================*/

export const partidasUnicas = data.filter((valor, indice) => {
  return data.indexOf(valor) === indice;
});



export const descripcionGeneral = data2.filter((valor, indice) => {
  return data2.indexOf(valor) === indice;
});


export var partidasUnicas2 = data.filter((valor, indice) => {
  return data.indexOf(valor) === indice;
});


export const descripcionGeneral2 = data2.filter((valor, indice) => {
  return data2.indexOf(valor) === indice;
});
/*============= Sumar Totales por Partida ===============================*/

export var totalMXN = [];
export var totalUSD = [];

var longitud = datosPTN.length;
console.log("la longitud es de");
console.log(longitud);
var n = 0;
var contador = 0;

var sumatoriaMXN = 0;
var sumatoriaUSD = 0;

for (var i = 0; i < partidasUnicas.length; i++) {
  for (var j = 0; j < datosPTN.length; j++) {
    //Sumatoria por Partidas por Separado por Monedas
    if (partidasUnicas[i] === datosPTN[j].nombrePartida) {
      console.log("-------------------------------");
      console.log("Partidas Iguales");
      console.log(datosPTN[j].nombrePartida, " = ", partidasUnicas[i]);
      contador++;
      console.log("Contador ", contador);

      if (datosPTN[j].Moneda === 1) {
        sumatoriaMXN += datosPTN[j].Total;
      } else if (datosPTN[j].Moneda === 2) {
        sumatoriaUSD += datosPTN[j].Total;
      }

      console.log("------------------------------");
    } else {
      contador = 0;
    }
  }





  console.log("-------------SUMATORIA DE MONEDAS--------------------------");
  totalMXN.push(sumatoriaMXN);
  totalUSD.push(sumatoriaUSD);

  sumatoriaMXN = 0;
  sumatoriaUSD = 0;

  console.log("Total MXN = ", totalMXN);
  console.log("Total USD = ", totalUSD);
}

//Arreglos Finales Export
export var monedaPTN = [];
export var monedaPTN2 = [];
export var prov = [];
export var listaProv = [];
export var desFabrica = [];
export var costoPTN = [];
export var margenDirecto = [];
export var margenGanancia = [];
export var Cantidad = [];
export var descuentoCliente = [];
export var totalIndirecto = [];
export var precioVenta = [];
export var precioVenta2 = [];
export var proporcional = [];
export var proporcionalMesaAyuda = [];
export var TOTAL = [];


let decimal = 3;


var calculaIndirecto = 0;
var toIndirecto = 0;




var sumatoriaMXN2 = 0;
var sumatoriaUSD2 = 0;
var totalBom = 0;


export var totalCategorias = 0;
export var precioFinalVenta = 0;
export var costoSinIndirectos=0;
export var costoFianalProyecto=0;






for (var i = 0; i < totalMXN.length; i++) {
  console.log(i);
  console.log(totalMXN[i]);

  if (totalMXN[i] !== 0) {
    console.log("Pasar a dolar");

    let okay = totalMXN[i] / valorDolar + totalUSD[i];
    monedaPTN.push(okay);
    monedaPTN2.push(okay);
  } else {
    monedaPTN.push(totalUSD[i]);
    monedaPTN2.push(totalUSD[i]);
  }
}






////////Sumatoria Total
for (var i = 0; i < partidasUnicas.length; i++) {
  sumatoriaMXN2 += totalMXN[i];
  sumatoriaUSD2 += totalUSD[i];
  totalBom += monedaPTN2[i];
}

totalMXN.push(sumatoriaMXN2);
totalUSD.push(sumatoriaUSD2);


monedaPTN2.push(totalBom);

sumatoriaUSD2 = 0;
sumatoriaMXN2 = 0;
totalBom = 0;


// Cncatenar Moneda Partidas y Categorias
monedaPTN = monedaPTN.concat(monedaAM);
prov = monedaPTN;



partidasUnicas.push("-----");
descripcionGeneral.push("Total");

partidasUnicas2 = partidasUnicas2.concat(dataCategoria);
partidasUnicas2.push("Total");




////////Sumatoria Total
for (var i = 0; i < partidasUnicas2.length - 1; i++) {
  margenGanancia.push(32);

  // Se Agregan los Valores de
  //Descuento Cliente
  //Cantidad
  //Descuento Fabriaca
  descuentoCliente.push(0);
  Cantidad.push(2);
  desFabrica.push(0);
}

  var totallistaprov=0;
for (var i = 0; i < prov.length; i++) {
  listaProv.push(prov[i] * Cantidad[i]);
  var m = 1 - (desFabrica[i] / 100);
  costoPTN.push(prov[i] * m);
}



//Calcular Precio Venta
for (var i = 0; i < monedaPTN.length; i++) {
  var x = monedaPTN[i] * (100 - descuentoCliente[i]) / 100;
  var k = (100 - margenGanancia[i]) / 100;
  var z = x / k;



 /*  var m = Number((Math.abs(z) * 100).toPrecision());
  var f = Math.round(m) / 100 * Math.sign(z);
     */

    z = z.toFixed(decimal)
    precioVenta.push(z);

}




var sumatoria =0 ;
for (var i = 0; i < partidasUnicas.length -1; i++) {
  var x = monedaPTN[i] * (100 - descuentoCliente[i]) / 100;
  var k = (100 - margenGanancia[i]) / 100;
  var z = x / k;
  sumatoria += z;
  precioVenta2.push(z);

}
precioVenta2.push(sumatoria);
sumatoria = 0;




let totalPrecioVenta = 0;
var totalprov =0;
var totalCostoPTN =0;


///Obtener el Total de las Categorias
for (var i = partidasUnicas.length -1; i < precioVenta.length; i++) {

  console.log(precioVenta[i]);
  totalCategorias += precioVenta[i];
}

for (var i = 0; i < precioVenta.length; i++) {
  
console.log("....... ", precioVenta[i])
  totalPrecioVenta += parseFloat(precioVenta[i]);

  console.log("---" ,  totalPrecioVenta)
  totallistaprov += listaProv[i];
  totalprov += prov[i];
  totalCostoPTN += costoPTN[i];

}

totalPrecioVenta = totalPrecioVenta.toFixed(decimal);

precioVenta.push(totalPrecioVenta);


prov.push(totalprov);
listaProv.push(totallistaprov);
costoPTN.push(totalCostoPTN);


totalprov =0;
totallistaprov =0;
totalCostoPTN=0;



for (var i = 0; i < precioVenta.length - 1; i++) {


  var c = 1 - ((costoPTN[i] / precioVenta[i]));
  c = c * 100;
  c = Math.round(c)

  margenDirecto.push(c);
}

/////////////Costos Indirectos






export let costosIndirectos = ["Comisiones", "Riesgo", "Fianza", "Seguros y Fletes", "Costos Administrativos"];


costosIndirectos.push("Total");
export let equivale = [2, 1, 5, 1, 4];


for (var i = 0; i < costosIndirectos.length - 1; i++) {

  calculaIndirecto = (equivale[i] / 100) * totalPrecioVenta;
  totalIndirecto.push(calculaIndirecto);

  toIndirecto += calculaIndirecto;
}

totalIndirecto.push(toIndirecto);


toIndirecto = 0;
totalPrecioVenta = 0;


let final = precioVenta.length;
let final2 = totalIndirecto.length;
precioFinalVenta = precioVenta[final -1 ];
costoSinIndirectos = costoPTN[final -1];
costoFianalProyecto = (costoPTN[final -1 ] + totalIndirecto[final2 -1]);



/* export function limpiarVariables(){

  partidasUnicas = [];
  descripcionGeneral = [];
  totalMXN = [];
  totalUSD = [];
  monedaPTN = [];
} */

/////////////////// Margen de Ganancia


let final3 =  precioVenta2.length -1;


var prop2 = 0;
for (var i = 0; i < precioVenta2.length - 1  ; i++) {
  var prop = precioVenta2[i] / precioVenta2[final3 ] ;
  prop = prop * 100;
  prop2 += prop;
  proporcional.push(prop);

}
proporcional.push(prop2);
prop2=0;

console.log("***********************************");



////////////////

for (var i = 0; i < partidasUnicas.length  ; i++) {
  var tot= totalCategorias *  proporcional[i] ;
  proporcionalMesaAyuda.push(tot/100);


}

for (var i = 0; i < partidasUnicas.length  ; i++) {
  var h = proporcionalMesaAyuda[i] + precioVenta2[i];
  TOTAL.push(h);
}




// tasa % 
// pago = meses
// valor actual = precio total venta
//futuro = 0



function NPER(tasa, pago, present, future, type) {
  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Initialize future value
  var future = (typeof future === 'undefined') ? 0 : future;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
 tasa= eval(tasa);

  // Return number of periods
  var num = pago * (1 + tasa * type) - future * tasa;
  var den = (present * tasa + pago * (1 + tasa * type));
  return Math.log(num / den) / Math.log(1 + tasa);
}


console.log("--------------------------------------------------------")
console.log("NPER   ");
console.log(NPER (.10, 10  ,  776.37, 0));


var a = 0;


// co = Monto  precio de venta
var co = 776.37;


// n =  Años de financiamiento
var n = 1;

// Pagos Anuales default
var m = 12;

// ti = Tasa Interes
var ti = 10 ;


// Tipo de interés fraccionado (del periodo)
var im = ti / m / 100;

var im2 = Math.pow((1 + im), -(m * n));

// Cuota Cap. + Int.
a = (co * im) / (1 - im2);

console.log("Cuota Cap + Int: " + a.toFixed(3));



