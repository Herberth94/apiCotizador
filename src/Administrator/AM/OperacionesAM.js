import  {useState} from 'react';
import  { Partida_catalogo }   from '../../Componentes/totalPartida'
export let totalesPartidas;
export let totalesCategorias
//console.log(tProy);

const prueba1 =()=>{
  const {totalesPartidas1,totalesCategorias1 }=Partida_catalogo()
  console.log(totalesPartidas1);
  console.log(totalesCategorias1);
}

export function getTotalesP (tP){
  //totalesPartidas = tP;
   //totalCategorias = tC;
   //console.log(tP);
  //console.log(totalesCategorias);
  return {

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
    totalX: 1100,
  },
  {
    nombreCategoria: "Accesorios",
    Moneda: 2,
    totalX: 550,
  },
  {
    nombreCategoria: "Servicios PTN",
    Moneda: 2,
    totalX: 252.53,
  },

  {
    nombreCategoria: "Mesa de Ayuda",
    Moneda: 2,
    totalX: 1500,
  },
];



//CONVERTIR A MONEDA PTN BOM  - Pasar Pesos Mexicanos A Dolares
//Obtenemos El valor del Dolar para Hacer las conversiones necesarias

var valorDolar = 20;
var plazo_proyecto = 12;


export var totalMensual= [];
export var financiamiento= [];



///////////////////////////VARIABLES//////////////////////////////////////////////////////

var data = [];
var data2 = [];
var dataCategoria = [];
var monedaAM = [];

export var totalMXN = [];
export var totalUSD = [];

var longitud = datosPTN.length;
var n = 0;
var contador = 0;

var sumatoriaMXN = 0;
var sumatoriaUSD = 0;



export var categoriaTotalBom = [];

//Arreglos Finales Export
export let monedaPTN = [];
export let monedaPTN2 = [];
export let prov = [];
export let listaProv = [];
export let desFabrica = [];
export let costoPTN = [];
export let margenDirecto = [];
export let margenGanancia = [];
export let Cantidad = [];
export let descuentoCliente = [];
export let totalIndirecto = [];
export let precioVenta = [];
export let precioVenta2 = [];
export let proporcional = [];
export let proporcionalMesaAyuda = [];
export let TOTAL = [];
let decimal = 3;
let calculaIndirecto = 0;
let toIndirecto = 0;
let sumatoriaMXN2 = 0;
let sumatoriaUSD2 = 0;
let totalBom = 0;
export let totalCategorias = 0;
export let precioFinalVenta = 0;
export let costoSinIndirectos=0;
export var costoFianalProyecto=0;
let totalPrecioVenta = 0;
let totalprov =0;
let totalCostoPTN =0;


/*============= Eliminar Valores Repetidos ===============================*/

export let partidasUnicas = [];
export let descripcionGeneral = [];
export let partidasUnicas2 = [];
export let descripcionGeneral2 = [];

var totallistaprov=0;

 /*============= Calcular Costos Indirectos ===============================*/
 export let costosIndirectos = ["Comisiones", "Riesgo", "Fianza", "Seguros y Fletes", "Costos Administrativos"];
 costosIndirectos.push("Total");
 /*============= Porcentajes Costos Indirectos Default ===============================*/
 export let equivale = [2, 1, 5, 1, 4];
 



//FUNCION OPERACIONES AM
export function prueba (datosPTN= [] ,  categoriasPTN= []){
 /*  console.log(datosPTN);
  console.log(categoriasPTN); */

/*============= Guardar Datos de los Arreglos ===============================*/

for (const value of datosPTN) {
  data.push(value.nombrePartida);
  data2.push(value.DesPartida);
  }

  for (const value of categoriasPTN) {
  dataCategoria.push(value.nombreCategoria);
  monedaAM.push(value.totalX)
  }



  
/*============= Eliminar Valores Repetidos ===============================*/

partidasUnicas = data.filter((valor, indice) => {
  return data.indexOf(valor) === indice;
});
 descripcionGeneral = data2.filter((valor, indice) => {
  return data2.indexOf(valor) === indice;
});
 partidasUnicas2 = data.filter((valor, indice) => {
  return data.indexOf(valor) === indice;
});
 descripcionGeneral2 = data2.filter((valor, indice) => {
  return data2.indexOf(valor) === indice;
});


///////////////////////////BIEN



/*============= Sumar Totales por Partida ===============================*/

for (var i = 0; i < partidasUnicas.length; i++) {
  for (var j = 0; j < datosPTN.length; j++) {
    //Sumatoria por Partidas por Separado por Monedas
    if (partidasUnicas[i] === datosPTN[j].nombrePartida) {
     // console.log(datosPTN[j].nombrePartida, " = ", partidasUnicas[i]);
      contador++;
      if (datosPTN[j].Moneda === 1) {
        sumatoriaMXN += datosPTN[j].Total;
      } else if (datosPTN[j].Moneda === 2) {
        sumatoriaUSD += datosPTN[j].Total;
      }
    } else {
      contador = 0;
    }
  }
/*============= Guardar Sumatoria MXN USD  ===============================*/

  totalMXN.push(sumatoriaMXN);
  totalUSD.push(sumatoriaUSD);
  sumatoriaMXN = 0;
  sumatoriaUSD = 0;
  }

/*============= Convertir a Una sola Moneda USD  ===============================*/

    for (var i = 0; i < totalMXN.length; i++) {
      if (totalMXN[i] !== 0) {
        let okay = totalMXN[i] / valorDolar + totalUSD[i];
        monedaPTN.push(okay);
        monedaPTN2.push(okay);
      } else {
        monedaPTN.push(totalUSD[i]);
        monedaPTN2.push(totalUSD[i]);
      }
    }

/*============= Sumatoria Total Moneda BOM  ===============================*/

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

/*============= Concatener Partidas y Categorias ===============================*/

  monedaPTN = monedaPTN.concat(monedaAM);
  prov = monedaPTN;
  partidasUnicas.push("-----");
  descripcionGeneral.push("Total");
  partidasUnicas2 = partidasUnicas2.concat(dataCategoria);
  partidasUnicas2.push("Total");


/*============= Obtener Datos ===============================*/
/*============= Margen de Ganacia  ===============================*/
/*============= Descuento Cliente  ===============================*/
/*============= Cantidad ===============================*/
/*============= Descuento de Fabrica ===============================*/

  for (var i = 0; i < partidasUnicas2.length - 1; i++) {
    margenGanancia.push(32);
    descuentoCliente.push(0);
    Cantidad.push(2);
    desFabrica.push(0);
  }

/*============= Obtener Lista Prov ===============================*/

 totallistaprov=0;
 for (var i = 0; i < prov.length; i++) {
    listaProv.push(prov[i] * Cantidad[i]);
    var m = 1 - (desFabrica[i] / 100);
    costoPTN.push(prov[i] * m);
  }

///////BIEN 2


 /*============= Calcular Precio Venta ===============================*/

 for (var i = 0; i < monedaPTN.length; i++) {
  var x = monedaPTN[i] * (100 - descuentoCliente[i]) / 100;
  var k = (100 - margenGanancia[i]) / 100;
  var z = x / k;
/*============= Dejar Solo 3 Digitos despues del punto ===============================*/
  z = z.toFixed(decimal)
  precioVenta.push(z);

 }


/*============= Obtener Totales ===============================*/

for (var i = 0; i < precioVenta.length; i++) {
  //Solucion
  totalPrecioVenta += parseFloat(precioVenta[i]);
  totallistaprov += listaProv[i];
  totalprov += prov[i];
  totalCostoPTN += costoPTN[i];

}

  totalPrecioVenta = totalPrecioVenta;
  precioVenta.push(totalPrecioVenta.toFixed(decimal));
  prov.push(totalprov);
  listaProv.push(totallistaprov);
  costoPTN.push(totalCostoPTN);
  totalprov =0;
  totallistaprov =0;
  totalCostoPTN=0;


/*============= Calculr Margen Directo ===============================*/

  for (var i = 0; i < precioVenta.length - 1; i++) {
    var c = 1 - ((costoPTN[i] / precioVenta[i]));
    c = c * 100;
    c = Math.round(c)
    margenDirecto.push(c);
  }




  //bien 3


  

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




/*============= Precio Venta 2 Proporcionalmente ===============================*/
  var sumatoria =0 ;
  for (var i = 0; i < partidasUnicas.length -1; i++) {
    var x = monedaPTN[i] * (100 - descuentoCliente[i]) / 100;
    var k = (100 - margenGanancia[i]) / 100;
    var z = x / k;
    sumatoria += z;
    precioVenta2.push(z.toFixed(decimal) );

  }
  precioVenta2.push(sumatoria.toFixed(decimal));
  sumatoria = 0;


    let final3 =  precioVenta2.length -1;
    var prop2 = 0;


    for (var i = 0; i < precioVenta2.length - 1  ; i++) {
      var prop = precioVenta2[i] / precioVenta2[final3 ] ;
      prop = prop *100;
      prop2 += prop;
      proporcional.push(prop.toFixed(decimal));

    }
    proporcional.push(prop2.toFixed(decimal));
    prop2=0;

    
/*============= Obtener Total Categorias ===============================*/

    for (var i = partidasUnicas.length -1; i < precioVenta.length -1; i++) {
      console.log(precioVenta[i]);
      totalCategorias += parseFloat(precioVenta[i]);
    }
    console.log("Total Categorias",  totalCategorias )





for (var i = 0; i < partidasUnicas.length  ; i++) {
  
var   tot = totalCategorias *  (proporcional[i] / 100 );
  proporcionalMesaAyuda.push(tot.toFixed(decimal));
  
}

var  h = 0;
/*============= Proporcional Mesa De Ayuda ===============================*/
for (var i = 0; i < partidasUnicas.length  ; i++) {
  h =  parseFloat( proporcionalMesaAyuda[i])   + parseFloat(precioVenta2[i]);
  TOTAL.push(h);

}

/*============= Total Mensual===============================*/

for (var i = 0; i < TOTAL.length  ; i++) {
var  j =  (TOTAL[i] / plazo_proyecto) ;
  totalMensual.push(j.toFixed(decimal));
}



//bien 4



/*============= Financiamiento ===============================*/
var a = 0;
// n =  Años de financiamiento
var n = 1;
// Pagos Anuales default
var m = 12;
// ti = Tasa Interes
var ti = 20 ;

for (var i = 0; i < TOTAL.length  ; i++) {
// tasa % 
// pago = meses
// valor actual = precio total venta
//futuro = 0
// co = Monto  precio de venta
var co = TOTAL[i];
// Tipo de interés fraccionado (del periodo)
var im = ti / m / 100;
var im2 = Math.pow((1 + im), -(m * n));
// Cuota Cap. + Int.
a = (co * im) / (1 - im2);
//console.log("Cuota Cap + Int: " + a.toFixed(3));

financiamiento.push(a.toFixed(decimal))
}




}

prueba(datosPTN,categoriasPTN);





