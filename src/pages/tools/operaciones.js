import { mensajeAlerta } from "../componentes/Alerta";

let Descuento = 0;
let pUnitario = 0;
let decimal = 3;

/*=== Calcular precioUnitario  con precioLista y Descuento ===*/

export function precioUnitario() {
  let pLista = document.getElementById("p-lista").value;
  let Desc = document.getElementById("desc").value;

  if (pLista !== "" && Desc !== "") {
    pUnitario = parseFloat((parseFloat(pLista) * parseFloat(Desc)) / 100);
    pUnitario = pLista - pUnitario;
    pUnitario = pUnitario.toFixed(decimal);
    document.getElementById("p-unitario").value = pUnitario;

    let Unidad = document.getElementById("unidades").value;

    if (Unidad !== "" && pUnitario != "") {
      let Total = document.getElementById("unidades").value * pUnitario;
      Total = Total.toFixed(3);
      document.getElementById("precio-total").value = Total;
    }
  } else {
    mensajeAlerta(
      "error",
      "Datos  incompletos, es necesario ingresar precio lista y descuento.",
      "warning",
      "cerrar"
    );
  }
}

/*=== Calcular Descuento  con precioLista y precioUnitario ===*/

export function calcDescuento() {
  let precioLista = document.getElementById("precio-lista").value;
  let precioUnitario = document.getElementById("precio-unitario").value;
  Descuento = parseFloat(
    100 - (parseFloat(precioUnitario) * 100) / parseFloat(precioLista)
  );

  if (precioLista !== "" && precioUnitario !== "") {
    Descuento = Descuento.toFixed(decimal);
    document.getElementById("descuento").value = Descuento;

    let Cantidad = document.getElementById("cantidad").value;

    if (Cantidad !== "" && Descuento != "") {
      let Total = document.getElementById("cantidad").value * precioUnitario;
      Total = Total.toFixed(3);
      document.getElementById("total").value = Total;
    }
  } else {
    mensajeAlerta(
      "error",
      "Datos  incompletos , es necesario ingresar precio lista y precio unitario.",
      "warning",
      "cerrar"
    );
  }
}

export function cleanData() {
  document.getElementById("total").value = "";
  document.getElementById("descuento").value = "";
  document.getElementById("precio-lista").value = "";
  document.getElementById("precio-unitario").value = "";
  document.getElementById("cantidad").value = "";
}

export function cleanData2() {
  document.getElementById("unidades").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("p-lista").value = "";
  document.getElementById("p-unitario").value = "";
  document.getElementById("precio-total").value = "";
}

