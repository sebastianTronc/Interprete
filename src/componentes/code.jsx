import React, { useEffect, useState } from 'react';
import leng from "../library/lenguaje"
import { instanciaEditor } from '../library/funciones';

//Importaciones de la libreria de codde mirror

//core de la libreria
// import codeMirror from '../library/codemirror/lib/codemirror';
// import '../library/codemirror/lib/codemirror.css';

//modo
// import javaScript from '../library/codemirror/mode/javascript/javascript';

//tema
// import '../library/codemirror/theme/moxer.css';

//plugins
// import close from '../library/codemirror/addon/edit/closebrackets';

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

    var nojoda = null;
    useEffect(()=>{
        var x = instanciaEditor();
        setEditor(x);
        nojoda = x;
    },[])

    useEffect(()=>{
        nojoda.doc.setValue("Valida[a::=3](\n   init a :: b;\n)Si_no Valida[a ::= 7](\n    Mientras_que[a < 4](\n       init b :: 8;\n    )\n)Si_no(\n    init c :: 10;\n)")
    },[])
    
    const  handlenClick = ()=>{

        //muestra lo que tiene el editor
        console.log(editor.doc.getValue("\n"));

        try {
            console.log(leng.parse(editor.doc.getValue("\n")))
            document.getElementById("info").classList.remove("incorrecto")
            document.getElementById("info").classList.add("correcto")
            setEstadoRevision("El analizis no lanzo ningun error en tu escritura")
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