

var valorDolar = 20;
let sumatoriaMXN2 = 0;
let sumatoriaUSD2 = 0;
let totalBom = 0;
  let data = [];
  let  data2 = [];
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

export let totalMXNCategorias = [];
export let totalUSDCategorias = [];


let contador = 0;
let sumatoriaMXN = 0;
let sumatoriaUSD = 0;


export let monedaPTN = [];
export let monedaPTN2 = [];
export let prov = [];



export let desFabrica = [];
export let costoPTN = [];
export let margenGanancia = [];
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
    dataCategoria = [];
     monedaAM = [];
    /*============= Eliminar Valores Repetidos ===============================*/
  
   partidasUnicas = [];
   categoriasUnicas  = [];
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
                /*============= Guardar Sumatoria MXN USD Partidas ===============================*/
                
                    totalMXN.push(sumatoriaMXN);
                    totalUSD.push(sumatoriaUSD);
                    sumatoriaMXN = 0;
                    sumatoriaUSD = 0;
                    }
     


                    /*============= GUardar Datos Categorias Unicas  ===============================*/

                for (var i = 0; i < categoriasUnicas.length; i++) {
                    for (var j = 0; j <categoriasPTN; j++) {
                    //Sumatoria por Partidas por Separado por Monedas
                    if (categoriasUnicas[i] === categoriasPTN[j].cat_nombre) {                  
                        // console.log(datosPTN[j].nombrePartida, " = ", partidasUnicas[i]);
                        contador++;
                        if (categoriasPTN[j].precio_id_moneda === 1) {
                        sumatoriaMXN += categoriasPTN[j].precio_total;
                        } else if (categoriasPTN[j].precio_id_moneda === 2) {
                        sumatoriaUSD += categoriasPTN[j].precio_total;
                        }
                    } else {
                        contador = 0;
                    }
                    }
                /*============= Guardar Sumatoria MXN USD Ctegorias ===============================*/
                
                    totalMXNCategorias.push(sumatoriaMXN);
                    totalUSDCategorias.push(sumatoriaUSD);
                    sumatoriaMXN = 0;
                    sumatoriaUSD = 0;
                    }
 //    console.log(categoriasUnicas)
 console.log(categoriasPTN);
console.log(totalMXNCategorias );
console.log(totalUSDCategorias );
    
    concatenar();


    return datosPTN;

}



function concatenar(){





}