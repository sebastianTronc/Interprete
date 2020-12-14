import React, { useEffect, useState } from 'react';
import leng from "../library/lenguaje"
import { instanciaEditor } from '../library/funciones';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


const Code = () => {

    const [ estadoRevision, setEstadoRevision ] = useState('Todo esta normal');
    const [ editor, setEditor ] = useState(null);

    const contruirSmsError = (error) => {
        var string = '';

        string = string + `${error.name}`;
        string = string + `, generado cerca del token`;
        string = string + ` "${error.found}". Aproximandamente en la `;
        string = string + ` Linea: ${error.location.start.line}.`;

        return string;
    }


    var aux = null;
    useEffect(()=>{
        var x = instanciaEditor();
        setEditor(x);
        aux = x;
    },[])

    useEffect(()=>{
        aux.doc.setValue("init myfunc; \nmyFunc :: Metodo [ theObject ] ( \n    Repetir [ i :: 0: i < cars.length: i++ ] ( \n       Mientras_que [ i < 5 ]( \n          Valida [ a ::= 3 ]( \n              init a :: i; \n          ) Si_no ( \n              init b :: i; \n          )\n       )\n    )\n)")
    },[])
    
    const  handlenClick = ()=>{

        //muestra lo que tiene el editor
        console.log(editor.doc.getValue("\n"));

        try {
            console.log(leng.parse(editor.doc.getValue("\n")))
            document.getElementById("info").classList.remove("incorrecto")
            document.getElementById("info").classList.add("correcto")
            setEstadoRevision("El analizis no lanzo ningun error en tu escritura")
            MySwal.fire({
                title: "Finalizado",
                text: "Se ha escaneado el codigo y no se han encontrado errores de sintaxis.",
                icon: "success"
            });
            // setTimeout(()=>{
            //     document.getElementById("info").classList.remove("correcto")
            // },10000);           
        } catch (error) {
            // alert ("salio mal")
            console.log(error)
            setEstadoRevision(contruirSmsError(error));
            // contruirSmsError(error);
            document.getElementById("info").classList.remove("correcto")
            document.getElementById("info").classList.add("incorrecto")
            MySwal.fire({
                title: error.name,
                html: <div><p>Se encontro un Error sintactico aproximandamente en la linea {error.location.start.line}</p></div>,
                icon: "error"
            });
        }
    }

    return(
        <div className="contenedor_code">
            <h2>Escribe tu código aquí 🢃</h2>
            <div className="text_area">
                {/* <textarea id="codigo">Aqui se escribe</textarea> */}
                <textarea name="text_area" id="codigo"></textarea>
            </div>
            <p className="info_revision" id="info">{estadoRevision}</p>
            <button className="button" onClick={handlenClick}>Revisar</button>
        </div>
    );

}

export default Code;