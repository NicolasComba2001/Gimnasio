import React, { useEffect, useState } from 'react';
import './EstilosSeccionInicio/EstilosSlider.scss';



function ContenedorTexto(){

    return(
        <div className='contenedorTexto'>
            <h1 className='contenedorTexto__titulo' data-aos="fade-left">FITNESS <span className='titulo--naranja'>SPORT</span> CLUB</h1>
            <p className='contenedorTexto__frase' data-aos="fade-right">ENTRENAMIENTO DE CALIDAD DESDE <span className='contenedorTexto__frase--rojo' data-aos="fade-up"
                                                                                                                                                      data-aos-delay="1000">U$D 20</span></p>
           <button className='contenedorTexto__turno' data-aos="fade-up">SACA TU TURNO!</button>

            
        </div>
    );
}
export default function SeccionInicio({slider}){

    const [activa, setActiva] = useState(0);
    const longitud = slider.length;

    
    useEffect(()=>{
        const intervalo = setInterval(() => {
              setActiva(posActiva => posActiva === longitud - 1 ? 0 : posActiva + 1);
        }, 4800);
        //antes de volver a ejecutar el set interval de nuevo, limpia todo asi evita consumir mas memoria
        return ()=> clearInterval(intervalo);

    },[activa, longitud]);



    return(
        <section className='contenedorSection' id='Inicio'>
            <figure className='contenedorImagen'>
                {slider.map((elemento,index)=>{
                   return (
                   <div key={index} className={`contenedorSlide ${index === activa ? "activarSlide" : ""}`}><img className='contenedorSlide__img' src={elemento.src} alt={elemento.alt}></img></div>
                   )
                })}
            </figure>
           <ContenedorTexto></ContenedorTexto>
        </section>
    );
}