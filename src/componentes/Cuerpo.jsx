import React from 'react'
import Guia from './guia';
import Code from './code';

const Cuerpo = () => {

    return (

        <div className="contenedor">    
            <h2 className="contenedor__titulo">Bienvenido a tu Interprete de <span className="nombre">JALS-Script</span> </h2>
            
            <div className="contenedor__body">
                <div className="contenedor__body__left">
                    <Guia/>
                </div>
                <div className="contenedor__body__right">
                    <Code/>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;