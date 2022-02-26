import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';//marcas
import {fas} from '@fortawesome/free-solid-svg-icons';//solidos
import Header from './componentes/Header';
import SeccionInicio from './componentes/SeccionInicio';
import { imagenesSliderInicio} from './Ayudadores/InfoSliderInicio';
import SeccionTexto from './componentes/SeccionTexto';
import SeccionGimnasio from './componentes/SeccionGimnasio';
import {imagenesGimnasio} from './Ayudadores/imagenesGimnasio';
import Footer from './componentes/Footer';
import Personal from './componentes/Personal';
import Rutinas from './componentes/Rutinas';
import "./componentes/MediasQueris/MediasQueris.scss";

library.add(fab,fas);//agregas todos a una libreria

function App() {
  return (
    <section style={{overflow: "hidden"}}>
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

    {/* SECCION RUTINAS */}
    <Rutinas></Rutinas>
    {/* FIN SECCION RUTINAS */}
    
    <Personal></Personal>
    {/* FOOTER */}
    <Footer></Footer>
    {/* FIN FOOTER */}
    </section>
    
  );
}

export default App;
