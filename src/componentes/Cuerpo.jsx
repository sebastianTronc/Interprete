import React from 'react'
import Guia from './guia';
import Code from './code';

const Cuerpo = () => {

    return (

        <div class="contenedor">    
            <h2 class="contenedor__titulo">Bienvenido a tu interprete</h2>
            
            <div class="contenedor__body">
                <div class="contenedor__body__left">
                    <Guia/>
                </div>
                <div class="contenedor__body__right">
                    <Code/>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;