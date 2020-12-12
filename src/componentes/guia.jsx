import React from 'react';
import asignacion from '../image/asignacion.png';
import condicional from '../image/condicionalAnidadoMientrasQue.png';
import cicloMientras from '../image/CicloMientras.png';
import cicloFor from '../image/CicloFor.png';
import funcion from '../image/funcion.png';

const Guia = () => (

<div className="contenedor_indicaciones">
        <h2>Indicaciones de escritura</h2>

        <div className="wrapper_1">
            <h3>➤ Variables y asignaciones</h3>
            <img src={asignacion} alt="Asignación"/>
        </div>
        <div className="wrapper_2">
            <h3>➤ Condicionales</h3>
            <img src={condicional} alt="Condicional"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Ciclo while</h3>
            <img src={cicloMientras} alt="Condicional"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Ciclo for</h3>
            <img src={cicloFor} alt="Condicional"/>
        </div>
        
        <div className="wrapper_2">
            <h3>➤ Función</h3>
            <img src={funcion} alt="Condicional"/>
        </div>
</div>
)

export default Guia;