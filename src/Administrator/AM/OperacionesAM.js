
//Arreglo Necesario Para obtener AM
//Obtener y Condicionar si existe Valor del Dolar en caso de que no, sustituir por 0
//Falta agregar buscardor que extraiga el AM del proyecto de cada Usuario


/* PTN 1
 */

const datosPTN = [
  {
      nombrePartida: "Partida 1",
      DesPartida: "P 1",
      Moneda: "USD",
      Total: 250,
  },
  {
      nombrePartida: "Partida 2",
      DesPartida: "P 2",
      Moneda: "USD",
      Total: 1300,
  },

  {
      nombrePartida: "Partida 3",
      DesPartida: "P 3",
      Moneda: "USD",
      Total: 1600,
  },
];
/////////////////////////////////////////////////////////////////////////////////
const categoriasPTN = [
  {
      nombreCategoria: "Capacitación",
      Moneda: "USD",
      totalC: 250,
  },
  {
    nombreCategoria: "Accesorios",
    Moneda: "USD",
    totalC: 250,
  },
  {
    nombreCategoria: "Servicios PTN",
    Moneda: "USD",
    totalC: 250,
  },

  { nombreCategoria: "Mesa de Ayuda",
  Moneda: "USD",
  totalC: 250,
  },
];



//CONVERTIR A MONEDA PTN BOM  - Pasar Pesos Mexicanos A Dolares
//Obtenemos El valor del Dolar para Hacer las conversiones necesarias

var valorDolar = 20;

/////////////////////////////////////////////////////////////////////////////////

var data = [];
var data2 = [];

for (const value of datosPTN) {
  //  console.log(value.nombrePartida);
  /*============= Sumatoria por Partida =================================*/
  data.push(value.nombrePartida);
  data2.push(value.DesPartida);
}

/*============= Eliminar Valores Repetidos ===============================*/

export const partidasUnicas = data.filter((valor, indice) => {
  return data.indexOf(valor) === indice;
});


export const partidasUnicas2 = partidasUnicas;

export const descripcionGeneral = data2.filter((valor, indice) => {
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

          if (datosPTN[j].Moneda === "MXN") {
              sumatoriaMXN += datosPTN[j].Total;
          } else if (datosPTN[j].Moneda === "USD") {
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


export var monedaPTN = [];

for (var i = 0; i < totalMXN.length; i++) {
  console.log(i);
  console.log(totalMXN[i]);

  if (totalMXN[i] !== 0) {
      console.log("Pasar a dolar");

      let okay = totalMXN[i] / valorDolar + totalUSD[i];
      monedaPTN.push(okay);
  } else {
      monedaPTN.push(totalUSD[i]);
  }
}

var sumatoriaMXN2 = 0;
var sumatoriaUSD2 = 0;
var totalBom = 0;

////////Sumatoria Total
for (var i = 0; i < partidasUnicas.length; i++) {
  sumatoriaMXN2 += totalMXN[i];
  sumatoriaUSD2 += totalUSD[i];
  totalBom += monedaPTN[i];
}

totalMXN.push(sumatoriaMXN2);
totalUSD.push(sumatoriaUSD2);
monedaPTN.push(totalBom);

sumatoriaUSD2 = 0;
sumatoriaMXN2 = 0;
totalBom = 0;

console.log("TOTAL MONEDA BOM");
console.log(monedaPTN);





export var categoriaTotalBom = [];

export const namecategorie = [];

for (var j = 0; j < categoriasPTN.length; j++) {

  namecategorie.push(categoriasPTN.nombreCategoria)
  if(categoriasPTN.Moneda === "MXN"){

    categoriaTotalBom.push( (categoriasPTN.totalC[i] / valorDolar));

  }else{
 
    categoriaTotalBom.push(categoriasPTN[i]);
  }


}


partidasUnicas.push("-----");
descripcionGeneral.push("Total");



const array3 = partidasUnicas2.concat(namecategorie);

console.log(array3);



/* export function limpiarVariables(){

  partidasUnicas = [];
  descripcionGeneral = [];
  totalMXN = [];
  totalUSD = [];
  monedaPTN = [];
} */

/////////////////// Margen de Ganancia












export var margenGanancia = [];


////////Sumatoria Total
for (var i = 0; i < monedaPTN.length + 4 ; i++) {
margenGanancia.push(32);
}

console.log(margenGanancia);

//Precio Venta

export var precioVenta = [];


for (var i = 0; i <monedaPTN.length  ; i++) {

  var  k = ( 100 - margenGanancia[i]) / 100 ;

  
  var  ab = (monedaPTN[i] / k)  ;

  console.log("NNNN  ", k);


   precioVenta.push(ab);

}


console.log(precioVenta);







