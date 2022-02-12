import React, { useState } from 'react';
import './estilosSeccionGimnasio/estilosSeccionGimnasio.scss';
export default function SeccionGimnasio({imgGimnasio}){

    const [src, setSrc] = useState("");
    const [posicion, setPosicion] = useState(0);
    const longitud = imgGimnasio.length;
    
    function lightbox(e){
        let sourceImg= e.target.src;
        setSrc(sourceImg);
    }

    function seguir(){
        setPosicion(()=>{
            if(posicion === longitud - 1)setPosicion(0);
            else setPosicion(posicion + 1);
        });
    }

    function atras(){
        if(posicion === longitud){
            setPosicion(posicion - 1);
        }else setPosicion(longitud);
    }
    

    return(
        <section>
            <div className='contenedorGimnasio'>
                <h4 className='contenedorGimnasio__titulo'>CONOCE TU GIMNASIO</h4>
                <div className='sliderGimnasio'>
                
                    {
                        imgGimnasio.map((elemento, index)=>{
                            return(
                                <figure className={`sliderGimnasio__img ${posicion === index ? "activarImg" : "" }`} key={index} onClick={lightbox}>
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
                <Lightbox source={src} FsourceImg={setSrc}></Lightbox>
            </div>
        </section>
    );
}

function Lightbox({source, FsourceImg}){
    const [close, setCerrar] = useState(false);

    function cerrar(){
        setCerrar(!close);
        FsourceImg("");
        
        
    }
    
 
    return(
        <div className={`lightBox ${source !== "" ? "abrirLightbox":""}`}>
                <figure className="lightBoxImg">
                    <img className="lightBoxImg__img" src={source} alt="imagen lightbox"></img>
                    <button className='lightBox__btn' onClick={cerrar}>X</button>
                </figure>
            
        </div>
    );
}