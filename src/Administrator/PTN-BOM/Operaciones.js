

/*=== Calcular precioUnitario  con precioLista y Descuento ===*/

export function precioUnitario(precioLista, Descuento) {
    let pUnitario = (precioLista * Descuento) / 100;
    pUnitario = precioLista - pUnitario;
    console.log("HOlalalaA");
    return pUnitario;
 
}


/*=== Calcular Descuento  con precioLista y precioUnitario ===*/

export function calcularDescuento(precioLista, precioUnitario) {
    let Descuento = 100 - (precioUnitario * 100) / precioLista;
    return Descuento;
}



/*=== Calcular Total  con  precioUnitario y Cantidad ===*/

export function Total(precioUnitario, Cantidad) {
    let Total= Cantidad* precioUnitario;
    return Total;
}


export function Hola() {
    let Total = 9999;
    console.log("*****************************************")
    return Total;
}
