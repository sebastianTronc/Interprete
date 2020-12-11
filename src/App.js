import React, {Fragment} from 'react';
import Navegacion from "./componentes/Navegacion"
import Footer from "./componentes/Footer"
import Cuerpo from "./componentes/Cuerpo"


function App() {
 
  return (   
    <Fragment>

      <Navegacion/>
      <Cuerpo/>
      <Footer/>
                
    </Fragment>
  );
}

export default App;
