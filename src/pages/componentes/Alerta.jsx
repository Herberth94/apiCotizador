import React from 'react'
import swal from "sweetalert"


/* Alertas Animadas */
export function mensajeAlerta(titulo, texto, icono , boton) {
    swal({
      title: titulo,
      text: texto,
      icon: icono,
      button: boton,
    });   
}




