import peg from "pegjs"
import lenguaje from "./lenguaje.pegjs"
import lenguaje2 from "./lenguaje.txt"
import lenguajeN from "./lenguaje"

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
    <div>
      <input type="textarea" id="it"/>
      <button onClick={handleClick}>Jorge cachón.</button>
    </div>
  );
}

export default App;
