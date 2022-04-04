
//VARIABLE EXTRAIDAS DE LA BD
let valorDolar = 20;
let decimal = 3;
let plazo_proyecto = 12;

 /*============= Calcular Costos Indirectos ===============================*/
 export let costosIndirectos = ["Comisiones", "Riesgo", "Fianza", "Seguros y Fletes", "Costos Administrativos"];
 costosIndirectos.push("Total");
 /*============= Porcentajes Costos Indirectos Default ===============================*/
 export let equivale = [2, 1, 5, 1, 4];

 
export let totalMensual= [];
export let financiamiento= [];
export let desFabrica = [];
export let margenGanancia = [];
export let Cantidad = [];
export let descuentoCliente = [];


export let datosCompletosAM = [];
export let datosCompletosTotal = [];
 



let sumatoriaMXN2 = 0;
let sumatoriaUSD2 = 0;
let totalBom = 0;
  let data = [];
  let  data2 = [];
  let  data3 = [];
  let  dataCategoria = [];
  let monedaAM = [];
  /*============= Eliminar Valores Repetidos ===============================*/

export let partidasUnicas = [];
export let categoriasUnicas = [];
export let descripcionGeneral = [];
export let partidasUnicas2 = [];
export let descripcionGeneral2 = [];

//Datos Partida
export let totalMXN = [];
export let totalUSD = [];
//DATOS Categoria
export let totalMXN2 = [];
export let totalUSD2 = [];
// Moneda Unificada Categoria USD
let totalCategoriasUSD = [];


let contador = 0;
let sumatoriaMXN = 0;
let sumatoriaUSD = 0;


export let monedaPTN = [];
export let monedaPTN2 = [];


export let monedaPTN3 = [];
export let prov = [];




export let costoPTN = [];

export let totalIndirecto = [];
export let listaProv = [];
let totallistaprov=0;


export let precioVenta = [];

let totalPrecioVenta = 0;
let totalprov =0;
let totalCostoPTN =0;

export let margenDirecto = [];



let toIndirecto = 0;
let calculaIndirecto = 0;
export let costoSinIndirectos=0;
export let costoFianalProyecto=0;
export let precioFinalVenta = 0;


export let precioVenta2 = [];
export let proporcional = [];
export let proporcionalMesaAyuda = [];
export let TOTAL = [];
export let totalCategorias = 0;









function limpiaDatos (){

 
 
 totalMensual= [];
financiamiento= [];
 desFabrica = [];
 margenGanancia = [];
 Cantidad = [];
 descuentoCliente = [];


 datosCompletosAM = [];
 datosCompletosTotal = [];
 



 sumatoriaMXN2 = 0;
 sumatoriaUSD2 = 0;
 totalBom = 0;
   data = [];
   data2 = [];
   data3 = [];
    dataCategoria = [];
   monedaAM = [];
  /*============= Eliminar Valores Repetidos ===============================*/

 partidasUnicas = [];
 categoriasUnicas = [];
descripcionGeneral = [];
partidasUnicas2 = [];
descripcionGeneral2 = [];

//Datos Partida
totalMXN = [];
 totalUSD = [];
//DATOS Categoria
 totalMXN2 = [];
totalUSD2 = [];
// Moneda Unificada Categoria USD
totalCategoriasUSD = [];


 contador = 0;
 sumatoriaMXN = 0;
sumatoriaUSD = 0;


monedaPTN = [];
monedaPTN2 = [];


monedaPTN3 = [];
 prov = [];




costoPTN = [];

totalIndirecto = [];
 listaProv = [];
totallistaprov=0;


precioVenta = [];

 totalPrecioVenta = 0;
 totalprov =0;
 totalCostoPTN =0;

 margenDirecto = [];



 toIndirecto = 0;
 calculaIndirecto = 0;
 costoSinIndirectos=0;
 costoFianalProyecto=0;
 precioFinalVenta = 0;


precioVenta2 = [];
 proporcional = [];
 proporcionalMesaAyuda = [];
 TOTAL = [];
totalCategorias = 0;







}

export function obtenPartidasUnicas(datosPTN= [] ,  categoriasPTN= []){
  
    limpiaDatos();

/*=============GUardar Datos para Comparar ===============================*/

                    for (const value of datosPTN) {
                        data.push(value.partida_nombre);
                        data2.push(value.partida_descripcion);
                        }
                    
                        for (const value of categoriasPTN) {
                        dataCategoria.push(value.cat_nombre);
                        monedaAM.push(value.precio_total)
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

                   categoriasUnicas = dataCategoria.filter((valor, indice) => {
                        return dataCategoria.indexOf(valor) === indice;
                    });
            
/*============= GUardar Datos Partidas Unicas  ===============================*/

                for (var i = 0; i < partidasUnicas.length; i++) {
                    for (var j = 0; j < datosPTN.length; j++) {
                    //Sumatoria por Partidas por Separado por Monedas
                    if (partidasUnicas[i] === datosPTN[j].partida_nombre) {
                    // console.log(datosPTN[j].nombrePartida, " = ", partidasUnicas[i]);
                        contador++;
                        if (datosPTN[j].precio_id_moneda === 1) {
                        sumatoriaMXN += datosPTN[j].precio_total;
                        } else if (datosPTN[j].precio_id_moneda === 2) {
                        sumatoriaUSD += datosPTN[j].precio_total;
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
 
                    console.log(totalMXN);
                    console.log(totalUSD);

                    for (var i = 0; i < totalMXN.length; i++) {
                        if (totalMXN[i] !== 0) {
                          let okay = totalMXN[i] / valorDolar + totalUSD[i];
                          monedaPTN.push(okay.toFixed(decimal));
                          monedaPTN2.push(okay.toFixed(decimal));
                        } else {
                          monedaPTN.push(totalUSD[i].toFixed(decimal));
                          monedaPTN2.push(totalUSD[i].toFixed(decimal));
                        }
                      }
                
                      

//console.log(monedaPTN);


                                        

                    for (var i = 0; i < categoriasUnicas.length; i++) {
                        for (var j = 0; j < categoriasPTN.length; j++) {
                        //Sumatoria por Partidas por Separado por Monedas
                        if (categoriasUnicas[i] === categoriasPTN[j].cat_nombre) {
                        // console.log(datosPTN[j].nombrePartida, " = ", partidasUnicas[i]);
                            contador++;
                            if (categoriasPTN[j].moneda_nombre === "MXN") {
                            sumatoriaMXN += categoriasPTN[j].precio_total;
                            } else if (categoriasPTN[j].moneda_nombre === "USD") {
                            sumatoriaUSD += categoriasPTN[j].precio_total;
                            }
                        } else {
                            contador = 0;
                        }
                        }
                    /*============= Guardar Sumatoria MXN USD  ===============================*/
                        totalMXN2.push(sumatoriaMXN);
                        totalUSD2.push(sumatoriaUSD);
                        sumatoriaMXN = 0;
                        sumatoriaUSD = 0;
                        }


                        /*============= Convertir a Una sola Moneda USD categoria ===============================*/

                        for (var i = 0; i < totalMXN2.length; i++) {
                            if (totalMXN2[i] !== 0) {
                              let okay = totalMXN2[i] / valorDolar + totalUSD2[i];
                             totalCategoriasUSD.push(okay.toFixed(decimal));
                        
                            } else {
                              totalCategoriasUSD.push(totalUSD2[i].toFixed(decimal));
                    
                            }
                          }
                      
                      
//console.log(totalCategoriasUSD);

concatenaDatos(partidasUnicas, categoriasUnicas, monedaPTN, totalCategoriasUSD);
    return datosPTN;

}


function concatenaDatos(partidasUnicas= [] , categoriasUnicas=[] , monedaPTN = [] ,  totalCategoriasUSD = []){
  

 datosCompletosAM = partidasUnicas;
datosCompletosTotal = monedaPTN;

 
datosCompletosAM =   datosCompletosAM.concat(categoriasUnicas);
datosCompletosTotal =   datosCompletosTotal.concat(totalCategoriasUSD );


datosCompletosAM.push(" Total ");
let suma = 0;

for (var i = 0; i < datosCompletosTotal.length; i++) {
    
 suma += parseFloat(datosCompletosTotal[i]);

  }

datosCompletosTotal.push(suma);
suma = 0; 
/* console.log(datosCompletosAM);
console.log(datosCompletosTotal);
 */
//Llenar Datos

for (var i = 0; i < datosCompletosTotal.length ; i++) {
    margenGanancia.push(32);
    descuentoCliente.push(0);
    Cantidad.push(1);
    desFabrica.push(0);
  }

  prov = datosCompletosTotal;





  //COSTO PTN
  for (var i = 0; i < prov.length; i++) {

  let suma = prov[i] * Cantidad[i];

    listaProv.push(suma.toFixed(decimal));
  
  }

  for (var i = 0; i <  listaProv.length; i++) {

   let  m = 1 - (desFabrica[i] / 100);
    costoPTN.push( listaProv[i] * m);
  }



/*============= Obtener Lista Prov ===============================*/

totallistaprov=0;
for (var i = 0; i < prov.length; i++) {
   listaProv.push(prov[i] * Cantidad[i]);
   var m = 1 - (desFabrica[i] / 100);
   costoPTN.push(prov[i] * m);
}

    

 totallistaprov=0;


/*============= Obtener Lista Prov ===============================*/


  /*============= Obtener Totales ===============================*/
  
  for (var i = 0; i < datosCompletosTotal.length -1 ; i++) {
    //Solucion
    totalPrecioVenta += parseFloat(datosCompletosTotal[i]);
    totallistaprov += parseFloat(listaProv[i]);
    totalprov += parseFloat(prov[i]);
    totalCostoPTN += parseFloat(costoPTN[i]);
  
  }
  



calcularPrecioVenta();
    return partidasUnicas;
}






function calcularPrecioVenta(){

    /*============= Calcular Precio Venta ===============================*/

 for (var i = 0; i < datosCompletosTotal.length ; i++) {
    var x = datosCompletosTotal[i] * (100 - descuentoCliente[i]) / 100;
    var k = (100 - margenGanancia[i]) / 100;
    var z = x / k;
  /*============= Dejar Solo 3 Digitos despues del punto ===============================*/
    z = z.toFixed(decimal)
    precioVenta.push(z);
  
   }


//Calcular Margen Directo
   
for (var i = 0; i < datosCompletosTotal.length - 1; i++) {
    var c = 1 - ((costoPTN[i] / precioVenta[i]));
    c = c * 100;
    c = Math.round(c)
    margenDirecto.push(c);
  }





  
// Costos Indirectos
let precio =  precioVenta[precioVenta.length-1];
precioFinalVenta = precio;

/* console.log("precio  ",  precio) */

for (var i = 0; i < costosIndirectos.length - 1; i++) {
    calculaIndirecto = (equivale[i] / 100) * precio;
    totalIndirecto.push(calculaIndirecto);
   
  }


  for (var i = 0; i <  totalIndirecto.length ; i++) {
    toIndirecto += totalIndirecto[i];
/*     console.log(toIndirecto) */
  }

  totalIndirecto.push(toIndirecto);
  



  let precio3 = datosCompletosTotal[datosCompletosTotal.length-1];
  costoSinIndirectos = precio3;

 let precio2 = totalIndirecto[totalIndirecto.length-1];

 costoFianalProyecto =  precio3 + precio2;



final();
}




function final(){

   

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
