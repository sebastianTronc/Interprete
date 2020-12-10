
import React, {Fragment} from 'react';
import lenguajeN from "./lenguaje"
import Navegacion from "./componentes/Navegacion"
import Footer from "./componentes/Footer"
import Cuerpo from "./componentes/Cuerpo"


function App() {
 /* var leng=`
  Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "+") { return result + element[3]; }
        if (element[1] === "-") { return result - element[3]; }
      }, head);
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "*") { return result * element[3]; }
        if (element[1] === "/") { return result / element[3]; }
      }, head);
    }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / Integer

Integer "integer"
  = _ [0-9]+ { return parseInt(text(), 10); }_


  `*/

  
  const handleClick =()=>{
    try {
     // var parser=peg.generate("star=('a'/'b')+")
      var texto= document.getElementById("it").value 
      console.log( lenguajeN.parse(texto) ) 
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (   
    <Fragment>

      <Navegacion/>
      <Cuerpo/>
      <Footer/>
      
          
    </Fragment>

    /*
    <div>
      <input type="textarea" id="it"/>
      <button onClick={handleClick}>Jorge cachón.</button>
    </div>
    */
  );
}

export default App;
