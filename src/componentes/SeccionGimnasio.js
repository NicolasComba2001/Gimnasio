import React, { useState } from 'react';
import './estilosSeccionGimnasio/estilosSeccionGimnasio.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SeccionGimnasio({imgGimnasio}){


    const [posicion, setPosicion] = useState(0);
    const longitud = imgGimnasio.length;
    
  
    function seguir(){
        setPosicion(()=>{
            if(posicion === longitud - 1)setPosicion(0);
            else setPosicion(posicion + 1);
        });
    }

    function atras(){
        if(posicion === 0){
            setPosicion(longitud - 1);
        }else setPosicion(posicion - 1);
    }
    

    return(
        <section>
            <div className='contenedorGimnasio'>
                <h4 className='contenedorGimnasio__titulo' data-aos="zoom-in-left">CONOCE TU GIMNASIO</h4>
            <div className='infogim-flex'>
                <div className='sliderGimnasio' data-aos="fade-right">
                
                {
                    imgGimnasio.map((elemento, index)=>{
                        return(
                            <figure className={`sliderGimnasio__img ${posicion === index ? "activarImg" : "" }`} key={index}>
                                    <img src={elemento.src} alt={elemento.alt}/>
                                    <figcaption className='descripcionArea'>{elemento.desc}</figcaption>
                            </figure>
                        );
                    })
                }
               <div className='sliderGimnasioBtn'>
                    <button className='sliderGimnasioBtn__btn' onClick={atras}>&larr;</button>
                    <button className='sliderGimnasioBtn__btn' onClick={seguir}>&rarr;</button>
                </div>
                </div>
                <article>
                <p className='contenedorGimnasio__informacion'>FITNESS SPORT CLUB ES UNO DE LOS MEJORES GIMNASIOS DE LA CIUDAD, POSEEMOS:</p>
                    
                    <ul className='contenedorGimnasioLista'>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","wind"]}></FontAwesomeIcon> Area Climatizada</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","lock"]}></FontAwesomeIcon> Casilleros</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","shield"]}></FontAwesomeIcon> Seguridad en todo el edificio</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","music"]}></FontAwesomeIcon> Musicalizacion</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","book"]}></FontAwesomeIcon> Capacitaciones semanales</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","beer"]}></FontAwesomeIcon> Dispensers de agua y bebidas energeticas</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","kit-medical"]}></FontAwesomeIcon> Elementos de higiene para cada cliente</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","soap"]}></FontAwesomeIcon> Sistema de limpieza profunda cada dia</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","bath"]}></FontAwesomeIcon> Duchas</li>
                        <li className='gimnasioLista'><FontAwesomeIcon className='gimnasioLista__icon' icon={["fa","water-ladder"]}></FontAwesomeIcon> Psicina climatizada</li>
                    </ul>
                </article>
            </div>
        </div>
            
        </section>
    );
}

