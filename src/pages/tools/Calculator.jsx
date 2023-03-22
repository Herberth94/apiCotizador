import React from 'react'

import { calcDescuento ,  cleanData } from './operaciones'
import { precioUnitario , cleanData2 } from './operaciones'

function Calculator() {



    return (
        <div className='box-table'>

            <div className='calculator'>
                <div className='tool'>

                    <h2>Descuento</h2>
                    <label>Cantidad</label>
                    <input type="number" id='cantidad' />

                    <label>Precio Lista</label>
                    <input type="number" id='precio-lista' />

                    <label>Precio Unitario</label>
                    <input type="number" id='precio-unitario' />

                    <label>Descuento</label>
                    <input type="number" id='descuento'  disabled="disabled" />

                    <label>Total</label>
                    <input type="number" id='total' />

                    <div className='botones'>
                        <button className="btn-login" onClick={cleanData}  >Limpiar</button>
                        <button className="btn-login" onClick={calcDescuento}>Calcular</button>
                    </div>
                </div>



                <div className='tool'>

                    <h2>Precio Unitario</h2>
                    <label>Cantidad</label>
                    <input type="number" id='unidades' />

                    <label>Precio Lista</label>
                    <input type="number" id='p-lista' />

                    <label>Descuento</label>
                    <input type="number" id='desc' />

                    <label>Precio Unitario</label>
                    <input type="number" id='p-unitario' disabled="disabled" />


                    <label>Total</label>
                    <input type="number" id='precio-total' />

                    <div className='botones'>
                        <button className="btn-login" onClick={cleanData2}  >Limpiar</button>
                        <button className="btn-login" onClick={precioUnitario }>Calcular</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Calculator