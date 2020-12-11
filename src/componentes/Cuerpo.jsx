import React from 'react'
import img from "../image/img3.jpeg"
import leng from "../lenguaje"


const Cuerpo = () => {
    const  handlenClick = ()=>{
        try {
            var text=document.getElementById("codigo").value
            console.log(leng.parse(text))
            
        } catch (error) {
            alert ("salio mal")
            console.log(error)
            
        }
    }
    return (

        <div class="contenedor">    
            <h2 class="contenedor__titulo">Bienvenido a tu interprete</h2>
            
            <div class="contenedor__body">
                <div class="contenedor__body__left">
                    
                
                    {/* <img src={img}alt="principal"/> */}
                

                </div>
                <div class="contenedor__body__right">
                    <h2>Zona de escritura</h2>
                    <textarea name="" id="codigo" cols="60" rows="20"></textarea>
                    <button onClick={handlenClick}>Revisar</button>
                </div>
            </div>

        </div>
    )

}

export default Cuerpo;