
import Header from './componentes/Header';
import SeccionInicio from './componentes/SeccionInicio';
import { imagenesSliderInicio } from './Ayudadores/InfoSliderInicio';
import SeccionTexto from './componentes/SeccionTexto';


function App() {
  return (
    <section>
      {/* //HEADER */}
    <Header></Header>
    {/* //FIN HEADER */}
    
    {/* //SECCION INICIO */}
    <SeccionInicio slider={imagenesSliderInicio}></SeccionInicio>
    {/* //FIN SECCION INICIO */}
    
    {/* SECCION TEXTO */}
    <SeccionTexto></SeccionTexto>
    </section>
    
  );
}

export default App;
