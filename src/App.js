import React, {Fragment, useEffect} from 'react';
import Navegacion from "./componentes/Navegacion"
import Footer from "./componentes/Footer"
import Cuerpo from "./componentes/Cuerpo"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function App() {
 
  useEffect(()=>{

    MySwal.fire({
            
      title: "Bienvenido",
      html:
      <div>
      <p className = "posc"> <strong>Te damos la bienvenida a este interprete de código.</strong> <br/><br/>
    
      Te damos la bienvenida a nuestro interprete, en el cual podrás validar la sintaxis de un nuevo lenguaje de programación llamado <strong><span>“JALS-Script”</span></strong>, el cual es derivado del ya conocido lenguaje JavaScript en su versión ES6.  <br/> <br/>
      Este software cuenta con un <strong>editor de código integrado</strong>, en el cual podrás escribir la sintaxis del lenguaje <strong><span>“JALS-Script”</span></strong> apoyándote en las indicaciones que se encuentran en el costado izquierdo del editor. Una vez termines de escribir en el editor y quieras validar, debes dar click en el botón <strong> “Revisar” </strong> que se encuentra en la parte inferior del editor. <br/> <br/>
      Posterior a esto se te dará información en la cual podrás verificar si lo que escribiste cumple con la gramática de nuestro lenguaje y en caso de que no cumpla se te dara un informe detallado del error. <br/> <br/>
      <strong>NOTA: <br/> <br/> 
      Debido a que la gramática de este lenguaje es derivada de la gramática de JavaScript y dado que JavaScript es bastante flexible en cuanto a escritura, nuestro lenguaje es, al igual que JavaScript bastante dócil en cuanto a su sintaxis.  </strong> <br/> <br/>


       
      </p>
      
      <p>
        ⏩ Puedes ver la asignación formal <a href="https://docs.google.com/document/d/1jQ8v7_IuLIJGwRZxsFCYY9RzWgR3rgLL_1VRHByUcQA/edit" target="_black" ><strong>aquí</strong></a> ⏪ <br/><br/>
       ⏩ y el repositorio de este proyecto <a href="https://github.com/sebastianTronc/Interprete" target="_black" ><strong>aquí</strong></a> ⏪ <br/><br/>

      <strong>✌ DISFRUTALO ✌</strong>
      </p>
      </div>
      
  });

  },[])
  return (   
    <Fragment>
        <Navegacion/>
        <Cuerpo/>
        <Footer/>  
    </Fragment>
  );
}

export default App;
