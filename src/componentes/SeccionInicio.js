import React, { useEffect, useState } from 'react';
import './EstilosSeccionInicio/EstilosSlider.scss';


function ContenedorTexto(){
    return(
        <div className='contenedorTexto'>
            <h1 className='contenedorTexto__titulo'>FITNESS SPORT CLUB</h1>
            <p className='contenedorTexto__frase'>PELEA POR TI</p>
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
        console.log("salio");
        return ()=> clearInterval(intervalo);

    },[activa, longitud]);

    return(
        <section className='contenedorSection'>
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