let Descuento = 0;
let pUnitario =0;

/*=== Calcular precioUnitario  con precioLista y Descuento ===*/
function limpiar(){
    Descuento = 0;
    pUnitario = 0;
}
export function precioUnitario(precioLista, Descuento) {

    limpiar();
    pUnitario = parseFloat((precioLista * Descuento) / 100);
    pUnitario = precioLista - pUnitario;
  

    return pUnitario;





 
}


/*=== Calcular Descuento  con precioLista y precioUnitario ===*/

export function calcularDescuento(precioLista, precioUnitario) {
    limpiar();
       Descuento = parseFloat(100 - (precioUnitario * 100) / precioLista);

    
    
            return Descuento;

}




/*=== Calcular Total  con  precioUnitario y Cantidad ===*/

export function Total(precioUnitario, Cantidad) {
    let Total= parseFloat(Cantidad * precioUnitario);
    Total = Total.toFixed(3);
    return Total;
}


