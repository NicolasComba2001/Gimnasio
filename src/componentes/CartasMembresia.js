import React, { useState } from 'react';
import './estilosCartasMembresia/EstilosCartasMembresia.scss';

export default function CartasMembresia({src, alt}){

    const [modal, setModal] = useState(false);

    function abrirModal(){
        setModal(!modal);
    }

    return(
    <section className='contenedorCarta'>
                <section className='carta'>
                    <img className='carta__img' src={src} alt={alt} />
                    <div className='carta__precio'><span>$50</span></div>
                    <div className='btnYinfo'>
                        <p className='btnYinfo__info'>Inscribete para recibir los mejores entrenamientos de la mano de nuestros mejores personal trainers</p>
                        <div className='btnYinfo__btn'>
                            <button onClick={abrirModal}>INSCRIBETE!</button>
                        </div>
                    </div>
                </section>
        
                <ModalMembresia EstadoModal={modal} funcion={abrirModal}></ModalMembresia>
    </section>

            

    );
}

function ModalMembresia({EstadoModal, funcion}){

    return(
        <div className={`modal ${EstadoModal ? "modalActivo" : ""}`}>
            <div className={`modalInfo ${EstadoModal ? "mostrarInfo" : ""}`}>
               
                <h3 className='modalInfo__titulo'>INSCRIPCION V.I.P</h3>
                <ul className='modalInfo__beneficios'>
                    <li>Área de peso libre, peso integrado, cardio y clases coletivas</li>
                    <li>Acceso a todas las áreas del gimnasio</li>
                    <li>Acceso a otras unidades de la cadena</li>
                    <li>Invitar un amigo a entrenar</li>
                    <li>Sillones de masaje</li>
                </ul>
                <div className='modalBtn'>
                            <button className='modalBtn__btn'>INSCRIBETE!</button>
                </div>

                <div className='modalCerrar' onClick={funcion}>X</div>
            </div>
        </div>
    )
}