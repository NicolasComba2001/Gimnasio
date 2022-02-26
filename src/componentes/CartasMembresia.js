import React, { useState, useRef, useEffect } from 'react';
import './estilosCartasMembresia/EstilosCartasMembresia.scss';
import ModalMembresia from './ModalMembresia';
import VanillaTilt from 'vanilla-tilt';



export default function CartasMembresia({src, alt, mensaje, beneficios, textoCarta, precioCarta, titulo}){

    function Tilt({options}){
        const contTilt = useRef(null);
        
        useEffect(()=>{
            VanillaTilt.init(contTilt.current, options);
            
        },[options])

            return <section ref={contTilt} className='carta'  data-aos="zoom-in">
                            <img className='carta__img box' src={src} alt={alt} />
                    <div className='carta__precio'><span>{precioCarta}</span></div>
                    <div className='btnYinfo'>
                        <p className='btnYinfo__info'>{textoCarta}</p>
                        <div className='btnYinfo__btn'>
                            <button ref={refBtnModal}  onClick={abrirModal}>{mensaje}</button>
                        </div>
                    </div>
                    </section>
    }
   
    const [modal, setModal] = useState(false);
    const refBtnModal = useRef();
    
    function abrirModal(){
        setModal(!modal);
        
    }

    const options ={
        scale: 1,
        speed: 300,
        max: 20
    }

    

    return(
        <section className='contenedorCarta' >
        
        <Tilt options={options}> </Tilt>

                <ModalMembresia titulo={titulo} EstadoModal={modal} mensaje={mensaje} beneficios={beneficios} funcion={abrirModal}></ModalMembresia> 
    
        </section>  

    );
}
 
