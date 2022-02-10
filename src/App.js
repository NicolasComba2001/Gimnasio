
import Header from './componentes/Header';
import SeccionInicio from './componentes/SeccionInicio';
import { imagenesSliderInicio } from './Ayudadores/InfoSliderInicio';

function App() {
  return (
    <section>
      {/* //HEADER */}
    <Header></Header>
    {/* //FIN HEADER */}
    
    {/* //SECCION INICIO */}
    <SeccionInicio slider={imagenesSliderInicio}></SeccionInicio>
    {/* //FIN SECCION INICIO */}
    
    </section>
    
  );
}

export default App;
