import React from 'react'
import img from '../image/iconLeng.png'

function Navegacion() {
    return ( 
        <div class="navegacion">
            <div class="navegacion__left">
                <img src={img} alt="password"/>
                <h1><span className="span2">I</span>nterprete</h1>
            </div>
            <div class="navegacion__right">
                <h2><span className="span2">U</span>nimagdalena <span className="span2">2</span>0<span className="span2">2</span>0</h2>
                <p class="navegacion__right__instrucciones">Instrucciones</p>
            </div>
        </div>
)

}

export default Navegacion