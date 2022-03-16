

/*=== Calcular precioUnitario  con precioLista y Descuento ===*/

export function precioUnitario(precioLista, Descuento) {
    let pUnitario = (precioLista * Descuento) / 100;
    pUnitario = precioLista - pUnitario;
    return pUnitario;
 
}


/*=== Calcular Descuento  con precioLista y precioUnitario ===*/

export function calcularDescuento(precioLista, precioUnitario) {
    if(precioLista === ''){
        return 0
    }
    else{
        let Descuento = 100 - (precioUnitario * 100) / precioLista;
            return Descuento;

    }
}

export function calcularMonedaBOOM (precioMXN,precioUSD){
    let valorDolar = 20.92;
    let BOOM = (precioMXN/valorDolar) + precioUSD;
    return BOOM;
}



/*=== Calcular Total  con  precioUnitario y Cantidad ===*/

export function Total(precioUnitario, Cantidad,descuento) {
    let Total= Cantidad* precioUnitario;
    return Total;
}


export function Hola() {
    let Total = 9999;
    console.log("*****************************************")
    return Total;
}
