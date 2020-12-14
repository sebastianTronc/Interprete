import React from 'react'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__left">
                <h2>Taller de Interprete (PEG.JS)</h2>
                <p>Objetivo: Implementar una librería para validar la gramática de un lenguaje de programación escrito con JavaScript.</p>
                <p>Misión: Construir un programa escrito en JavaScript que valide la escritura principal de un lenguaje de programación.</p>
                <p>Compiladores.</p>
                <p>Universidad del Magdalena.</p>
                <p>
                    <span>© 2020 Interprete(PEG.js), Inc. </span>
                     ® Todos los derechos reservados.
                </p>
            </div>
            <div className="footer__right">
                <div className="footer__right__autores">
                    <h3>Creadores</h3>
                    <p><span className="iniciales">J</span>orge Alberto Silva Zambrano</p>
                    <p><span className="iniciales">A</span>ndres Felipe Brieva Pinedo</p>
                    <p><span className="iniciales">L</span>uis Eduardo Gamez Maldonado</p>
                    <p><span className="iniciales">S</span>ebastian Troncoso Correa</p>
                </div>
                <div className="footer__right__profesor">
                    <h3>Profesor</h3>
                    <p>Daniel Gonzales Polo</p>
                </div>

            </div>
        </div> 
    )
}
export default Footer