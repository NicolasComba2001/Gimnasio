import React, { useState } from 'react';
import './estilosCartasMembresia/EstilosCartasMembresia.scss';


export default function CartasMembresia({src, alt, mensaje, beneficios}){

    
   
    const [modal, setModal] = useState(false);
    
    let banderauno = false;
    

    function abrirModal(e){
        if(e.target.innerHTML === "INSCRIBETE YA!"){banderauno = true;
                                                    setModal(!modal);}
        else if (e.target.innerHTML === "DESCARGA YA!"){
                                                         setModal(!modal);}
        else setModal(!modal);
        
    }

    return(
        <section className='contenedorCarta'>
                <section className='carta'>
                    <img className='carta__img' src={src} alt={alt} />
                    <div className='carta__precio'><span>$50</span></div>
                    <div className='btnYinfo'>
                        <p className='btnYinfo__info'>Inscribete para recibir los mejores entrenamientos de la mano de nuestros mejores personal trainers</p>
                        <div className='btnYinfo__btn'>
                            <button onClick={abrirModal}>{mensaje}</button>
                        </div>
                    </div>
                </section>
        
                
                <ModalMembresia EstadoModal={modal} estado={banderauno === true ? beneficios : beneficios} funcion={abrirModal}></ModalMembresia>
                
                
        </section>  

    );
}
  function ModalMembresia({EstadoModal, funcion, estado}){

    
     return(
         <div className={`modal ${EstadoModal ? "modalActivo" : ""}`}>
             <div className={`modalInfo ${EstadoModal ? "mostrarInfo" : ""}`}>
               
                 <h3 className='modalInfo__titulo'>INSCRIPCION V.I.P</h3>
                 <ul className='modalInfo__beneficios'>
                    {
                        estado.map((elemento, index)=>{
                            return(
                                <li key={index}>{elemento.titulo}</li>
                            );
                        })
                    }
                    

                    
                 </ul>
                 <div className='modalBtn'>
                             <button className='modalBtn__btn'>INSCRIBTE!</button>
                 </div>

                 <div className='modalCerrar' onClick={funcion}>X</div>
             </div>
         </div>
     )
 }

