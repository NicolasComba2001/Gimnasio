import React, {  useState } from 'react';
import {RutinasRandom} from '../Ayudadores/RutinasRandom';
import './EstilosRutinas/modalRutinas.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let indice=0;
export default function RutinasModales({nivel, rutina, fmodal, emodal,}){
    const [indiceRandom, setIndiceRandom] = useState(indice);
    
  
    
    function handleClicked(){
        if(indiceRandom === 3) setIndiceRandom(indice);
        else setIndiceRandom((prev)=> prev + 1);
    }
    function CerrarModal(){
        fmodal(!emodal);
    }

  
    return(
    
            <section className='bgModal'>
                <article className='modalRutina'>
                    <ul className='itemsModalRutina'>
                        <li className='itemsModalRutina__items'>{RutinasRandom[nivel][rutina][indiceRandom]}<br></br></li>
                    </ul>
                    <p className='modalRutina__mensaje'><span className='modalRutina__mensaje--rojo'>IMPORTANTE:</span> Las rutinas brindadas son meramente utilizadas como demostracion del proyecto creado, 
                          lo recomendable es que no se utilicen como guia para el entrenamiento. Todas y cada una de las rutinas deben ser acompanadas
                         por una rutina alimenticia y de un instructor profesional.</p>
                    <button className='modalRutina__btn close' onClick={CerrarModal}><FontAwesomeIcon icon={['fa','close']}></FontAwesomeIcon></button>
                    <button className='modalRutina__btn' onClick={handleClicked}><FontAwesomeIcon icon={['fa','rotate']}></FontAwesomeIcon></button>
                </article>
            </section>
        
    );
}