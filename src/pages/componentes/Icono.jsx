import React from 'react'
import { Icon } from '@iconify/react';


function Icono(props) {
  return (
    <div>

<Icon icon={props.icono} color={props.color} width={props.tamaño}/> 

    </div>
  )
}

export default Icono