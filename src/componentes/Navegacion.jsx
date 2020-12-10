import React from 'react'
import img from '../image/iconLeng.png'

function Navegacion() {
    return ( 
        <div class="navegacion">
            <div class="navegacion__left">

                <img src={img} alt="password"/>
                <h1>Interprete</h1>
            </div>
            <div class="navegacion__right">
                <h2> Unimagdalena 2020</h2>
                <p class="navegacion__right__instrucciones">Instrucciones</p>
            </div>
        </div>
)

}

export default Navegacion