import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalMembresia({EstadoModal, funcion, beneficios, mensaje, clase, titulo}){

    
    return(
        
        <div className={`modal ${EstadoModal ? "modalActivo" : ""}`} id='Membresia'>
            <div className={`modalInfo ${clase}  ${EstadoModal ? "mostrarInfo" : ""}`}>
              
                <h3 className='modalInfo__titulo'>{titulo}</h3>
                <ul className='modalInfo__beneficios'>
                   {
                       beneficios.map((elemento, index)=>{
                           return(
                               <li key={index}><FontAwesomeIcon className='modalIcons' icon={["fa-solid","fa-trophy"]}></FontAwesomeIcon>{elemento.titulo}</li>
                           );
                       })
                   }

                </ul>
                <div className='modalBtn'>
                            <button className='modalBtn__btn'>{mensaje}</button>
                </div>

                <div className='modalCerrar' onClick={funcion}>X</div>
            </div>
        </div>
    )
}
