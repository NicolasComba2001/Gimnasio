
import Header from './componentes/Header';
import SeccionInicio from './componentes/SeccionInicio';
import { imagenesSliderInicio} from './Ayudadores/InfoSliderInicio';
import SeccionTexto from './componentes/SeccionTexto';
import SeccionGimnasio from './componentes/SeccionGimnasio';
import {imagenesGimnasio} from './Ayudadores/imagenesGimnasio';


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
    {/* FIN SECCION TEXTO */}

    {/* SECCION GIMNASIO (conocerlo por dentro) */}
    <SeccionGimnasio imgGimnasio={imagenesGimnasio}></SeccionGimnasio>
    {/* FIN SECCION GIMNASIO */}
    </section>
    
  );
}

export default App;
