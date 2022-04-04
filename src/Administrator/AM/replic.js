


let valorDolar = 20;
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


export let totalMXN = [];
export let totalUSD = [];

export let totalMXN2 = [];
export let totalUSD2 = [];


let contador = 0;
let sumatoriaMXN = 0;
let sumatoriaUSD = 0;


export let monedaPTN = [];
export let monedaPTN2 = [];


export let monedaPTN3 = [];
export let prov = [];




export let costoPTN = [];
export let margenGanancia = []
export let desFabrica = [];
export let Cantidad = [];
export let descuentoCliente = [];
export let totalIndirecto = [];
export let listaProv = [];
let totallistaprov=0;


export let precioVenta = [];
let decimal = 3;
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



export let totalMensual= [];
export let financiamiento= [];

let plazo_proyecto = 12;





 /*============= Calcular Costos Indirectos ===============================*/
 export let costosIndirectos = ["Comisiones", "Riesgo", "Fianza", "Seguros y Fletes", "Costos Administrativos"];
 costosIndirectos.push("Total");
 /*============= Porcentajes Costos Indirectos Default ===============================*/
 export let equivale = [2, 1, 5, 1, 4];
 




function limpiaDatos (){
     data = [];
     data2 = [];
     data3 = [];
    dataCategoria = [];
     monedaAM = [];
    /*============= Eliminar Valores Repetidos ===============================*/
  
   partidasUnicas = [];
   descripcionGeneral = [];
   partidasUnicas2 = [];
   descripcionGeneral2 = [];
   totalMXN = [];
   totalUSD = [];


   monedaPTN = [];
    monedaPTN2 = [];
    prov = [];
  



     desFabrica = [];
 costoPTN = [];
 margenGanancia = [];
Cantidad = [];
 descuentoCliente = [];
 totalIndirecto = [];
 listaProv = [];
totallistaprov=0;



 precioVenta = [];
 totalPrecioVenta = 0;
totalprov =0;
totalCostoPTN =0;

margenDirecto = [];


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
                  //  console.log("MXN S  " , totalMXN);
                   // console.log(" USD S " , totalUSD);
///////////*******djgfdbfajdhbfjhbfjabdjbhjhfkafkajhfj */

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
console.log(totalMXN2);
console.log(totalUSD2);


                    /*============= Convertir a Una sola Moneda USD  ===============================*/

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

      

                    /*============= Convertir a Una sola Moneda USD categoria ===============================*/

    for (var i = 0; i < totalMXN2.length; i++) {
        if (totalMXN2[i] !== 0) {
          let okay = totalMXN2[i] / valorDolar + totalUSD2[i];
          monedaPTN3.push(okay.toFixed(decimal));
    
        } else {
          monedaPTN3.push(totalUSD2[i].toFixed(decimal));

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
  

   ///////////////////////////////////CATEGORIAS//////////////////////////////////////////////////////////////////                 
                    
                    

/*============= Concatener Partidas y Categorias ===============================*/

  monedaPTN = monedaPTN.concat(monedaAM);


  prov = monedaPTN;
  partidasUnicas.push("-----");
  descripcionGeneral.push("TotalX  ");


  partidasUnicas2 = partidasUnicas2.concat(dataCategoria);
  partidasUnicas2.push("Total BB");

////////////SIN CATEGORIAS
  console.log(" 1 " ,partidasUnicas);
  ///CON CATEGORIAS
  console.log(" 2 " ,partidasUnicas2);



                        

                        

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
    totallistaprov += parseFloat(listaProv[i]);
    totalprov += parseFloat(prov[i]);
    totalCostoPTN += parseFloat(costoPTN[i]);
  
  }
  
    totalPrecioVenta = totalPrecioVenta;
    precioVenta.push(totalPrecioVenta.toFixed(decimal));

    prov.push(totalprov);
    listaProv.push(totallistaprov);
    costoPTN.push(totalCostoPTN);
    totalprov =0;
    totallistaprov =0;
    totalCostoPTN=0;



    console.log("precio Venta " , precioVenta);



/*============= Calculr Margen Directo ===============================*/

for (var i = 0; i < precioVenta.length - 1; i++) {
    var c = 1 - ((costoPTN[i] / precioVenta[i]));
    c = c * 100;
    c = Math.round(c)
    margenDirecto.push(c);
  }




  

// Costos Indirectos

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
   // console.log(precioVenta[i]);
    totalCategorias += parseFloat(precioVenta[i]);
  }
//  console.log("Total Categorias",  totalCategorias )





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
    
    


    return datosPTN;

}