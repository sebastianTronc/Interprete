import React from 'react'
import img from "../image/img.png"


const Cuerpo = () => {
    return (

        <div class="contenedor">    
            <h2 class="contenedor__titulo">Bienvenido a tu interprete</h2>
            
            <div class="contenedor__body">
                <div class="contenedor__body__left">
                <img src={img}alt="principal"/>
                </div>
                <div class="contenedor__body__right">
                    <textarea name="" id="" cols="60" rows="20"></textarea>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;