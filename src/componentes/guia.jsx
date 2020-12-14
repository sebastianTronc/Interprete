import React from 'react';
import asignacion from '../image/Asignación.png';
import condicional from '../image/Condicional.png';
import cicloMientras from '../image/CicloMientrasQue.png';
import cicloFor from '../image/CicloFor.png';
import funcion from '../image/Función.png';
import hacermientras from '../image/CicloHacerMientraQue.png';
import simbolos from '../image/Simbolos.png';

const Guia = () => (

<div className="contenedor_indicaciones">
        <h2>Indicaciones de escritura</h2>

        <div className="wrapper_1">
            <h3>➤ Simbolos</h3>
            <img src={simbolos} alt="Simbolos"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Variables y asignaciones</h3>
            <img src={asignacion} alt="Asignación"/>
        </div>
        <div className="wrapper_2">
            <h3>➤ Condicional</h3>
            <img src={condicional} alt="Condicional"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Ciclo while</h3>
            <img src={cicloMientras} alt="Condicional"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Ciclo Do while</h3>
            <img src={hacermientras} alt="Condicional"/>
        </div>
        <div className="wrapper_1">
            <h3>➤ Ciclo for</h3>
            <img src={cicloFor} alt="Condicional"/>
        </div>
        
        <div className="wrapper_3">
            <h3>➤ Función</h3>
            <img src={funcion} alt="Condicional"/>
        </div>
</div>
)

export default Guia;